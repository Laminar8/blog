import { codeIndent } from '$lib/module/codeIndent';
export const prerender = true;

export function load() {
	return {
		publish: '2022/10/03',
		lastUpdate: '2022/10/08',
		status: ['Published', 'Edited'],
		codeHighlight: {
			bash: [
				{
					fileName: 'Bash',
					body: codeIndent(`git branch feature`, 6)
				},
				{
					fileName: 'Bash',
					body: codeIndent(`git checkout feature`, 6)
				},
				{
					fileName: 'Bash',
					body: codeIndent(
						`npm create svelte@latest my-app
						cd my-app
						npm install`,
						6
					)
				},
				{
					fileName: 'Bash',
					body: codeIndent(`npm install -D sass gh-pages ...`, 6)
				},
				{
					fileName: 'Bash',
					body: codeIndent(
						`git add .
						git commit -a -m "Applied New sveltekit"
						git push`,
						6
					)
				},
				{
					fileName: 'Bash',
					body: codeIndent(
						`git branch dev
						git merge feature -m "Merged from feature"
						git branch -d feature
						git commit -a -m "Merged from feature"
						git push`,
						6
					)
				}
			]
		}
	};
}
