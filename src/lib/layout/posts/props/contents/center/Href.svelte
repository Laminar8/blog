<script lang="ts">
	export let href: string;
	export let name: string;
</script>

<div class="href">
	<a {href}>{name}</a>
</div>

<style lang="scss">
	.href {
		display: inline;
		padding: 0 0.1rem;

		a {
			text-decoration-line: none;
			color: var(--color-red);
		}
	}
</style>
