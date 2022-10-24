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
	const { title, tag, image } = index._2022._10._09;
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
				<Href href="https://hadoop.apache.org/" name="Hadoop" />
			</div>
		</Image_v1>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Subtitle>Data Migration</Subtitle>
		<Content>
			Let's imagine that we have a hadoop cluster in our on-premise data center. We have a plan to
			transfer the data which was processed for our business from our hadoop cluster to Amazon S3
			through only private network like Direct Connect or VPN Connection. How could we do?
		</Content>
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/194813311-df519e5c-e6f0-4026-accf-8b68faa9fbe2.png"
				alt="Migration"
				style="max-width: 100%;"
				slot="image"
			/>
			<div slot="caption">
				@Image from
				<Href
					href="https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/migrate-data-from-an-on-premises-hadoop-environment-to-amazon-s3-using-distcp-with-aws-privatelink-for-amazon-s3.html"
					name="Amazon Docs"
				/>
			</div>
		</Image_v1>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Content>
			<Color color="blue" content="DistCp" number="1" /> provided from Apache Hadoop, AWS CLI v2,
			<Color color="blue" content="AWS Data Sync" number="2" />, any other migration tools from AWS
			could be possible to transfer the data. From now, we have a think about two migration tool
			available without installing any agent. The two are DistCp and AWS CLI v2.
			<Annotation>
				<span slot="number">1</span>
				<span slot="annotation">
					DistCp (distributed copy) is a tool used for large inter/intra-cluster copying. It uses
					MapReduce to effect its distribution, error handling and recovery, and reporting.
				</span>
			</Annotation>
			<Annotation>
				<span slot="number">2</span>
				<span slot="annotation">
					AWS DataSync is a secure, online service that automates and accelerates moving data
					between on premises and AWS Storage services.
				</span>
			</Annotation>
		</Content>
		<Content>
			As illustrated above, the hadoop cluster in the on-premises environment could be access to AWS
			environment within only private network. The each of two private subnets has a S3 interface
			endpoint. The cluster could transfers the data through the endpoints to S3.
		</Content>
		<Split />

		<!-- Chapter 2 -->
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/194823461-9211d9d9-43c0-41f5-9c51-cd1cf91d8f1e.png"
				alt="AWS Console"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v1>
		<Information color={color.green} name={name.green} content={content.image.green._01} />
		<Subtitle>IAM Credentials</Subtitle>
		<Content>
			Regardless of tools that you may use, you need an AWS IAM credentials for uploading your files
			to S3. To get it, search <AWS_Button type="serviceSearch" content="IAM" /> from top search bar
			and click <AWS_Button type="service" content="IAM" />.
		</Content>
		<Step />
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/194824733-299fb72f-fed5-4b12-8e5c-03965e3e6d82.png"
				alt="AWS Console"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Content>
			Open left side bar if it is closed, and click <AWS_Button type="input" content="Users" /> under
			Access management. In Users page, click <AWS_Button type="buttonOld" content="Add users" />.
		</Content>
		<Step />
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/194826518-7a56a8ec-0cab-425f-805b-d3bf310dc880.png"
				alt="AWS Console"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Content>
			Enter your user name as <AWS_Button type="input" content="s3" /> or your preffered name. You cannot
			edit your name. Then goto Select AWS access type section. Check
			<AWS_Button type="selectCheck" content="Access key - Programmatic access" />
			option only because we don't login console with this user. Click
			<AWS_Button type="buttonOld" content="Next: Permissions" />.
		</Content>
		<Step />
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/194830072-3c16eb7b-89d3-4dec-9a89-2e3833c16ab0.png"
				alt="AWS Console"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Content>
			Click <AWS_Button type="input" content="Attach existing policies directly" /> first. Search policies
			by filtering only <AWS_Button type="input" content="s3" /> included from policies name. Check
			<AWS_Button type="selectCheck" content="AmazonS3FullAccess" /> policy and click
			<AWS_Button type="buttonOld" content="Next: Tags" />.
		</Content>
		<Step />
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/194830967-6862372c-1814-4475-bde5-cba79f06fe06.png"
				alt="AWS Console"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Content>
			If you need tags, enter it. Click <AWS_Button type="buttonOld" content="Next: Review" />.
		</Content>
		<Step />
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/194832374-640c3e5c-365f-40fd-8262-027a67c08ef2.png"
				alt="AWS Console"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Content>
			Click <AWS_Button type="buttonOld" content="Create user" />.
		</Content>
		<Step />
		<Image_v2>
			<img
				src="https://user-images.githubusercontent.com/52372569/194833378-f61d38b4-2705-4765-937e-80d524d79322.png"
				alt="AWS Console"
				style="max-width: 100%;"
				slot="image"
			/>
		</Image_v2>
		<Content>
			To get your credential, click <AWS_Button type="input" content="Download .csv" />. In the csv
			file, there are your access key and secret key.
		</Content>
		<Split />

		<!-- Chapter 3 -->
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/194835338-2a6280c1-3227-47a2-a1a7-9e57c7d86f5f.png"
				alt="AWS Docs"
				style="max-width: 100%;"
				slot="image"
			/>
			<div slot="caption">
				@Image from
				<Href
					href="https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/migrate-data-from-an-on-premises-hadoop-environment-to-amazon-s3-using-distcp-with-aws-privatelink-for-amazon-s3.html"
					name="Amazon Docs"
				/>
			</div>
		</Image_v1>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Subtitle>DistCp</Subtitle>
		<Content>
			In my hadoop cluster v2.7.7, the script provided from AWS docs is not working correctly.
			Inspecting the errors, the issue was that S3 endpoint parameters was not configured even
			passing as the parameter.
		</Content>
		<Content>
			Running the script every time, the S3 endpoint is resolved to default endpoint,
			<Color color="purple" content="s3.amazonaws.com" number="-1" />. DistCp needs to translate the
			regional endpoint to private ip assigned in your subnet and transfer the file to S3 within
			private network.
		</Content>
		<Code>
			<div slot="file">
				{codeHighlight.bash[0].fileName}
			</div>
			<div slot="code">
				<Highlight language={bash} code={codeHighlight.bash[0].body} />
			</div>
		</Code>
		<Step />
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/194837491-2ea250d1-613b-47ad-b974-63603444e34f.png"
				alt="Apache"
				style="max-width: 100%;"
				slot="image"
			/>
			<div slot="caption">
				@Image from
				<Href href="https://issues.apache.org/jira/browse/HADOOP-17677" name="Apache issues" />
			</div>
		</Image_v1>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Content>
			To solve the issue, pass the vpc endpoint in your s3 path and the paramter. Thanks, Steve
			Loughran 😆
		</Content>
		<Code>
			<div slot="file">
				{codeHighlight.bash[1].fileName}
			</div>
			<div slot="code">
				<Highlight language={bash} code={codeHighlight.bash[1].body} />
			</div>
		</Code>
		<Step />
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/195106600-e4e671ab-fbe4-4966-83f0-490fdad7286b.png"
				alt="Amazon Docs"
				style="max-width: 100%;"
				slot="image"
			/>
			<div slot="caption">
				@Image from
				<Href
					href="https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/migrate-data-from-an-on-premises-hadoop-environment-to-amazon-s3-using-distcp-with-aws-privatelink-for-amazon-s3.html"
					name="Amazon Docs"
				/>
			</div>
		</Image_v1>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Content>
			However the regional endpoint was not resolved as expected. To translate correctly, you could
			add an entry for either
			<Color color="purple" content="bucketName.s3.region.amazonaws.com" number="-1" /> or
			<Color color="purple" content="s3.region.amazonaws.com" number="-1" /> in your
			<Color color="black" content="/etc/hosts" number="-1" /> file.
		</Content>
		<Content>
			I have added <Color color="purple" content="bucketName.s3.region.amazonaws.com" number="-1" />
			to private ip in <Color color="black" content="/etc/hosts" number="-1" />. After the error, I
			added
			<Color color="purple" content="s3.region.amazonaws.com" number="-1" /> to same private ip below
			the previous entry.
		</Content>
		<Content>
			Clearly, the error message is changed to 400 error. Maybe DNS error would not hit you anymore
			😭
		</Content>
		<Step />
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/195116082-69aed179-69cf-42fb-a78f-0e6c44caf31d.png"
				alt="stackoverflow"
				style="max-width: 100%;"
				slot="image"
			/>
			<div slot="caption">
				@Image from
				<Href
					href="https://stackoverflow.com/questions/34810759/amazons3exception-bad-request-distcp-from-frankfurt-s3-to-emr-hdfs-failing"
					name="stackoverflow"
				/>
			</div>
		</Image_v1>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Content>
			When I run the DistCp script, I got a
			<Color color="purple" content="AmazonS3Exception: Bad Request" number="-1" />
			Most people have mentioned that the issue was caused by
			<Color color="purple" content="Signature Version 4" number="-1" />.
		</Content>
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/195129431-6e6e222d-11a7-4cc7-9e9b-199a5738b2f9.png"
				alt="Hadoop-AWS module"
				style="max-width: 100%;"
				slot="image"
			/>
			<div slot="caption">
				@Image from
				<Href
					href="https://hadoop.apache.org/docs/stable/hadoop-aws/tools/hadoop-aws/index.html#General_S3A_Client_configuration"
					name="Apache Docs"
				/>
			</div>
		</Image_v1>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Content>
			Apache Hadoop docs says that V4-signing-only regions (Frankfurt, Seoul) requires the endpoint
			to be identified. Also if the wrong endpoint is used, the request may fail. This may be
			reported as a 301/redirect error, or as a 400 Bad Request: take these as cues to check the
			endpoint setting of a bucket.
		</Content>
		<Content>
			I ran the script which added correct endpoint paramter clearly. Why did not it work? 🤔
		</Content>
		<Step />
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/195602100-3697acc0-672f-44f5-bba0-32cfc9679964.png"
				alt="stackoverflow"
				style="max-width: 100%;"
				slot="image"
			/>
			<div slot="caption">
				@Image from
				<Href
					href="https://stackoverflow.com/questions/50943337/spark-2-3-0-aws-sdk-java-1-7-4-s3a-read-failed-with-amazons3exception-bad-req"
					name="stackoverflow"
				/>
			</div>
		</Image_v1>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Content>
			An answer from <Color color="purple" content="ruseel" number="-1" /> looks very reasonable. My
			hadoop environment is close to his. I passed the endpoint information to parameter. I also passed
			parameters to use V4 Signing but I have had no idea it was worked or not. I doubt the error was
			caused by aws-java-sdk version.
		</Content>
		<Content>
			My aws-java-sdk version is 1.7.x. It was released before June, 2016. The default signing
			mechanism version is v2. From released version after June, 2016, the default version is v4. I
			have a plan to upgrade aws-java-sdk version(next 1.11.x) to transfer the data by DistCp.
		</Content>
		<Step />
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/197349304-8564709b-1abf-47f7-b1a3-b5da3d4fb5e1.png"
				alt="AWS Docs"
				style="max-width: 100%;"
				slot="image"
			/>
			<div slot="caption">
				@Image from
				<Href
					href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingAWSSDK.html#UsingAWSSDK-move-to-Sig4"
					name="AWS Docs"
				/>
			</div>
		</Image_v1>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Content>
			AWS Docs says that the AWS SDK for Java v1 must be upgraded to Java 1.11.201+ when you want to
			use Signature Version 4 for Amazon S3 API request authentication. The above table lists the
			SDKs with the necessary minimum version to use Signature Version 4 (SigV4).
		</Content>
		<Split />

		<!-- Chapter 4 -->
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/195609006-f7e327a5-a97e-45dd-85e3-502dad493d5a.png"
				alt="cloudera"
				style="max-width: 100%;"
				slot="image"
			/>
			<div slot="caption">
				@Image from
				<Href
					href="https://community.cloudera.com/t5/Support-Questions/How-to-use-hdfs-dfs-command-with-DEBUG-level/m-p/85654"
					name="cloudera"
				/>
			</div>
		</Image_v1>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Subtitle>Hadoop Debug</Subtitle>
		<Content>
			If you want more details after running the Hadoop DistCp scripts, set your environment
			variable: <Color color="purple" content="HADOOP_ROOT_LOGGER=DEBUG,console" number="-1" />. The
			default value is
			<Color color="purple" content="INFO,console" number="-1" />.
		</Content>
		<Code>
			<div slot="file">
				{codeHighlight.bash[2].fileName}
			</div>
			<div slot="code">
				<Highlight language={bash} code={codeHighlight.bash[2].body} />
			</div>
		</Code>
		<Split />

		<!-- Chapter 5 -->
		<Image_v1>
			<img
				src="https://user-images.githubusercontent.com/52372569/197351598-700b2953-2412-4f4f-89e7-186e6306afbd.png"
				alt="AWS Docs"
				style="max-width: 100%;"
				slot="image"
			/>
			<div slot="caption">
				@Image from
				<Href
					href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/setup-aws-cli.html"
					name="AWS Docs"
				/>
			</div>
		</Image_v1>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Subtitle>AWS CLI</Subtitle>
		<Content>
			If you are not available to use DistCp for moving data from on-premise hadoop cluster, you can
			still use <Color color="purple" content="AWS CLI" number="-1" /> to transfer the data to Amazon
			S3. Install the latest AWS CLI from
			<Href
				href="https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"
				name="Installing or updating the latest version of the AWS CLI"
			/> on your local machine.
		</Content>
		<Step />
		<Code>
			<div slot="file">
				{codeHighlight.bash[3].fileName}
			</div>
			<div slot="code">
				<Highlight language={bash} code={codeHighlight.bash[3].body} />
			</div>
		</Code>
		<Content>
			Prove your permission to be allowed to upload the data to Amazon S3. Running the above command
			for saving your credential on the local.
		</Content>
		<Information color={color.purple} name={name.purple} content={content.image.purple._01} />
		<Step />
		<Code>
			<div slot="file">
				{codeHighlight.bash[4].fileName}
			</div>
			<div slot="code">
				<Highlight language={bash} code={codeHighlight.bash[4].body} />
			</div>
		</Code>
		<Content>
			Unfortunately I couldn't find the way to transfer data from hadoop cluster to Amazon S3
			straightly with AWS CLI. AWS CLI could move local data to Amazon S3. If you run the above file
			system command, you can download the data from source path to target path.
		</Content>
		<Step />
		<Code>
			<div slot="file">
				{codeHighlight.bash[5].fileName}
			</div>
			<div slot="code">
				<Highlight language={bash} code={codeHighlight.bash[5].body} />
			</div>
		</Code>
		<Content>
			You are ready to move data to Amazon S3. Try to running AWS CLI command to copy your hadoop
			data on your local path to your target bucket. If you cannot copy the data, check your VPC
			endpoint and security groups. The network environment is probably not configured to connect
			between on-premise and VPC which has your VPC endpoint.
		</Content>
		<Step />
		<Code>
			<div slot="file">
				{codeHighlight.bash[6].fileName}
			</div>
			<div slot="code">
				<Highlight language={bash} code={codeHighlight.bash[6].body} />
			</div>
		</Code>
		<Content>
			If you have copied your data successfully, you would also consider additional AWS CLI S3
			configurations to improve your transfer performance. As known from official
			<Href
				href="https://aws.amazon.com/premiumsupport/knowledge-center/s3-improve-transfer-sync-command/?nc1=h_ls"
				name="AWS docs"
			/>
			and
			<Href
				href="https://awscli.amazonaws.com/v2/documentation/api/latest/topic/s3-config.html"
				name="CLI documentation"
			/>, <Color color="purple" content="max concurrent requests" number="-1" /> and
			<Color color="purple" content="max queue size" number="-1" /> could be helpful to accelerate your
			move.
		</Content>
		<Content>
			The value of the previous configurations is adjustable and depends on your machine. Applying
			the value higher, your machine could be slow and the performance would be worse. Find your
			best value by changing the value when keeping to run a command which transfers the same data
			to Amazon S3.
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
