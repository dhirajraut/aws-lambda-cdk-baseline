
# aws-lambda-cdk-baseline
aws-lambda-cdk-baseline is an AWS Lambda written in Java, for which the infrastructure is created using AWS CDK.


## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template


The project source includes function code and supporting resources:
- `src/main` - A Java function.
- `pom.xml` - A Maven build file.

Use the following instructions to deploy the sample application.

# Requirements
- [Typescript](https://www.npmjs.com/package/typescript)
- [Java 8 runtime environment (SE JRE)](https://www.oracle.com/java/technologies/javase-downloads.html)
- [Maven 3](https://maven.apache.org/docs/history.html)


# Setup
Download or clone this repository.

    $ git clone https://github.com/dhirajraut/aws-lambda-intermettent-exception.git
    $ cd aws-lambda-intermettent-exception
    $ cdk deploy
    $ mvn clean install

    [INFO] Scanning for projects...
    [INFO] -----------------------< com.github.dhirajraut:aws-lambda-intermettent-exception >-----------------------
    [INFO] Building aws-lambda-intermettent-exception 0.0.1-SNAPSHOT
    [INFO] --------------------------------[ jar ]---------------------------------
    ...

# Create AWS Lambda and Upload
Create AWS Lambda using AWS console or CLI, and upload the jar.


# Run
Run the application using AWS Lambda -> test functionality