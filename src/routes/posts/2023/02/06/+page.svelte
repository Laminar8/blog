<script context="module" lang="ts">
	// Layout
	import Posts from '$lib/layout/posts/Posts.svelte';

	// Props/Header
	import Header from '$lib/layout/posts/props/header/Header.svelte';

	// Props/Contents/Center
	import Title from '$lib/layout/posts/props/contents/center/Title.svelte';
	import Href from '$lib/layout/posts/props/contents/center/Href.svelte';
	import Icon from '$lib/layout/posts/props/contents/center/Icon.svelte';
	import Information from '$lib/layout/posts/props/contents/center/Information.svelte';
	import Color from '$lib/layout/posts/props/contents/center/Color.svelte';
	import Button from '$lib/layout/posts/props/contents/center/Button.svelte';
	import AWS_Button from '$lib/layout/posts/props/contents/center/aws/Button.svelte';

	// Slots/Contents/Center
	import Annotation from '$lib/layout/posts/slots/contents/center/Annotation.svelte';
	import Subtitle from '$lib/layout/posts/slots/contents/center/Subtitle.svelte';
	import Content from '$lib/layout/posts/slots/contents/center/Content.svelte';
	import Image_v1 from '$lib/layout/posts/slots/contents/center/Image_v1.svelte';
	import Image_v2 from '$lib/layout/posts/slots/contents/center/Image_v2.svelte';
	import Code from '$lib/layout/posts/slots/contents/center/Code.svelte';
	import Step from '$lib/layout/posts/slots/contents/center/Step.svelte';
	import Split from '$lib/layout/posts/slots/contents/center/Split.svelte';

	// Slots/Contents/Right
	import Date from '$lib/layout/posts/slots/contents/right/Date.svelte';
	import Status from '$lib/layout/posts/slots/contents/right/Status.svelte';
	import Tag from '$lib/layout/posts/slots/contents/right/Tag.svelte';

	// Public/Props/Contents/Center
	import Footer from '$lib/layout/public/props/contents/center/Footer.svelte';

	// Module
	import { index } from '$lib/contents/index';
	import { information } from '$lib/contents/items/information';

	// Highlight syntax
	import Highlight from 'svelte-highlight';
	import github from 'svelte-highlight/styles/github';

	// Highlight Language syntax
	import bash from 'svelte-highlight/languages/bash';
	import css from 'svelte-highlight/languages/css';
	import json from 'svelte-highlight/languages/json';
	import yaml from 'svelte-highlight/languages/yaml';
	import python from 'svelte-highlight/languages/python';
	import javascript from 'svelte-highlight/languages/javascript';
	import typescript from 'svelte-highlight/languages/typescript';

	// Import types
	import type { post } from '$lib/interface/posts';
</script>

