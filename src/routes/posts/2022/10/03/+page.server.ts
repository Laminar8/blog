import { codeIndent } from '$lib/module/codeIndent';
export const prerender = true;

export function load() {
	return {
		publish: '2022/10/09',
		lastUpdate: '2022/10/09',
		status: ['Published'],
		codeHighlight: {
			css: [
				{
					fileName: 'content.css',
					body: codeIndent(
						`...		
						// Animation
						animation-duration: 0.25s;
						animation-name: slideDown;
				
						@keyframes slideDown {
							from {
								margin-bottom: 200%;
								margin-right: 200%;
							}
				
							to {
								margin-bottom: 0%;
								margin-right: 0%;
							}
						}`,
						6
					)
				},
				{
					fileName: 'content.css',
					body: codeIndent(
						`...
						@media screen and (min-width: 600px) {
							.content {
								// Split sections
								display: grid;
								grid-template-columns: 1fr 50rem 1fr;
					
								.left {
									display: none;
								}
					
								.center {
									grid-column-start: 2;
								}
					
								.right {
									display: none;
								}
							}
						}
					
						@media screen and (min-width: 950px) {
							.content {
								// Split sections
								display: grid;
								grid-template-columns: 1fr 70rem 1fr;
							}
						}`,
						6
					)
				}
			],
			javascript: [
				{
					fileName: 'svelte.config.js',
					body: codeIndent(
						`import adapter from '@sveltejs/adapter-netlify';
						import preprocess from 'svelte-preprocess';
						
						const config = {
							// Consult https://github.com/sveltejs/svelte-preprocess
							// for more information about preprocessors
							preprocess: preprocess(),
						
							kit: {
								adapter: adapter({
									edge: true
								})
							}
						};
						
						export default config;`,
						6
					)
				}
			],
			typescript: [
				{
					fileName: 'api/tag/get/+server.ts',
					body: codeIndent(
						`import { json } from '@sveltejs/kit';
						import { tag } from '$lib/contents/store';
						
						let newTag: string;
						
						export async function GET() {
							tag.subscribe((value) => (newTag = value));
						
							return json(newTag);
						}`,
						6
					)
				},
				{
					fileName: 'api/tag/set/+server.ts',
					body: codeIndent(
						`import { tag } from '$lib/contents/store';
						import type { RequestEvent } from '@sveltejs/kit';
						
						export async function POST({ request }: RequestEvent) {
							const req = await request.json();
							tag.update(() => req.tag);
						
							return new Response('Success');
						}`,
						6
					)
				}
			],
			bash: [
				{
					fileName: 'bash',
					body: codeIndent(
						`npm uninstall -D gh-pages @sveltejs/adapter-static
						npm install -D @sveltejs/adapter-netlify@next`,
						6
					)
				},
				{
					fileName: 'bash',
					body: codeIndent(
						`git config core.ignorecase false
						git add .
						git commit -a -m "git ignorecase false"
						git push`,
						6
					)
				}
			],
			yaml: [
				{
					fileName: 'netlify.toml',
					body: codeIndent(
						`[build]
						  command = "npm run build"
						  publish = "build"`,
						6
					)
				}
			],
			json: [
				{
					fileName: 'package.json',
					body: codeIndent(
						`...
						"scripts": {
							"dev": "vite dev",
							"build": "vite build",
							...
						}`,
						6
					)
				}
			]
		}
	};
}
