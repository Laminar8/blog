<div class="container">
	<figure>
		<slot name="image" />
		<figcaption>
			<slot name="caption" />
		</figcaption>
	</figure>
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
	}
</style>