<script lang="ts">
	// Get data from page.server.ts
	export let data: post;

	// Main
	const { publish, lastUpdate, status, codeHighlight } = data;
	const { title, tag, image } = index._2023._02._06;
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
				<Href
					href="https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-getting-started-hello-world.html"
					name="AWS"
				/>
			</div>
		</Image_v1>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Subtitle>SAM</Subtitle>
		<Content>
			The CI/CD pipeline defines the word <Color color="blue" content="Step" number="1" /> as a process
			or stage to commit and synchronize application code, deploy to production computing servers, etc.
			The steps are deeply linked each other. However making the processes continously like one is not
			easy to many developers.
			<Annotation>
				<span slot="number">1</span>
				<span slot="annotation">
					Step is defined in a dictionary as an act or movement of putting one leg in front of the
					other in walking or running.
				</span>
			</Annotation>
		</Content>
		<Content>
			After one or more branches are developed successfully, the developers would consider the
			better and efficient development environment to avoid repeated actions. They have wrote a
			code, built and tested the app to verify the code was ready to service. If the steps were done
			successfully, they could deploy the app to their production. This processes have been
			implementing repeatedly while the app development would be done.
		</Content>
		<Content>
			The open-source framework,
			<Color color="blue" content="AWS Serverless Application Model (AWS SAM)" number="2" />
			is that you can use to build serverless applications on AWS. Using the SAM templates, you can build
			serverless application easy and fast including
			<AWS_Button type="service" content="Lambda" />,
			<AWS_Button type="service" content="DynamoDB" />,
			<AWS_Button type="service" content="API Gateway" />,
			<AWS_Button type="service" content="S3" />.
			<Annotation>
				<span slot="number">2</span>
				<span slot="annotation">
					The AWS Serverless Application Model (SAM) is an open-source framework for building
					serverless applications. It provides shorthand syntax to express functions, APIs,
					databases, and event source mappings.
				</span>
			</Annotation>
		</Content>
		<Content>
			Let's start to build an app with your favorite runtime which lambda supports. In your IDE like
			the visual studio code, cloud9 or anything you want, you can build your app.
		</Content>
		<Split />

		<!-- Chapter 2 -->
		<Subtitle>The goal</Subtitle>
		<Content>
			A developer commits the application codes to their code repository like github, bitbucket. The
			remote repository sends a webhook to their jenkins. The jenkins runs a pipeline which builds
			and deploys to their production.
		</Content>
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/216999061-56f35192-c1b0-4ebf-a652-4856a407915c.png"
				alt="Architecture"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v1>
		<Content>
			For verifying the functions of the SAM, I made a cloud9 environment on my account. I recommend
			that you create the EC2 instance with small instance type for saving costs.
		</Content>
		<Content>
			In this project, the github remote code repository is the main private repository. The jenkins
			server runs on a EC2 instance by a docker container. The base image is
			<Href href="https://hub.docker.com/r/jenkins/jenkins" name="jenkins/jenkins" />.
		</Content>
		<Split />

		<!-- Chapter 3 -->
		<Subtitle>SAM Install</Subtitle>
		<Content>
			SAM is currently supported by CLI on Windows, Linux, Mac. If you are on Windows or Mac, please
			follow the insructions on this link
			<Href
				href="https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html"
				name="Installing the AWS SAM CLI"
			/>.
			<Code>
				<div slot="file">
					{codeHighlight.bash[0].fileName}
				</div>
				<div slot="code">
					<Highlight language={bash} code={codeHighlight.bash[0].body} />
				</div>
			</Code>
		</Content>
		<Step />
		<Content>
			The downloaded file format is zip type. To install the SAM cli, you should upzip the file
			first.
			<Code>
				<div slot="file">
					{codeHighlight.bash[1].fileName}
				</div>
				<div slot="code">
					<Highlight language={bash} code={codeHighlight.bash[1].body} />
				</div>
			</Code>
		</Content>
		<Content>
			If you cannot unzip the file because the command could not find, you can install the unzip
			library.
			<Code>
				<div slot="file">
					{codeHighlight.bash[2].fileName}
				</div>
				<div slot="code">
					<Highlight language={bash} code={codeHighlight.bash[2].body} />
				</div>
			</Code>
		</Content>
		<Step />
		<Content>
			To execute the installer, put the below command on your bash shell.
			<Code>
				<div slot="file">
					{codeHighlight.bash[3].fileName}
				</div>
				<div slot="code">
					<Highlight language={bash} code={codeHighlight.bash[3].body} />
				</div>
			</Code>
		</Content>
		<Step />
		<Content>
			Verify your install success. If you cannot install it, try to follow another installation
			guide.
			<Code>
				<div slot="file">
					{codeHighlight.bash[4].fileName}
				</div>
				<div slot="code">
					<Highlight language={bash} code={codeHighlight.bash[4].body} />
				</div>
			</Code>
		</Content>
		<Split />

		<!-- Chapter 4 -->
		<Subtitle>SAM Bootstrap</Subtitle>
		<Content>
			SAM has a lot of AWS quick start application template. According to your application type
			including a language, package type, you can choose the template. If you want to start from the
			template, initialize the sam. In my case, I ran the code in my cloud9.
			<Code>
				<div slot="file">
					{codeHighlight.bash[5].fileName}
				</div>
				<div slot="code">
					<Highlight language={bash} code={codeHighlight.bash[5].body} />
				</div>
			</Code>
		</Content>
		<Content>
			Follow instructions from SAM, and input your number or parameters. The below command is an
			example for my current development environment.
			<Code>
				<div slot="file">
					{codeHighlight.bash[6].fileName}
				</div>
				<div slot="code">
					<Highlight language={bash} code={codeHighlight.bash[6].body} />
				</div>
			</Code>
		</Content>
		<Content>
			The bootstrapped sam template is downloaded on my working directory. The sample template
			includes events, sample app, test folder and template.yaml
			<Color color="black" content="template.yaml" number="-1" /> file.
			<Code>
				<div slot="file">
					{codeHighlight.bash[7].fileName}
				</div>
				<div slot="code">
					<Highlight language={bash} code={codeHighlight.bash[7].body} />
				</div>
			</Code>
		</Content>
		<Split />

		<!-- Chapter 5 -->
		<Subtitle>Detailed template</Subtitle>
		<Content>
			The <Color color="black" content="template.yaml" number="-1" /> file is the template for the cloudformation.
			The template has a resource section and an output section.
			<Code>
				<div slot="file">
					{codeHighlight.yaml[0].fileName}
				</div>
				<div slot="code">
					<Highlight language={yaml} code={codeHighlight.yaml[0].body} />
				</div>
			</Code>
		</Content>
		<Content>
			If you would like to add a vpc configuration, the lambda resource should have
			<Color color="purple" content="SecurityGroupIds" number="-1" />
			and <Color color="purple" content="SubnetIds" number="-1" />.
			<Code>
				<div slot="file">
					{codeHighlight.yaml[1].fileName}
				</div>
				<div slot="code">
					<Highlight language={yaml} code={codeHighlight.yaml[1].body} />
				</div>
			</Code>
		</Content>
		<Content>
			You can define your own <AWS_Button type="service" content="IAM role" /> to your lambda. If you
			don't declare the role, a role would be created with a logical ID of
			<Color color="purple" content="<function-logical-id>" number="-1" /> Role.
			<Code>
				<div slot="file">
					{codeHighlight.yaml[2].fileName}
				</div>
				<div slot="code">
					<Highlight language={yaml} code={codeHighlight.yaml[2].body} />
				</div>
			</Code>
		</Content>
		<Content>
			You can create a <AWS_Button type="service" content="Amazon API Gateway" /> resources and methods
			by adding to resources section. You don't have to add explicitly to a AWS Serverless Application
			Definition template. From official AWS SAM developer guide, a resource of this type is implicitly
			created from the union of Api events defined on
			<Color color="purple" content="AWS::Serverless::Function" number="-1" /> resources defined in the
			template that do not refer to an
			<Color color="purple" content="AWS::Serverless::Api" number="-1" /> resource.
			<Code>
				<div slot="file">
					{codeHighlight.yaml[3].fileName}
				</div>
				<div slot="code">
					<Highlight language={yaml} code={codeHighlight.yaml[3].body} />
				</div>
			</Code>
		</Content>
		<Content>
			When you want to add a API Gateway resource from serverless template, you have to match your
			lambda function event and your api gateway by adding the
			<Color color="purple" content="RestApiId" number="-1" />.
			<Code>
				<div slot="file">
					{codeHighlight.yaml[4].fileName}
				</div>
				<div slot="code">
					<Highlight language={yaml} code={codeHighlight.yaml[4].body} />
				</div>
			</Code>
		</Content>
		<Content>
			The default value of api gateway resource endpoint type is edge. If you want to change from
			egde to regional or private, add a
			<Color color="purple" content="EndpointConfiguration" number="-1" /> to your resource.
			<Code>
				<div slot="file">
					{codeHighlight.yaml[5].fileName}
				</div>
				<div slot="code">
					<Highlight language={yaml} code={codeHighlight.yaml[5].body} />
				</div>
			</Code>
		</Content>
		<Split />

		<!-- Chapter 6 -->
		<Subtitle>Add a resource</Subtitle>
		<Content>
			I will create a new python file that returns a current date by
			<Color color="purple" content="datetime" number="-1" /> library. The return value will be forwarded
			to main python file. Finally the main python file
			<Color color="black" content="app.py" number="-1" /> returns a json formatted strings.
		</Content>
		<Content>
			When you have a lambda function and many python file is in there, how can I create the
			function by SAM? First let's make a python file which returns a date.
			<Code>
				<div slot="file">
					{codeHighlight.bash[8].fileName}
				</div>
				<div slot="code">
					<Highlight language={bash} code={codeHighlight.bash[8].body} />
				</div>
			</Code>
		</Content>
		<Step />

		<Content>
			A new python file imports datetime library. Create a function that returns a current date. The
			file name is <Color color="black" content="get_time.py" number="-1" />.
			<Code>
				<div slot="file">
					{codeHighlight.python[0].fileName}
				</div>
				<div slot="code">
					<Highlight language={python} code={codeHighlight.python[0].body} />
				</div>
			</Code>
		</Content>
		<Step />

		<Content>
			In main handler, import the previous function from
			<Color color="black" content="get_time.py" number="-1" /> python file. Edit return value of the
			<Color color="purple" content="lambda_handler" number="-1" /> function.
			<Code>
				<div slot="file">
					{codeHighlight.python[1].fileName}
				</div>
				<div slot="code">
					<Highlight language={python} code={codeHighlight.python[1].body} />
				</div>
			</Code>
		</Content>
		<Content>
			No additional template changes are there. If a new file is created succesfully and your last
			edit work done, go to build it.
		</Content>
		<Split />

		<!-- Chapter 7 -->
		<Subtitle>Build an app</Subtitle>
		<Content>
			It's time to build the app using <Color color="black" content="template.yaml" number="-1" />.
			When you send a command to build the app, SAM builds your app in a container.
			<Code>
				<div slot="file">
					{codeHighlight.bash[9].fileName}
				</div>
				<div slot="code">
					<Highlight language={bash} code={codeHighlight.bash[9].body} />
				</div>
			</Code>
		</Content>
		<Content>
			Using container, you don't have same runtime on your local. Base images have the runtime. Most
			of the environment, it is easy to build your app with container.
		</Content>
		<Content>
			You don't have to add a docker image parameter if you can connect with the internet. Because
			the SAM pull the images from Amazon ECR Public or DockerHub. However if you cannot pull the
			images, you have to push your private image on your own private repository. When you need the
			base images, find the images from this link
			<Href
				href="https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-image-repositories.html"
				name="Image repositories"
			/>.
		</Content>
		<Split />

		<!-- Chapter 8 -->
		<Subtitle>Deploy an app</Subtitle>
		<Content>
			The last step is the deployment. With pre-defined parameters, you can deploy with SAM CLI.
			Pre-defined parameters could be diffrent by your environment.
			<Code>
				<div slot="file">
					{codeHighlight.bash[10].fileName}
				</div>
				<div slot="code">
					<Highlight language={bash} code={codeHighlight.bash[10].body} />
				</div>
			</Code>
		</Content>
		<Split />

		<!-- Chapter 8 -->
		<Subtitle>Latest template</Subtitle>
		<Content>
			In cloud9, our application test was done. I would like to share my template
			<Color color="black" content="template.yaml" number="-1" /> for you. You can add a resource and
			python files to this template.
			<Code>
				<div slot="file">
					{codeHighlight.yaml[6].fileName}
				</div>
				<div slot="code">
					<Highlight language={yaml} code={codeHighlight.yaml[6].body} />
				</div>
			</Code>
		</Content>
		<Split />

		<!-- Chapter 8 -->
		<Subtitle>Delete stack</Subtitle>
		<Content>
			Sometimes you have to delete your resources because the resource dosen't need anymore or you
			have to save your costs. I want to show you how to remove your stack.
			<Code>
				<div slot="file">
					{codeHighlight.bash[11].fileName}
				</div>
				<div slot="code">
					<Highlight language={bash} code={codeHighlight.bash[11].body} />
				</div>
			</Code>
		</Content>
		<Split />

		<!-- Chapter 9 -->
		<Subtitle>Run jenkins server</Subtitle>
		<Content>
			From official jenkins image
			<Href href="https://hub.docker.com/r/jenkins/jenkins" name="jenkins/jenkins" />, you can
			create a container based on the image. The current version is 2.375.2 on Feb, 2023. A docker
			volume is mounted to the jenkins container.
			<Code>
				<div slot="file">
					{codeHighlight.bash[12].fileName}
				</div>
				<div slot="code">
					<Highlight language={bash} code={codeHighlight.bash[12].body} />
				</div>
			</Code>
		</Content>
		<Split />

		<!-- Chapter 10 -->
		<Subtitle>Jenkins configure</Subtitle>
		<Content>
			If you want to change your default language, you can install plugin
			<Color color="purple" content="locale" number="-1" />. The locale plugin can support several
			language options.
		</Content>
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/217234555-f2332cba-bfb5-4d7e-8dc9-83cdd8276870.png"
				alt="Jenkins locale"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v1>
		<Step />

		<Content>
			Go to <Button service="jenkins" type="buttonGray" content="Manage Jenkins" />. Then click the
			<Button service="jenkins" type="buttonGray" content="Configure System" />. Change your default
			language to <Color color="purple" content="en_US" number="-1" />. Check
			<Color color="purple" content="Ignore browser preference" number="-1" /> option.
		</Content>
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/217234345-393eeb37-eb22-402a-aa21-2513db45bd0e.png"
				alt="Jenkins locale"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v1>
		<Step />

		<Content>
			To call the apis for github, you should add your token. Enter your token in
			<Color color="purple" content="Configure system" number="-1" />.
		</Content>
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/217262352-71965fbc-ed0c-4235-abd6-d2a49086b1b5.png"
				alt="Github server"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v1>
		<Content>
			Add your credentials for the <Color color="purple" content="Github server" number="-1" />. It
			is not equal to credential for the source code management when creating a job.
		</Content>
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/217260879-e0a0d9fb-ae59-4b78-806e-6727424bcca7.png"
				alt="Github server"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v1>

		<Split />

		<!-- Chapter 10 -->
		<Subtitle>AWS SAM Plugin</Subtitle>
		<Content>
			You can go plugins menu and install the plugin. If you already install the plugin, skip this
			step.
		</Content>
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/217195417-33d2cd29-9b5a-46c2-a3da-b36e9c0748a9.png"
				alt="Jenkins github"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v1>
		<Content>
			You also install the plugin by CLI and manual install through uploading the install file. You
			can download the file from this link
			<Href href="https://plugins.jenkins.io/aws-sam/#releases" name="AWS SAM" />. After download
			the file, go to <Color color="purple" content="Plugin Manager" number="-1" /> then
			<Color color="purple" content="Advanced settings" number="-1" />. Upload the plugin file to
			deploy it.
		</Content>
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/217243447-5ba11846-5623-4199-855b-84fe22288103.png"
				alt="Jenkins github"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v1>
		<Content>
			To enable the plugin, you have to create new credential for AWS. Enter the
			<Color color="purple" content="Access Key" number="-1" /> and
			<Color color="purple" content="Secret Access Key" number="-1" /> for an user.
		</Content>
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/217246990-6e92bc61-de82-49bb-a8c6-04bea7ac2e5b.png"
				alt="Jenkins credentials"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v1>
		<Split />

		<!-- Chapter 11 -->
		<Subtitle>Create a job</Subtitle>
		<Content>
			In your credentials, you could create new credential for github. Choose
			<Color color="purple" content="Username with password" number="-1" />
			type. You can get your <Color color="purple" content="Github Token" number="-1" /> from github
			and input your token to Password box.
		</Content>
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/217233501-6da5cf10-d07e-4670-a618-ee762bb29113.png"
				alt="Jenkins credentials"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v1>
		<Step />

		<Content>
			Add an item. The item is an project which runs a pipeline. Enter your item
			<Color color="purple" content="name" number="-1" /> and choose project type to
			<Color color="purple" content="Freestyle project" number="-1" />.
		</Content>
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/217192781-4cae680c-5e74-47c1-b36a-11232e8199fb.png"
				alt="Jenkins item"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v1>
		<Step />

		<Content>
			Connect to your <Color color="purple" content="Private github repository" number="-1" /> with your
			own credentials which was previous created.
		</Content>
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/217236320-a6b050be-d851-4856-a444-ebe55801ceb9.png"
				alt="Jenkins github"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v1>
		<Step />

		<Content>
			Check <Color color="purple" content="Github hook trigger" number="-1" /> option on the Build Triggers.
		</Content>
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/217194923-d246d48a-33aa-4247-a379-8141d6f661af.png"
				alt="Jenkins github"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v1>
		<Step />

		<Content>
			In this item, you can build by
			<Color color="purple" content="AWS SAM deploy application" number="-1" /> which is supported from
			<Color color="purple" content="AWS-SAM" number="-1" />
			plugins. If you don't have the plugin, you sholud install first.
		</Content>
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/217237848-c3ebd982-97f3-4cf9-89e1-cbc4ee325f44.png"
				alt="Jenkins github"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v1>
		<Step />

		<Content>
			Define your build step. Choose your own
			<Color color="purple" content="Credential" number="-1" /> for AWS. Find your
			<Color color="purple" content="Region" number="-1" /> which you want to create the app. Enter the
			<Color color="purple" content="Stack" number="-1" /> name,
			<Color color="purple" content="S3 Bucket" number="-1" /> name and
			<Color color="purple" content="SAM template file" number="-1" /> name.
		</Content>
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/217257083-3bd3dbc5-412b-406d-be6f-4d60d22987c4.png"
				alt="AWS SAM Plugin"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v1>
		<Split />

		<!-- Chapter 12 -->
		<Subtitle>Verify the goal</Subtitle>
		<Content>
			In your cloud9, commit and push your code to remote code repository like github. The jenkins
			receives the webhook from github. Jenkins runs a job which builds and deploys our app to AWS
			environment with <Color color="purple" content="SAM" number="-1" /> CLI.
		</Content>
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/217267764-c1aff7c0-71cf-458a-bd08-68e9ef35144b.png"
				alt="Cloudformation result"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v1>
		<Content>
			The CI/CD pipeline is created successfully. Manage your github token and IAM user access key
			securely. Rotate keys regulary to your account safety.
		</Content>

		<!-- Footer -->
		<Footer />
	</div>
	<div slot="right">
		<Date {lastUpdate} {publish} {status} />
		<Status {status} />
		<Tag {tag} />
	</div>
</Posts>
