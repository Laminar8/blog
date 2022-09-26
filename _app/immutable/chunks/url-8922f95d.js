import{S as A,i as v,s as w,k as b,q as p,a as T,l as k,m as y,r as f,c as C,h as u,n as S,b as N,F as i,A as g}from"./index-33fda49e.js";const l=r=>{const e=r.split(" ");for(let t=0;t<e.length;t++)e[t]=e[t].charAt(0).toUpperCase()+e[t].slice(1);return e.join(" ")},a=(r,e)=>r.replaceAll("	".repeat(e),""),D={_2022:{_07:{_14:{tag:["Blog","Information"],title:l("5 Reasons to start my blog"),lastUpdate:"2022/08/21",status:["Published"],image:{src:"https://user-images.githubusercontent.com/52372569/184529071-3d88e019-0a4c-48c5-8245-3ef0cc3ea8cd.png",alt:"Woman Jogging"}}},_08:{_23:{tag:["Blog","Information","Svelte","SCSS"],title:l("Time spent completing the first post: 1 Month"),lastUpdate:"2022/08/31",status:["Published"],image:{src:"https://user-images.githubusercontent.com/52372569/186199281-0358ffca-d144-431d-a152-82ea4691e343.png",alt:"SP, Brasil"},codeHighlight:{scss:[{fileName:"app.scss",body:a(`:root {
								// Color
								--color-dark: #1f1f1f;
								--color-dark-bright: #8e8e8e;
								--color-white: #f1f1f1;
								--color-white-dark: #e1e1e1;
								--color-red: #df7861;
								--color-red-dark: #f47c7c;
								--color-yellow: #ffb562;
								--color-yellow-bright: #f8e6d1;
								--color-green: #adcf9f;
								--color-green-dark: #94b49f;
								--color-blue: #607eaa;
								--color-blue-dark: #06113c;
							}`,7)},{fileName:"tag.svelte",body:a(`.tag {
									.content {
										color: var(--color-white);
										background-color: var(--color-blue);
										border-radius: 1rem;
									}
								}`,8)}]}}},_09:{_01:{tag:["Slack","AWS","RDS"],title:l("Subscribe Amazon RDS notification and Get notifications from Slack"),lastUpdate:"2022/09/22",status:["Published"],image:{src:"https://user-images.githubusercontent.com/52372569/188123705-e58d8e1b-6fcd-42a2-81d6-0f5b2f9c31e9.png",alt:"Slack"},codeHighlight:{json:[{fileName:"cloudwatch.json",body:a(`{
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
								  }`,8)}],python:[{fileName:"lambda_function.py",body:a(`
								from datetime import datetime
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
										slack.post(sns, message)`,8)},{fileName:"slack.py",body:a(`
								import os
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
								`,8)}],bash:[{fileName:"Bash",body:a(`pip install requests -t .
								`,8)}]}},_22:{tag:["Blog","Information","Svelte","SCSS"],title:l("Time spent completing the first post: 1 Month"),lastUpdate:"2022/09/22",status:["In progress"],image:{src:"https://user-images.githubusercontent.com/52372569/186199281-0358ffca-d144-431d-a152-82ea4691e343.png",alt:"SP, Brasil"},codeHighlight:{scss:[{fileName:"app.scss",body:a(`:root {
								// Color
								--color-dark: #1f1f1f;
								--color-dark-bright: #8e8e8e;
								--color-white: #f1f1f1;
								--color-white-dark: #e1e1e1;
								--color-red: #df7861;
								--color-red-dark: #f47c7c;
								--color-yellow: #ffb562;
								--color-yellow-bright: #f8e6d1;
								--color-green: #adcf9f;
								--color-green-dark: #94b49f;
								--color-blue: #607eaa;
								--color-blue-dark: #06113c;
							}`,7)},{fileName:"tag.svelte",body:a(`.tag {
									.content {
										color: var(--color-white);
										background-color: var(--color-blue);
										border-radius: 1rem;
									}
								}`,8)}]}}}}},_=new Date().getFullYear();function x(r){let e,t,c,d,o,m;return{c(){e=b("div"),t=p("\xA9 Copyright "),c=p(_),d=T(),o=b("span"),m=p("Laminar"),this.h()},l(n){e=k(n,"DIV",{class:!0});var s=y(e);t=f(s,"\xA9 Copyright "),c=f(s,_),d=C(s),o=k(s,"SPAN",{class:!0});var h=y(o);m=f(h,"Laminar"),h.forEach(u),s.forEach(u),this.h()},h(){S(o,"class","color svelte-59dbvb"),S(e,"class","footer svelte-59dbvb")},m(n,s){N(n,e,s),i(e,t),i(e,c),i(e,d),i(e,o),i(o,m)},p:g,i:g,o:g,d(n){n&&u(e)}}}class P extends A{constructor(e){super(),v(this,e,null,x,w,{})}}const j="/blog";export{P as F,D as i,j as u};
