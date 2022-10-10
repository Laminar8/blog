<script lang="ts">
	export let type: string;
	export let content: string;
</script>

<div class="content">
	{#if type == 'serviceSearch'}
		<div class="standard serviceSearch">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				version="1.0"
				width="1.5rem"
				height="1.5rem"
				viewBox="0 0 1244 1280"
				preserveAspectRatio="xMidYMid meet"
			>
				<metadata> Created by potrace 1.15, written by Peter Selinger 2001-2017 </metadata>
				<g transform="translate(0,1280) scale(0.1,-0.1)" fill="#ffffff" stroke="none">
					<path
						d="M4025 12789 c-1029 -79 -1969 -501 -2704 -1214 -985 -955 -1456 -2292 -1285 -3650 156 -1244 849 -2360 1899 -3059 193 -129 272 -175 470 -274 452 -227 906 -362 1445 -429 207 -25 763 -25 970 0 404 50 752 138 1115 281 251 98 600 283 819 433 l80 54 1075 -1073 c3835 -3827 3770 -3762 3828 -3795 189 -105 411 -75 563 77 148 148 180 359 84 553 -21 43 -462 488 -2432 2459 -2212 2213 -2404 2408 -2392 2425 8 10 40 47 70 83 714 836 1088 1927 1031 3011 -32 610 -165 1136 -420 1664 -169 349 -340 615 -592 920 -106 128 -395 417 -524 524 -687 569 -1463 900 -2336 996 -174 19 -598 27 -764 14z m780 -949 c777 -118 1453 -463 1982 -1014 516 -536 829 -1194 930 -1951 24 -186 24 -618 0 -810 -54 -416 -158 -758 -342 -1125 -297 -593 -779 -1101 -1360 -1432 -964 -549 -2153 -590 -3152 -108 -975 470 -1667 1364 -1873 2420 -37 192 -51 323 -57 555 -6 258 4 423 42 651 161 971 742 1831 1588 2348 453 278 935 434 1512 490 22 2 164 3 315 1 217 -3 304 -8 415 -25z"
					/>
				</g>
			</svg>
			{content}
		</div>
	{:else if type == 'inputSelect'}
		<!-- Right side -->
		<div class="standard inputSelect">
			{content}
			<svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 24 24">
				<path
					d="M16.924 9.617A1 1 0 0 0 16 9H8a1 1 0 0 0-.707 1.707l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 .217-1.09z"
					data-name="Down"
				/>
			</svg>
		</div>
	{:else if type == 'inputSelectReverse'}
		<!-- Left side -->
		<div class="standard inputSelectReverse">
			<svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 24 24">
				<path
					d="M16.924 9.617A1 1 0 0 0 16 9H8a1 1 0 0 0-.707 1.707l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 .217-1.09z"
					data-name="Down"
				/>
			</svg>
			{content}
		</div>
	{:else if type == 'select'}
		<div class="standard select">
			<svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem">
				<circle
					cx="1.5rem"
					cy="1.5rem"
					r="0.5rem"
					stroke="#0073bb"
					stroke-width="5"
					fill="#ffffff"
				/>
			</svg>
			{content}
		</div>
	{:else if type == 'selectCheck'}
		<div class="standard selectCheck">
			<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 26 25"
				><path
					fill="#16b"
					d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
				/></svg
			>
			{content}
		</div>
	{:else}
		<div class="standard {type}">
			{content}
		</div>
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

		.service {
			color: #44b9d6;
			background-color: #2c3a4d;
			box-shadow: 0 0.05rem 0.1rem 0.05rem rgb(0 0 0 / 40%);
		}

		.serviceSearch {
			color: #ffffff;
			background-color: #16191f;

			svg {
				align-self: baseline;
				margin-right: 1rem;
			}
		}

		.input {
			color: #16191f;
			background-color: #ffffff;
			border: 0.1rem solid #aab7b8;
		}

		.inputSelect {
			color: #16191f;
			background-color: #ffffff;
			border: 0.1rem solid #aab7b8;

			svg {
				margin-left: 1rem;
			}
		}

		.inputSelectReverse {
			color: #16191f;
			background-color: #ffffff;
			border: 0.1rem solid #aab7b8;

			svg {
				margin-right: 1rem;
			}
		}

		.select {
			color: #16191f;
			background-color: #ffffff;
			border: 0.1rem solid #aab7b8;

			svg {
				margin-right: 1rem;
			}
		}

		.selectCheck {
			color: #16191f;
			background-color: #ffffff;
			border: 0.1rem solid #aab7b8;

			svg {
				margin-right: 1rem;
				margin-bottom: 0.2rem;
				padding: 0.2rem;
			}
		}

		.lambda {
			color: #ffffff;
			background-color: #63acff;
		}

		.button {
			color: #ffffff;
			background-color: #ec7211;
		}

		.buttonOld {
			color: #ffffff;
			background: linear-gradient(#2d8cec, #16b);
			border-color: #0b4075;
			border-radius: 0.4rem;
		}

		svg {
			align-self: flex-end;
		}
	}
</style>
