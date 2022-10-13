import { codeIndent } from '$lib/module/codeIndent';

// import { codeIndent } from '$lib/module/codeIndent';
export const prerender = true;

export function load() {
	return {
		publish: '2022/10/10',
		lastUpdate: '2022/10/10',
		status: ['In progress'],
		codeHighlight: {
			bash: [
				{
					fileName: 'bash',
					body: codeIndent(
						`hadoop distcp -Dfs.s3a.aws.credentials.provider=\\
						"org.apache.hadoop.fs.s3a.TemporaryAWSCredentialsProvider" \\
						-Dfs.s3a.access.key="\${AWS_ACCESS_KEY_ID}" \\
						-Dfs.s3a.secret.key="\${AWS_SECRET_ACCESS_KEY}" \\
						-Dfs.s3a.session.token="\${AWS_SESSION_TOKEN}" \\
						-Dfs.s3a.path.style.access=true \\
						-Dfs.s3a.connection.ssl.enabled=true \\
						-Dfs.s3a.endpoint=s3.<your-aws-region>.amazonaws.com \\
						hdfs:///user/root/ s3a://<your-bucket-name>`,
						6
					)
				},
				{
					fileName: 'bash',
					body: codeIndent(
						`hadoop fs -ls s3a://bucket.vpce-123456-4jiz2sq4-us-east-2b.s3.us-east-2.vpce.amazonaws.com/`,
						6
					)
				},
				{
					fileName: 'bash',
					body: codeIndent(`export HADOOP_ROOT_LOGGER=DEBUG,console`, 6)
				}
			]
		}
	};
}
