<script context="module" lang="ts">
	// Layout
	import Posts from '$lib/layout/posts/Posts.svelte';

	// Props/Header
	import Header from '$lib/layout/posts/props/header/Header.svelte';

	// Props/Contents/Center
	import Title from '$lib/layout/posts/props/contents/center/Title.svelte';
	import Href from '$lib/layout/posts/props/contents/center/Href.svelte';
	// import Icon from '$lib/layout/posts/props/contents/center/icon.svelte';
	import Information from '$lib/layout/posts/props/contents/center/Information.svelte';
	import Color from '$lib/layout/posts/props/contents/center/Color.svelte';
	// import Button from '$lib/layout/posts/props/contents/center/button.svelte';
	// import AWS_Button from '$lib/layout/posts/props/contents/center/aws/button.svelte';

	// Slots/Contents/Center
	// import Annotation from '$lib/layout/posts/slots/contents/center/annotation.svelte';
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
	const { title, tag, image } = index._2022._10._03;
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
				<Href href="https://www.netlify.com/" name="netlify" />
			</div>
		</Image_v1>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Subtitle>New Functions - Including Filter posts based on Tag</Subtitle>
		<Content>
			For last two months, I concentrated on creating my blog and publishing posts. The blog has
			deployed on a Github Page and has 4 posts. It is certainly good news. However I am concerned
			about slow development for my blog. Recently, I has added my blog some functions. I would like
			to introduce my functions and why I have to migrate this blog from Github pages to netlify.
		</Content>
		<Code>
			<div slot="file">
				{codeHighlight.css[0].fileName}
			</div>
			<div slot="code">
				<Highlight language={css} code={codeHighlight.css[0].body} />
			</div>
		</Code>
		<Content>
			First is an animation effect. Like a effect when minimizing and maximizing the windows from
			OS, contents reveal from outside by CSS animation codes. You can see it on any pages in this
			blog. The animiation is very shor - about 1 second. Try it by refreshing this page.
		</Content>
		<Code>
			<div slot="file">
				{codeHighlight.css[1].fileName}
			</div>
			<div slot="code">
				<Highlight language={css} code={codeHighlight.css[1].body} />
			</div>
		</Code>
		<Content>
			Next is a responsive page. The pages on our blog are served to your device resolution
			diffrently. Currently the minimum width is 650px and blog doesn't support mobile. My goal is
			that I want you to read and enjoy our posts no matter what device you use.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/194706371-88adbdd8-8b88-45ba-bf54-0e004950c789.png"
				alt="My blog"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Information color={color.green} name={name.green} content={content.image.green._01} />
		<Content>
			You can filter posts based on tags. Only one tag could be selected. You don't have to write
			all words of your tag. A word piece of your tag is enough sometimes. In addition to input your
			tags, you could select a tag from 6 popular tags or tags in posts.
		</Content>
		<Split />

		<!-- Chapter 2 -->
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/194707046-dcaefc9c-b700-4a39-936f-4aaddf59243f.png"
				alt="404 Error"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Subtitle>404 Errors</Subtitle>
		<Content>
			When you access to a page which is not available, 404 Error could occur because no file could
			be returned from requested path. While adding functions for tag, I faced the error after
			deploying my blog to Github Pages. Because the Github Pages allows only static pages and all
			of your pages has to be prerenderable. I couldn't catch the error when I develop the functions
			in dev mode.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/194707679-6c43db02-210f-4f9f-b274-294319860223.png"
				alt="url"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Content>
			On a post page, you can select a tag from post tags. After selecting it, you go to the index
			page. In this step, the information about tag needs to be sent between the pages. I have two
			functions to allow it. One is
			<Color color="purple" content="url.searchparams" number="-1" /> and the other is
			<Color color="purple" content="svelte/store" number="-1" />.
		</Content>
		<Content>
			Unfortunately, all the functions are not available when the page is prerendable. The pages
			could have to be rendered from server side. We call the technology
			<Color color="purple" content="SSR" number="-1" />.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/194708621-d53fce44-642d-4e6b-ae1d-d31dd40dc3a7.png"
				alt="url"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Content>
			For your information, url.searchparams could be processed on
			<Color color="black" content="+server.ts" number="-1" />. When the index page is loading, the
			<Color color="black" content="+server.ts" number="-1" /> could access to url. After parsing url
			from request, return response with the information about tag.
		</Content>
		<Content>
			This function is depreciated and couldn't be accessible. Before migrating to netlify, this
			function is replaced to <Color color="purple" content="svelte/store" number="-1" />.
		</Content>
		<Code>
			<div slot="file">
				{codeHighlight.typescript[0].fileName}
			</div>
			<div slot="code">
				<Highlight language={typescript} code={codeHighlight.typescript[0].body} />
			</div>
		</Code>
		<Content>
			The <Color color="purple" content="svelte/store" number="-1" /> function could be accessible from
			tag APIs. <Color color="purple" content="GET" number="-1" /> function with GET method returns a
			tag which stores on Writable object.
		</Content>
		<Code>
			<div slot="file">
				{codeHighlight.typescript[1].fileName}
			</div>
			<div slot="code">
				<Highlight language={typescript} code={codeHighlight.typescript[1].body} />
			</div>
		</Code>
		<Content>
			On the other hand <Color color="purple" content="SET" number="-1" /> function with POST method
			stores a tag to Writable object.
		</Content>
		<Split />

		<!-- Chapter 3 -->
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/194712433-e9316463-fcf8-4494-9503-e6533fbfc6d9.png"
				alt="API Endpoints"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Subtitle>Migrate to netlify</Subtitle>
		<Content>
			With server side rendering issue, I could never maintain my blog on Github Pages. I decided to
			migrate my blog to netlify. I deleted node dependencies what I used for Github Pages. Then I
			installed new svelte adapter
			<Color color="purple" content="@sveltejs/adapter-netlify@next" number="-1" />.
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
		<Content>
			Create a file <Color color="black" content="netlify.toml" number="-1" /> in root directory and
			paste below codes. .
		</Content>
		<Code>
			<div slot="file">
				{codeHighlight.yaml[0].fileName}
			</div>
			<div slot="code">
				<Highlight language={yaml} code={codeHighlight.yaml[0].body} />
			</div>
		</Code>
		<Step />
		<Content>
			Simplify your npm scripts. When I use the Github Pages, the scripts were complicated. For now,
			I should run <Color color="purple" content="vite build" number="-1" /> only to deploy on the netlify.
		</Content>
		<Code>
			<div slot="file">
				{codeHighlight.json[0].fileName}
			</div>
			<div slot="code">
				<Highlight language={json} code={codeHighlight.json[0].body} />
			</div>
		</Code>
		<Step />
		<Content>
			Finally edit your <Color color="black" content="svelte.config.js" number="-1" />. To enable
			your API, you have to use <Color color="purple" content="edge" number="-1" /> function. If I disable
			the <Color color="purple" content="edge" number="-1" />, API was not working.
		</Content>
		<Code>
			<div slot="file">
				{codeHighlight.javascript[0].fileName}
			</div>
			<div slot="code">
				<Highlight language={javascript} code={codeHighlight.javascript[0].body} />
			</div>
		</Code>
		<Content>
			You want the details about Sveltekit on netlify, go to the netlify docs about
			<Href
				href="https://docs.netlify.com/integrations/frameworks/sveltekit/"
				name="SvelteKit on netlify"
			/>.
		</Content>
		<Split />

		<!-- Chapter 4 -->
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/194715659-bb4bccd6-83be-4bcd-9255-dd6ee2baa2c4.png"
				alt="Deploy error"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v1>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Subtitle>Deploy error</Subtitle>
		<Content>
			I thought netlify settings were all configured. However all deploys were failed because the
			svelte could not import some svelte files. Most of the cases, the problem is file name. In
			deploy steps, check the file name with case sensitive. I checked my file names several times,
			but I could not find the problem.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/194716171-e50b830e-442f-4daa-98f0-3b0ff70e8b5d.png"
				alt="Deploy error"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Content>
			I did googling many times. Finally the mystery was revealed from
			<Href
				href="https://github.com/sveltejs/kit/issues/5337"
				name="Module Not Found in Build Production w/ netlify"
			/>. The config of git was the issue. Maybe the git is not case sensitive. When I rename my
			files only first word to uppercase, the git wouldn't know the changing. To solve this problem,
			enter below command.
		</Content>
		<Code>
			<div slot="file">
				{codeHighlight.bash[1].fileName}
			</div>
			<div slot="code">
				<Highlight language={bash} code={codeHighlight.bash[1].body} />
			</div>
		</Code>
		<Split />

		<!-- Chapter 5 -->
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/194716713-c2919395-c852-40fc-8013-f329c371305a.png"
				alt="Deploy"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v1>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Subtitle>Lovely netlify</Subtitle>
		<Content>
			The migration is ended successfully. I am delighted to deploy my blog with fully functional. I
			would like to keep going this blog development. Keep following me 😆
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
