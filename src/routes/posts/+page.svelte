<script context="module" lang="ts">
	// Layout
	import Index from '$lib/layout/index/Index.svelte';

	// Slots/Contents/Center
	import Posts from '$lib/layout/index/props/contents/center/Posts.svelte';

	// Public/Props/Contents/Center
	import Footer from '$lib/layout/public/props/contents/center/footer.svelte';

	// Module
	import { index } from '$lib/contents/index';
</script>

<svelte:head>
	<title>Posts</title>
</svelte:head>

<Index>
	<div slot="center">
		<Posts posts={index} />
		<Footer />
	</div>
</Index>
