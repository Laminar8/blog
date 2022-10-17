<script context="module" lang="ts">
	// Apps
	import { goto } from '$app/navigation';

	// Props/Contents/Fix
	import Navigation from '$lib/layout/public/props/contents/fix/Navigation.svelte';
</script>

<script lang="ts">
	// Init
	let height: number;
	let visible = 'hidden';

	// Assign
	$: width = height;

	const setVisibleNav = (event: any) => {
		if (event.target) {
			visible = visible != 'hidden' ? 'hidden' : 'visible';
		}
	};

	const goMain = (event: any) => goto('/');
</script>

<Navigation {visible} />
<div class="header">
	<div class="left" bind:offsetHeight={height}>
		<div
			class="dot"
			style="width: {width}px; background-color: #DF7861;"
			on:click={(event) => goMain(event)}
		/>
		<div class="dot" style="width: {width}px; background-color: #FFB562;" />
		<div
			class="dot"
			style="width: {width}px; background-color: #ADCF9F;"
			on:click={(event) => setVisibleNav(event)}
		/>
	</div>
	<div class="center">
		<!-- To be defined -->
	</div>
	<div class="right">
		<!-- To be defined -->
	</div>
</div>
<div class="content">
	<div class="left" />
	<div class="center"><slot name="center" /></div>
	<div class="right" />
</div>

<style lang="scss">
	@media screen and (min-width: 0px) {
		.header {
			display: flex;

			.left {
				display: block;
			}

			.center {
				display: none;
			}

			.right {
				display: none;
			}
		}
	}

	@media screen and (min-width: 950px) {
		.header {
			// Split sections
			display: grid;
			grid-template-columns: 1fr 70rem 1fr;

			.left {
				display: block;
			}

			.center {
				display: inline-block;
			}

			.right {
				display: block;
			}
		}
	}

	@media screen and (min-width: 1420px) {
		.header {
			// Split sections
			display: grid;
			grid-template-columns: 1fr 30rem 70rem 30rem 1fr;

			.left {
				display: block;
				grid-column-start: 2;
			}

			.center {
				display: inline-block;
				grid-column-start: 3;
			}

			.right {
				display: block;
				grid-column-start: 4;
			}
		}
	}

	@media screen and (min-width: 1820px) {
		.header {
			// Split sections
			display: grid;
			grid-template-columns: 1fr 35rem 105rem 35rem 1fr;
		}
	}

	@media screen and (min-width: 2320px) {
		.header {
			// Split sections
			display: grid;
			grid-template-columns: 1fr 45rem 140rem 45rem 1fr;
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

				// Mouse
				cursor: pointer;
			}
		}

		.center {
			align-self: center;

			// Word Break
			overflow: hidden;
			white-space: nowrap;
			word-break: break-all;

			margin: 0 2.5rem;
			padding: 0 2.5rem;
			box-sizing: border-box;
		}
	}

	@media screen and (min-width: 0px) {
		.content {
			display: flex;

			.left {
				display: none;
			}

			.center {
				display: block;
			}

			.right {
				display: none;
			}
		}
	}

	@media screen and (min-width: 950px) {
		.content {
			// Split sections
			display: grid;
			grid-template-columns: 1fr 70rem 1fr;

			.left {
				display: none;
			}

			.center {
				grid-column-start: 2;
			}

			.right {
				display: none;
			}
		}
	}

	@media screen and (min-width: 1420px) {
		.content {
			// Split sections
			display: grid;
			grid-template-columns: 1fr 30rem 70rem 30rem 1fr;

			.left {
				display: block;
				grid-column-start: 2;
			}

			.center {
				display: block;
				grid-column-start: 3;
			}

			.right {
				display: block;
				grid-column-start: 4;
			}
		}
	}

	@media screen and (min-width: 1820px) {
		.content {
			// Split sections
			display: grid;
			grid-template-columns: 1fr 35rem 105rem 35rem 1fr;
		}
	}

	@media screen and (min-width: 2320px) {
		.content {
			// Split sections
			display: grid;
			grid-template-columns: 1fr 45rem 140rem 45rem 1fr;
		}
	}

	.content {
		border-bottom-left-radius: 1rem;
		border-bottom-right-radius: 1rem;
		background-color: var(--color-white);
		padding: 2.5rem;
		max-height: 100%;

		// Scroll
		overflow-x: hidden;
		overflow-y: scroll;

		// Animation
		animation-duration: 0.5s;
		animation-name: slideDown;

		@keyframes slideDown {
			from {
				margin-bottom: 200%;
				margin-right: 200%;
			}

			to {
				margin-bottom: 0%;
				margin-right: 0%;
			}
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
