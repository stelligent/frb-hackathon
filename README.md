# frb-hackathon-cloud9-demo

this is a resource dump of FRB hackathon cloud9 presentation

## in this repo...

### `cloud9-cfn.yml`

A sample CloudFormation file for you so you can deploy a basic Cloud9 IDE setup in your own AWS account.

- Stack has only one output and that's a link to your deployed IDE.
- Once deployed through CloudFormation, open _Cloud9Endpoint_ output in your browser and click _Open IDE_.
- Consult CloudFormation documentation on how to deploy the IDE with this YAML file.

### `cloud9-cdk.js`

A CDK stack that generates `cloud9-cfn.yml`. If you prefer CDK, you may use this code, otherwise skip it.

- Stack was written with a developer preview version of Cloud9 CDK module, things might change later.
- Consult AWS CDK documentation on how to deploy the IDE with this JS file.
