<script lang="ts">
</script>

<div class="header">
	<slot>Loading header...</slot>
</div>

<style lang="scss">
	.header {
		text-align: center;

		// Word Break
		overflow: hidden;
		white-space: nowrap;
		word-break: break-all;
		text-overflow: ellipsis;
	}
</style>
