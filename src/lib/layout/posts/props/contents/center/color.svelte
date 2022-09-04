<script lang="ts">
	export let color: string;
	export let content: string;
	export let number: string;
</script>

<!-- Blue: Annotation -->
<!-- Purple: Code -->
<!-- Red: File Name / Instructions -->
<div class="content">
	{#if number != '-1'}
		<span class={color}>
			{content}
		</span>
		<span class="{color} number">
			{number}
		</span>
	{:else if color == 'red'}
		<span class={color}>
			{content}
		</span>
	{:else if color == 'purple'}
		<span class={color}>
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
		display: inline;
		padding: 0 0.1rem;

		.red {
			color: var(--color-red-dark);
		}

		.blue {
			color: var(--color-blue);
		}

		.purple {
			padding: 0 1rem;
			color: var(--color-purple);
			background-color: var(--color-white-dark);
		}

		.white {
			color: var(--color-white-dark);
		}

		.number {
			vertical-align: super;
			font-size: 1rem;
		}
	}
</style>
