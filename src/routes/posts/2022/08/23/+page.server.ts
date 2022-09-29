import { codeIndent } from '$lib/module/codeIndent';
export const prerender = true;

export function load() {
	return {
		lastUpdate: '2022/08/31',
		status: ['Published'],
		codeHighlight: {
			scss: [
				{
					fileName: 'app.scss',
					body: codeIndent(
						`:root {
                            // Color
                            --color-dark: #1f1f1f;
                            --color-dark-bright: #8e8e8e;
                            --color-white: #f1f1f1;
                            --color-white-dark: #e1e1e1;
                            --color-red: #df7861;
                            --color-red-dark: #f47c7c;
                            --color-yellow: #ffb562;
                            --color-yellow-bright: #f8e6d1;
                            --color-green: #adcf9f;
                            --color-green-dark: #94b49f;
                            --color-blue: #607eaa;
                            --color-blue-dark: #06113c;
                        }`,
						6
					)
				},
				{
					fileName: 'tag.svelte',
					body: codeIndent(
						`.tag {
                            .content {
                                color: var(--color-white);
                                background-color: var(--color-blue);
                                border-radius: 1rem;
                            }
                        }`,
						6
					)
				}
			]
		}
	};
}
