<script context="module" lang="ts">
	// Layout
	import Posts from '$lib/layout/posts/Posts.svelte';

	// Props/Header
	import Header from '$lib/layout/posts/props/header/Header.svelte';

	// Props/Contents/Center
	import Title from '$lib/layout/posts/props/contents/center/Title.svelte';
	import Href from '$lib/layout/posts/props/contents/center/Href.svelte';
	import Information from '$lib/layout/posts/props/contents/center/Information.svelte';
	import Color from '$lib/layout/posts/props/contents/center/Color.svelte';

	// Slots/Contents/Center
	import Annotation from '$lib/layout/posts/slots/contents/center/Annotation.svelte';
	import Subtitle from '$lib/layout/posts/slots/contents/center/Subtitle.svelte';
	import Content from '$lib/layout/posts/slots/contents/center/Content.svelte';
	import Image from '$lib/layout/posts/slots/contents/center/Image_v1.svelte';
	import Code from '$lib/layout/posts/slots/contents/center/Code.svelte';
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
	import scss from 'svelte-highlight/languages/scss';
	import github from 'svelte-highlight/styles/github';

	// Import types
	import type { post } from '$lib/interface/posts';
</script>

<script lang="ts">
	// Get data from page.server.ts
	export let data: post;

	// Main
	const { publish, lastUpdate, status, codeHighlight } = data;
	const { title, tag, image } = index._2022._08._23;
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
			<Color color="black" content="app.scss" number="-1" /> file.
			<Color color="purple" content=":root" number="-1" /> element in the file can affect all of our
			blog html elements with declaring global CSS variables. To change colors without a global variable
			is a very difficult task. All colors in the svelte files need to be re-defined. But with a variable,
			the task will be done very easy.
		</Content>
		<Code>
			<div slot="file">
				{codeHighlight.scss[1].fileName}
			</div>
			<div slot="code">
				<Highlight language={scss} code={codeHighlight.scss[1].body} />
			</div>
		</Code>
		<Content>
			In a <Color color="black" content="tag.svelte" number="-1" /> file, for example, two properties
			like <Color color="purple" content="color" number="-1" /> and
			<Color color="purple" content="background-color" number="-1" /> are defined by variable pre-defined
			in the app.scss file. With this technique, the concept of this blog was decided very quickly.
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
		<Content>
			The colors used in this blog are very diverse. But there are not many groups of colors. I
			prepared some tonal colors that are less intense for relieving eye fatigue and comfort. Also
			these colors give us feeling soft. I hope my intention will be properly provided to you.
		</Content>
		<Split />

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
			I have felt that communication to ask other people for something about technologies was not
			easy when I have used a foreign language. Fortunately I could share my intentions with others.
			Although it could be done successfully, I haven't thought that the communication was clear.
		</Content>
		<Content>
			Another reason why I write my post in english is that to translate some words into a first
			language is difficult and unnatural in expression. I try to say the words in a way that many
			people call it as it is.
		</Content>
		<Content>
			One of my high priority is to express my idea freely in writing. I expect that writing some
			posts can be helpful to learn typical casual English phrases. For showing my think as possible
			as I intend, expressions in the first language might be translated into the second with less
			changes. It takes long time to translate into english. I have to check my progress regularly
			and possibility to keep going this way.
		</Content>
		<Split />

		<!-- Chapter 3 -->
		<Image>
			<img
				src="https://user-images.githubusercontent.com/52372569/187686151-4481cf2e-5b54-48b0-87b4-a4265ccb3d4a.png"
				alt="Pavel Danilyuk"
				style="max-width: 100%;"
				slot="image"
			/>
			<div slot="caption">
				@Photo by Pavel Danilyuk from
				<Href href="https://www.pexels.com/photo/7404649/" name="Pexels" />
			</div>
		</Image>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Subtitle>Balance between free and concentration</Subtitle>
		<Content>
			As closer to the fall, the day is getting shorter and the night is longer. Even though it is
			more efficient to write a post at night, sometimes I can be swayed by temptation and sometimes
			I have been it. One day, I had a dinner with my colleagues and came back home too late. And
			another day, I couldn't come back home to look at beautiful stars in the sky and to feel the
			deep night.
		</Content>
		<Content>
			As a result, this second post in my blog was started to write after one month that the first
			one was published. As the interval between the start time of the last post and the start time
			of the new post increases, it is not easy to write posts steadily. I hope my next posts would
			be posted earlier than this second one and keep the balance between free and concentration.
		</Content>
		<Footer />
	</div>
	<div slot="right">
		<Date {lastUpdate} {publish} {status} />
		<Status {status} />
		<Tag {tag} />
	</div>
</Posts>
