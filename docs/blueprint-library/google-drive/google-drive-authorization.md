---
id: google-drive-authorization
sidebar_position: 1
title: Google Drive Blueprint Authorization
hide_title: true
sidebar_label: Authorization
description: Instructions on how to authorize Google Drive to work with Shipyard's low-code Google Drive templates.
keywords:
  - google drive
  - blueprint
  - template
  - authorization
---

# Google Drive Authorization

In order to get started with the Google Drive Blueprints, a service account with the necessary GCP permissions is required. Additionally, this Service account will need to be invited to any files or folders you wish to access programatically.

## Creating a Service Account for Google Drive

1. Login to your [GCP console](https://console.cloud.google.com/)  
2. Using the top selector, choose the Project where you want your Google Drive service account to live.  
![Select Project](../../.gitbook/assets/shipyard_2021_09_15_17_36_07.png)
3. Search for "**Google Drive API**" in the search bar  
	![Search bar Google Drive API](../../.gitbook/assets/google-drive-search-bar.png)  
3. Depending on your existing setup, either click "**ENABLE**" or "**MANAGE**"
4.  Click "**Credentials**" in the sidebar  
	![Credentials Sidebar](../../.gitbook/assets/shipyard_2021_09_19_17_42_42.png) 
5. Click "**+ CREATE CREDENTIALS**" and select "**Service account**" from the options  
	![Credentials options](../../.gitbook/assets/google-sheets-create-credentials-options.png)  
6. Add a service account name  
	a. Do not edit the ID field which will auto-populate  
	b. Optionally add a description to the service account  
	![Add service account name](../../.gitbook/assets/shipyard_2021_09_19_17_47_05.png)
7. Click "**CREATE AND CONTINUE**"  
8.  Click "Select a role" dropdown  
	a. Scroll down the options and hover over "Basic"  
	b. Select "Editor"  
	![Add Editor role](../../.gitbook/assets/google-drive-basic-editor-role-selection.png)  
12. Click "**CONTINUE**"  
13. Click "**DONE**"  
14. Find the new service on the service accounts table  
	a. Click the pencil icon under the "Actions" column to edit  
	![Service accounts table](../../.gitbook/assets/google-drive-service-accounts-table-edit.png)  
15. Click the "**KEYS**" tab  
	![Service account keys tab](../../.gitbook/assets/google-drive-service-account-tabs.png)  
16. On the Keys tab click the "**ADD KEY**" dropdown and click "**Create new key**"  
	![Create key dropdown button](../../.gitbook/assets/service-account-add-key-button.png)  
1.  In the popup modal select "**JSON**"  
2.  Click "**CREATE**"  
3.  Copy the downloaded file JSON contents and save for safe keeping. The contents of this file can be pasted into the "**Service Account**" input for all Google Drive Blueprints. 

## Inviting a Service Account to a Google Drive File

1. Navigate to the [credentials page](https://console.cloud.google.com/apis/api/drive.googleapis.com/credentials) for the Google Drive API. 
2. In the table shown, copy the email/name of the service account you want to use. It should be formatted like `name@project.iam.gserviceaccount.com`
![Service accounts table](../../.gitbook/assets/google-sheets-service-accounts-table-edit.png)  
:::note
This value can also be found either be found under "client_email" in the Service Account JSON.
:::
3. Navigate to the file you're wanting to use.
4. Click the Share button.
![Share Google Sheet](../../.gitbook/assets/shipyard_2021_09_17_17_33_14.png)
5. Paste the email of the service account from step 2 and click the email option that appears (or press Enter)  
![Add Service Account Email](../../.gitbook/assets/shipyard_2021_09_17_17_40_05.png)
6. Ensure that the Service Account email has Editor access.
7. Click "**Send**".
![Invite Service Account to Google Sheets](../../.gitbook/assets/shipyard_2021_09_17_17_40_53.png)
8. Click "**Share anyway**"  
![Share outside of organization](../../.gitbook/assets/shipyard_2021_09_17_17_41_28.png)
9. Now you can start using any of our Blueprints with that file!

:::info Pro Tip
Want to access multiple files with the same credentials? You can also share Google Drive folders with the Service Account Email, causing every file in that folder and its subfolders to be accessible.
:::