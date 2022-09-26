<script lang="ts">
	import '../app.scss';
</script>

<main>
	<slot />
</main>

<style lang="scss">
	main {
		width: 100%;
		height: 100%;
		// overflow-y: scroll;

		// Split sections
		display: grid;
		grid-template-rows: 5rem 25fr;
	}
</style>
