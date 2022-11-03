<script context="module" lang="ts">
	// Layout
	import Posts from '$lib/layout/posts/Posts.svelte';

	// Props/Header
	import Header from '$lib/layout/posts/props/header/Header.svelte';

	// Props/Contents/Center
	import Title from '$lib/layout/posts/props/contents/center/Title.svelte';
	import Href from '$lib/layout/posts/props/contents/center/Href.svelte';
	import Icon from '$lib/layout/posts/props/contents/center/Icon.svelte';
	import Information from '$lib/layout/posts/props/contents/center/Information.svelte';
	import Color from '$lib/layout/posts/props/contents/center/Color.svelte';
	import Button from '$lib/layout/posts/props/contents/center/Button.svelte';
	import AWS_Button from '$lib/layout/posts/props/contents/center/aws/Button.svelte';

	// Slots/Contents/Center
	import Annotation from '$lib/layout/posts/slots/contents/center/Annotation.svelte';
	import Subtitle from '$lib/layout/posts/slots/contents/center/Subtitle.svelte';
	import Content from '$lib/layout/posts/slots/contents/center/Content.svelte';
	import Image_v1 from '$lib/layout/posts/slots/contents/center/Image_v1.svelte';
	import Image_v2 from '$lib/layout/posts/slots/contents/center/Image_v2.svelte';
	import Code from '$lib/layout/posts/slots/contents/center/Code.svelte';
	import Step from '$lib/layout/posts/slots/contents/center/Step.svelte';
	import Split from '$lib/layout/posts/slots/contents/center/Split.svelte';

	// Slots/Contents/Right
	import Date from '$lib/layout/posts/slots/contents/right/Date.svelte';
	import Status from '$lib/layout/posts/slots/contents/right/Status.svelte';
	import Tag from '$lib/layout/posts/slots/contents/right/Tag.svelte';

	// Public/Props/Contents/Center
	import Footer from '$lib/layout/public/props/contents/center/Footer.svelte';

	// Module
	import { index } from '$lib/contents/index';
	import { information } from '$lib/contents/items/information';

	// Highlight syntax
	import Highlight from 'svelte-highlight';
	import github from 'svelte-highlight/styles/github';

	// Highlight Language syntax
	import bash from 'svelte-highlight/languages/bash';
	import css from 'svelte-highlight/languages/css';
	import json from 'svelte-highlight/languages/json';
	import yaml from 'svelte-highlight/languages/yaml';
	import python from 'svelte-highlight/languages/python';
	import javascript from 'svelte-highlight/languages/javascript';
	import typescript from 'svelte-highlight/languages/typescript';

	// Import types
	import type { post } from '$lib/interface/posts';
</script>

<script lang="ts">
	// Get data from page.server.ts
	export let data: post;

	// Main
	const { publish, lastUpdate, status, codeHighlight } = data;
	const { title, tag, image } = index._2022._10._26;
	const { color, name, content } = information;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={title} />
	{@html github}
</svelte:head>

<Posts>
	<div slot="header">
		<Header {title} />
	</div>
	<div slot="center">
		<Title {title} />

		<!-- Chapter 1 -->
		<Image_v1>
			<img src={image.src} alt={image.alt} style="max-width: 100%;" slot="image" />
			<div slot="caption">
				@Image from
				<Href href="https://openvpn.net/" name="OpenVPN" />
			</div>
		</Image_v1>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Subtitle>OpenVPN</Subtitle>
		<Content>
			Do you know why I uploaded the OpenVPN image on the top of the page? The one of the reason is
			that I couldn't find the representative image of the
			<Color color="blue" content="AWS Client VPN" number="1" />. The other one is that AWS Client
			VPN and <Color color="blue" content="OpenVPN" number="2" /> is similar program in functions.
			<Annotation>
				<span slot="number">1</span>
				<span slot="annotation">
					AWS Client VPN is a managed client-based VPN service that enables you to securely access
					your AWS resources and resources in your on-premises network. With Client VPN, you can
					access your resources from any location using an OpenVPN-based VPN client.
				</span>
			</Annotation>
			<Annotation>
				<span slot="number">2</span>
				<span slot="annotation">
					OpenVPN is a leading global private networking and cybersecurity company that allows
					organizations to truly safeguard their assets in a dynamic, cost effective, and scalable
					way.
				</span>
			</Annotation>
		</Content>

		<!-- Footer -->
		<Footer />
	</div>
	<div slot="right">
		<Date {lastUpdate} {publish} {status} />
		<Status {status} />
		<Tag {tag} />
	</div>
</Posts>
