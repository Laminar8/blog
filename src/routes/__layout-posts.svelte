<script lang="ts">
	import logo from '$lib/assets/logo.png';
	// import '../app.scss';
</script>

<main>
	<div class="onboard">
		<div class="header">
			<div class="left">
				<div class="logo"><img alt="logo" src={logo} />Blog</div>
				<div class="nav">Home</div>
			</div>
			<div class="center">haha</div>
			<div class="right">haha</div>
		</div>
		<div class="content">haha</div>
		<!-- <div class="left">
			<div class="menu disable" />
			<div class="menu">
				<div class="button disable" />
				<div class="button"><span>Prev</span></div>
				<div class="button"><span>Home</span></div>
				<div class="button"><span>Next</span></div>
				<div class="button disable" />
			</div>
			<div class="menu disable" /> -->
		<!-- </div> -->
		<!-- <section>
			<div class="left">
				<div class="menu disable" />
				<div class="menu">
					<div class="button disable" />
					<div class="button"><span>Prev</span></div>
					<div class="button"><span>Home</span></div>
					<div class="button"><span>Next</span></div>
					<div class="button disable" />
				</div>
				<div class="menu disable" />
			</div>
		</section>
		<section>
			<div class="content"><slot /></div>
		</section>
		<section>
			<div class="header">print</div>
		</section> -->
	</div>
</main>

<style lang="scss">
	main {
		height: 100%;
		width: 100%;

		// https://ccuram.tistory.com/27
		// https://developer.mozilla.org/ko/docs/Web/CSS/box-sizing
		padding: 5vh 2vw;
		box-sizing: border-box;
		background-color: var(--color-dark);

		.onboard {
			height: 100%;
			width: 100%;

			box-shadow: 0 0 0 2rem var(--color-white-border) inset;
			border-radius: 3rem;

			padding: 2.1rem;
			box-sizing: border-box;

			// Split sections
			display: grid;
			grid-template-rows: 1fr 19fr;
		}
	}

	.header {
		border-top-left-radius: 1rem;
		border-top-right-radius: 1rem;
		background-color: var(--color-dark);
		align-self: center;

		color: var(--color-white);
		font-family: var(--font-header);
		font-size: 2rem;

		// Split sections
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		max-height: 100%;

		.left {
			padding-left: 1rem;
			box-sizing: border-box;

			// Split sections
			display: grid;
			grid-template-columns: 1fr 3fr;

			img {
				padding-top: 0.3rem;
				box-sizing: border-box;
				width: 2rem;
			}
		}
	}

	.content {
		border-bottom-left-radius: 1rem;
		border-bottom-right-radius: 1rem;
		background-color: var(--color-white);
	}

	// .left {
	// 	height: 100vh;
	// 	width: 10%;
	// 	position: fixed;

	// 	display: grid;
	// 	grid-template-rows: repeat(3, 1fr);

	// 	.menu:not(.disable) {
	// 		display: grid;
	// 		grid-template-rows: repeat(5, 1fr);

	// 		background: rgba(255, 255, 255, 0.25);
	// 		backdrop-filter: blur(0.4rem);
	// 		border-radius: 1rem;

	// 		height: 75%;
	// 		width: 50%;
	// 		justify-self: center;

	// 		.button:not(.disable) {
	// 			align-self: center;
	// 			justify-self: center;
	// 			padding: 1.5rem 0;
	// 			box-sizing: border-box;

	// 			span {
	// 				color: var(--color-white);
	// 				font-size: 2rem;
	// 			}
	// 		}

	// 		.button:nth-child(3) {
	// 			border-top: 1px solid var(--color-white);
	// 			border-bottom: 1px solid var(--color-white);
	// 		}
	// 	}
	// }

	// .content {
	// 	min-height: 100vh;
	// 	width: 100%;

	// 	background: rgba(255, 255, 255, 0.25);
	// 	backdrop-filter: blur(0.4rem);
	// }
</style>
