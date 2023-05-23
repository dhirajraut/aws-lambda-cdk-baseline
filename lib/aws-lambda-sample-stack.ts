import { Stack, StackProps} from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CDKContext } from '../types';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

export class AwsLambdaSampleStack extends Stack {
  constructor(scope: Construct, id: string, context: CDKContext, props?: StackProps) {
    super(scope, id, props);

    /* Role */
    const role = new iam.Role (this, 'awsLambdaSampleRole-dr', {
        /* https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_iam.Role.html */
        roleName: `${context.appName}-lambda-role-${context.environment}`,
        description: `Lambda role`,
        assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
        managedPolicies: [iam.ManagedPolicy.fromAwsManagedPolicyName('ReadOnlyAccess')],
    });

    const vpc = ec2.Vpc.fromLookup(this, 'vpc', {
      vpcId: context.vpc.id,
    });

    const privateSubnetIds = context.vpc.privateSubnetIds.map((id, index) => ec2.Subnet.fromSubnetId(this, `privateSubnet${index}`, id));

    const securityGroup = ec2.SecurityGroup.fromLookupById(this, 'sg', `$context.securityGroupId`);
    securityGroup.addIngressRule(ec2.Peer.ipv4(context.vpc.cidr), ec2.Port.allTcp(), 'Allow internal VPC Traffic.');

    /* Create lambda here */
  }
}
