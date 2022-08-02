<script lang="ts">
	import '../app.scss';
	import Cursor from '$lib/cursor/cursor.svelte';
</script>

<main>
	<Cursor />
	<div class="onboard">
		<slot />
	</div>
</main>

<style lang="scss">
	main {
		/* 시스템 커서 안 보이게 숨기기 */
		cursor: none;

		height: 100%;
		width: 100%;

		// https://ccuram.tistory.com/27
		// https://developer.mozilla.org/ko/docs/Web/CSS/box-sizing
		padding: 5vh 2vw;
		box-sizing: border-box;
		background-color: var(--color-dark);
	}

	.onboard {
		height: 100%;
		width: 100%;

		box-shadow: 0 0 0 2rem var(--color-white-border) inset;
		border-radius: 3rem;

		padding: 2.1rem;
		box-sizing: border-box;

		// Split sections
		display: grid;
		grid-template-rows: 1fr 19fr;
	}
</style>
