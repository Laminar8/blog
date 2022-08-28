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

	// Slots/Contents/Center
	import Annotation from '$lib/layout/posts/slots/contents/center/annotation.svelte';
	import Subtitle from '$lib/layout/posts/slots/contents/center/subtitle.svelte';
	import Content from '$lib/layout/posts/slots/contents/center/content.svelte';
	import Image from '$lib/layout/posts/slots/contents/center/image.svelte';
	import Code from '$lib/layout/posts/slots/contents/center/code.svelte';

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
	import scss from 'svelte-highlight/languages/scss';
	import github from 'svelte-highlight/styles/github';

	// Init
	export const prerender = true;
	// Main
	const { title, lastUpdate, tag, status, image, codeHighlight } = index._2022._08._23;
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
		<Image>
			<img src={image.src} alt={image.alt} style="max-width: 100%;" slot="image" />
			<div slot="caption">
				@Photo by Jefferson Santal from
				<Href
					href="https://www.pexels.com/photo/a-traffic-light-with-green-light-11093631/"
					name="Pexels"
				/>
			</div>
		</Image>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Subtitle>Design my blog</Subtitle>
		<Content>
			My blog is ready to display posts on the Index page and two posts on the Post page. All the
			pages prepared so far are satisfactory. Each page has a header, content, and footer. A post
			page provides readers with additional information about the post. I think every page should
			provide intuitive information visually to the user without a tortion of content. Therefore I
			have been preparing contents for my blog as simple as possible.
		</Content>
		<Content>
			Choosing the right color for my content is a very important task. A blog should highlight
			principal texts and images with bright colors. On the other hand fundamental contents should
			be colored with dark. Let me show you my colors which I used on my blog.
		</Content>
		<Code>
			<div slot="file">
				{codeHighlight.scss[0].fileName}
			</div>
			<div slot="code">
				<Highlight language={scss} code={codeHighlight.scss[0].body} />
			</div>
		</Code>
		<Content>
			All colors using on this blog are defined to variables in a
			<Color color="red" content="app.scss" number="-1" /> file.
			<Color color="purple" content=":root" number="-1" /> element in the file can affect all of our
			blog html elements with declaring global CSS variables. To change colors without a global variable
			is a very difficult task. All colors in the svelte files need to be re-defined. But with a variable,
			the task will be done very easy.
		</Content>
		<Image>
			<img
				src="https://user-images.githubusercontent.com/52372569/187074447-b4c706a8-6faa-4ebe-b342-367fb9073ef5.png"
				alt="Color Instructions on my blog"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image>
		<Information color={color.green} name={name.green} content={content.image.green._01} />
		<Code>
			<div slot="file">
				{codeHighlight.scss[1].fileName}
			</div>
			<div slot="code">
				<Highlight language={scss} code={codeHighlight.scss[1].body} />
			</div>
		</Code>
		<Content>
			The colors used in this blog are very diverse. But there are not many groups of similar
			colors. For relieving eye fatigue and comfort, I prepared some tonal colors that are less
			intense. Also these colors give us feeling soft.
		</Content>
		<!-- Chapter 2 -->
		<Image>
			<img
				src="https://user-images.githubusercontent.com/52372569/186466478-c45ee3c0-dd72-4fc9-b590-63242e6354b8.png"
				alt="Creative Quote Lettering Text on Black Background"
				style="max-width: 100%;"
				slot="image"
			/>
			<div slot="caption">
				@Photo by Anna Tarazevich from
				<Href
					href="https://www.pexels.com/photo/creative-quote-lettering-text-on-black-background-5598309/"
					name="Pexels"
				/>
			</div>
		</Image>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Subtitle>Expression in a second language</Subtitle>
		<Content>
			Since ancient times, people have wanted to record their life stories. Over time, the media in
			which records are stored has benn changing for several reasons. Records and history have been
			written on the rock wall next to the lake and deep mountain caves from old days.
		</Content>
		<Footer />
	</div>
	<div slot="right">
		<Date {lastUpdate} />
		<Status {status} />
		<Tag {tag} />
	</div>
</Posts>
