<script lang="ts">
	export let service: string;
	export let content: string;
</script>

<div class="content">
	{#if service == 'slack'}
		<div class="standard {service}">
			<svg
				height="3rem"
				width="3rem"
				viewBox="0 0 70 65"
				xmlns="http://www.w3.org/2000/svg"
				shape-rendering="geometricPrecision"
			>
				<g fill="none">
					<path
						d="m21.902.148c-3.299 0-5.973 2.68-5.973 5.985a5.979 5.979 0 0 0 5.973 5.985h5.974v-5.985a5.98 5.98 0 0 0 -5.974-5.985m0 15.96h-15.929c-3.299 0-5.973 2.68-5.973 5.986 0 3.305 2.674 5.985 5.973 5.985h15.93c3.298 0 5.973-2.68 5.973-5.985 0-3.306-2.675-5.986-5.974-5.986"
						fill="#097eff"
					/>
					<path
						d="m59.734 22.094c0-3.306-2.675-5.986-5.974-5.986s-5.973 2.68-5.973 5.986v5.985h5.973a5.98 5.98 0 0 0 5.974-5.985m-15.929 0v-15.961a5.98 5.98 0 0 0 -5.974-5.985c-3.299 0-5.973 2.68-5.973 5.985v15.96c0 3.307 2.674 5.987 5.973 5.987a5.98 5.98 0 0 0 5.974-5.985"
						fill="#097eff"
					/>
					<path
						d="m37.831 60a5.98 5.98 0 0 0 5.974-5.985 5.98 5.98 0 0 0 -5.974-5.985h-5.973v5.985c0 3.305 2.674 5.985 5.973 5.985m0-15.96h15.93c3.298 0 5.973-2.68 5.973-5.986a5.98 5.98 0 0 0 -5.974-5.985h-15.929c-3.299 0-5.973 2.68-5.973 5.985a5.979 5.979 0 0 0 5.973 5.985"
						fill="#ecb12f"
					/>
					<path
						d="m0 38.054a5.979 5.979 0 0 0 5.973 5.985 5.98 5.98 0 0 0 5.974-5.985v-5.985h-5.974c-3.299 0-5.973 2.68-5.973 5.985m15.929 0v15.96c0 3.306 2.674 5.986 5.973 5.986a5.98 5.98 0 0 0 5.974-5.985v-15.961a5.979 5.979 0 0 0 -5.974-5.985c-3.299 0-5.973 2.68-5.973 5.985"
						fill="#ecb12f"
					/>
				</g>
			</svg>
			{content}
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
			color: #ffffff;
			background-color: #400d40;

			svg {
				align-self: flex-end;
				margin-right: 0.5rem;
			}
		}
	}
</style>
