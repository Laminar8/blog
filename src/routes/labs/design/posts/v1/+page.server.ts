import { codeIndent } from '$lib/module/codeIndent';

export const prerender = true;

export function load() {
	return {
		publish: '2022/10/15',
		lastUpdate: '2022/10/15',
		status: ['In progress'],
		codeHighlight: {
			svelte: [
				{
					fileName: 'Href.svelte',
					body: codeIndent(
						`<script context="module" lang="ts">
						  import Href from '$lib/layout/posts/props/contents/center/href.svelte';
						</script>

						<Href
						  href="https://zapier.com/webintent/..."
						  name="Receive Slack channel messages on successful Netlify deploys"
						/>`,
						6
					)
				},
				{
					fileName: 'Icon.svelte',
					body: codeIndent(
						`<script context="module" lang="ts">
						  import Icon from '$lib/layout/posts/props/contents/center/icon.svelte';
						</script>
						
						<Icon service="slack" content="slack" />`,
						6
					)
				},
				{
					fileName: 'Color.svelte',
					body: codeIndent(
						`<script context="module" lang="ts">
						  import Color from '$lib/layout/posts/props/contents/center/color.svelte';
						</script>
						
						<Color color="blue" content="zapier" number="1" />
						<Color color="black" content="Color.svelte" number="-1" />`,
						6
					)
				},
				{
					fileName: 'Color.svelte',
					body: codeIndent(
						`<script context="module" lang="ts">
						  import Color from '$lib/layout/posts/props/contents/center/color.svelte';
						</script>
						
						<Color color="purple" content="zapier" number="-1" />`,
						6
					)
				},
				{
					fileName: 'Button.svelte',
					body: codeIndent(
						`<script context="module" lang="ts">
						  import Button from '$lib/layout/posts/props/contents/center/button.svelte';
						</script>
						
						<Button service="slack" type="menu" content="Apps" />`,
						6
					)
				},
				{
					fileName: 'Button.svelte',
					body: codeIndent(
						`<script context="module" lang="ts">
						  import Button from '$lib/layout/posts/props/contents/center/button.svelte';
						</script>
						
						<Button service="slack" type="text" content="Manage" />
						<Button service="slack" type="textSelect" content="Laminar" />`,
						6
					)
				},
				{
					fileName: 'Button.svelte',
					body: codeIndent(
						`<script context="module" lang="ts">
						  import Button from '$lib/layout/posts/props/contents/center/button.svelte';
						</script>
						
						<Button service="slack" type="buttonWhite" content="Create an app" />`,
						6
					)
				},
				{
					fileName: 'Button.svelte',
					body: codeIndent(
						`<script context="module" lang="ts">
						  import Button from '$lib/layout/posts/props/contents/center/button.svelte';
						</script>
						
						<Button service="slack" type="buttonPink" content="Posting messages using curl" />`,
						6
					)
				},
				{
					fileName: 'Button.svelte',
					body: codeIndent(
						`<script context="module" lang="ts">
						  import Button from '$lib/layout/posts/props/contents/center/button.svelte';
						</script>
						
						<Button service="slack" type="buttonGreen" content="Create app" />`,
						6
					)
				},
				{
					fileName: 'Button.svelte',
					body: codeIndent(
						`<script context="module" lang="ts">
						  import Button from '$lib/layout/posts/props/contents/center/button.svelte';
						</script>
						
						<Button service="slack" type="buttonBlue" content="View channel details" />`,
						6
					)
				},
				{
					fileName: 'Button.svelte',
					body: codeIndent(
						`<script context="module" lang="ts">
						  import Button from '$lib/layout/posts/props/contents/center/button.svelte';
						</script>
						
						<Button service="zapier" type="buttonBlue" content="Connect" />`,
						6
					)
				},
				{
					fileName: 'Button.svelte',
					body: codeIndent(
						`<script context="module" lang="ts">
						  import Button from '$lib/layout/posts/props/contents/center/button.svelte';
						</script>
						
						<Button service="netlify" type="buttonBlueBright" content="Authorize" />`,
						6
					)
				}
			]
		}
	};
}
