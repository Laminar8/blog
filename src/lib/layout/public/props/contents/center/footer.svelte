<script lang="ts">
	// Import module
	import { date } from '$lib/contents/date';
</script>

<div class="footer">
	© Copyright {date}
	<span class="color">Laminar</span>
</div>

<style lang="scss">
	.footer {
		// Position
		margin-top: 10rem;

		// Font
		font-size: 1.5rem;
		font-weight: 700;
		text-align: center;

		.color {
			padding: 0.5rem;
			color: var(--color-red);
		}
	}
</style>
