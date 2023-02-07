<script lang="ts">
	export let service: string;
	export let type: string;
	export let content: string;
</script>

<div class="content">
	{#if service == 'slack'}
		<div class={service}>
			{#if type == 'textSelect'}
				<div class="standard {type}">
					{content}
					<svg xmlns="http://www.w3.org/2000/svg" width="2.4rem" height="2.4rem"
						><path
							d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"
						/></svg
					>
				</div>
			{:else}
				<div class="standard {type}">
					{content}
				</div>
			{/if}
		</div>
	{:else if service == 'zapier'}
		<div class={service}>
			<div class="standard {type}">
				{content}
			</div>
		</div>
	{:else if service == 'netlify'}
		<div class={service}>
			<div class="standard {type}">
				{content}
			</div>
		</div>
	{:else if service === 'jenkins'}
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

			.textSelect {
				background-color: #ffffff;
				border: 0.1rem solid #616061;

				svg {
					padding-top: 0.5rem;
					box-sizing: border-box;
					align-self: baseline;
					margin-left: 1.5rem;
				}
			}

			.buttonWhite {
				border-radius: 0.5rem;
				background-color: #ffffff;
				border: 0.1rem solid #616061;
			}

			.buttonPink {
				border-radius: 0.5rem;
				color: #ffffff;
				background-color: #e01e5a;
			}

			.buttonGreen {
				border-radius: 0.5rem;
				color: #ffffff;
				background-color: #007a5a;
			}

			.buttonBlue {
				border-radius: 0.5rem;
				color: #ffffff;
				background-color: #1264a3;
			}
		}

		.zapier {
			.buttonBlue {
				border-radius: 0.3rem;
				color: #fffdf9;
				background-color: #3d4592;
			}
		}

		.netlify {
			.buttonBlueBright {
				border-radius: 0.375rem;
				color: #054861;
				background-color: #5cebdf;
			}
		}

		.jenkins {
			.buttonGray {
				border-radius: 0.375rem;
				color: #14141f;
				background-color: #9ba7af;
			}
		}
	}
</style>
