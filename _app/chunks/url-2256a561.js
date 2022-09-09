import{S as w,i as y,s as T,e as b,t as d,k as C,c as S,a as A,h as m,m as k,d as p,b as v,g as D,G as i,n as h}from"./index-f9cb7a0d.js";const u=o=>{const a=o.split(" ");for(let e=0;e<a.length;e++)a[e]=a[e].charAt(0).toUpperCase()+a[e].slice(1);return a.join(" ")},f=(o,a)=>o.replaceAll("	".repeat(a),""),P={_2022:{_07:{_14:{tag:["Blog","Information"],title:u("5 Reasons to start my blog"),lastUpdate:"2022/08/21",status:["Published"],image:{src:"https://user-images.githubusercontent.com/52372569/184529071-3d88e019-0a4c-48c5-8245-3ef0cc3ea8cd.png",alt:"Woman Jogging"}}},_08:{_23:{tag:["Blog","Information","Svelte","SCSS"],title:u("Time spent completing the first post: 1 Month"),lastUpdate:"2022/08/31",status:["Published"],image:{src:"https://user-images.githubusercontent.com/52372569/186199281-0358ffca-d144-431d-a152-82ea4691e343.png",alt:"SP, Brasil"},codeHighlight:{scss:[{fileName:"app.scss",body:f(`:root {
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
							}`,7)},{fileName:"tag.svelte",body:f(`.tag {
									.content {
										color: var(--color-white);
										background-color: var(--color-blue);
										border-radius: 1rem;
									}
								}`,8)}]}}},_09:{_01:{tag:["Slack","AWS","RDS"],title:u("Subscribe Amazon RDS notification and Get notifications from Slack"),lastUpdate:"2022/09/01",status:["In progress"],image:{src:"https://user-images.githubusercontent.com/52372569/188123705-e58d8e1b-6fcd-42a2-81d6-0f5b2f9c31e9.png",alt:"Slack"},codeHighlight:{json:[{fileName:"cloudwatch.json",body:f(`{
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
								  }`,8)}]}}}}},_=new Date().getFullYear();function I(o){let a,e,n,l,s,c;return{c(){a=b("div"),e=d("\xA9 Copyright "),n=d(_),l=C(),s=b("span"),c=d("Laminar"),this.h()},l(r){a=S(r,"DIV",{class:!0});var t=A(a);e=m(t,"\xA9 Copyright "),n=m(t,_),l=k(t),s=S(t,"SPAN",{class:!0});var g=A(s);c=m(g,"Laminar"),g.forEach(p),t.forEach(p),this.h()},h(){v(s,"class","color svelte-59dbvb"),v(a,"class","footer svelte-59dbvb")},m(r,t){D(r,a,t),i(a,e),i(a,n),i(a,l),i(a,s),i(s,c)},p:h,i:h,o:h,d(r){r&&p(a)}}}class R extends w{constructor(a){super(),y(this,a,null,I,T,{})}}const E="/blog";export{R as F,P as i,E as u};
