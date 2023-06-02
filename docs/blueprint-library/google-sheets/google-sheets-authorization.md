---
id: google-sheets-authorization
sidebar_position: 1
title: Google Sheets Blueprint Authorization
hide_title: true
sidebar_label: Authorization
description: Instructions on how to authorize Google Sheets to work with Shipyard's low-code Google Sheets templates.
keywords:
  - google sheets
  - blueprint
  - template
  - authorization
---

# Google Sheets Authorization

In order to get started with the Google Sheets Blueprints, a service account with the necessary GCP permissions is required. Additionally, this Service account will need to be invited to any Google Sheet you wish to access programatically.

## Creating a Service Account for Google Sheets

1. Login to your [GCP console](https://console.cloud.google.com/)  
2. Using the top selector, choose the Project where you want your Google Sheets service accounts to live.  
![Select Project](../../.gitbook/assets/shipyard_2021_09_15_17_36_07.png)
3. Search for "**Google Sheets API**" in the search bar  
	![Search bar Google Sheets API](../../.gitbook/assets/google-sheets-search-bar.png)  
3. Depending on your existing setup, either click "**ENABLE**" or "**MANAGE**"
4. Click "**Credentials**" in the sidebar  
	![Credentials sidebar](../../.gitbook/assets/google-sheets-credentials-sidebar.png)  
5. Click "**+ CREATE CREDENTIALS**" and select "**Service account**" from the options  
	![Credentials options](../../.gitbook/assets/google-sheets-create-credentials-options.png)  
6. Add a service account name  
	a. Do not edit the ID field which will auto-populate  
	b. Optionally add a description to the service account  
	![Add service account name](../../.gitbook/assets/google-sheets-service-account-name.png)  
7. Click "**CREATE AND CONTINUE**"  
8. Click "**Select a role**" dropdown  
	a. Scroll down the options and hover over "**Basic**"  
	b. Select "**Editor**"  
	![Add Editor role](../../.gitbook/assets/google-sheets-basic-editor-role-selection.png)  
9. Click "**CONTINUE**"  
10. Click "**DONE**"  
11. Find the new service on the service accounts table  
	a. Click the pencil icon under the "Actions" column to edit
	![Service accounts table](../../.gitbook/assets/google-sheets-service-accounts-table-edit.png)  
12. Click the "**KEYS**" tab  at the top
	![Service account keys tab](../../.gitbook/assets/google-sheets-service-account-tabs.png)  
13. On the Keys tab, click the "**ADD KEY**" dropdown  and select "**Create new key**"
14. Click "**Create new key**"  
	![Create key dropdown button](../../.gitbook/assets/service-account-add-key-button.png)  
15. In the popup modal select "**JSON**"  and click "**CREATE**"
16. Copy the downloaded file JSON contents and save for safe keeping. The contents of this file can be pasted into the "**Service Account**" input for all Google Sheets Blueprints.

## Inviting a Service Account to a Google Sheet

1. Navigate to the [credentials page](https://console.cloud.google.com/apis/api/sheets.googleapis.com/credentials) for the Google Sheets API. 
2. In the table shown, copy the email/name of the service account you want to use. It should be formatted like `name@project.iam.gserviceaccount.com`
![Service accounts table](../../.gitbook/assets/google-sheets-service-accounts-table-edit.png)  
:::note
This value can also be found either be found under "client_email" in the Service Account JSON.
:::
3. Navigate to the Google Sheet you're wanting to use.
4. Click the Share button.
![Share Google Sheet](../../.gitbook/assets/shipyard_2021_09_17_17_33_14.png)
5. Paste the email of the service account from step 2 and click the email option that appears (or press Enter)  
![Add Service Account Email](../../.gitbook/assets/shipyard_2021_09_17_17_40_05.png)
6. Ensure that the Service Account email has Editor access.
7. Click "**Send**".
![Invite Service Account to Google Sheets](../../.gitbook/assets/shipyard_2021_09_17_17_40_53.png)
8. Click "**Share anyway**"  
![Share outside of organization](../../.gitbook/assets/shipyard_2021_09_17_17_41_28.png)
9. Now you can start using any of our Blueprints with that sheet!

:::info Pro Tip
Want to access multiple Google Sheets files with the same credentials? You can also share Google Drive folders with the Service Account Email, causing every file in that folder to be accessible.
:::

## Accessing the Sheet Name or ID
1. Navigate to the Google Sheet you want to access with a Blueprint. 
2. a. Copy the Name, shown in the top-left of the screen. This name is case sensitive.  **OR**  
b. Copy the ID, found in the URL `https://docs.google.com/spreadsheets/d/`**`sheet_id`**`/edit`
![Sheet Name or Sheet URL](../../.gitbook/assets/shipyard_2021_09_19_15_13_12.png)

:::info Pro Tip
The ID of your Spreadsheet will never change, while the Spreadsheet name can be updated. We recommend using the ID where possible.
:::