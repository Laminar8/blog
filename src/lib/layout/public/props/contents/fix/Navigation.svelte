<script lang="ts">
	export let visible: string;
	const menus = [
		{
			name: 'Posts',
			bodies: [
				{
					href: '/posts',
					context: 'Posts'
				}
			]
		},
		{
			name: 'Labs',
			bodies: [
				{
					href: '/labs/design/posts/v1',
					context: 'Design'
				}
			]
		},
		{
			name: 'Settings',
			bodies: [
				{
					href: '/setting/general',
					context: 'General'
				}
			]
		}
	];
</script>

<div class="navigation {visible}">
	{#each menus as menu}
		<div class="menu">
			<div class="main">{menu.name}</div>
			{#each menu.bodies as body}
				<div class="sub">
					<div class="context">
						<a href={body.href}>{body.context}</a>
					</div>
				</div>
			{/each}
		</div>
	{/each}
</div>

<style lang="scss">
	.navigation {
		// Position
		position: fixed;
		top: 5rem;
		width: 100%;
		height: calc(100% - 5rem);
		z-index: 1;

		// Display
		padding: 5rem;
		display: flex;
		flex-wrap: wrap;

		// Background
		background-color: var(--color-white);

		// Scroll
		overflow-y: scroll;

		.menu {
			margin: 5rem;
			padding: 1rem;
			box-sizing: border-box;

			width: 20rem;
			height: 30rem;
			text-align: center;

			.main {
				padding: 0.25rem;
				font-size: 1.5rem;

				margin-bottom: 1rem;

				background-color: var(--color-dark);
				color: var(--color-white);
				border-radius: 0.5rem;
			}

			.sub {
				font-size: 1.5rem;

				.context {
					padding: 0.5rem 0.25rem;
				}
			}
		}
	}

	.navigation::-webkit-scrollbar {
		width: 2rem;
	}

	.navigation::-webkit-scrollbar-thumb {
		height: 20%;
		background-color: var(--color-dark);
		background-clip: padding-box;
		border: 0.5rem solid transparent;
		border-radius: 1rem;
	}

	.navigation::-webkit-scrollbar-track {
		margin: 1rem 0;
		background-color: var(--color-white);
	}

	.hidden {
		visibility: hidden;
		opacity: 0;
		transition: visibility 0s linear 300ms, opacity 300ms;
	}

	.visible {
		visibility: visible;
		opacity: 0.95;
		transition: visibility 0s linear 0s, opacity 300ms;
	}
</style>
