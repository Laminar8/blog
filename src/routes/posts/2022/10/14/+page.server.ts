import { codeIndent } from '$lib/module/codeIndent';

export const prerender = true;

export function load() {
	return {
		publish: '2022/10/14',
		lastUpdate: '2022/10/14',
		status: ['In progress'],
		codeHighlight: {
			bash: [
				{
					fileName: 'bash',
					body: codeIndent(
						`*Site name:* {{_GEN_read__name}}
						*Site URL:* {{_GEN_read__ssl_url}}
						*Published At:* {{_GEN_read__published_at}}
						*State:* {{_GEN_read__state}}
						*Error Message:* {{_GEN_read__error_message}}`,
						6
					)
				}
			]
		}
	};
}
