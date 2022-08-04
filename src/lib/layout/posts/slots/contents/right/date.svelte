<script lang="ts">
	import Stare from '$lib/assets/character/stare.png';

	export let lastUpdate: string;
</script>

<div class="container">
	<div class="image">
		<img src={Stare} alt="Stare" />
	</div>
	<div class="message">Last Updated</div>
	<div class="date">{lastUpdate}</div>
</div>

<style lang="scss">
	.container {
		// Position
		margin-top: 3rem;
		padding: 2rem 1rem;

		// Background
		background-color: var(--color-purple-dark);
		border-radius: 1rem;

		display: grid;
		grid-template-rows: 1fr 1fr;
		grid-template-columns: 1fr 3fr;
		grid-template-areas:
			'img message'
			'img date';

		.image {
			grid-area: img;
			width: 4rem;

			img {
				margin-left: 2rem;
				width: 100%;
			}
		}

		.message {
			grid-area: message;

			// Font
			font-size: 1.5rem;
			color: var(--color-white);
		}

		.date {
			grid-area: date;

			// Font
			font-size: 1.5rem;
			color: var(--color-white);
		}
	}
</style>
