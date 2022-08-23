<script lang="ts">
	// Import module
	import { url } from '$lib/contents/url';
	import { compareDate } from '$lib/module/compareDate';
	import type { posts } from '$lib/interface/posts';

	// Get posts from index.ts
	export let posts: posts;

	// Get years
	const postAll = Object.keys(posts)
		.flatMap((year) =>
			Object.keys(posts[year]).flatMap((month) =>
				Object.keys(posts[year][month]).map((day) => {
					return {
						url: `${year.replace('_', '')}/${month.replace('_', '')}/${day.replace('_', '')}`,
						attribute: posts[year][month][day]
					};
				})
			)
		)
		.sort(compareDate);
</script>

<div class="posts">
	{#each postAll as post}
		<div class="post">
			<a href="{url}/posts/{post.url}">
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
							<div class="tag">
								{tag}
							</div>
						{/each}
					</div>
				</div>
			</a>
		</div>
	{/each}
</div>

<style lang="scss">
	.posts {
		display: grid;
		grid-template-rows: repeat(3, 1fr);
		grid-template-columns: repeat(3, 1fr);

		.post {
			margin: 2rem;
			padding-bottom: 2rem;
			border-radius: 1rem;
			background-color: var(--color-white-dark);

			.image {
				img {
					border-top-left-radius: 1rem;
					border-top-right-radius: 1rem;
					max-width: 100%;
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
						display: inline-block;
						max-width: 15rem;
						margin: 0.5rem;
						padding: 1rem;

						color: var(--color-white);
						background-color: var(--color-red);
						border-radius: 1rem;

						// Word Break
						overflow: hidden;
						white-space: nowrap;
						word-break: break-all;
						text-overflow: ellipsis;
					}
				}
			}
		}
	}
</style>
