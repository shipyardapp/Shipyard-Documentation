---
id: amazon-s3-authorization
sidebar_position: 1
title: Amazon S3 Blueprint Authorization
hide_title: true
sidebar_label: Authorization
description: Instructions on how to authorize Amazon S3 to work with Platform's low-code Amazon S3 templates.
keywords:
  - amazon s3
  - blueprint
  - template
  - authorization
---

#  Authorization

In order to get started with the S3 Blueprints, an IAM user with the required AWS permissions and programmatic access is required.

## Steps

1. Login to your [AWS Management Console](https://aws.amazon.com/console/)  
2. Search for and go to the IAM service page  

	![IAM service search](https://cdn.sanity.io/images/2xyydva6/production/fc33e36fa523914503b084e63fc3e2fa9a4f4ea9-612x230.png?w=450)

3. Select "Policies" on the left sidebar  

	![Policies left sidebar](https://cdn.sanity.io/images/2xyydva6/production/5c0bbbaa7215ad884d3518aa60e2e772c519c2a0-246x370.png?w=450) 

4. Click the blue "Create policy" button  
5. Select the "Visual editor" tab  
6. Add required S3 permissions  
	a. On the "Service" dropdown, search for and select "S3"  
	b. On the "Actions" dropdown  
		ii. Under "Get" select "GetObject"  
		iii. Under "Write" select "PutObject"  

	![S3 upload and download actions](https://cdn.sanity.io/images/2xyydva6/production/718a7a687e5e0787a630e2e16dceb50b28755aa0-922x459.png?w=450)

	c. On the "Resources" dropdown, click "Add ARN"  
		i. Add bucket location example "shipyard-authorization-demo"  

	![S3 upload and download bucket ARN](https://cdn.sanity.io/images/2xyydva6/production/0dca8fb04f08a670930dc0b77484fcd190025924-630x440.png?w=450)

	d. Skip the "Request Conditions" dropdown  
7. Click "Next: Tags"  
8. Click "Next: Review"  
9. Add policy name  
10. Click "Create policy"  
11. Attach to an IAM User with programmatic access  
12. Add the IAM user's access key ID and secret access key into the corresponding fields on the Blueprint  
	i. These values can be generated for any IAM User with programmatic access in the "Users" page  

## Notes

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "s3:PutObject",
                "s3:GetObject"
            ],
            "Resource": "arn:aws:s3:::shipyard-authorization-demo/*"
        }
    ]
}
```
