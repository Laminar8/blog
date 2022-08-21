<script lang="ts">
	export let status: string[];
</script>

<div class="container">
	<div class="message">Status</div>
	<div class="status">
		{#each status as content}
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

		border-left: 1rem solid var(--color-green-dark);
		background-color: var(--color-white-dark);

		.message {
			// Font
			font-size: 1.5rem;
			font-weight: 700;
			color: var(--color-dark);
		}

		.status {
			// Font
			margin-top: 1rem;
			font-size: 1rem;
			width: 100%;

			.content {
				display: inline-block;
				max-width: 15rem;
				margin: 0.5rem;
				padding: 1rem;

				background-color: var(--color-green);
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
