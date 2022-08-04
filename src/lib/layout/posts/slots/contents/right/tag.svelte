<script lang="ts">
	export let tag: string;
</script>

<div class="tag">
	{tag}
</div>

<style lang="scss">
	.tag {
		// Shape
		background-color: var(--color-purple);
		border-radius: 1rem;
		color: var(--color-white);

		// Position
		margin: auto;
		padding: 1rem 1.5rem;
		width: max-content;

		// Font
		font-size: 1.5rem;
	}
</style>
