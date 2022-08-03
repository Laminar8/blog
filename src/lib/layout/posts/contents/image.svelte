<script lang="ts">
</script>

<div class="container">
	<figure>
		<slot name="image">Loading image...</slot>
		<figcaption>
			<div class="box">
				<div class="header">Details</div>
				<div class="source" />
			</div>
			<slot name="caption">Loading caption...</slot>
		</figcaption>
	</figure>
</div>

<style lang="scss">
	.container {
		// Position
		margin-top: 10rem;
		text-align: center;

		figcaption {
			// Default
			font-size: 1.5rem;
			width: 100%;

			margin-top: 2.5rem;
			padding: 1.5rem 0;

			// Background
			background: var(--color-4);
		}
	}
</style>
