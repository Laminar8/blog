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
				},
				{
					fileName: 'Bash',
					body: codeIndent(
						`unzip aws-sam-cli-linux-x86_64.zip -d sam-installation`,
						6
					)
				},
				{
					fileName: 'Bash',
					body: codeIndent(
						`sudo apt-get install unzip`,
						6
					)
				},
				{
					fileName: 'Bash',
					body: codeIndent(
						`sudo ./sam-installation/install`,
						6
					)
				},
				{
					fileName: 'Bash',
					body: codeIndent(
						`sam --version`,
						6
					)
				},
				{
					fileName: 'Bash',
					body: codeIndent(
						`sam init`,
						6
					)
				},
				{
					fileName: 'Bash',
					body: codeIndent(
						`Which template source would you like to use?
						1 - AWS Quick Start Templates
						2 - Custom Template Location
				
						Choose 1
						
						Choose an AWS Quick Start application template
						1 - Hello World Example
						2 - Multi-step workflow
						3 - Serverless API
						4 - Scheduled task
						5 - Standalone function
						6 - Data processing
						7 - Infrastructure event management
						8 - Serverless Connector Hello World Example
						9 - Multi-step workflow with Connectors
						10 - Lambda EFS example
						11 - Machine Learning
				
						Choose 1						
						
						Use the most popular runtime and package type? (Python and zip) [y/N]: y

						Would you like to enable X-Ray tracing on the function(s) in your application?  [y/N]: N
						
						Would you like to enable monitoring using CloudWatch Application Insights?
						For more info, please view https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch-application-insights.html [y/N]: N
						
						Project name [sam-app]: sam-app						
						
						Cloning from https://github.com/aws/aws-sam-cli-app-templates (process may take a moment)

						-----------------------
						Generating application:
						-----------------------
						Name: sam-app
						Runtime: python3.9
						Architectures: x86_64
						Dependency Manager: pip
						Application Template: hello-world
						Output Directory: .
						
						Next steps can be found in the README file at ./sam-app/README.md
							
					
						Commands you can use next
						=========================
						[*] Create pipeline: cd sam-app && sam pipeline init --bootstrap
						[*] Validate SAM template: cd sam-app && sam validate
						[*] Test Function in the Cloud: cd sam-app && sam sync --stack-name {stack-name} --watch`,
						6
					)
				},
				{
					fileName: 'Bash',
					body: codeIndent(
						` sam-app/
						├── README.md
						├── events/
						│   └── event.json
						├── hello_world/
						│   ├── __init__.py
						│   ├── app.py            # Contains your AWS Lambda handler logic.
						│   └── requirements.txt  # Contains any Python dependencies the application requires, used for sam build
						├── template.yaml         # Contains the AWS SAM template defining your application's AWS resources.
						└── tests/
							└── unit/
								├── __init__.py
								└── test_handler.py`,
						6
					)
				},
				{
					fileName: 'Bash',
					body: codeIndent(
						` sam-app/
						├── README.md
						├── events/
						│   └── event.json
						├── hello_world/
						│   ├── __init__.py
						│   ├── app.py            
						│   ├── get_time.py       # Would be return the current date to main handler.						
						│   └── requirements.txt  
						├── template.yaml        
						└── tests/
							└── unit/
								├── __init__.py
								└── test_handler.py`,
						6
					)
				},
				{
					fileName: 'Bash',
					body: codeIndent(
						`sam build --template "template.yaml" --use-container --build-image public.ecr.aws/sam/build-python3.9`,
						6
					)
				},
				{
					fileName: 'Bash',
					body: codeIndent(
						`sam deploy --stack-name "sam-app" \\
						--capabilities CAPABILITY_IAM \\
						--region "us-east-1" \\
						--s3-bucket "cloudformation-templates-bucket" \\
						--no-fail-on-empty-changeset \\
						--role-arn "arn:aws:iam::000011112222:role/cloudfromationAdmin"`,
						6
					)
				},
				{
					fileName: 'Bash',
					body: codeIndent(
						`sam delete --stack-name "sam-app" \\
						--region "us-east-1" \\
						--s3-bucket "cloudformation-templates-bucket"`,
						6
					)
				},
			],
			yaml: [
				{
					fileName: 'template.yaml',
					body: codeIndent(
						`AWSTemplateFormatVersion: '2010-09-09'
						Transform: AWS::Serverless-2016-10-31
						Description: >
						  sam-app
						
						  Sample SAM Template for sam-app
						
						# More info about Globals: https://github.com/awslabs/serverless-application-model/blob/master/docs/globals.rst
						Globals:
						  Function:
							Timeout: 3
							MemorySize: 128
						
						Resources:
						  HelloWorldFunction:
							Type: AWS::Serverless::Function # More info about Function Resource: https://github.com/awslabs/serverless-application-model/blob/master/versions/2016-10-31.md#awsserverlessfunction
							Properties:
							  CodeUri: hello_world/
							  Handler: app.lambda_handler
							  Runtime: python3.9
							  Architectures:
								- x86_64
							  Events:
								HelloWorld:
								  Type: Api # More info about API Event Source: https://github.com/awslabs/serverless-application-model/blob/master/versions/2016-10-31.md#api
								  Properties:
									Path: /hello
									Method: get
						
						Outputs:
						  # ServerlessRestApi is an implicit API created out of Events key under Serverless::Function
						  # Find out more about other implicit resources you can reference within SAM
						  # https://github.com/awslabs/serverless-application-model/blob/master/docs/internals/generated_resources.rst#api
						  HelloWorldApi:
							Description: "API Gateway endpoint URL for Prod stage for Hello World function"
							Value: !Sub "https://\${ServerlessRestApi}.execute-api.\${AWS:: Region}.amazonaws.com / Prod / hello / "
						  HelloWorldFunction:
							Description: "Hello World Lambda Function ARN"
							Value: !GetAtt HelloWorldFunction.Arn
						  HelloWorldFunctionIamRole:
							Description: "Implicit IAM Role created for Hello World function"
							Value: !GetAtt HelloWorldFunctionRole.Arn`,
						6
					)
				},
				{
					fileName: 'template.yaml',
					body: codeIndent(
						`Resources:
						  HelloWorldFunction:
							Type: AWS::Serverless::Function # More info about Function Resource: https://github.com/awslabs/serverless-application-model/blob/master/versions/2016-10-31.md#awsserverlessfunction
							Properties:
							  CodeUri: hello_world/
							  Handler: app.lambda_handler
							  Runtime: python3.9
							  Architectures:
								- x86_64
							  Events:
								HelloWorld:
								  Type: Api # More info about API Event Source: https://github.com/awslabs/serverless-application-model/blob/master/versions/2016-10-31.md#api
								  Properties:
									Path: /hello
									Method: get
							  VpcConfig:
								SecurityGroupIds:
								  - sg-085912345678492fb
								SubnetIds:
								  - subnet-071f712345678e7c8
								  - subnet-07fd123456788a036`,
						6
					)
				},
				{
					fileName: 'template.yaml',
					body: codeIndent(
						`Resources:
						  HelloWorldFunction:
							Type: AWS::Serverless::Function # More info about Function Resource: https://github.com/awslabs/serverless-application-model/blob/master/versions/2016-10-31.md#awsserverlessfunction
							Properties:
							  CodeUri: hello_world/
							  Handler: app.lambda_handler
							  Runtime: python3.9
							  Architectures:
								- x86_64
							  Role: arn:aws:iam::000011112222:role/LambdaRole`,
						6
					)
				},
				{
					fileName: 'template.yaml',
					body: codeIndent(
						`Resources:
						  HelloWorldApi:
							Type: AWS::Serverless::Api
							Properties:
							  Name: HelloWorldApi  
							  StageName: Prod`,
						6
					)
				},
				{
					fileName: 'template.yaml',
					body: codeIndent(
						`Resources:
						  HelloWorldApi:
							Type: AWS::Serverless::Api
							Properties:
							  Name: HelloWorldApi  
							  StageName: Prod
							  
						  HelloWorldFunction:
						  	Type: AWS::Serverless::Function # More info about Function Resource: https://github.com/awslabs/serverless-application-model/blob/master/versions/2016-10-31.md#awsserverlessfunction
						  	Properties:
						  	CodeUri: hello_world/
							Handler: app.lambda_handler
							Runtime: python3.9
							Architectures:
							  - x86_64
							Role: arn:aws:iam::000011112222:role/LambdaRole
							Events:
							HelloWorldApi:
							  Type: Api
							  Properties:
								Path: /hello
								Method: get
								RestApiId: !Ref HelloWorldApi`,
						6
					)
				},
				{
					fileName: 'template.yaml',
					body: codeIndent(
						`Resources:
						  HelloWorldApi:
							Type: AWS::Serverless::Api
							Properties:
							  Name: HelloWorldApi  
							  StageName: Prod
							  EndpointConfiguration:
							    Type: REGIONAL`,
						6
					)
				},
				{
					fileName: 'template.yaml',
					body: codeIndent(
						`AWSTemplateFormatVersion: '2010-09-09'
						Transform: AWS::Serverless-2016-10-31
						Description: >
						  sam-app
						
						  Sample SAM Template for sam-app
						
						# More info about Globals: https://github.com/awslabs/serverless-application-model/blob/master/docs/globals.rst
						Globals:
						  Function:
							Timeout: 3
						
						Resources:
						  HelloWorldApi:
							Type: AWS::Serverless::Api
							Properties:
							  Name: HelloWorldApi  
							  StageName: Prod
							  EndpointConfiguration:
								Type: REGIONAL
						  
						  HelloWorldFunction:
							Type: AWS::Serverless::Function # More info about Function Resource: https://github.com/awslabs/serverless-application-model/blob/master/versions/2016-10-31.md#awsserverlessfunction
							Properties:
							  CodeUri: hello_world/
							  Handler: app.lambda_handler
							  FunctionName: HelloWorldFunction
							  Runtime: python3.9
							  Role: arn:aws:iam::000011112222:role/LambdaExecutionRole
							  Architectures:
								- x86_64
							  Events:
								HelloWorldApi:
								  Type: Api # More info about API Event Source: https://github.com/awslabs/serverless-application-model/blob/master/versions/2016-10-31.md#api
								  Properties:
									Path: /hello
									Method: get
									RestApiId: !Ref HelloWorldApi`,
						6
					)
				},
			],
			python: [
				{
					fileName: 'get_time.py',
					body: codeIndent(
						`from datetime import datetime

						def get_time():
							return datetime.now().strftime("%m/%d/%Y, %H:%M:%S")`,
						6
					)
				},
				{
					fileName: 'app.py',
					body: codeIndent(
						`import json
						from get_time import get_time
						
						def lambda_handler(event, context):
						
							return {
								"statusCode": 200,
								"body": json.dumps({
									"message": get_time(),
								}),
							}
						`,
						6
					)
				},
			]
		}
	};
}
