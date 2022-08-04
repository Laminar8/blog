<script context="module" lang="ts">
	// Layout
	import Posts from '$lib/layout/posts/posts.svelte';

	// Props/Header
	import Header from '$lib/layout/posts/props/header/header.svelte';

	// Props/Contents/Center
	import Title from '$lib/layout/posts/props/contents/center/title.svelte';
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
	const { title, lastUpdate, group, tag } = index._2022._07._14;
	const { color, name, content } = information;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Posts>
	<div slot="header">
		<Header {title} />
	</div>
	<div slot="center">
		<Title {title} />
		<Image>
			<img
				src="https://user-images.githubusercontent.com/52372569/182406328-5d654b45-fbe2-4203-8afb-d10a51a8705f.png"
				alt="Running"
				style="max-width: 100%;"
				slot="image"
			/>
			<div slot="caption">Running to my goals</div>
		</Image>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Subtitle>Loves to try new things</Subtitle>
		<Content>
			Someone who loves to try new things is most commonly referred to as adventurous. There are
			plenty of words out there that can apply, like “uninhibited,” “venturesome,” “neophile,” or
			“audacious.” “Adventurous” is the closest related word meaning loving to try new things,
			though.
		</Content>
		<Subtitle>Loves to try new things</Subtitle>
		<Content>
			Someone who loves to try new things is most commonly referred to as adventurous. There are
			plenty of words out there that can apply, like “uninhibited,” “venturesome,” “neophile,” or
			“audacious.” “Adventurous” is the closest related word meaning loving to try new things,
			though.
		</Content>
		<Subtitle>Loves to try new things</Subtitle>
		<Content>
			Someone who loves to try new things is most commonly referred to as adventurous. There are
			plenty of words out there that can apply, like “uninhibited,” “venturesome,” “neophile,” or
			“audacious.” “Adventurous” is the closest related word meaning loving to try new things,
			though.
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
		<!-- <Tag tag={group} /> -->
		<!-- <Tag {tag} /> -->
	</div>
</Posts>

<style lang="scss">
</style>
