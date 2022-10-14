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
	import Split from '$lib/layout/posts/slots/contents/center/split.svelte';

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
	const { title, tag, image } = index._2022._10._14;
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
				<Href href="https://zapier.com/" name="zapier" />
			</div>
		</Image_v1>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Subtitle>Old deployment pipeline</Subtitle>
		<Content>
			I have tried to blog something everyday. First in my dev environment on the local computer, I
			write the posts. At the end of work of a day, all changes on the local server would be
			committed and pushed to github to deploy my commits. Github is integrated with netlify to
			deploy my blog automatically.
		</Content>
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/195861238-781e4428-cfb6-4643-9a67-954dec52a2b1.png"
				alt="Integration"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v1>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Content>
			It is difficult to know the status of the deployment on netlify. Although netlify provides us
			the API which tells the status, it is not appropriate for me to use. When the deployment
			finishes, I would like to be notified from messengers. To do this,
			<Color color="blue" content="zapier" number="1" /> would be integrated with my deployment pipeline.
			<Annotation>
				<span slot="number">1</span>
				<span slot="annotation">
					Zapier is an automation platform that connects your work apps and does repetitive tasks
					for you. Zapier automates your work by connecting your apps and then moving information
					between them based on rules you set.
				</span>
			</Annotation>
		</Content>
		<Split />

		<!-- Chapter 2 -->
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/195865708-bdcd239c-7962-47ce-9499-d98d363dcd00.png"
				alt="netlify docs"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v1>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Subtitle>zapier integration</Subtitle>
		<Content>
			As you can see from the above image, netlify docs introduces the zapier integrations. netlify
			and slack/status hero/ServiceNow services can be integrated with zapier.
		</Content>
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/195868760-47f89d15-5944-4383-9f46-32e0b2e2952f.png"
				alt="Integration"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v1>
		<Content>
			I would like to integrate with netlify and slack to be notified the status of the deployment.
			From sign up to integrations with them, I will follow the step guides:
			<Href
				href="https://zapier.com/webintent/create-zap?template=29698&utm_source=widget&utm_medium=embed&utm_campaign=zapier-zap-templates&provider=undefined&entry-point-location=partner_embed&referer=https%3A%2F%2Fdocs.netlify.com%2Fsite-deploys%2Fnotifications%2F&referrer=https%3A%2F%2Fdocs.netlify.com%2Fsite-deploys%2Fnotifications%2F"
				name="Receive Slack channel messages on successful Netlify deploys"
			/>.
		</Content>
		<Content>If you already signed up and sign in, skip Sign up step.</Content>
		<Split />

		<!-- Chapter 3 -->
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/195869342-664dcb2e-6810-4136-8377-0bc26b56b2e4.png"
				alt="sign up"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v1>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Subtitle>Sign up</Subtitle>
		<Content>
			If you click the guide link, you can see the sign up page. Follow the steps as the page tells.
		</Content>
		<Step />
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/195869845-463adf3c-7090-473b-a5bd-20226c5fc054.png"
				alt="sign up"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v1>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Content>Choose the option which is matched to you.</Content>
		<Step />
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/195871609-c327fa65-5b8c-4616-aab3-dcdb01bde744.png"
				alt="sign up"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v1>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Content>Pick 5 apps to use.</Content>
		<Split />

		<!-- Chapter 4 -->
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/195872896-358d2748-5ea9-44e2-ab28-03bbb5bff63f.png"
				alt="Integration"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v1>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Subtitle>Integration</Subtitle>
		<Content>
			After sign in, you could start the integration. If you are in the dashboard page, click this
			link,
			<Href
				href="https://zapier.com/webintent/create-zap?template=29698&utm_source=widget&utm_medium=embed&utm_campaign=zapier-zap-templates&provider=undefined&entry-point-location=partner_embed&referer=https%3A%2F%2Fdocs.netlify.com%2Fsite-deploys%2Fnotifications%2F&referrer=https%3A%2F%2Fdocs.netlify.com%2Fsite-deploys%2Fnotifications%2F"
				name="Receive Slack channel messages on successful Netlify deploys"
			/> again.
		</Content>
		<Step />
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/195874439-5e67d8c9-ec7e-4287-8a42-677e358e6061.png"
				alt="Integration"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v1>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Content>
			Click <Button service="zapier" type="buttonBlue" content="Connect" /> button to connect your netlify
			account.
		</Content>
		<Step />
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/195876138-6038949e-074b-4c01-9913-66fa87ee3334.png"
				alt="Integration"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v1>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Content>
			Click <Button service="netlify" type="buttonBlueBright" content="Authorize" /> button to authorize
			the access.
		</Content>
		<Step />
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/195878174-7fc0d9f2-5efb-4ae3-a432-166460b68258.png"
				alt="Integration"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v1>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Content>
			Click <Button service="zapier" type="buttonBlue" content="Next" /> button after choosing your site.
		</Content>
		<Step />
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/195879181-b407af12-c7ce-4563-ae98-6ab23975971d.png"
				alt="Integration"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v1>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Content>
			Click <Button service="zapier" type="buttonBlue" content="Connect" /> button to connect your slack
			account.
		</Content>
		<Step />
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/195880027-f19b8f5e-4779-44e9-be98-d2ac502c6b66.png"
				alt="Integration"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v1>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Content>
			Click <Button service="slack" type="buttonGreen" content="Allow" /> button to access the Laminar
			Slack workspace for zapier.
		</Content>
		<Step />
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/195880464-5032ab6e-079b-4504-ac3f-f05201ca6eb2.png"
				alt="Integration"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v1>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Content>
			Click <Button service="zapier" type="buttonBlue" content="Next" /> button after selecting your
			channel.
		</Content>
		<Step />
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/195880964-b343381c-0c58-4a8d-8d1e-9c7468a59882.png"
				alt="Integration"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v1>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Content>
			Choose what you want to edit in slack. Then click
			<Button service="zapier" type="buttonBlue" content="Next" /> button.
		</Content>
		<Step />
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/195883241-13fd70e9-0804-40ed-8dad-b9167d6d9256.png"
				alt="Integration"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v1>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Content>
			Specify text of the message to send. Test your text with below formatting text.
		</Content>
		<Code>
			<div slot="file">
				{codeHighlight.bash[0].fileName}
			</div>
			<div slot="code">
				<Highlight language={bash} code={codeHighlight.bash[0].body} />
			</div>
		</Code>
		<Step />
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/195884770-8c80a986-bc1c-4ad6-9774-539a1957873a.png"
				alt="Integration"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v1>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Content>
			Give a bot name and bot icon. Go <Button service="zapier" type="buttonBlue" content="Next" />.
		</Content>
		<Step />
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/195885724-7839cb78-d802-49dd-ae15-cfaea638b50f.png"
				alt="Integration"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v1>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Content>
			Go to slack app and check your last message. Is it success to get message from zapier?
		</Content>
		<Step />
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/195886392-3524065d-d9ca-4d92-8c6c-6c8030988403.png"
				alt="Integration"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v1>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Content>
			Enable your workflow by clicking the
			<Button service="zapier" type="buttonBlue" content="Turn on Zap" /> button.
		</Content>
		<Step />

		<!-- Footer -->
		<Footer />
	</div>
	<div slot="right">
		<Date {lastUpdate} {publish} {status} />
		<Status {status} />
		<Tag {tag} />
	</div>
</Posts>
