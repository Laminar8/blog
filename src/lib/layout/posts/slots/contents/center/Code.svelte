<script lang="ts">
	import Copy from '$lib/assets/icons/copy.png';

	let code: any;

	const findCodeSlot = (node: any) => {
		code = node.lastChild.firstChild.firstChild.textContent;
	};

	const copyToClipboard = async (event: MouseEvent) => {
		await window.navigator.clipboard.writeText(code);
	};
</script>

<div class="content">
	<div class="file">
		<slot name="file" />
	</div>
	<div class="code" use:findCodeSlot>
		<div class="img">
			<input
				class="image"
				type="image"
				src={Copy}
				alt="Copy"
				on:click={(event) => copyToClipboard(event)}
			/>
		</div>
		<slot name="code" />
	</div>
</div>

<style lang="scss">
	.content {
		// Position
		margin: 10rem 0;

		.file {
			height: 5rem;
			padding: 0 1rem;
			border-top-left-radius: 1rem;
			border-top-right-radius: 1rem;

			font-size: 1.5rem;
			letter-spacing: 0.25rem;
			color: var(--color-white);
			background-color: var(--color-dark);

			display: grid;
			align-items: center;
			justify-items: center;
		}

		.code {
			// Position
			position: relative;

			.img {
				// Layout
				height: 1.5rem;
				width: 1.5rem;

				// Position
				position: absolute;
				top: 1.5rem;
				right: 1.5rem;

				.image {
					// Layout
					height: 1.5rem;
				}
			}
		}
	}
</style>
