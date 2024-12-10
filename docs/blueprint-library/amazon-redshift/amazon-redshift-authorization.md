---
id: amazon-redshift-authorization
sidebar_position: 1
title: Amazon Redshift Blueprint Authorization
hide_title: true
sidebar_label: Authorization
description: Instructions on how to authorize Amazon Redshift to work with Platform's low-code Amazon Redshift templates.
keywords:
  - amazon redshift
  - blueprint
  - template
  - authorization
---

#  Authorization

In order to get started with Redshift Blueprints, the cluster access information must be retrieved.

Additionally, you may need to ensure that Platform [IP Addresses are whitelisted](https://www.shipyardapp.com/docs/faqs/security/ip-whitelist/)

## Retrieving Redshift Cluster Info

1. Login to your [AWS Management Console](https://aws.amazon.com/console/)  
2. Search for and go to the Redshift service page  
3. Click "Clusters" on the left sidebar  
4. Click "Create cluster" on the Clusters panel  
	![Create cluster button](https://cdn.sanity.io/images/2xyydva6/production/53604eae1ecda122a45fbfbabb5017250890e08a-507x183.png?w=450) 
5. In the panel "Database configurations" you will be prompted to provide a user name and user password  
	![Redshift database configurations](https://cdn.sanity.io/images/2xyydva6/production/33e11024b41db691c0c49e210569b92fcb87b6ec-817x384.png?w=450)
6. Copy these values into the "Input" section of the Blueprint for the Username and Password fields  
	![Redshift Blueprint credentials inputs](https://cdn.sanity.io/images/2xyydva6/production/377d795e484b72295338c435de93525060a8d2ac-448x178.png?w=450)

## Notes

- AWS [`get-cluster-credentials`](https://docs.aws.amazon.com/cli/latest/reference/redshift/get-cluster-credentials.html) resource for getting a cluster user name and user password via the CLI
