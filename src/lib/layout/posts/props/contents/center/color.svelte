<script lang="ts">
	export let color: string;
	export let content: string;
	export let number: string;
</script>

<!-- Blue: Annotation -->
<div class="content">
	{#if number != '-1'}
		<span class="blue">
			{content}
		</span>
		<span class="blue number">
			{number}
		</span>
	{:else if color == 'red'}
		<span class="red">
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

		.white {
			color: var(--color-white-dark);
		}

		.number {
			vertical-align: super;
			font-size: 1rem;
		}
	}
</style>
