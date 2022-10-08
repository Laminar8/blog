<script lang="ts">
	export let lastUpdate: string;
	export let publish: string;
	export let status: string[];
</script>

{#if status.includes('Published')}
	<div class="container">
		<div class="message">Publish Date</div>
		<div class="date">
			<div class="content">{publish}</div>
		</div>
	</div>
{/if}
<div class="container">
	<div class="message">Last Updated</div>
	<div class="date">
		<div class="content">{lastUpdate}</div>
	</div>
</div>

<style lang="scss">
	.container {
		padding: 2rem;
		background-clip: padding-box;

		.message {
			// Font
			font-size: 1.5rem;
			font-weight: 700;
			color: var(--color-dark);

			padding-left: 1rem;
		}

		.date {
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
				border-radius: 1rem;

				// Word Break
				overflow: hidden;
				white-space: nowrap;
				word-break: break-all;
				text-overflow: ellipsis;
			}
		}
	}

	.container:first-child {
		margin-top: 3rem;
		border-top: 0.1rem solid var(--color-white-dark);
		border-bottom: 0.1rem solid var(--color-white-dark);

		.content {
			background-color: var(--color-red-dark);
		}
	}

	.container:nth-child(2) {
		border-bottom: 0.1rem solid var(--color-white-dark);

		.content {
			background-color: var(--color-red);
		}
	}
</style>
