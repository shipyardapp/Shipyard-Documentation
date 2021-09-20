---
id: google-cloud-storage
title: Google Cloud Storage Blueprints
hide_title: true
sidebar_label: Google Cloud Storage
description: Information about the Blueprint Library connections with Google Cloud Storage.
keywords:
  - google cloud storage
  - gcs
  - template
  - blueprint
---

# Google Cloud Storage Blueprints

## Authorization

### Overview

In order to get started with the Google Cloud Storage Blueprints, a service account with the necessary GCP permissions is required.

### Creating a Service Account for Google Cloud Storage (GCS)

1. Login to your [GCP console](https://console.cloud.google.com/)  
2. Using the top selector, choose the Project where your Google Cloud Storage bucket lives.  
![Select Project](../.gitbook/assets/shipyard_2021_09_15_17_36_07.png)
3. Hover over "**IAM & Admin**" in the sidebar  
	![IAM Service Accounts sidebar](../.gitbook/assets/iam-service-accounts-sidebar-selection.png)  
3. Click "**Service Accounts**" in the options  
4. Click "**+ CREATE SERVICE ACCOUNT**"  
	![Create service account button](../.gitbook/assets/create-service-account-button.png)  
5. Add a service account name  
	a. Do not edit the ID field which will auto-populate  
	b. Optionally add a description to the service account  
	![Add service account name](../.gitbook/assets/cloud-storage-service-account-name.png)  
6. Click "**CREATE AND CONTINUE**"  
7. Click "**Select a role**" dropdown  
	a. Scroll down the options and hover over "**Cloud Storage**"  
	b. Select "**Storage Admin**"  
	![Add Cloud Storage role](../.gitbook/assets/cloud-storage-role-cloud-storage-storage-admin-selection.png)  
8. Click "**CONTINUE**"  
	![Role](../.gitbook/assets/shipyard_2021_09_19_18_21_34.png)
9.  Click "**DONE**"  
10. Find the new service on the service accounts table  
	a. Click the menu dots under the "Actions" column  
	b. Click "**Manage keys**"  
	![Service accounts table](../.gitbook/assets/cloud-storage-service-accounts-table-manage-keys-dropdown.png)  
12. On the Keys page click the "**ADD KEY**" dropdown  
13. Click "**Create new key**"  
	![Create key dropdown button](../.gitbook/assets/service-account-add-key-button.png)  
14. In the popup modal select "**JSON**"  
15. Click "**CREATE**"  
16. Copy the downloaded file JSON contents and save for safe keeping. The contents of this file can be pasted into the "**Service Account**" input for all Google Cloud Storage Blueprints.  

## Download Files Blueprint

### Overview

Quickly export one or more files from a Google Cloud Storage (GCS) bucket. The [match type](../reference/blueprint-library/match-type.md) selected greatly affects how this Blueprint works.

### Variables

| Variable Name | Required?| Description |
|:---|:---|:---|
| **Bucket Name** | ✔️ | Name of the GCS bucket to fetch the file from. |
| **GCS Folder Name** |➖ | Name of the folder where the file is stored in the GCS Bucket. If left blank, looks in the root directory. |
| **GCS File Name Match Type** | ✔️ | Determines if the text in "GCS File Name" will look for one file with exact match, or multiple files using regex.|
| **GCS File Name** | ✔️ | Name of the target file in the GCS bucket. Can be regex if "Match Type" is set accordingly. |
| **Local Folder Name** | ➖ | Folder where the file(s) should be downloaded. Leaving blank will place the file in the home directory. |
| **Local File Name** | ✔️ | What to name the file(s) being downloaded. If left blank, defaults to the original file name(s). |
| **Service Account** | ✔️ | JSON from a Google Cloud Service account key. |

## Upload Files Blueprint

### Overview

Import one or more files directly into a Google Cloud Storage (GCS) bucket. The [match type](../reference/blueprint-library/match-type.md) selected greatly affects how this Blueprint works.

If the folder name provided is new, a new folder will automatically be created.

All files uploaded will inherit the default settings for the GCS bucket.

### Variables

| Variable Name |Required?| Description |
|:---|:---|:---|
| **Local Folder Name** |➖ | Name of the local folder on Shipyard to upload the target file from. If left blank, will look in the home directory. |
| **Local File Name Match Type** | ✔️ | Determines if the text in "Local File Name" will look for one file with exact match, or multiple files using regex. |
| **Local File Name** | ✔️ | Name of the target file on Shipyard. Can be regex if "Match Type" is set accordingly. |
| **GCS Bucket Name** | ✔️ | Name of the GCS bucket to upload the file(s) to. |
| **GCS Folder Name** |➖ | Folder in the GCS bucket to upload the file(s) to. If left blank, will upload to the root directory. |
| **GCS File Name** | ✔️ | What to name the file(s) being downloaded. If left blank, defaults to the original file name(s). |
| **Service Account** | ✔️ |JSON from a Google Cloud Service account key.  |

## Helpful Links

[Google Cloud Storage Python Documentation](https://cloud.google.com/storage/docs/reference/libraries#client-libraries-install-python)
