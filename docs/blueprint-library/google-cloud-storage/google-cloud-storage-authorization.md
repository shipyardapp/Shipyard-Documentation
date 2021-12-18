---
id: google-cloud-storage-authorization
title: Google Cloud Storage Blueprint Authorization
hide_title: true
sidebar_label: Authorization
description: Instructions on how to authorize Google Cloud Storage to work with Shipyard's low-code Google Cloud Storage templates.
keywords:
  - Google Cloud Storage
  - blueprint
  - template
  - authorization
---

# Google Cloud Storage Authorization

In order to get started with the Google Cloud Storage Blueprints, a service account with the necessary GCP permissions is required.

## Creating a Service Account for Google Cloud Storage (GCS)

1. Login to your [GCP console](https://console.cloud.google.com/)  
2. Using the top selector, choose the Project where your Google Cloud Storage bucket lives.  
![Select Project](../../.gitbook/assets/shipyard_2021_09_15_17_36_07.png)
3. Hover over "**IAM & Admin**" in the sidebar  
	![IAM Service Accounts sidebar](../../.gitbook/assets/iam-service-accounts-sidebar-selection.png)  
3. Click "**Service Accounts**" in the options  
4. Click "**+ CREATE SERVICE ACCOUNT**"  
	![Create service account button](../../.gitbook/assets/create-service-account-button.png)  
5. Add a service account name  
	a. Do not edit the ID field which will auto-populate  
	b. Optionally add a description to the service account  
	![Add service account name](../../.gitbook/assets/cloud-storage-service-account-name.png)  
6. Click "**CREATE AND CONTINUE**"  
7. Click "**Select a role**" dropdown  
	a. Scroll down the options and hover over "**Cloud Storage**"  
	b. Select "**Storage Admin**"  
	![Add Cloud Storage role](../../.gitbook/assets/cloud-storage-role-cloud-storage-storage-admin-selection.png)  
8. Click "**CONTINUE**"  
	![Role](../../.gitbook/assets/shipyard_2021_09_19_18_21_34.png)
9.  Click "**DONE**"  
10. Find the new service on the service accounts table  
	a. Click the menu dots under the "Actions" column  
	b. Click "**Manage keys**"  
	![Service accounts table](../../.gitbook/assets/cloud-storage-service-accounts-table-manage-keys-dropdown.png)  
12. On the Keys page click the "**ADD KEY**" dropdown  
13. Click "**Create new key**"  
	![Create key dropdown button](../../.gitbook/assets/service-account-add-key-button.png)  
14. In the popup modal select "**JSON**"  
15. Click "**CREATE**"  
16. Copy the downloaded file JSON contents and save for safe keeping. The contents of this file can be pasted into the "**Service Account**" input for all Google Cloud Storage Blueprints.  