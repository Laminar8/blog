import { codeIndent } from '$lib/module/codeIndent';

export const prerender = true;

export function load() {
	return {
		publish: '2022/11/04',
		lastUpdate: '2022/11/04',
		status: ['Published'],
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
				},
				{
					fileName: 'create_clients.py',
					body: codeIndent(
						`os.system(
							f"""sed -i 's/#set_var EASYRSA_BATCH		""/set_var EASYRSA_BATCH		"True"/g' {path}/pki/vars"""
						)`,
						6
					)
				},
				{
					fileName: 'create_clients.py',
					body: codeIndent(
						`users = ['user1', 'user2', ...]
						
						with open(f"{path}/pki/ovpn/downloaded-client-config.ovpn", "r") as template:
							template_strings = template.readlines()
						
							# Create Client keys & new ovpn file based on the template
							for user in users:
								os.system(f"{path}/easyrsa build-client-full {user} nopass")
						
								with open(f"{path}/pki/issued/{user}.crt", "r") as crt:
									crt_strings = crt.readlines()
									cert = (
										["<cert>\\n"]
										+ crt_strings[crt_strings.index("-----BEGIN CERTIFICATE-----\\n") :]
										+ ["</cert>\\n"]
									)
						
								with open(f"{path}/pki/private/{user}.key", "r") as key:
									key_strings = key.readlines()
									key = (
										["<key>\\n"]
										+ key_strings[key_strings.index("-----BEGIN PRIVATE KEY-----\\n") :]
										+ ["</key>\\n"]
									)
						
								with open(f"{path}/pki/ovpn/{user}.ovpn", "w+") as ovpn:
									ovpn.writelines(
										template_strings[: template_strings.index("</ca>\\n") + 1]
										+ cert
										+ key
										+ ["\\n", "\\n", "reneg-sec 0"]
									)`,
						6
					)
				}
			]
		}
	};
}
