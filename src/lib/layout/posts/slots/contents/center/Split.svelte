<div class="split">
	<div class="line" />
	<slot />
	<div class="line" />
</div>

<style lang="scss">
	.split {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 10rem 0;
		padding: 10rem 0;
		height: 10rem;

		.line {
			// Position
			height: 0.1rem;
			width: 2.5rem;
			background-color: var(--color-dark);

			margin-top: 1rem;
		}
	}
</style>
