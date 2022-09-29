<script context="module" lang="ts">
	// Layout
	import Posts from '$lib/layout/posts/Posts.svelte';

	// Props/Header
	import Header from '$lib/layout/posts/props/header/header.svelte';

	// Props/Contents/Center
	import Title from '$lib/layout/posts/props/contents/center/title.svelte';
	import Href from '$lib/layout/posts/props/contents/center/href.svelte';
	import Icon from '$lib/layout/posts/props/contents/center/icon.svelte';
	import Information from '$lib/layout/posts/props/contents/center/information.svelte';
	import Color from '$lib/layout/posts/props/contents/center/color.svelte';
	import Button from '$lib/layout/posts/props/contents/center/button.svelte';
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
	import python from 'svelte-highlight/languages/python';
	import bash from 'svelte-highlight/languages/bash';
	import github from 'svelte-highlight/styles/github';

	// Import types
	import type { post } from '$lib/interface/posts';
</script>

<script lang="ts">
	// Get data from page.server.ts
	export let data: post;

	// Main
	const { lastUpdate, status, codeHighlight } = data;
	const { title, tag, image } = index._2022._09._01;
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
			I am monitoring many servers with
			<Color color="blue" content="Amazon CloudWatch" number="1" /> service. The servers which were created
			from <Color color="blue" content="Amazon EC2" number="2" />
			are running on the AWS. Default metrics like CPU utilization, network bandwidth are provided from
			Amazon Cloudwatch for free. With Amazon Cloudwatch service, you can configure your alarm which
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
			Following
			<Href
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
			Amazon SNS to <Icon service="slack" content="slack" /> . The message is a JSON format and raw text.
			To understand the message fast and concisely, it has to be parsed properly.
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
			The above <Color color="black" content="cloudwatch.json" number="-1" /> message from Amazon CloudWatch,
			for example, has a <Color color="purple" content="Records" number="-1" /> key. The type of key
			is an array in NODEJS and a list in PYTHON. The first item of the key is JSON. A main key of the
			item is <Color color="purple" content="Sns" number="-1" />. This key differs from source like
			Amazon CloudWatch, Amazon RDS and etc. My NODEJS code was wrote for only messages from Amazon
			CloudWatch.
		</Content>

		<!-- Chapter 2 -->
		<Subtitle>The Goal</Subtitle>
		<Content>
			All of the messages from Amazon Cloudwatch alarm, Amazon RDS event shoud be sent to <Icon
				service="slack"
				content="slack"
			/>
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
			From creating a event subscription to be notified by a
			<Icon service="slack" content="slack" /> app, I would like to talk about all of the steps. Descriptions
			may be omitted unintentionally.
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
		<Step />
		<Content>
			On the side menu, click the
			<AWS_Button type="input" content="Event subscriptions" />. After entering the Event
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
		<Step />
		<Content>
			Enter the your subscription name. In my case, I entered
			<AWS_Button type="input" content="laminar" />. After that, choose your Amazon SNS ARN. My
			target ARN is <AWS_Button type="inputSelect" content="laminar" />. For easy resource
			management, I recommend that you specify the same subscription name and destination name.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/188323556-f72eb4fa-7320-49bb-af7b-0132a7ac6a5e.png"
				alt="RDS Event subscription"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Step />
		<Content>
			You can choose source type from a source list. I want to subscribe events from my instances.
			So I choose <AWS_Button type="inputSelect" content="Instances" /> from types.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/189348189-b594ba6c-12b3-42df-b817-114fa07894fb.png"
				alt="RDS Event Source"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Step />
		<Content>
			Leave the options below as defaults. After configuring the source, click the
			<AWS_Button type="button" content="Create" /> button.
		</Content>
		<Content>
			If you want to listen a specific event from selected instances, you can choose a
			<AWS_Button type="select" content="Select specific instances" /> and a
			<AWS_Button type="select" content="Select specific event categories" />options.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/188323913-21086efa-0b04-4fcc-8906-ca41009b0b26.png"
				alt="RDS Event subscription"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Step />

		<!-- Chapter 3 -->
		<Subtitle>Create a Lambda function</Subtitle>
		<Content>
			You could create an lambda function on AWS console. Write
			<AWS_Button type="serviceSearch" content="Lambda" />
			on the search box at the top and Click
			<AWS_Button type="service" content="Lambda" />
			from the results in the services.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/189368580-e70430b6-c727-47a7-a3bb-1b65682705d3.png"
				alt="Lambda Fucntion"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Step />
		<Content>
			If you are unable to view this <AWS_Button type="input" content="Functions" /> page, click
			<AWS_Button type="input" content="Functions" /> on the left menu bar. To create a lambda function,
			click the <AWS_Button type="button" content="Create function" /> button at the top right corner.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/189377555-cfb043f3-0439-4259-91bb-72842079760c.png"
				alt="Lambda Fucntion"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Step />
		<Content>
			You can set your function name. In my case, I name the function
			<AWS_Button type="input" content="Notify-to-Slack" />.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/189389419-411249a8-5ad9-4b40-ab36-386a3927aaf3.png"
				alt="Lambda Fucntion"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Step />
		<Content>
			My sample code can run on the Python environment. Choose the
			<AWS_Button type="inputSelect" content="Python 3.9" /> runtime from the supported runtime lists.
		</Content>
		<Content>
			As noted for the image below, the lambda console code editor supports only
			<Color color="purple" content="Nodejs" number="-1" />,
			<Color color="purple" content="Python" number="-1" /> and
			<Color color="purple" content="Ruby" number="-1" />.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/189390401-41d5f516-56ae-40aa-867a-276e4b1d9a47.png"
				alt="Lambda Fucntion"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Step />
		<Content>
			Leave the options below as defaults. Finally, click the
			<AWS_Button type="button" content="Create function" /> button at the bottom right corner.
		</Content>
		<Content>
			This lambda function does not require additional permissions except for default permissions.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/189470159-bbb86fbf-b642-4fc0-8b3f-e34de4b6dbf4.png"
				alt="Lambda Fucntion"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Step />
		<Code>
			<div slot="file">
				{codeHighlight.python[0].fileName}
			</div>
			<div slot="code">
				<Highlight language={python} code={codeHighlight.python[0].body} />
			</div>
		</Code>
		<Content>
			Copy the Python code above and paste the code in your
			<Color color="black" content="lambda_handler.py" number="-1" /> Python file.
		</Content>
		<Content>
			This code is valid only for Amazon
			<AWS_Button type="service" content="Simple Notification Service" /> now. If you try to send not
			matched messages, <Icon service="slack" content="slack" /> only show the limited information like
			time and an error message.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/189470770-8df19e5a-5126-47fd-bdd7-fd3469aeadd4.png"
				alt="Lambda Fucntion"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Step />
		<Content>
			After pasting the code, you create a new folder by clicking mouse right button and choosing
			the <AWS_Button type="lambda" content="New Folder" /> option.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/189471063-0b3722a3-1a50-422e-bf7e-141302acf7ae.png"
				alt="Lambda Fucntion"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Step />
		<Content>
			You click the mouse right button on your new folder and click the
			<AWS_Button type="lambda" content="Rename" /> for entering a new name
			<AWS_Button type="input" content="module" />.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/189471142-c5ec5a48-4ab6-45fe-9c54-6191a91a3697.png"
				alt="Lambda Fucntion"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Step />
		<Content>
			To create a Python file for sending messages to <Icon service="slack" content="slack" /> with formatted
			blocks, click mouse right button on your new folder and choose the
			<AWS_Button type="lambda" content="New File" /> option like you created a new folder before.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/189471639-dd979b35-ee61-4c50-a5b4-564842b17ef8.png"
				alt="Lambda Fucntion"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Step />
		<Content>
			You click the mouse right button on your new folder and click the
			<AWS_Button type="lambda" content="Rename" /> for entering a new name
			<AWS_Button type="input" content="slack" />.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/190206647-775f8755-9f3b-48ff-99d0-4a42f4a211b0.png"
				alt="Lambda Fucntion"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Step />
		<Code>
			<div slot="file">
				{codeHighlight.python[1].fileName}
			</div>
			<div slot="code">
				<Highlight language={python} code={codeHighlight.python[1].body} />
			</div>
		</Code>
		<Content>
			Copy the Python code above and paste the code in your
			<Color color="black" content="slack.py" number="-1" /> Python file.
		</Content>
		<Content>
			Using Python <Color color="purple" content="requests" number="-1" /> module, you could call an
			<Icon service="slack" content="slack" /> post API. Method, headers and url need to be assigned
			properly to call the API. Two variables,
			<Color color="purple" content="cloudwatch_keys" number="-1" /> and
			<Color color="purple" content="rds_keys" number="-1" />, are used to limit the number of
			fields. Slack allows only ten fields.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/190210628-83691574-1821-413b-9bd7-196e054d9074.png"
				alt="Lambda Fucntion"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Step />
		<Content>
			Click the <AWS_Button type="input" content="Deploy" /> button to deploy your code. After a few
			seconds, your code will be deployed successfully.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/190397272-26128f0a-8558-4689-ab4d-d34b87dc7846.png"
				alt="Lambda Fucntion"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Step />

		<!-- Chapter 4 -->
		<Subtitle>Create a Lambda layer</Subtitle>
		<Content>
			The lambda runtime only provides AWS Python SDK environment
			<Color color="blue" content="Boto3" number="1" /> . If you would like to import
			<Color color="purple" content="requests" number="-1" /> module, the layer could be helpful.
			<Annotation>
				<span slot="number">1</span>
				<span slot="annotation">
					The Amazon Web Services (AWS) Software Development Kit (SDK) for Python, which allows
					Python developers to write software that makes use of services like Amazon S3 and Amazon
					EC2.
				</span>
			</Annotation>
		</Content>
		<Content>
			Go to the AWS <AWS_Button type="service" content="Lambda" /> service and click
			<AWS_Button type="input" content="layers" /> under
			<AWS_Button type="inputSelectReverse" content="Additional resources" />. If you could not find
			the options, open your menu bar first on the left side.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/190420400-b5b625c3-adb5-4453-8e56-e2e358b5530f.png"
				alt="Lambda layer"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Step />
		<Content>
			Click <AWS_Button type="button" content="Create layer" /> button on your right side.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/190422403-7a0fc894-9091-4a70-9ce0-bce2b735efe3.png"
				alt="Lambda layer"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Step />
		<Content>
			Before you upload a layer, you have to create a layer file which is zipped and located modules
			properly.
		</Content>
		<Content>
			First of all, create a new folder named
			<Color color="purple" content="python" number="-1" /> . You could also create a path like
			<Color color="purple" content="python/lib/python3.9/site-packages " number="-1" /> now.
		</Content>
		<Code>
			<div slot="file">
				{codeHighlight.bash[0].fileName}
			</div>
			<div slot="code">
				<Highlight language={bash} code={codeHighlight.bash[0].body} />
			</div>
		</Code>
		<Content>
			Run the above bash code to download the
			<Color color="purple" content="requests" number="-1" /> module in your new folder. After running
			the code, your folder looks like this image below.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/190426454-c82b8260-2d9a-430f-9304-3a5865057e42.png"
				alt="Lambda layer"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Step />
		<Content>
			Zip your Python folder and rename the folder, such as the
			<Color color="purple" content="requests" number="-1" /> .
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/190428539-cb12b918-67bf-47de-9895-89c220dfe7d5.png"
				alt="Lambda layer"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Step />
		<Content>
			Finally we are ready to upload our requests module for the lambda function. Back to your AWS
			Console, enter your layer name just same as our module name
			<Color color="purple" content="requests" number="-1" />.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/190430880-c4fb268b-37ca-4cbd-a37b-33a5fb154b0e.png"
				alt="Lambda layer"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Step />
		<Content>
			Click <AWS_Button type="input" content="Upload" /> button and choose your zip file.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/190433401-b6b90153-4192-4ce1-846f-570624d64ea9.png"
				alt="Lambda layer"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Step />
		<Content>
			Check your upload first, then click the <AWS_Button type="button" content="Create" /> button to
			finish this task.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/190434780-e5810101-f1a7-4ce5-8209-fa800900d1d7.png"
				alt="Lambda layer"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Step />

		<!-- Chapter 5 -->
		<Subtitle>Add a layer to your function</Subtitle>
		<Content>
			To add a layer to your function, return to your function and click
			<AWS_Button type="input" content="Add a layer" /> button in
			<AWS_Button type="input" content="Layers" /> section. You can find the section at the bottom of
			the page.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/190436004-3dbaa08e-6237-44ae-a006-a98efe0f5cf2.png"
				alt="Lambda layer"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Step />
		<Content>
			We will add a python <Color color="purple" content="requests" number="-1" /> module to your function.
			Click the second layer source, <AWS_Button type="select" content="Custom layers" />, and
			choose your <AWS_Button type="inputSelect" content="requests" /> layer and version
			<AWS_Button type="inputSelect" content="1" />.
		</Content>
		<Content>
			If your configuration is completed, click <AWS_Button type="button" content="Add" /> button.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/190439575-068a9281-497d-44a1-995b-c01b6abb80a8.png"
				alt="Lambda layer"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Step />

		<!-- Chapter 6 -->
		<Subtitle>Create a Slack App</Subtitle>
		<Content>
			Run your slack app and click <Button service="slack" type="menu" content="Apps" /> on the left
			side of the app.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/190445561-1134eff4-d528-4b3f-ade9-3d749b4fdadb.png"
				alt="Slack app"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Content>
			If you cannot find <Button service="slack" type="menu" content="Apps" /> button, try to click
			<Button service="slack" type="menu" content="Browse Slack" /> then you can find it.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/190917423-41feade9-ad62-4377-8e7a-dfb5ea2abec2.png"
				alt="Slack app"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Step />
		<Content>
			To make a app, click <Button service="slack" type="text" content="App Directory" /> on your right
			side.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/190456367-dfd95cc8-494e-4bd3-97a8-5a5debb73e46.png"
				alt="Slack app"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Step />
		<Content>
			Click <Button service="slack" type="text" content="Build" /> button between
			<Button service="slack" type="text" content="Manage" /> button and your name like
			<Button service="slack" type="textSelect" content="Laminar" />.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/190459472-c1e83af1-72e8-4836-828a-48b06eefe8d9.png"
				alt="Slack app"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Step />
		<Content>
			Click <Button service="slack" type="buttonWhite" content="Create an app" /> button to start to
			make your own app.
		</Content>
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/190460516-8b69083f-5e29-456a-97ba-55b966bd8ee0.png"
				alt="Slack app"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v1>
		<Step />
		<Content>
			To create a <Icon service="slack" content="slack" /> App, click <u>see an example</u> link.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/190917629-e533e9de-c5b3-40b6-9a1e-f711758da0c1.png"
				alt="Slack app"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Step />
		<Content>
			With <Button service="slack" type="buttonPink" content="Posting messages using curl" /> example,
			you can configure your app easily. The example has pre-configured scopes, settings and etc.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/190918015-83fb6ee6-db75-40f6-b515-514d31c95bdd.png"
				alt="Slack app"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Step />
		<Content>
			After scroll down a little, you can find
			<Button service="slack" type="buttonGreen" content="Create app" /> button. Click it.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/190918488-dcabe75d-13a6-4fd4-a1c4-1b888ef96beb.png"
				alt="Slack app"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Step />
		<Content>
			Pick your workspace just like I choose my workspace
			<Button service="slack" type="textSelect" content="Laminar" />. Then click
			<Button service="slack" type="buttonGreen" content="Next" /> to go next steps.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/191319256-4c68158f-1913-468e-a906-c657f06c00f2.png"
				alt="Slack app"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Step />
		<Content>
			Review your app configuration. You can also configure these settings after creating your app.
			Click <Button service="slack" type="buttonGreen" content="Create" /> button to create an app.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/191319927-1e1a1b47-1e2f-421c-94de-e1d83ecc01a7.png"
				alt="Slack app"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Step />
		<Content>
			Before installing this app to your workspace, close this pop up window by clicking
			<Button service="slack" type="buttonGreen" content="Got It" />.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/191322640-b47cb9c1-5d8e-4e71-bb8b-be838c280efa.png"
				alt="Slack app"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Step />
		<Content>
			You can install your app. Click
			<Button service="slack" type="text" content="Install to Workspace" /> button.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/191322890-adc0644f-829c-44c9-96a7-79949322e401.png"
				alt="Slack app"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Step />
		<Content>
			Your app is requesting permission to access your workspace. Click
			<Button service="slack" type="buttonGreen" content="Allow" />.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/191324378-1892ca72-e3a0-4fc6-852a-01dfba1630d8.png"
				alt="Slack app"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Step />
		<Content>Go to your app and check if your app is added.</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/191324531-4e694049-55cb-48bc-a6d3-44f903e7eb79.png"
				alt="Slack app"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Step />

		<!-- Chapter 7 -->
		<Subtitle>Add Lambda environment variables</Subtitle>
		<Content>
			Back to your browser, then click
			<Button service="slack" type="buttonBlue" content="OAuth & Permissions" /> under Features. You
			can see your OAuth Token(ex: xoxb-xxxxx) for your workspace. Click
			<Button service="slack" type="text" content="Copy" /> to copy your token.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/191527727-2dee00d5-b856-4f62-8656-2241719acf2b.png"
				alt="Slack app"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Step />
		<Content>Go to your lambda function to configure your function environment variables.</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/191326984-9b21021b-c7cb-4c62-8a8f-c93c73fb6d89.png"
				alt="Slack app"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Step />
		<Content>
			Go to this <AWS_Button type="input" content="Configuration" /> tab, then click
			<AWS_Button type="input" content="Environment variables" />. If you never add your variables,
			you cannot see your items now. To add your first variable, click
			<AWS_Button type="input" content="Edit" />.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/191528676-b4d92a9e-a2b7-49aa-afc4-84062a00344c.png"
				alt="Slack app"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Step />
		<Content>
			Click <AWS_Button type="input" content="Add environment variable" /> button and enter your key
			as <AWS_Button type="input" content="token" /> and your value as copied OAuth token
			<AWS_Button type="input" content="xoxb-xxxx" />. After your edit is completed, click
			<AWS_Button type="button" content="Save" />.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/191528995-dac25700-a345-4713-91b8-93adb439d750.png"
				alt="Slack app"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Step />
		<Content>
			To get your channel ID, open <Icon service="slack" content="slack" /> application again. Over your
			private channel name, click your right mouse button to open menu then click
			<Button service="slack" type="buttonBlue" content="View channel details" />
			options.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/191329708-4a449a53-5140-456d-819c-eb392ec8af63.png"
				alt="Slack app"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Step />
		<Content>
			Move to the bottom of the pop up in <Button service="slack" type="text" content="About" /> tab.
			You can copy your channel ID(ex: C0XXXXXX) by clicking copy icons.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/191529731-6cd0e5cc-4694-4267-a0ef-0cb6f5fbbb1b.png"
				alt="Slack app"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Step />
		<Content>
			In <Button service="slack" type="text" content="Integrations" /> tab, you can add your app to your
			channel. Click
			<Button service="slack" type="buttonWhite" content="Add an app" /> button.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/191330969-a43110b8-1df1-4689-aea8-d53d9934c137.png"
				alt="Slack app"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Step />
		<Content>
			You can check available apps in your workspace. I have one app which I create for this guide.
			Add your app by clicking <Button service="slack" type="buttonWhite" content="Add" /> button.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/191331088-1d1fd5c0-92ed-4e27-83e1-9b81eb084e39.png"
				alt="Slack app"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Step />
		<Content>Make sure that your app is added to the private channel.</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/191331313-de13d841-a31e-4429-8dca-2f92bf684d67.png"
				alt="Slack app"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Step />
		<Content>
			Our lambda function wants one more environment variable. Your key is
			<AWS_Button type="input" content="channel_id" /> and value is the previous copied channel ID
			<AWS_Button type="input" content="C0XXXXX" />. If you finish your task, click
			<AWS_Button type="button" content="Save" />. button.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/191537055-eaf6f2dd-0dbe-4b87-ab34-942de1d1a5f9.png"
				alt="Slack app"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Step />

		<!-- Chapter 8 -->
		<Subtitle>Check your alarm from slack</Subtitle>
		<Content>
			You can get alarms from <Icon service="slack" content="slack" /> with these formatted messages.
			Wait until your alarm will be sent or test your lambda function with
			<Color color="black" content="cloudwatch.json" number="-1" />.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/191331943-60753b0b-ab87-4949-bddf-2835cc14448a.png"
				alt="Slack app"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Content>
			If your slack application is configured correctly, you also can consider changing your app
			display information.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/191542446-d1da30fd-780a-4785-89e9-482eca395876.png"
				alt="Slack app"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>

		<!-- Footer -->
		<Footer />
	</div>
	<div slot="right">
		<Date {lastUpdate} />
		<Status {status} />
		<Tag {tag} />
	</div>
</Posts>
