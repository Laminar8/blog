<script lang="ts">
	export let type: string;
	export let content: string;
</script>

<div class="content">
	{#if type == 'service'}
		<div class="standard service">
			{content}
		</div>
	{:else if type == 'serviceSearch'}
		<div class="standard serviceSearch">
			{content}
		</div>
	{:else if type == 'input'}
		<div class="standard input">
			{content}
		</div>
	{:else}
		<div class="standard button">
			{content}
		</div>
	{/if}
</div>

<style lang="scss">
	.content {
		display: inline;
		padding: 0 0.1rem;

		.standard {
			display: inline;
			padding: 0.25rem 1.5rem;
			border-radius: 0.2rem;
		}

		.service {
			color: #44b9d6;
			background-color: #2c3a4d;
			box-shadow: 0 0.05rem 0.1rem 0.05rem rgb(0 0 0 / 40%);
		}

		.serviceSearch {
			color: #ffffff;
			background-color: #16191f;
		}

		.input {
			color: #16191f;
			background-color: #ffffff;
			border: 0.1rem solid #aab7b8;
		}

		.button {
			color: #ffffff;
			background-color: #ec7211;
		}
	}
</style>
