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
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/198066063-265516c2-c6ac-46bf-a608-301848f21f6f.png"
				alt="OpenVPN Access Server"
				style="max-width: 100%;"
				slot="image"
			/>
			<div slot="caption">
				@Image from
				<Href href="https://openvpn.net/access-server/" name="OpenVPN" />
			</div>
		</Image_v1>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Content>
			I have subscribed an OpenVPN Access Server product included licenses from the AWS Marketplace.
			By launching an instance with the AMI of the access server, you could start the VPN connection
			between the AWS VPC and the local machines.
		</Content>
		<Content>
			I recommend the OpenVPN access server if you would like to manage your users with username and
			password authentication. It cannot be allowed the authentication when you are using the AWS
			Client VPN with mutual authentication. You can also add a MFA to your credential for OpenVPN.
			However the AWS Client VPN can't do it.
		</Content>
		<Split />

		<!-- Chapter 2 -->
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/198073249-1ddf52bd-ba2b-4b74-a30b-a391ff1b6d6d.png"
				alt="AWS Client VPN architecture"
				style="max-width: 100%;"
				slot="image"
			/>
			<div slot="caption">
				@Image from
				<Href
					href="https://aws.amazon.com/ko/blogs/networking-and-content-delivery/using-aws-client-vpn-to-scale-your-work-from-home-capacity/"
					name="AWS Blogs"
				/>
			</div>
		</Image_v1>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Subtitle>AWS Client VPN</Subtitle>
		<Content>
			The managed service, AWS Client VPN, doesn't require any instances for VPN connection. One
			endpoint and one subnet association is the minimum requirement. You don't have to manage your
			instance because of OS patch, library update and any other tasks. The Client VPN brings us low
			security risk and less management.
		</Content>
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/198076002-0ae921d5-a469-47e8-8548-067d87c4d760.png"
				alt="AWS Client VPN Pricing"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Content>
			Comparing the AWS Client VPN pricing to OpenVPN, the AWS is too much expensive. OpenVPN
			charges the licenses and the access servers. However AWS Client VPN charges the number of
			associations and connections per hour. Increasing your users, you could be charged a high fee.
		</Content>
		<Content>
			One more disadvantage of AWS Client VPN is that it is difficult to create new clients for the
			VPN. In general, You should have a ovpn file to connect the VPN. The ovpn file has a
			certificate authority, a client certificate and a client key. If you have a license for access
			server, you could create new ovpn profile for new clients with one click. On the other hand,
			AWS Client VPN has a several step to create new ovpn profile.
		</Content>
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/198869270-0ed0655e-da9c-40dd-8a94-cf9b45a9cdb0.png"
				alt="AWS Client VPN"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v1>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Content>
			From
			<Href
				href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/client-authentication.html#mutual"
				name="AWS docs"
			/>
			, you could create a new AWS Client VPN endpoint. I think you already created an VPN endpoint following
			the above guide. As mentioned from the guide, you could repeat step 5 to create a new client certificate
			and key.
		</Content>
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/198869866-ace890d5-70e1-4781-91c5-9667f800d224.png"
				alt="AWS Client VPN"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v1>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Content>
			If you try to repeat step 5, you must ensure that you have the correct certificate authority
			key and certificate which you used when you created the VPC endpoint. When uploading CA
			certificate, server key and certificate for Amazon ACM, the guide says you have to back up
			these files to an other directory. The docs dosen't mention the
			<Color color="purple" content="CA key" number="-1" />. It makes me confused.
		</Content>
		<Split />

		<!-- Chapter 3 -->
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/198073249-1ddf52bd-ba2b-4b74-a30b-a391ff1b6d6d.png"
				alt="AWS Client VPN architecture"
				style="max-width: 100%;"
				slot="image"
			/>
			<div slot="caption">
				@Image from
				<Href
					href="https://aws.amazon.com/ko/blogs/networking-and-content-delivery/using-aws-client-vpn-to-scale-your-work-from-home-capacity/"
					name="AWS Blogs"
				/>
			</div>
		</Image_v1>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Subtitle>New Clients for Client VPN</Subtitle>
		<Content>
			With mutual authentication, Client VPN uses certificates to perform authentication between the
			client and the server. The server certificates and clients certificates are generated from
			certificate authority (CA). You must keep the
			<Color color="purple" content="CA certificate" number="-1" /> and
			<Color color="purple" content="CA key" number="-1" /> to create new clients after initializing
			a new PKI environment for new Client VPN endpoint.
		</Content>
		<Code>
			<div slot="file">
				{codeHighlight.bash[0].fileName}
			</div>
			<div slot="code">
				<Highlight language={bash} code={codeHighlight.bash[0].body} />
			</div>
		</Code>
		<Content>
			With bash commands, you should copy the certificates and keys to your backup directory. If you
			want to create new clients, restore your files to original path.
		</Content>
		<Code>
			<div slot="file">
				{codeHighlight.bash[1].fileName}
			</div>
			<div slot="code">
				<Highlight language={bash} code={codeHighlight.bash[1].body} />
			</div>
		</Code>
		<Information color={color.purple} name={name.purple} content={content.image.purple._02} />
		<Content>
			Skip initializing a new PKI environment. If you performed the step, build a new certificate
			authority and overwrite your certificate authority to old one.
		</Content>
		<Step />
		<Code>
			<div slot="file">
				{codeHighlight.bash[2].fileName}
			</div>
			<div slot="code">
				<Highlight language={bash} code={codeHighlight.bash[2].body} />
			</div>
		</Code>
		<Content>
			Generate your new clients certificate and key for Client VPN. Replace
			<Color color="purple" content="client1.domain.tld" number="-1" /> to
			<Color color="purple" content="your clients name" number="-1" />. Add a client certificate and
			a client key to the ovpn profile which downloaded from AWS Client VPN console.
		</Content>
		<Split />

		<!-- Chapter 4 -->
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/198876160-4f161740-32cd-4704-9521-827c7b9a527e.png"
				alt="OpenVPN/easy-rsa"
				style="max-width: 100%;"
				slot="image"
			/>
			<div slot="caption">
				@Image from
				<Href href="https://github.com/OpenVPN/easy-rsa/tree/master/easyrsa3" name="Github" />
			</div>
		</Image_v1>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Subtitle>Automation</Subtitle>
		<Content>
			After cloning from
			<Href href="https://github.com/OpenVPN/easy-rsa" name="OpenVPN/easy-rsa" /> github, go to
			<Color color="black" content="easy-rsa/easyrsa3" number="-1" />
			directory. You couldn't <Color color="purple" content="vars" number="-1" /> file because you didn't
			initializing the PKI environment.
		</Content>
		<Code>
			<div slot="file">
				{codeHighlight.bash[1].fileName}
			</div>
			<div slot="code">
				<Highlight language={bash} code={codeHighlight.bash[1].body} />
			</div>
		</Code>
		<Information color={color.purple} name={name.purple} content={content.image.purple._02} />
		<Content>
			The <Color color="purple" content="init-pki" number="-1" /> command creates PKI directory and some
			configuration files under <Color color="black" content="easy-rsa/easyrsa3" number="-1" /> directory.
			You don't have to run this command directly. I'm going to create a python file which runs commands
			to initiate and generate certificates.
		</Content>
		<Step />
		<Code>
			<div slot="file">
				{codeHighlight.python[0].fileName}
			</div>
			<div slot="code">
				<Highlight language={python} code={codeHighlight.python[0].body} />
			</div>
		</Code>
		<Content>
			Before running the <Color color="purple" content="init-pki" number="-1" /> command, python checks
			that you had the pki directory. If the directory exists, delete with
			<Color color="purple" content="shutil" number="-1" /> module. The module delete the directory even
			it has files and directories.
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
