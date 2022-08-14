<script lang="ts">
	import Stare from '$lib/assets/character/stare.png';
	export let color: string;
	export let name: string;
	export let content: string;
</script>

<div class="container" style="border-left: 1rem solid {color};">
	<div class="logo">
		<img src={Stare} alt="Stare" />
	</div>
	<div class="message">
		<div class="name">{name}</div>
		<div class="content">{content}</div>
	</div>
</div>

<style lang="scss">
	.container {
		// Default
		width: 100%;
		padding: 1rem 3rem;
		margin-top: 10rem;
		box-sizing: border-box;

		// Split sections
		display: grid;
		grid-template-columns: 1fr 9fr;

		.logo {
			img {
				width: 100%;
			}
		}

		.message {
			margin-left: 4rem;

			.name {
				font-size: 3rem;
				font-weight: 700;
				padding-bottom: 1rem;
			}

			.content {
				font-size: 1.5rem;
			}
		}
	}
</style>
