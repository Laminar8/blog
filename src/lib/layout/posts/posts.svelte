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
		<div class="title"><slot name="header" /></div>
	</div>
	<div class="right">
		<!-- To be defined -->
	</div>
</div>
<div class="content">
	<div class="left" />
	<div class="center"><slot name="center" /></div>
	<div class="right"><slot name="right" /></div>
</div>

<style lang="scss">
	@media screen and (min-width: 480px) {
		.header {
			// Split sections
			display: grid;
			grid-template-columns: 1fr 3fr 1fr;
		}
	}

	@media screen and (min-width: 800px) {
		.header {
			// Split sections
			display: grid;
			grid-template-columns: 1fr 60rem 1fr;
		}
	}

	@media screen and (min-width: 1200px) {
		.header {
			// Split sections
			display: grid;
			grid-template-columns: 1fr 100rem 1fr;
		}
	}

	.header {
		background-color: var(--color-dark);
		color: var(--color-white);
		height: 100%;

		.left {
			height: 35%;
			padding-left: 2rem;
			box-sizing: border-box;
			align-self: center;

			.dot {
				height: 100%;
				display: inline-flex;
				margin-left: 1rem;
				border-radius: 1.5rem;
			}
		}

		.center {
			align-self: center;

			// Word Break
			display: inline-block;
			overflow: hidden;
			white-space: nowrap;
			word-break: break-all;

			margin: 0 2.5rem;
			padding: 0 2.5rem;
			box-sizing: border-box;

			.title {
				font-size: 1.5rem;
			}
		}
	}

	@media screen and (min-width: 480px) {
		.content {
			// Split sections
			display: grid;
			grid-template-columns: 1fr 3fr 1fr;
		}
	}

	@media screen and (min-width: 800px) {
		.content {
			// Split sections
			display: grid;
			grid-template-columns: 1fr 60rem 1fr;
		}
	}

	@media screen and (min-width: 1200px) {
		.content {
			// Split sections
			display: grid;
			grid-template-columns: 1fr 100rem 1fr;
		}
	}

	.content {
		border-bottom-left-radius: 1rem;
		border-bottom-right-radius: 1rem;
		background-color: var(--color-white);
		padding: 2.5rem;
		max-height: 100%;

		// Scroll
		overflow-y: scroll;

		.center {
			padding: 2.5rem;
		}

		.right {
			margin-left: 2.5rem;
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
