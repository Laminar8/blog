<script lang="ts">
</script>

<div class="container">
	<slot name="tag">Loading tag...</slot>
	<div class="title">
		<slot name="title">Loading title...</slot>
	</div>
</div>

<style lang="scss">
	.title {
		// Position
		margin-top: 3rem;

		// Font
		font-size: 5rem;
		text-align: center;
	}
</style>
