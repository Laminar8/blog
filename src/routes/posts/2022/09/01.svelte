<script context="module" lang="ts">
	// Layout
	import Posts from '$lib/layout/posts/posts.svelte';

	// Props/Header
	import Header from '$lib/layout/posts/props/header/header.svelte';

	// Props/Contents/Center
	import Title from '$lib/layout/posts/props/contents/center/title.svelte';
	import Href from '$lib/layout/posts/props/contents/center/href.svelte';
	import Information from '$lib/layout/posts/props/contents/center/information.svelte';
	import Color from '$lib/layout/posts/props/contents/center/color.svelte';
	import AWS_Button from '$lib/layout/posts/props/contents/center/aws/button.svelte';

	// Slots/Contents/Center
	import Annotation from '$lib/layout/posts/slots/contents/center/annotation.svelte';
	import Subtitle from '$lib/layout/posts/slots/contents/center/subtitle.svelte';
	import Content from '$lib/layout/posts/slots/contents/center/content.svelte';
	import Image_v1 from '$lib/layout/posts/slots/contents/center/image_v1.svelte';
	import Image_v2 from '$lib/layout/posts/slots/contents/center/image_v2.svelte';
	import Code from '$lib/layout/posts/slots/contents/center/code.svelte';
	import Step from '$lib/layout/posts/slots/contents/center/step.svelte';

	// Slots/Contents/Right
	import Date from '$lib/layout/posts/slots/contents/right/date.svelte';
	import Status from '$lib/layout/posts/slots/contents/right/status.svelte';
	import Tag from '$lib/layout/posts/slots/contents/right/tag.svelte';

	// Public/Props/Contents/Center
	import Footer from '$lib/layout/public/props/contents/center/footer.svelte';

	// Module
	import { index } from '$lib/contents/index';
	import { information } from '$lib/contents/items/information';

	// Highlight syntax
	import Highlight from 'svelte-highlight';
	import json from 'svelte-highlight/languages/json';
	import github from 'svelte-highlight/styles/github';

	// Init
	export const prerender = true;
	// Main
	const { title, lastUpdate, tag, status, image, codeHighlight } = index._2022._09._01;
	const { color, name, content } = information;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={title} />
	{@html github}
</svelte:head>

