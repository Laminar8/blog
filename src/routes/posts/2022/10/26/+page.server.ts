import { codeIndent } from '$lib/module/codeIndent';

export const prerender = true;

export function load() {
	return {
		publish: '2022/10/30',
		lastUpdate: '2022/10/30',
		status: ['In progress'],
		codeHighlight: {
			bash: [
				{
					fileName: 'Bash',
					body: codeIndent(
						`cp pki/ca.crt ~/backup/
						cp pki/private/ca.key ~/backup/`,
						6
					)
				},
				{
					fileName: 'Bash',
					body: codeIndent(`./easyrsa init-pki`, 6)
				},
				{
					fileName: 'Bash',
					body: codeIndent(`./easyrsa build-client-full client1.domain.tld nopass`, 6)
				}
			],
			python: [
				{
					fileName: 'create_clients.py',
					body: codeIndent(
						`import os
						import shutil

						path = .
						
						# Cleaning
						if os.path.isdir(f"{path}/pki/"):
						    shutil.rmtree(f"{path}/pki/")
						
						# Init EasyRSA
						os.system(f"{path}/easyrsa init-pki")`,
						6
					)
				}
			]
		}
	};
}
