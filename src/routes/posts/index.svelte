<script context="module" lang="ts">
	// Layout
	import Index from '$lib/layout/index/index.svelte';

	// Slots/Contents/Center
	import Posts from '$lib/layout/index/props/contents/center/posts.svelte';

	// Public/Props/Contents/Center
	import Footer from '$lib/layout/public/props/contents/center/footer.svelte';

	// Module
	import { index } from '$lib/contents/index';

	// Init
	export const prerender = true;
</script>

<svelte:head>
	<title>Posts</title>
	<meta name="description" content="Available Posts" />
</svelte:head>

<Index>
	<div slot="center">
		<Posts posts={index} />
		<Footer />
	</div>
</Index>
