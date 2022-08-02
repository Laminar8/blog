<script context="module" lang="ts">
	// Layout
	import Posts from '$lib/layout/posts/posts.svelte';
	import Header from '$lib/layout/posts/header/header.svelte';
	import Title from '$lib/layout/posts/contents/title.svelte';
	import Subtitle from '$lib/layout/posts/contents/subtitle.svelte';
	import Content from '$lib/layout/posts/contents/content.svelte';
	// Module
	import { capitalize } from '$lib/module/capitalize';
	// Init
	export const prerender = true;
	// Main
	const title = capitalize('5 Reasons to start my blog');
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
			<div slot="tag">Language/Svelte</div>
			<div slot="title">{title}</div>
		</Title>
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
