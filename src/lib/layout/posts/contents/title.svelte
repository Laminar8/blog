<script lang="ts">
</script>

<div class="container">
	<div class="tag">
		<slot name="tag">Loading tag...</slot>
	</div>
	<div class="title">
		<slot name="title">Loading title...</slot>
	</div>
</div>

<style lang="scss">
	.tag {
		// Shape
		background-color: var(--color-dark);
		border-radius: 1rem;
		color: var(--color-white);

		// Position
		margin: auto;
		padding: 1rem;
		width: fit-content;

		// Font
		font-size: 1.5rem;
	}

	.title {
		// Position
		margin-top: 3rem;

		// Font
		font-size: 5rem;
		text-align: center;
	}
</style>
