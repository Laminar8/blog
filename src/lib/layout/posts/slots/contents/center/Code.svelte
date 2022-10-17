<div class="content">
	<div class="file">
		<slot name="file" />
	</div>
	<div class="code">
		<slot name="code" />
	</div>
</div>

<style lang="scss">
	.content {
		// Position
		margin: 10rem 0;

		.file {
			height: 5rem;
			padding: 0 1rem;
			border-top-left-radius: 1rem;
			border-top-right-radius: 1rem;

			font-size: 1.5rem;
			letter-spacing: 0.25rem;
			color: var(--color-white);
			background-color: var(--color-dark);

			display: grid;
			align-items: center;
			justify-items: center;
		}
	}
</style>
