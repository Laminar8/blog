<div class="container">
	<figure>
		<slot name="image">Loading image...</slot>
		<figcaption>
			<slot name="caption">Loading caption...</slot>
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
