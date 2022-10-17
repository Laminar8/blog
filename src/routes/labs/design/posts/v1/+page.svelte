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

	// Public/Props/Contents/Center
	import Footer from '$lib/layout/public/props/contents/center/Footer.svelte';

	// Module
	import { index } from '$lib/contents/index';
	import { information } from '$lib/contents/items/information';

	// Highlight syntax
	import { Highlight, HighlightSvelte } from 'svelte-highlight';
	import github from 'svelte-highlight/styles/github';

	// Highlight Language syntax
	import bash from 'svelte-highlight/languages/bash';
	import css from 'svelte-highlight/languages/css';
	import json from 'svelte-highlight/languages/json';
	import yaml from 'svelte-highlight/languages/yaml';
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
</script>

<svelte:head>
	<title>Design Labs</title>
	<meta name="description" content="Design Labs" />
	{@html github}
</svelte:head>

<Posts>
	<div slot="header">
		<Header title="Design Labs" />
	</div>
	<div slot="center">
		<Title title="Design Labs" />

		<!-- Chapter 1 -->
		<Subtitle>Href</Subtitle>
		<Content>A oragne colored text with linked to provided href.</Content>
		<Code>
			<div slot="file">
				{codeHighlight.svelte[0].fileName}
			</div>
			<div slot="code">
				<HighlightSvelte code={codeHighlight.svelte[0].body} />
			</div>
		</Code>
		<Content>
			After sign in, you could start the integration. If you are in the dashboard page, click this
			link,
			<Href
				href="https://zapier.com/webintent/create-zap?template=29698&utm_source=widget&utm_medium=embed&utm_campaign=zapier-zap-templates&provider=undefined&entry-point-location=partner_embed&referer=https%3A%2F%2Fdocs.netlify.com%2Fsite-deploys%2Fnotifications%2F&referrer=https%3A%2F%2Fdocs.netlify.com%2Fsite-deploys%2Fnotifications%2F"
				name="Receive Slack channel messages on successful Netlify deploys"
			/> again.
			<Annotation>
				<span slot="number">1</span>
				<span slot="annotation"> Receive Slack Channel Messages On Netlify Deploys</span>
			</Annotation>
		</Content>
		<Split />

		<!-- Chapter 2 -->
		<Subtitle>Icon</Subtitle>
		<Content>The text colored with their identities along with logo.</Content>
		<Code>
			<div slot="file">
				{codeHighlight.svelte[1].fileName}
			</div>
			<div slot="code">
				<HighlightSvelte code={codeHighlight.svelte[1].body} />
			</div>
		</Code>
		<Content>
			This code is valid only for Amazon
			<AWS_Button type="service" content="Simple Notification Service" /> now. If you try to send not
			matched messages, <Icon service="slack" content="slack" /> only show the limited information like
			time and an error message.
			<Annotation>
				<span slot="number">1</span>
				<span slot="annotation">
					Subscribe Amazon RDS Notification And Get Notifications From Slack
				</span>
			</Annotation>
		</Content>
		<Split />

		<!-- Chapter 3 -->
		<Subtitle>Color</Subtitle>
		<Content>Simply colored text with their purpose.</Content>
		<Code>
			<div slot="file">
				{codeHighlight.svelte[2].fileName}
			</div>
			<div slot="code">
				<HighlightSvelte code={codeHighlight.svelte[2].body} />
			</div>
		</Code>
		<Content>
			<Content>
				Copy the Python code above and paste the code in your
				<Color color="black" content="lambda_handler.py" number="-1" /> Python file.
			</Content>
			<Annotation>
				<span slot="number">1</span>
				<span slot="annotation">
					Subscribe Amazon RDS Notification And Get Notifications From Slack
				</span>
			</Annotation>
		</Content>
		<Code>
			<div slot="file">
				{codeHighlight.svelte[3].fileName}
			</div>
			<div slot="code">
				<HighlightSvelte code={codeHighlight.svelte[3].body} />
			</div>
		</Code>
		<Content>
			<Content>
				Using Python <Color color="purple" content="requests" number="-1" /> module, you could call an
				<Icon service="slack" content="slack" /> post API. Method, headers and url need to be assigned
				properly to call the API. Two variables,
				<Color color="purple" content="cloudwatch_keys" number="-1" /> and
				<Color color="purple" content="rds_keys" number="-1" />, are used to limit the number of
				fields. Slack allows only ten fields.
			</Content>
			<Annotation>
				<span slot="number">2</span>
				<span slot="annotation">
					Subscribe Amazon RDS Notification And Get Notifications From Slack
				</span>
			</Annotation>
		</Content>
		<Split />

		<!-- Chapter 4 -->
		<Subtitle>Button</Subtitle>
		<Content>Buttons with the company identity colors.</Content>
		<Code>
			<div slot="file">
				{codeHighlight.svelte[4].fileName}
			</div>
			<div slot="code">
				<HighlightSvelte code={codeHighlight.svelte[4].body} />
			</div>
		</Code>
		<Content>
			<Content>
				Run your slack app and click <Button service="slack" type="menu" content="Apps" /> on the left
				side of the app.
			</Content>
			<Annotation>
				<span slot="number">1</span>
				<span slot="annotation">
					Subscribe Amazon RDS Notification And Get Notifications From Slack
				</span>
			</Annotation>
		</Content>
		<Code>
			<div slot="file">
				{codeHighlight.svelte[5].fileName}
			</div>
			<div slot="code">
				<HighlightSvelte code={codeHighlight.svelte[5].body} />
			</div>
		</Code>
		<Content>
			<Content>
				Click <Button service="slack" type="text" content="Build" /> button between
				<Button service="slack" type="text" content="Manage" /> button and your name like
				<Button service="slack" type="textSelect" content="Laminar" />.
			</Content>
			<Annotation>
				<span slot="number">2</span>
				<span slot="annotation">
					Subscribe Amazon RDS Notification And Get Notifications From Slack
				</span>
			</Annotation>
		</Content>
		<Code>
			<div slot="file">
				{codeHighlight.svelte[6].fileName}
			</div>
			<div slot="code">
				<HighlightSvelte code={codeHighlight.svelte[6].body} />
			</div>
		</Code>
		<Content>
			<Content>
				Click <Button service="slack" type="buttonWhite" content="Create an app" /> button to start to
				make your own app.
			</Content>
			<Annotation>
				<span slot="number">3</span>
				<span slot="annotation">
					Subscribe Amazon RDS Notification And Get Notifications From Slack
				</span>
			</Annotation>
		</Content>
		<Code>
			<div slot="file">
				{codeHighlight.svelte[7].fileName}
			</div>
			<div slot="code">
				<HighlightSvelte code={codeHighlight.svelte[7].body} />
			</div>
		</Code>
		<Content>
			<Content>
				With <Button service="slack" type="buttonPink" content="Posting messages using curl" /> example,
				you can configure your app easily. The example has pre-configured scopes, settings and etc.
			</Content>
			<Annotation>
				<span slot="number">4</span>
				<span slot="annotation">
					Subscribe Amazon RDS Notification And Get Notifications From Slack
				</span>
			</Annotation>
		</Content>
		<Code>
			<div slot="file">
				{codeHighlight.svelte[8].fileName}
			</div>
			<div slot="code">
				<HighlightSvelte code={codeHighlight.svelte[8].body} />
			</div>
		</Code>
		<Content>
			<Content>
				After scroll down a little, you can find
				<Button service="slack" type="buttonGreen" content="Create app" /> button. Click it.
			</Content>
			<Annotation>
				<span slot="number">5</span>
				<span slot="annotation">
					Subscribe Amazon RDS Notification And Get Notifications From Slack
				</span>
			</Annotation>
		</Content>
		<Code>
			<div slot="file">
				{codeHighlight.svelte[9].fileName}
			</div>
			<div slot="code">
				<HighlightSvelte code={codeHighlight.svelte[9].body} />
			</div>
		</Code>
		<Content>
			<Content>
				To get your channel ID, open <Icon service="slack" content="slack" /> application again. Over
				your private channel name, click your right mouse button to open menu then click
				<Button service="slack" type="buttonBlue" content="View channel details" />
				options.
			</Content>
			<Annotation>
				<span slot="number">6</span>
				<span slot="annotation">
					Subscribe Amazon RDS Notification And Get Notifications From Slack
				</span>
			</Annotation>
		</Content>
		<Code>
			<div slot="file">
				{codeHighlight.svelte[10].fileName}
			</div>
			<div slot="code">
				<HighlightSvelte code={codeHighlight.svelte[10].body} />
			</div>
		</Code>
		<Content>
			<Content>
				Click <Button service="zapier" type="buttonBlue" content="Connect" /> button to connect your
				netlify account.
			</Content>
			<Annotation>
				<span slot="number">7</span>
				<span slot="annotation"> Receive Slack Channel Messages On Netlify Deploys </span>
			</Annotation>
		</Content>
		<Code>
			<div slot="file">
				{codeHighlight.svelte[11].fileName}
			</div>
			<div slot="code">
				<HighlightSvelte code={codeHighlight.svelte[11].body} />
			</div>
		</Code>
		<Content>
			<Content>
				Click <Button service="netlify" type="buttonBlueBright" content="Authorize" /> button to authorize
				the access.
			</Content>
			<Annotation>
				<span slot="number">8</span>
				<span slot="annotation"> Receive Slack Channel Messages On Netlify Deploys </span>
			</Annotation>
		</Content>

		<!-- Footer -->
		<Footer />
	</div>
	<div slot="right">
		<Date {lastUpdate} {publish} {status} />
		<Status {status} />
	</div>
</Posts>
