<script context="module" lang="ts">
	// Layout
	import Posts from '$lib/layout/posts/Posts.svelte';

	// Props/Header
	import Header from '$lib/layout/posts/props/header/header.svelte';

	// Props/Contents/Center
	import Title from '$lib/layout/posts/props/contents/center/title.svelte';
	import Href from '$lib/layout/posts/props/contents/center/href.svelte';
	// import Icon from '$lib/layout/posts/props/contents/center/icon.svelte';
	import Information from '$lib/layout/posts/props/contents/center/information.svelte';
	import Color from '$lib/layout/posts/props/contents/center/color.svelte';
	// import Button from '$lib/layout/posts/props/contents/center/button.svelte';
	// import AWS_Button from '$lib/layout/posts/props/contents/center/aws/button.svelte';

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
	const { title, tag, image } = index._2022._09._22;
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
				<Href href="https://kit.svelte.dev/" name="SvelteKit" />
			</div>
		</Image_v1>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Subtitle>New SvelteKit</Subtitle>
		<Content>
			One day in May, this blog has been started from cloning new sveltekit. While creating blog
			layouts and posting some, sveltekit has new changes. Directories and files in your app are
			defined different in comparison with old sveltekit although sveltekit uses same
			filesystem-based router systems.
		</Content>
		<Content>
			I don't know exactly the sveltekit version, but at least there was no rule or guideline to add
			plus sign to my svelte files in my first app. However new sveltekit defines new a page of your
			app with a <Color color="black" content="+page.svelte" number="-1" /> component file. Similary
			<Color color="black" content="+page.js" number="-1" /> and
			<Color color="black" content="+page.server.js" number="-1" /> files can be defend to load some
			data.
		</Content>
		<Content>
			With git, I would like to migrate blog data from old sveltekit app to new one. You can think
			this migration plan is not suited because this blog is only managed by me. However let's guess
			the blog is managed from a group members.
		</Content>

		<!-- Chapter 2 -->
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/193540414-d09144f1-4a1e-462e-a4bd-9f44ae0f9ebc.png"
				alt="Git branch"
				style="max-width: 100%;"
				slot="image"
			/>
			<div slot="caption">
				@Image from
				<Href
					href="https://www.atlassian.com/git/tutorials/using-branches/git-merge"
					name="Atlassian"
				/>
			</div>
		</Image_v1>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Subtitle>Git branch</Subtitle>
		<Content>
			I'm currently using a <Color color="purple" content="dev" number="-1" /> branch. For upgrading
			my sveltekit, I create a new branch, <Color color="purple" content="feature" number="-1" />.
			If my app on the <Color color="purple" content="feature" number="-1" /> branch works properly,
			the branch would be merged to the <Color color="purple" content="dev" number="-1" /> branch.
		</Content>
		<Code>
			<div slot="file">
				{codeHighlight.bash[0].fileName}
			</div>
			<div slot="code">
				<Highlight language={bash} code={codeHighlight.bash[0].body} />
			</div>
		</Code>
		<Content>Following above bash command, you can create a new branch.</Content>
		<Step />
		<Code>
			<div slot="file">
				{codeHighlight.bash[1].fileName}
			</div>
			<div slot="code">
				<Highlight language={bash} code={codeHighlight.bash[1].body} />
			</div>
		</Code>
		<Content>
			You can switch to your new branch,
			<Color color="purple" content="feature" number="-1" />.
		</Content>
		<Step />
		<Code>
			<div slot="file">
				{codeHighlight.bash[2].fileName}
			</div>
			<div slot="code">
				<Highlight language={bash} code={codeHighlight.bash[2].body} />
			</div>
		</Code>
		<Content>To clone a new sveltekit app, follow the official commands.</Content>
		<Step />
		<Code>
			<div slot="file">
				{codeHighlight.bash[3].fileName}
			</div>
			<div slot="code">
				<Highlight language={bash} code={codeHighlight.bash[3].body} />
			</div>
		</Code>
		<Content>
			You also have to add your dev dependencies on your
			<Color color="black" content="package.json" number="-1" /> file.
		</Content>
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/193569669-688c4f88-5523-4f11-8411-fbc806932668.png"
				alt="Svelte directories"
				style="max-width: 100%;"
				slot="image"
			/>
			<div slot="caption">
				@Image from
				<Href href="https://node.new/sveltekit" name="StackBlitz" />
			</div>
		</Image_v1>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Content>
			Copy all of your static file from your old sveltekit app. Paste those files to your new app.
			To deploy your app successfully, you should apply filesystem-based naming rules to yours.
		</Content>
		<Step />
		<Code>
			<div slot="file">
				{codeHighlight.bash[4].fileName}
			</div>
			<div slot="code">
				<Highlight language={bash} code={codeHighlight.bash[4].body} />
			</div>
		</Code>
		<Content>If your app are configured corretly and works properly, commit your works.</Content>
		<Step />
		<Code>
			<div slot="file">
				{codeHighlight.bash[5].fileName}
			</div>
			<div slot="code">
				<Highlight language={bash} code={codeHighlight.bash[5].body} />
			</div>
		</Code>
		<Content>
			Switch to your working branch, and merge your new codes from
			<Color color="purple" content="feature" number="-1" /> branch. After your merge is done, delete
			your <Color color="purple" content="feature" number="-1" /> branch and commit your data from your
			merged branch.
		</Content>

		<!-- Chapter 3 -->
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/193591958-9ef1edcb-67f8-4f82-9e77-bba2045f10c6.png"
				alt="Git branch"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Subtitle>Advanced routing</Subtitle>
		<Content>
			While applying new svelteKit to my project, I couldn't understand
			<Color color="blue" content="Advanced routing" number="1" />. My blog is serving all of my
			posting correctly, however I'm not sure I can create another blog.
			<Annotation>
				<span slot="number">1</span>
				<span slot="annotation">
					SvelteKit needs to know which route is being requested. The app are routed using high
					priority rules, such as rest parameters, matching, sorting, and so on.
				</span>
			</Annotation>
		</Content>
		<Content>
			Route hierarchy and layout hierarchy are very complicated. Valid directories from old app
			couldn't be compatible with new app maybe. Be careful this routing system.
		</Content>

		<!-- Footer -->
		<Footer />
	</div>
	<div slot="right">
		<Date {lastUpdate} />
		<Status {status} />
		<Tag {tag} />
	</div>
</Posts>
