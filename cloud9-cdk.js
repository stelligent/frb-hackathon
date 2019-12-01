const cdk = require("@aws-cdk/core");
const ec2 = require("@aws-cdk/aws-ec2");
const cloud9 = require("@aws-cdk/aws-cloud9");

class Cloud9DemoStack extends cdk.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);
    const vpc = new ec2.Vpc(this, "Networking", { maxAzs: 1 });
    const ide = new cloud9.CfnEnvironmentEC2(this, "IDE", {
      description: "Sample Cloud9 IDE for FRB Hackathon",
      instanceType: "t3.small",
      name: "FRB Hackathon Demo",
      subnetId: vpc.selectSubnets({
        subnetType: ec2.SubnetType.PUBLIC
      }).subnets[0].subnetId
    });

    new cdk.CfnOutput(this, "Cloud9Endpoint", {
      description: "Use this URL to access your Cloud9 IDE in a browser",
      value: cdk.Fn.sub(
        "https://${region}.console.aws.amazon.com/cloud9/home/environments/${physicalId}?permissions=owner",
        {
          region: this.region,
          physicalId: ide.ref
        }
      )
    });
  }
}
