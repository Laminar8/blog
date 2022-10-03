<script lang="ts">
	import '../app.scss';
</script>

<main>
	<slot />
</main>

<style lang="scss">
	main {
		height: 100%;
		width: 100%;

		// Split sections
		display: grid;
		grid-template-rows: 5rem 25fr;
	}
</style>
