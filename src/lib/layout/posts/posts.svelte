<script lang="ts">
	const dots = ['#DF7861', '#FFB562', '#ADCF9F'];

	// Init
	let height: number;

	// Assign
	$: width = height;
</script>

<div class="header">
	<div class="left" bind:offsetHeight={height}>
		{#each dots as dot}
			<div class="dot" style="width: {width}px; background-color: {dot};" />
		{/each}
	</div>
	<div class="center">
		<slot name="header">Loading header</slot>
	</div>
	<div class="right">
		<!-- To be defined -->
	</div>
</div>
<div class="content">
	<div class="left" />
	<div class="center"><slot name="content" /></div>
	<div class="right" />
</div>

<style lang="scss">
	.header {
		background-color: var(--color-dark);

		color: var(--color-white);
		font-size: 1.5rem;

		// Split sections
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		height: 100%;

		.left {
			height: 50%;
			padding-left: 2rem;
			box-sizing: border-box;
			align-self: center;

			.dot {
				height: 100%;
				display: inline-flex;
				margin-left: 1.7%;
				border-radius: 1rem;
			}
		}

		.center {
			align-self: center;

			// Word Break
			display: inline-block;
			overflow: hidden;
			white-space: nowrap;
			word-break: break-all;
		}
	}

	.content {
		border-bottom-left-radius: 1rem;
		border-bottom-right-radius: 1rem;
		background-color: var(--color-white);
		padding: 2.5rem;

		// Scroll
		overflow-y: scroll;

		// Split sections
		display: grid;
		grid-template-columns: 1fr 3fr 1fr;
		max-height: 100%;

		.center {
			padding: 2.5rem;
		}
	}

	// Scroll bar
	.content::-webkit-scrollbar {
		width: 2rem;
	}

	.content::-webkit-scrollbar-thumb {
		height: 20%;
		background-color: var(--color-dark);
		background-clip: padding-box;
		border: 0.5rem solid transparent;
		border-radius: 1rem;
	}

	.content::-webkit-scrollbar-track {
		margin: 1rem 0;
		background-color: var(--color-white);
	}
</style>
