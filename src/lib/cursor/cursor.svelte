<script lang="ts">
	// https://kit.svelte.dev/faq#integrations-how-do-i-use-a-client-side-only-library-that-depends-on-document-or-window
	import { browser } from '$app/env';
	import Cursor from '$lib/assets/cursor.png';

	// client-only code here
	let mouseCursor: HTMLDivElement;

	//커스텀 커서의 left값과 top값을 커서의 XY좌표값과 일치시킴
	const cursor = (event: MouseEventInit) => {
		mouseCursor.style.left = event.clientX + 'px';
		mouseCursor.style.top = event.clientY + 'px';
	};

	if (browser) {
		//window 객체에 scroll & mouse 이벤트를 추가하고 cursor함수 실행되도록 함
		window.addEventListener('scroll', cursor);
		window.addEventListener('mousemove', cursor);
	}
</script>

<div bind:this={mouseCursor} class="cursor">
	<img src={Cursor} alt="cursor" />
</div>

<style lang="scss">
	/* 커스텀 커서 스타일 정의해주기 */
	.cursor {
		position: absolute;
		pointer-events: none;
		z-index: 1000;
	}
</style>
