<script lang="ts">
	export let tag: string[];
</script>

<div class="container">
	<div class="message">Tags</div>
	<div class="tag">
		{#each tag as content}
			<div class="content">
				{content}
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.container {
		// Position
		margin-top: 3rem;
		padding: 2rem;
		background-clip: padding-box;

		border-left: 1rem solid var(--color-blue-dark);
		background-color: var(--color-white-dark);

		.message {
			// Font
			font-size: 1.5rem;
			font-weight: 700;
			color: var(--color-dark);
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
			}
		}
	}
</style>
