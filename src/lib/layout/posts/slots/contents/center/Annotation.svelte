<div class="content">
	<div class="number">
		<slot name="number" />
	</div>
	<div class="annotation">
		<slot name="annotation" />
	</div>
</div>

<style lang="scss">
	.content {
		// Position
		margin-top: 2.5rem;

		// Font
		font-size: 1.5rem;
		line-height: 3rem;

		.number {
			font-weight: 700;
			color: var(--color-blue);
		}
	}
</style>
