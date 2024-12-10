---
id: amazon-athena-authorization
sidebar_position: 1
title: Amazon Athena Blueprint Authorization
hide_title: true
sidebar_label: Authorization
description: Instructions on how to authorize Amazon Athena to work with Platform's low-code Amazon Athena templates.
keywords:
  - amazon athena
  - blueprint
  - template
  - authorization
---

#  Authorization

In order to get started with the Athena Blueprints, an IAM user with the required AWS permissions and programmatic access is required.

Additionally, you may need to ensure that Platform [IP Addresses are whitelisted](https://www.shipyardapp.com/docs/faqs/security/ip-whitelist/)

## Steps

1. Login to your [AWS Management Console](https://aws.amazon.com/console/)  
2. Search for and go to the IAM service page  

	![IAM service search](https://cdn.sanity.io/images/2xyydva6/production/fc33e36fa523914503b084e63fc3e2fa9a4f4ea9-612x230.png?w=450)

3. Select "Policies" on the left sidebar  

	![Policies left sidebar](https://cdn.sanity.io/images/2xyydva6/production/5c0bbbaa7215ad884d3518aa60e2e772c519c2a0-246x370.png?w=450)

4. Click the blue "Create policy" button  
5. Select the "Visual editor" tab  
6. Add required Athena permissions  
	a. On the "Service" dropdown, search for and select "Athena"  

		![Search select athena](https://cdn.sanity.io/images/2xyydva6/production/03ddc55d0be824c32683dccc9fb2607de7b2bb4f-1079x471.png?w=450) 

	b. On the "Actions" dropdown  
		i. Under "Read" select "GetQueryExecution"  
		ii. Under "Write" select "StartQueryExecution"  

		![Athena read write actions selections](https://cdn.sanity.io/images/2xyydva6/production/308332c8fb0d5f8d954ce59a7e5b735ff65e3b7e-1061x704.png?w=450)

	c. On the "Resources" dropdown, click "Add ARN"  
		i. Add your region ID and workgroup name or select "Any" for both options - this example, the region has been set to `"*"` and the workgroup set to `"primary"`  

		![Add Athena ARN](https://cdn.sanity.io/images/2xyydva6/production/15793acb2d5e732a4863feac4d67b7d8bb8cb16f-621x481.png?w=450)

	d. Skip the "Request Conditions" dropdown  
	e. Click "Add additional permissions" to add the next set of permissions  
7. Add required S3 permissions (several separate groups are needed for S3)  
	a. On the "Service" dropdown, search for and select "S3"  
	b. On the "Actions" dropdown  
		i. Under "List" select "ListBucket"  
	c. On the "Resources" dropdown, click "Add ARN"  
		i. Add a bucket for source data in our example the bucket is "shipyard-athena-demo"  

		![S3 source bucket ARN](https://cdn.sanity.io/images/2xyydva6/production/3d61baa7d81d23438a4adf98052927c4f55587a3-631x401.png?w=450)

	d. Skip the "Request Conditions" dropdown  
	e. Click "Add additional permissions" to add the next set of permissions  
8. Add required S3 permissions (several separate groups are needed for S3)  
	a. On the "Service" dropdown, search for and select "S3"  
	b. On the "Actions" dropdown  
		i. Under "Read" select "GetObject"  
	c. On the "Resources" dropdown, click "Add ARN"  
		i. Add a bucket location for source data in our example we're using the "shipyard-athena-demo" bucket with an optional "data" folder  

		![S3 source bucket and folder ARN](https://cdn.sanity.io/images/2xyydva6/production/915a02b008775dc1e0556d02cb807a8f40083a01-627x443.png?w=450)

	d. Skip the "Request Conditions" dropdown  
	e. Click "Add additional permissions" to add the next set of permissions  
9. Add required S3 permissions (several separate groups are needed for S3)  
	a. On the "Service" dropdown, search for and select "S3"  
	b. On the "Actions" dropdown  
		i. Under "List" select "ListBucket", "ListBucketMultipartUploads", and "ListMultipartUploadParts"  

		![S3 log bucket list actions](https://cdn.sanity.io/images/2xyydva6/production/7e8d3e80b1d5db5f52d728728372983608fbda51-893x442.png?w=450)

		ii. Under "Get" select "GetObject" and "GetBucketLocation"  

		![S3 log bucket read actions](https://cdn.sanity.io/images/2xyydva6/production/c90a39dba7ba78762e8caae33c0be74e6d5088a3-819x664.png?w=450)

		iii. Under "Write" select "AbortMultipartUpload" and "PutObject"  

		![S3 log bucket write actions](https://cdn.sanity.io/images/2xyydva6/production/bff55f587e1fe7e3217584c1d58804a71e0ce290-807x606.png?w=450)

	c. On the "Resources" dropdown, click "Add ARN"  
		i. Add bucket location and optional folder example "shipyard-athena-demo" and "logs"  

		![S3 log bucket and folder ARN](https://cdn.sanity.io/images/2xyydva6/production/b6df2b5ac94c24763c5f19bf53d11aa893e2a645-620x436.png?w=450)

	d. Skip the "Request Conditions" dropdown  
	e. Click "Add additional permissions" to add the next set of permissions  
10. Add required Glue permissions  
	a. On the "Service" dropdown, search for and select "Glue"  
	b. On the "Actions" dropdown  
		i. Under "Read" select "GetTable"  

		![Glue read action](https://cdn.sanity.io/images/2xyydva6/production/b2ad1a247941447ef65e9e3b45ec7df2786e9226-804x732.png?w=450)

	c. On the "Resources" dropdown, click "Add ARN"
		i. Select "Any in this account" or add specific catalog, database, and table values - in our example we use "Any in this account" for all three (the "Any in this account" has not been selected since this overrides the example account ID with the Platform account ID)  

		![Glue ARN](https://cdn.sanity.io/images/2xyydva6/production/f5cf04f3457960f119a8a0d516a48ea7db321a53-910x295.png?w=450)

	d. Skip the "Request Conditions" dropdown  
11. Click "Next: Tags"  
12. Click "Next: Review"  
13. Add policy name  
14. Click "Create policy"  
15. Attach to an IAM User with programmatic access  
16. Add the IAM user's access key ID and secret access key into the corresponding fields on the Blueprint  
	i. These values can be generated for any IAM User with programmatic access in the "Users" page  

## Notes

- AWS resource on [IAM and Athena](https://docs.aws.amazon.com/athena/latest/ug/security-iam-athena.html)
- Example [IAM policy](https://docs.aws.amazon.com/athena/latest/ug/udf-iam-access.html)
- Full IAM JSON using example values (from the steps outlined in the previous section)

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "athena:StartQueryExecution",
                "athena:GetQueryExecution",
                "s3:ListBucket",
                "glue:GetTable"
            ],
            "Resource": [
                "arn:aws:athena:*:111111111111:workgroup/primary",
                "arn:aws:s3:::shipyard-athena-demo",
                "arn:aws:glue:*:111111111111:catalog",
                "arn:aws:glue:*:111111111111:table/*/*",
                "arn:aws:glue:*:111111111111:database/*"
            ]
        },
        {
            "Sid": "VisualEditor1",
            "Effect": "Allow",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::shipyard-athena-demo/data"
        },
        {
            "Sid": "VisualEditor2",
            "Effect": "Allow",
            "Action": [
                "s3:PutObject",
                "s3:GetObject",
                "s3:ListBucketMultipartUploads",
                "s3:AbortMultipartUpload",
                "s3:ListBucket",
                "s3:GetBucketLocation",
                "s3:ListMultipartUploadParts"
            ],
            "Resource": [
                "arn:aws:s3:::shipyard-athena-demo/logs",
                "arn:aws:s3:::shipyard-athena-demo"
            ]
        }
    ]
}
```
