---
id: amazon-redshift-authorization
title: Amazon Redshift Blueprint Authorization
hide_title: true
sidebar_label: Authorization
description: Instructions on how to authorize Amazon Redshift to work with Shipyard's low-code Amazon Redshift templates.
keywords:
  - amazon redshift
  - blueprint
  - template
  - authorization
---

# Amazon Redshift Authorization

In order to get started with Redshift Blueprints, the cluster access information must be retrieved.

## Retrieving Redshift Cluster Info

1. Login to your [AWS Management Console](https://aws.amazon.com/console/)  
2. Search for and go to the Redshift service page  
3. Click "Clusters" on the left sidebar  
4. Click "Create cluster" on the Clusters panel  
	![Create cluster button](../../.gitbook/assets/create-cluster-button.png)   
5. In the panel "Database configurations" you will be prompted to provide a user name and user password  
	![Redshift database configurations](../../.gitbook/assets/redshift-database-configurations.png)  
6. Copy these values into the "Input" section of the Blueprint for the Username and Password fields  
	![Redshift Blueprint credentials inputs](../../.gitbook/assets/redshift-blueprint-username-password-input.png)  

## Notes

- AWS [`get-cluster-credentials`](https://docs.aws.amazon.com/cli/latest/reference/redshift/get-cluster-credentials.html) resource for getting a cluster user name and user password via the CLI