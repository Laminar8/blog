<script lang="ts">
	// Import module
	import { onMount } from 'svelte';
	import { compareDate } from '$lib/module/compareDate';
	import type { index } from '$lib/interface/posts';

	// Get posts from index.ts
	export let posts: index;

	let tag: string;
	let tags: string[] = [];

	onMount(async () => {
		const response = await fetch('/api/tag/get', {
			method: 'GET',
			headers: {
				'content-type': 'application/json'
			}
		});

		tag = await response.json();
	});

	// Get years
	const postAll = Object.keys(posts)
		.flatMap((year) =>
			Object.keys(posts[year]).flatMap((month) =>
				Object.keys(posts[year][month]).map((day) => {
					tags = [...tags, ...posts[year][month][day].tag];

					return {
						url: `${year.replace('_', '')}/${month.replace('_', '')}/${day.replace('_', '')}`,
						attribute: posts[year][month][day]
					};
				})
			)
		)
		.sort(compareDate);

	const setTags = new Set(tags);
	const randomTags = [...setTags].sort(() => Math.random() - 0.5).slice(0, 6);

	const reTagging = async (event: any) => {
		if (event.target) {
			tag = tag != event.target.outerText ? event.target.outerText : '';

			await fetch('/api/tag/set', {
				method: 'POST',
				body: JSON.stringify({ tag: tag }),
				headers: {
					'content-type': 'application/json'
				}
			});
		}
	};
</script>

<div class="search">
	<div class="input">
		<input type="search" placeholder="Search posts with tags" bind:value={tag} />
	</div>
	<div class="text">Or select a tag from 6 popular tags 🔍</div>
	<div class="random">
		{#each randomTags as tag}
			<div class="tag" on:click={(event) => reTagging(event)}>
				{tag}
			</div>
		{/each}
	</div>
</div>

<div class="posts">
	{#each postAll as post}
		<!-- post.attribute.tag.includes(tag) -->
		{#if (tag && post.attribute.tag.filter((value) => value
					.toUpperCase()
					.includes(tag.toUpperCase())).length > 0) || !tag}
			<div class="post">
				<a href="/posts/{post.url}">
					<div class="image">
						<img src={post.attribute.image.src} alt={post.attribute.image.alt} />
					</div>
					<div class="attributes">
						<div class="date">
							{post.url}
						</div>
						<div class="title">
							{post.attribute.title}
						</div>
						<div class="tags">
							{#each post.attribute.tag as tag}
								<div class="tag" on:click={(event) => reTagging(event)}>
									{tag}
								</div>
							{/each}
						</div>
					</div>
				</a>
			</div>
		{/if}
	{/each}
</div>

<style lang="scss">
	.search {
		height: 20rem;

		.input {
			display: flex;
			justify-content: center;
			padding: 2rem;

			input {
				width: 50%;
				height: 4rem;

				text-align: center;
				font-family: 'Fredoka One';
				font-size: 1.5rem;
				font-weight: 700;
				padding: 0.5rem 5rem;

				// Background
				color: var(--color-dark);
				background-color: var(--color-white-dark);
				border: none;
				border-radius: 1rem;
			}
		}

		.text {
			display: flex;
			justify-content: center;

			margin-bottom: 1.5rem;
			font-size: 1.2rem;
		}

		.random {
			display: flex;
			justify-content: center;

			.tag {
				color: var(--color-white);
				background-color: var(--color-purple);

				cursor: pointer;
			}
		}
	}

	.posts {
		display: flex;
		flex-wrap: wrap;
	}

	@media screen and (min-width: 480px) {
		.post {
			width: 100%;
		}
	}

	@media screen and (min-width: 960px) {
		.post {
			width: 30rem;
		}
	}

	.post {
		min-height: 45rem;

		margin: 2.5rem;
		padding-bottom: 2rem;
		border-radius: 1rem;
		background-color: var(--color-white-dark);

		.image {
			img {
				object-fit: cover;
				border-top-left-radius: 1rem;
				border-top-right-radius: 1rem;
				height: 20rem;
				width: 100%;
			}
		}

		.attributes {
			padding: 2rem;

			.date {
				padding: 1rem;
			}

			.title {
				padding: 1rem;
				font-size: 2rem;
				font-weight: 700;
			}

			.tags {
				margin-top: 1rem;

				.tag {
					color: var(--color-white);
					background-color: var(--color-red);
				}
			}
		}
	}

	.tag {
		display: inline-block;
		max-width: 15rem;
		margin: 0.5rem;
		padding: 1rem;
		border-radius: 1rem;
		font-size: 1.25rem;

		// Word Break
		overflow: hidden;
		white-space: nowrap;
		word-break: break-all;
		text-overflow: ellipsis;
	}
</style>
