<script context="module" lang="ts">
	// Layout
	import Posts from '$lib/layout/posts/posts.svelte';
	import Header from '$lib/layout/posts/header/header.svelte';
	import Title from '$lib/layout/posts/contents/title.svelte';
	import Subtitle from '$lib/layout/posts/contents/subtitle.svelte';
	import Content from '$lib/layout/posts/contents/content.svelte';
	import Image from '$lib/layout/posts/contents/image.svelte';
	// Module
	import { index } from '$lib/contents/index';
	// Init
	export const prerender = true;
	// Main
	const { title, lastUpdate, group, tag } = index._2022._07._14;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Posts>
	<div slot="header">
		<Header>{title}</Header>
	</div>
	<div slot="content">
		<Title>
			<div slot="tag">{group} > {tag}</div>
			<div slot="title">{title}</div>
		</Title>
		<Image>
			<img
				src="https://user-images.githubusercontent.com/52372569/182406328-5d654b45-fbe2-4203-8afb-d10a51a8705f.png"
				alt="Running"
				style="max-width: 100%;"
				slot="image"
			/>
			<div slot="caption">Running to my goals</div>
		</Image>
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
</Posts>

<style lang="scss">
</style>
