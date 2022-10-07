<script lang="ts">
	import { goto } from '$app/navigation';
	import { url } from '$lib/contents/url';

	export let tag: string[];

	const reTagging = async (event: any) => {
		await fetch('/api/tag/set', {
			method: 'POST',
			body: JSON.stringify({ tag: event.target.outerText }),
			headers: {
				'content-type': 'application/json'
			}
		});

		if (event.target) {
			await goto(`${url}/posts`);
		}
	};
</script>

<div class="container">
	<div class="message">Tags</div>
	<div class="tag">
		{#each tag as content}
			<div class="content" on:click={(event) => reTagging(event)}>
				{content}
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.container {
		// Position
		padding: 2rem;
		background-clip: padding-box;

		border-bottom: 0.1rem solid var(--color-white-dark);

		.message {
			// Font
			font-size: 1.5rem;
			font-weight: 700;
			color: var(--color-dark);

			padding-left: 1rem;
		}

		.tag {
			// Font
			margin-top: 1rem;
			font-size: 1rem;
			width: 100%;

			.content {
				display: inline-block;
				max-width: 15rem;
				margin: 0.5rem;
				padding: 1rem;

				color: var(--color-white);
				background-color: var(--color-blue);
				border-radius: 1rem;

				// Word Break
				overflow: hidden;
				white-space: nowrap;
				word-break: break-all;
				text-overflow: ellipsis;

				cursor: pointer;
			}
		}
	}
</style>
