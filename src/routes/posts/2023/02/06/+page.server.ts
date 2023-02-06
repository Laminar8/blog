import { codeIndent } from '$lib/module/codeIndent';

export const prerender = true;

export function load() {
	return {
		publish: '2023/02/06',
		lastUpdate: '2023/02/06',
		status: ['In progress'],
		codeHighlight: {
			bash: [
				{
					fileName: 'Bash',
					body: codeIndent(
						`wget https://github.com/aws/aws-sam-cli/releases/latest/download/aws-sam-cli-linux-x86_64.zip`,
						6
					)
				}
			]
		}
	};
}
