<script context="module" lang="ts">
	// Layout
	import Posts from '$lib/layout/posts/posts.svelte';

	// Props/Header
	import Header from '$lib/layout/posts/props/header/header.svelte';

	// Props/Contents/Center
	import Title from '$lib/layout/posts/props/contents/center/title.svelte';
	import Href from '$lib/layout/posts/props/contents/center/href.svelte';
	import Information from '$lib/layout/posts/props/contents/center/information.svelte';

	// Slots/Contents/Center
	import Subtitle from '$lib/layout/posts/slots/contents/center/subtitle.svelte';
	import Content from '$lib/layout/posts/slots/contents/center/content.svelte';
	import Image from '$lib/layout/posts/slots/contents/center/image.svelte';

	// Slots/Contents/Right
	import Date from '$lib/layout/posts/slots/contents/right/date.svelte';
	import Tag from '$lib/layout/posts/slots/contents/right/tag.svelte';

	// Module
	import { index } from '$lib/contents/index';
	import { information } from '$lib/contents/items/information';

	// Init
	export const prerender = true;
	// Main
	const { title, lastUpdate, tag } = index._2022._07._14;
	const { color, name, content } = information;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={title} />
</svelte:head>

<Posts>
	<div slot="header">
		<Header {title} />
	</div>
	<div slot="center">
		<Title {title} />
		<!-- Chapter 1 -->
		<Image>
			<img
				src="https://user-images.githubusercontent.com/52372569/184529071-3d88e019-0a4c-48c5-8245-3ef0cc3ea8cd.png"
				alt="Woman Jogging"
				style="max-width: 100%;"
				slot="image"
			/>
			<div slot="caption">
				@Photo by RF._.studio from
				<Href href="https://www.pexels.com/photo/woman-jogging-3623180/" name="Pexels" />
			</div>
		</Image>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Subtitle>Loves to try new things</Subtitle>
		<Content>
			Every day new things like technologies and theories emerge all over the world that I don't
			know very well. News about them sometimes reaches me and makes me interested. If there's
			anything that overlaps what I can do and what I need, I want to try it.
		</Content>
		<Content>
			I don't want to say that posting on a blog is a new technology or theory. I want to share what
			I learned from trying new technologies such as languages, cloud resources and open sources for
			development and production environments with my blog. Posting on this blog will be a major
			task in my study time.
		</Content>
		<Content>
			By the way another important task about this blog would edit will be editing the layout such
			as design of posts, headers, fonts and etc. People who come to this blog want to read the
			posts faster and easier. For their needs, I will continue to try new things by studying ways
			to improve readability.
		</Content>

		<!-- Chapter 2 -->
		<Image>
			<img
				src="https://user-images.githubusercontent.com/52372569/184529645-76de8ece-1e37-4c96-af40-335b68595cd4.png"
				alt="Brown and White Frames Hang in Wall"
				style="max-width: 100%;"
				slot="image"
			/>
			<div slot="caption">
				@Photo by heather bozman from
				<Href
					href="https://www.pexels.com/photo/photo-of-brown-and-white-photo-frames-hang-in-wall-1058770/"
					name="Pexels"
				/>
			</div>
		</Image>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Subtitle>Track my trails</Subtitle>
		<Content>
			Since ancient times, people have wanted to record their life stories. Over time, the media in
			which records are stored has benn changing for several reasons. Records and history have been
			written on the rock wall next to the lake and deep mountain caves from old days.
		</Content>
		<Content>
			They had existed since the Neolithic Age and is at least 2,000 BC. Because of the hard and
			stable nature of the stone, petroglyphs could be found. However, the biggest disadvantage of
			stones was the limitation and hardness of movement. People should have been difficulty storing
			and writing their records.
		</Content>
		<Image>
			<img
				src="https://user-images.githubusercontent.com/52372569/184534030-30106eee-b23b-4dde-a288-f1a5797e21ea.jpg"
				alt="Woman in White Long Sleeved Shirt Holding a Pen Writing on a Paper"
				style="max-width: 100%;"
				slot="image"
			/>
			<div slot="caption">
				@Photo by energepic.com from
				<Href
					href="https://www.pexels.com/photo/woman-in-white-long-sleeved-shirt-holding-a-pen-writing-on-a-paper-110473/"
					name="Pexels"
				/>
			</div>
		</Image>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Content>
			After development of paper, a lot of information have been written to it more easily. People
			could write on papers with some inks regardless of their location. The paper is so flexible
			that it can be changed into various shapes.
		</Content>
		<Content>
			From
			<Href
				href="https://www.prestigeprint.biz/Paper-sizes-and-weights#:~:text=Paper%20weights%20and%20usage&text=Weights%20are%20easy%20to%20calculate,the%20number%20of%20sheets%20used."
				name="Prestige Creative"
			/>, a standard A4 sheet made from 80gsm paper weighs 5g. With these major properties of paper,
			people still love to write on papers.
		</Content>
		<Image>
			<img
				src="https://user-images.githubusercontent.com/52372569/184537060-516becdb-a731-439d-8731-e74654faa041.png"
				alt="Grey 5 Braided Metal"
				style="max-width: 100%;"
				slot="image"
			/>
			<div slot="caption">
				@Photo by Pixabay from
				<Href href="https://www.pexels.com/photo/grey-5-braided-metal-65907/" name="Pexels" />
			</div>
		</Image>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Content>
			After development of paper, a lot of information have been written to it more easily. People
			could write on papers with some inks regardless of their location. The paper is so flexible
			that it can be changed into various shapes.
		</Content>
		<Content>
			In the digital age, everything can be done on the Internet. Reading news, shopping, even
			posting on the blog can be done if you can use internet.
		</Content>
		<Subtitle>Loves to try new things</Subtitle>
		<Content>
			Someone who loves to try new things is most commonly referred to as adventurous. There are
			plenty of words out there that can apply, like “uninhibited,” “venturesome,” “neophile,” or
			“audacious.” “Adventurous” is the closest related word meaning loving to try new things,
			though.
		</Content>
	</div>
	<div slot="right">
		<Date {lastUpdate} />
		<Tag {tag} />
	</div>
</Posts>

<style lang="scss">
</style>
