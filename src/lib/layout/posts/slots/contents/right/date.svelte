<script lang="ts">
	export let lastUpdate: string;
</script>

<div class="container">
	<div class="message">Last Updated</div>
	<div class="date">{lastUpdate}</div>
</div>

<style lang="scss">
	.container {
		// Position
		margin-top: 3rem;
		padding: 2rem;
		background-clip: padding-box;

		border-left: 1rem solid var(--color-red-dark);
		background-color: var(--color-white-dark);

		.message {
			// Font
			font-size: 1.5rem;
			font-weight: 700;
			color: var(--color-dark);
		}

		.date {
			// Font
			margin-top: 1rem;
			font-size: 1rem;
			color: var(--color-dark);
		}
	}
</style>
