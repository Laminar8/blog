<script lang="ts">
	export let title: string;
</script>

<div class="header">
	{title}
</div>

<style lang="scss">
	.header {
		text-align: center;
		font-weight: 700;
		padding: 0.5rem 5rem;

		// Word Break
		overflow: hidden;
		white-space: nowrap;
		word-break: break-all;
		text-overflow: ellipsis;

		// Background
		color: var(--color-dark);
		background-color: var(--color-white-dark);

		border-radius: 0.5rem;
	}
</style>
