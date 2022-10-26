<script context="module" lang="ts">
	// Layout
	import Posts from '$lib/layout/posts/Posts.svelte';

	// Props/Header
	import Header from '$lib/layout/posts/props/header/Header.svelte';

	// Slots/Contents/Center
	import Subtitle from '$lib/layout/posts/slots/contents/center/Subtitle.svelte';
	import Content from '$lib/layout/posts/slots/contents/center/Content.svelte';

	// Slots/Contents/Right
	import Date from '$lib/layout/posts/slots/contents/right/Date.svelte';
	import Status from '$lib/layout/posts/slots/contents/right/Status.svelte';

	// Public/Props/Contents/Center
	import Footer from '$lib/layout/public/props/contents/center/Footer.svelte';

	// Import types
	import type { post } from '$lib/interface/posts';
</script>

<script lang="ts">
	// Import module
	import { onMount } from 'svelte';

	// Get data from page.server.ts
	export let data: post;

	// Main
	const { publish, lastUpdate, status } = data;

	let tag: string;
	let time = 3;
	let tagStatus = 'none';

	onMount(async () => {
		const response = await fetch('/api/tag/get', {
			method: 'GET',
			headers: {
				'content-type': 'application/json'
			}
		});

		tag = await response.json();
	});

	const sleep = (ms: number) => {
		return new Promise((resolve) => setTimeout(resolve, ms));
	};
	const wrapSlept = async (ms: number) => {
		await sleep(ms);
	};

	const reTagging = async (event: any) => {
		if (event.target.outerText == 'Save') {
			await fetch('/api/tag/set', {
				method: 'POST',
				body: JSON.stringify({ tag: tag }),
				headers: {
					'content-type': 'application/json'
				}
			});
		} else {
			await fetch('/api/tag/set', {
				method: 'POST',
				body: JSON.stringify({ tag: '' }),
				headers: {
					'content-type': 'application/json'
				}
			});

			tag = '';
		}

		tagStatus = 'block';

		while (time != 0) {
			await wrapSlept(1000);
			time -= 1;
		}

		tagStatus = 'none';
		time = 3;
	};
</script>

<svelte:head>
	<title>General</title>
	<meta name="description" content="Settings" />
</svelte:head>

<Posts>
	<div slot="header">
		<Header title="General" />
	</div>
	<div slot="center">
		<!-- Chapter 1 -->
		<Subtitle>Saved Information</Subtitle>
		<Content>Tag</Content>
		<Content>You could search specific posts which includes the tag.</Content>
		<Content>
			<input placeholder="Tag" bind:value={tag} />
			<div class="button orange" on:click={(event) => reTagging(event)}>Save</div>
			<div class="button blue" on:click={(event) => reTagging(event)}>Reset</div>
			<div class="message" style="display:{tagStatus};">
				Your tag is saved successfully. This message would display for {time}
				{time == 1 ? 'second' : 'seconds'}.
			</div>
		</Content>

		<!-- Footer -->
		<Footer />
	</div>
	<div slot="right">
		<Date {lastUpdate} {publish} {status} />
		<Status {status} />
	</div>
</Posts>

<style lang="scss">
	input {
		text-align: center;
		font-weight: 700;
		font-family: 'Fredoka One', 'Fira Sans', sans-serif;
		font-size: 2rem;
		padding: 0.5rem 5rem;
		box-sizing: border-box;

		// Word Break
		overflow: hidden;
		white-space: nowrap;
		word-break: break-all;
		text-overflow: ellipsis;

		// Background
		color: var(--color-dark);
		background-color: var(--color-white-dark);

		border-radius: 0.5rem;
		border: none;
		line-height: 3rem;
	}

	.button {
		display: inline-block;
		padding: 0.5rem 1.5rem;
		border-radius: 0.5rem;
		box-sizing: border-box;

		font-size: 2rem;

		cursor: pointer;
	}

	.orange {
		color: #ffffff;
		background-color: #ec7211;
	}

	.blue {
		color: #ffffff;
		background-color: #1264a3;
	}

	.message {
		font-size: 1.25rem;
	}
</style>
