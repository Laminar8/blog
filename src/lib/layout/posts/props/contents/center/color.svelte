<script lang="ts">
	export let color: string;
	export let content: string;
	export let number: string;
</script>

<!-- Blue: Annotation -->
<!-- Purple: Code -->
<!-- Black: File Name -->
<div class="content">
	{#if number != '-1'}
		<span class={color}>
			{content}
		</span>
		<span class="{color} number">
			{number}
		</span>
	{:else if color == 'black'}
		<span class="{color} background">
			{content}
		</span>
	{:else if color == 'purple'}
		<span class="{color} background">
			{content}
		</span>
	{:else}
		<span class="white">
			{content}
		</span>
	{/if}
</div>

<style lang="scss">
	.content {
		display: inline-flex;
		align-items: baseline;
		padding: 0.2rem 0.3rem;
		box-sizing: border-box;

		.black {
			font-size: 1.5rem;
			letter-spacing: 0.25rem;
			color: var(--color-white);
			background-color: var(--color-dark);
			border-radius: 1rem;
		}

		.blue {
			color: var(--color-blue);
		}

		.purple {
			color: var(--color-purple);
			background-color: var(--color-white-dark);
			border: 0.1rem solid var(--color-dark-bright);
		}

		.white {
			color: var(--color-white-dark);
		}

		.number {
			display: inline-flex;
			align-self: flex-start;
			font-size: 1rem;

			// Lift text up
			position: relative;
			top: -0.4rem;
		}

		.background {
			display: inline-flex;
			padding: 0.25rem 1.5rem;
			box-sizing: border-box;
		}
	}
</style>
