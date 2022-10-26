import { codeIndent } from '$lib/module/codeIndent';
export const prerender = true;

export function load() {
	return {
		publish: '2022/09/22',
		lastUpdate: '2022/10/26',
		status: ['Published', 'Edited'],
		codeHighlight: {
			json: [
				{
					fileName: 'cloudwatch.json',
					body: codeIndent(
						`{
                            "Records": [
                                {
                                    "EventSource": "aws:sns",
                                    "EventVersion": "1.0",
                                    "EventSubscriptionArn": "arn:aws:sns:ap-southeast-1:123456789012:laminar:a6ea4892-f3e6-499c-a854-f53f544eef04",
                                    "Sns": {
                                        "Type": "Notification",
                                        "MessageId": "57977499-a9d2-5e38-8b55-2f1bed8777af",
                                        "TopicArn": "arn:aws:sns:ap-southeast-1:123456789012:laminar",
                                        "Subject": "OK: "my-alarm" in Asia Pacific (Singapore)",
                                        "Message": "{"AlarmName":"my-alarm","AlarmDescription":null,"AWSAccountId":"123456789012","AlarmConfigurationUpdatedTimestamp":"2022-08-26T03:45:34.563+0000","NewStateValue":"OK","NewStateReason":"Threshold Crossed: 1 out of the last 1 datapoints [3.6266666666666665 (26/08/22 03:40:00)] was not less than the threshold (1.0) (minimum 1 datapoint for ALARM -> OK transition).","StateChangeTime":"2022-08-26T03:46:29.897+0000","Region":"Asia Pacific (Singapore)","AlarmArn":"arn:aws:cloudwatch:ap-southeast-1:123456789012:alarm:my-alarm","OldStateValue":"ALARM","OKActions":["arn:aws:sns:ap-southeast-1:123456789012:laminar"],"AlarmActions":["arn:aws:sns:ap-southeast-1:123456789012:laminar"],"InsufficientDataActions":[],"Trigger":{"MetricName":"CPUUtilization","Namespace":"AWS/RDS","StatisticType":"Statistic","Statistic":"AVERAGE","Unit":null,"Dimensions":[{"value":"database-1","name":"DBInstanceIdentifier"}],"Period":300,"EvaluationPeriods":1,"DatapointsToAlarm":1,"ComparisonOperator":"LessThanThreshold","Threshold":1.0,"TreatMissingData":"missing","EvaluateLowSampleCountPercentile":""}}",
                                        "Timestamp": "2022-08-26T03:46:29.953Z",
                                    }
                                }
                            ]
                        }`,
						6
					)
				}
			],
			python: [
				{
					fileName: 'lambda_function.py',
					body: codeIndent(
						`from datetime import datetime
                        import module.slack as slack
                        
                        def lambda_handler(event, context):
                            message = True
                        
                            try:
                                sns = event["Records"][0]["Sns"]
                            except Exception as error:
                                # Debug errors
                                print(error)
                        
                                # Give a notification to an administrator
                                sns = {
                                    "Subject": "Fail to parse a coming sns event.",
                                    "Timestamp": datetime.now(),
                                }
                        
                                # Change message value to False
                                message = False
                        
                            finally:
                                slack.post(sns, message)`,
						6
					)
				},
				{
					fileName: 'slack.py',
					body: codeIndent(
						`import os
                        import json
                        import requests
                        from datetime import datetime, timezone, timedelta

                        # Slack
                        # Get from https://api.slack.com/apps
                        token = os.environ["token"]
                        channel_id = os.environ["channel_id"]

                        method = "POST"
                        headers = {"Content-Type": "application/json", "Authorization": f"Bearer {token}"}
                        url = "https://slack.com/api/chat.postMessage"

                        # Unnecessary cloudwatch alarms
                        cloudwatch_keys = [
                            "AWSAccountId",
                            "AlarmConfigurationUpdatedTimestamp",
                            "OKActions",
                            "AlarmActions",
                            "InsufficientDataActions",
                            "AlarmArn",
                        ]
                        rds_keys = ["Identifier Link", "Source ARN"]

                        def create_message(sns, msg=True):
                            if msg:
                                message = json.loads(sns["Message"])

                                if len(message.keys()) >= 10:
                                    message_block = [
                                        {
                                            "type": "divider",
                                        },
                                        {
                                            "type": "section",
                                            "fields": [
                                                {"type": "mrkdwn", "text": f"*{k}:*\\n>{message[k]}\\n"}
                                                for k in list(message.keys())[:10]
                                                if k not in cloudwatch_keys + rds_keys
                                            ],
                                        },
                                    ]
                                else:
                                    message_block = [
                                        {
                                            "type": "divider",
                                        },
                                        {
                                            "type": "section",
                                            "fields": [
                                                {"type": "mrkdwn", "text": f"*{k}:*\\n>{message[k]}\\n"}
                                                for k in message.keys()
                                                if k not in cloudwatch_keys + rds_keys
                                            ],
                                        },
                                    ]
                            else:
                                message_block = []
                            
                            return json.dumps(
                                {
                                    "channel": channel_id,
                                    "text": f"{sns['Subject']} \\n",
                                    "blocks": [
                                        {
                                            "type": "header",
                                            "text": {"type": "plain_text", "text": sns["Subject"]},
                                        },
                                    ]
                                    + message_block,
                                }
                            )
                                
                        def post(sns, msg):
                            data = create_message(sns, msg)
                            response = requests.request(method, url, headers=headers, data=data)
                            output = response.json()

                            return output
                        `,
						6
					)
				}
			],
			bash: [
				{
					fileName: 'Bash',
					body: codeIndent(`pip install requests -t .`, 6)
				}
			]
		}
	};
}
