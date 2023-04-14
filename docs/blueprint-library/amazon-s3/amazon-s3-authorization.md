---
id: amazon-s3-authorization
sidebar_position: 1
title: Amazon S3 Blueprint Authorization
hide_title: true
sidebar_label: Authorization
description: Instructions on how to authorize Amazon S3 to work with Shipyard's low-code Amazon S3 templates.
keywords:
  - amazon s3
  - blueprint
  - template
  - authorization
---

# Amazon S3 Authorization

## Overview

In order to get started with the S3 Blueprints, an IAM user with the required AWS permissions and programmatic access is required.

## Steps

1. Login to your [AWS Management Console](https://aws.amazon.com/console/)  
2. Search for and go to the IAM service page  
	![IAM service search](../../.gitbook/assets/iam-service-search.png)  
3. Select "Policies" on the left sidebar  
	![Policies left sidebar](../../.gitbook/assets/policies-left-sidebar.png)  
4. Click the blue "Create policy" button  
5. Select the "Visual editor" tab  
6. Add required S3 permissions  
	a. On the "Service" dropdown, search for and select "S3"  
	b. On the "Actions" dropdown  
		ii. Under "Get" select "GetObject"  
		iii. Under "Write" select "PutObject"  
		![S3 upload and download actions](../../.gitbook/assets/s3-upload-download-actions.png)  
	c. On the "Resources" dropdown, click "Add ARN"  
		i. Add bucket location example "shipyard-authorization-demo"  
		![S3 upload and download bucket ARN](../../.gitbook/assets/s3-upload-download-bucket-arn.png)  
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