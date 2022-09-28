---
id: google-bigquery-authorization
title: Google BigQuery Blueprint Authorization
hide_title: true
sidebar_label: Authorization
description: Instructions on how to authorize Google BigQuery to work with Shipyard's low-code Google BigQuery templates.
keywords:
  - bigquery
  - blueprint
  - template
  - authorization
---

# Google BigQuery Authorization

In order to get started with the Google BigQuery Blueprints, a service account with the necessary GCP permissions is required. All BigQuery Blueprints are still subject to [BigQuery quotas and limits](https://cloud.google.com/bigquery/quotas#queries).

## Creating a BigQuery Service Account

1. Login to your [GCP console](https://console.cloud.google.com/)
2. Using the top selector, choose the Project where your BigQuery Instance lives.  
![Select Project](../../.gitbook/assets/shipyard_2021_09_15_17_36_07.png)
3. Open the sidebar and select "**IAM & Admin**"  
	![IAM Service Accounts sidebar](../../.gitbook/assets/iam-service-accounts-sidebar-selection.png)  
3. Click "**Service Accounts**" in the options  
4. Click "**+ CREATE SERVICE ACCOUNT**"  
	![Create service account button](../../.gitbook/assets/create-service-account-button.png)  
5. Add a service account name  
	a. Do not edit the ID field which will auto-populate  
	b. Optionally add a description to the service account  
	![Add service account name](../../.gitbook/assets/bigquery-service-account-name.png)  
6. Click "**CREATE AND CONTINUE**"  
7. Click "**Select a role**" dropdown  
	
	a. Search for and select "**BigQuery Data Editor**"  
	![](../../.gitbook/assets/shipyard_2021_09_15_17_27_59.png)
	b. "Click "+ ADD ANOTHER ROLE"  
	c. Search for and select "**BigQuery Job User**"  
	![](../../.gitbook/assets/shipyard_2021_09_15_17_28_31.png)
	:::info
	If you want to use our "Store Query Results in Google Cloud Storage" Blueprint, you will also need to:
	
	a. "Click "+ ADD ANOTHER ROLE"  
	b. Click the "**Select a role**" dropdown  
	c. Search for and select **Storage Object Admin**  
	![Add Cloud Storage role](../../.gitbook/assets/bigquery-role-cloud-storage-object-creator-selection.png)
	:::  

8. Click "**CONTINUE**"  
9. Click "**DONE**"  
10. Find the new service on the service accounts table  
	a. Click the menu dots under the "Actions" column  
	b. Click "**Manage keys**"  
	![Service accounts table](../../.gitbook/assets/bigquery-service-accounts-table-manage-keys-dropdown.png)  
11. On the Keys page click the "**ADD KEY**" dropdown  
12. Click "**Create new key**"  
	![Create key dropdown button](../../.gitbook/assets/service-account-add-key-button.png)  
13. In the popup modal select the "**JSON**" radio button  
14. Click "**CREATE**"  
15. Copy the downloaded file JSON contents and save for safe keeping. The contents of this file can be pasted into the "**Service Account**" input for all BigQuery Blueprints.
