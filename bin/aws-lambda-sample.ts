#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsLambdaSampleStack } from '../lib/aws-lambda-sample-stack';
import { CDKContext } from '../types';

export const getContext = async (app: cdk.App): Promise<CDKContext> => {
  return new Promise (async (resolve, reject) => {
    try {
      const environment = app.node.tryGetContext('environments').find((e: any) => e.branchName === "main")
      const globals = app.node.tryGetContext('globals');
      return resolve ({ ... globals, ... environment });
    }
    catch (error) {
      console.error (error);
      return reject();
    }
  }
  )
};

const createStacks = async () => {
  try {
    const app = new cdk.App();
    const context = await getContext(app);
    const tags: any = {
      Environment: context.environment,
    };

    const stackProps: cdk.StackProps = {
      env: {
        region: context.region,
        account: context.accountNumber,
      },
      stackName: `${context.appName}-stack-${context.environment}`,
      description: `This is a lambda sample stack`,
      tags,
    };
    new AwsLambdaSampleStack(app, `${context.appName}-stack-${context.environment}`, context, stackProps);
  }
  catch (error) {
    console.error(error);
  }
};

createStacks();