<Posts>
	<div slot="header">
		<Header {title} />
	</div>
	<div slot="center">
		<Title {title} />

		<!-- Chapter 1 -->
		<Image_v1>
			<img src={image.src} alt={image.alt} style="max-width: 100%;" slot="image" />
			<div slot="caption">
				@Image from
				<Href href="https://slack.com/features" name="Slack" />
			</div>
		</Image_v1>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Subtitle>Before start</Subtitle>
		<Content>
			A few days ago, I heard about two incidents causing a failure event that has a business
			impact. Each of them were that a minor update for RDS database engine had been done during the
			periodic maintenance period. While updating engines, the database server had been rebooted.
			The task was done after just five minutes. However some transactions have not been processed
			because of this update. This transactions have to be processed by administrators after update.
		</Content>
		<Content>
			I am monitoring many servers with <Color
				color="blue"
				content="Amazon CloudWatch"
				number="1"
			/> service. The servers which were created from <Color
				color="blue"
				content="Amazon EC2"
				number="2"
			/> are running on the AWS. Default metrics like CPU utilization, network bandwidth are provided
			from Amazon Cloudwatch for free. With Amazon Cloudwatch service, you can configure your alarm which
			notify you when one of the metrics are met a condition of pre-defined rules.
			<Annotation>
				<span slot="number">1</span>
				<span slot="annotation">
					CloudWatch provides you with data and actionable insights to monitor your applications,
					respond to system-wide performance changes, and optimize resource utilization. CloudWatch
					collects monitoring and operational data in the form of logs, metrics, and events.
				</span>
			</Annotation>
			<Annotation>
				<span slot="number">2</span>
				<span slot="annotation">
					Amazon Elastic Compute Cloud (Amazon EC2) offers the broadest and deepest compute
					platform, with over 500 instances and choice of the latest processor, storage, networking,
					operating system, and purchase model to help you best match the needs of your workload.
				</span>
			</Annotation>
		</Content>
		<Content>
			Following <Href
				href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html"
				name="Amazon Cloudwatch document"
			/> which says composite alarms can send <Color color="blue" content="Amazon SNS" number="1" />
			notifications when they change state, I have configured a alarm process which notify to administrators
			when changing the alarm state. After sending an alarm state to Amazon SNS, the service send to
			subscriptions like e-mail, <Color color="blue" content="AWS Lambda" number="2" /> and etc.
			<Annotation>
				<span slot="number">1</span>
				<span slot="annotation">
					Amazon Simple Notification Service (Amazon SNS) is a fully managed messaging service for
					both application-to-application (A2A) and application-to-person (A2P) communication.
				</span>
			</Annotation>
			<Annotation>
				<span slot="number">2</span>
				<span slot="annotation">
					AWS Lambda is a serverless, event-driven compute service that lets you run code for
					virtually any type of application or backend service without provisioning or managing
					servers.
				</span>
			</Annotation>
		</Content>
		<Content>
			This process was also applied to RDS event notification. When events occur, each event are
			sent to Amazon SNS. The service receives messages and sends to AWS Lambda in my case.
		</Content>
		<Content>
			With AWS Lambda service, you can create a lambda function which runs your code without a
			server. I have wrote a code that was running on the NODEJS14 runtime to send the message from
			Amazon SNS to Slack. The message is a JSON format and raw text. To understand the message fast
			and concisely, it has to be parsed properly.
		</Content>
		<Code>
			<div slot="file">
				{codeHighlight.json[0].fileName}
			</div>
			<div slot="code">
				<Highlight language={json} code={codeHighlight.json[0].body} />
			</div>
		</Code>
		<Content>
			The above <Color color="red" content="cloudwatch.json" number="-1" /> message from Amazon CloudWatch,
			for example, has a <Color color="purple" content="Records" number="-1" /> key. The type of key
			is an array in NODEJS and a list in PYTHON. The first item of the key is JSON. A main key of the
			item is <Color color="purple" content="Sns" number="-1" />. This key differs from source like
			Amazon CloudWatch, Amazon RDS and etc. My NODEJS code was wrote for only messages from Amazon
			CloudWatch.
		</Content>

		<!-- Chapter 2 -->
		<Subtitle>The Goal</Subtitle>
		<Content>
			All of the messages from Amazon Cloudwatch alarm, Amazon RDS event shoud be sent to slack
			successfully. That means a lambda function shoud be expandable for all Amazon SNS messages.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/188312397-678f8422-ccd0-44e8-ad16-90b2793318f8.png"
				alt="RDS console"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Information color={color.green} name={name.green} content={content.image.green._01} />
		<Content>
			From creating a event subscription to be notified by a slack app, I would like to talk about
			all of the steps. Descriptions may be omitted unintentionally.
		</Content>

		<!-- Chapter 2 -->
		<Subtitle>Subscribe an event</Subtitle>
		<Content>
			You could create an subscription on AWS console. Write
			<AWS_Button type="serviceSearch" content="RDS" />
			on the search box at the top and Click
			<AWS_Button type="service" content="RDS" />
			from the results in the services.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/188320527-a31f777c-fc54-4ab7-aa5c-d8a9aaf7e21e.png"
				alt="RDS Event subscription"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Information color={color.green} name={name.green} content={content.image.green._01} />
		<Step />
		<Content>
			On the side menu, click the
			<Color color="red" content="Event subscriptions" number="-1" />. After entering the Event
			subscriptions page, click the
			<AWS_Button type="button" content="Create event subscription" />
			button.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/188319972-84b3a6b2-f8cb-4cb9-9176-1179712bc2b8.png"
				alt="RDS Event subscription"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Information color={color.green} name={name.green} content={content.image.green._01} />
		<Step />
		<Content>
			Enter the your subscription name. In my case, I entered
			<AWS_Button type="input" content="laminar" />. After that, choose your Amazon SNS ARN. My
			target ARN is <AWS_Button type="input" content="laminar" />. For easy resource management, I
			recommend that you specify the same subscription name and destination name.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/188323556-f72eb4fa-7320-49bb-af7b-0132a7ac6a5e.png"
				alt="RDS Event subscription"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Information color={color.green} name={name.green} content={content.image.green._01} />
		<Step />
		<Content>
			Enter the your subscription name. In my case, I entered
			<Color color="red" content="laminar" number="-1" />. After that, choose your Amazon SNS ARN.
			My target ARN is <Color color="red" content="laminar" number="-1" />. For easy resource
			management, I recommend that you specify the same subscription name and destination name.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/188323913-21086efa-0b04-4fcc-8906-ca41009b0b26.png"
				alt="RDS Event subscription"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Information color={color.green} name={name.green} content={content.image.green._01} />
		<Step />

		<Footer />
	</div>
	<div slot="right">
		<Date {lastUpdate} />
		<Status {status} />
		<Tag {tag} />
	</div>
</Posts>
