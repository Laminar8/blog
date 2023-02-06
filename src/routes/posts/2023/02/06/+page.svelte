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
		<Content>The downloa</Content>

		<!-- Footer -->
		<Footer />
	</div>
	<div slot="right">
		<Date {lastUpdate} {publish} {status} />
		<Status {status} />
		<Tag {tag} />
	</div>
</Posts>
