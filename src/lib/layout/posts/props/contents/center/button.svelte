<script lang="ts">
	export let service: string;
	export let type: string;
	export let content: string;
</script>

<div class="content">
	{#if service == 'slack'}
		<div class={service}>
			<div class="standard {type}">
				{content}
			</div>
		</div>
	{:else}
		<div />
	{/if}
</div>

<style lang="scss">
	.content {
		display: inline-flex;
		align-items: baseline;
		padding: 0.2rem 0.3rem;
		box-sizing: border-box;

		.standard {
			display: inline-flex;
			align-items: baseline;
			padding: 0.25rem 1.5rem;
			border-radius: 0.2rem;
			box-sizing: border-box;
		}

		.slack {
			.menu {
				color: #ffffff;
				background-color: #400d40;
			}
			.text {
				color: #616061;
				background-color: #ffffff;
				border: 0.1rem solid #616061;
			}
			.buttonWhite {
				border-radius: 0.5rem;
				background-color: #ffffff;
				border: 0.1rem solid #616061;
			}
		}
	}
</style>
