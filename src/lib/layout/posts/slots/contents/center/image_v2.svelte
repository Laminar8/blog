<div class="container">
	<div class="header">
		<div class="tab" />
	</div>
	<figure>
		<slot name="image" />
		<figcaption>
			<slot name="caption" />
		</figcaption>
	</figure>
	<div class="footer" />
</div>

<style lang="scss">
	.container {
		// Position
		margin: 10rem 0;
		text-align: center;

		figcaption {
			color: var(--color-dark-bright);
			font-size: 1.5rem;
		}

		.header,
		.footer {
			height: 0.25rem;
			background-color: var(--color-dark);
		}
	}
</style>
