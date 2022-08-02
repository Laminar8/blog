<script lang="ts">
</script>

<div class="header">
	<div class="left">
		<div class="logo">Blog</div>
		<div class="nav">
			<div>Previous</div>
			<div>Home</div>
			<div>Next</div>
		</div>
	</div>
	<div class="center">
		<slot name="header">Loading header</slot>
	</div>
	<div class="right">To be defined</div>
</div>
<div class="content">
	<div class="left" />
	<div class="center"><slot name="content" /></div>
	<div class="right" />
</div>

<style lang="scss">
	.header {
		border-top-left-radius: 1rem;
		border-top-right-radius: 1rem;
		background-color: var(--color-dark);
		align-self: center;

		color: var(--color-white);
		font-size: 1.5rem;

		// Split sections
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		max-height: 100%;

		.left {
			padding-left: 1rem;
			box-sizing: border-box;

			// Split sections
			display: grid;
			grid-template-columns: 1fr 3fr;

			.logo {
				margin-left: 2rem;
			}

			.nav {
				div {
					display: inline;

					padding: 0 0.5rem;
					box-sizing: border-box;
				}

				div:nth-child(2) {
					padding: 0 1.5rem;
					border-left: 0.3rem solid var(--color-white);
					border-right: 0.3rem solid var(--color-white);
				}
			}
		}

		.center {
			padding: 0 1rem;
			box-sizing: border-box;

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
