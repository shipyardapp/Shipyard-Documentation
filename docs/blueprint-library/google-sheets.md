---
id: google-sheets
title: Google Sheets Blueprints
hide_title: true
sidebar_label: Google Sheets
description: Information about the Blueprint Library connections with Google Sheets.
keywords:
  - sheets
  - template
  - blueprint
---

# Google Sheets Blueprints

## Authorization

### Overview

In order to get started with the Google Sheets Blueprints, a service account with the necessary GCP permissions is required. Additionally, this Service account will need to be invited to any Google Sheet you wish to access programatically.

### Creating a Service Account for Google Sheets

1. Login to your [GCP console](https://console.cloud.google.com/)  
2. Using the top selector, choose the Project where you want your Google Sheets service accounts to live.  
![Select Project](../.gitbook/assets/shipyard_2021_09_15_17_36_07.png)
3. Search for "**Google Sheets API**" in the search bar  
	![Search bar Google Sheets API](../.gitbook/assets/google-sheets-search-bar.png)  
3. Depending on your existing setup, either click "**ENABLE**" or "**MANAGE**"
4. Click "**Credentials**" in the sidebar  
	![Credentials sidebar](../.gitbook/assets/google-sheets-credentials-sidebar.png)  
5. Click "**+ CREATE CREDENTIALS**" and select "**Service account**" from the options  
	![Credentials options](../.gitbook/assets/google-sheets-create-credentials-options.png)  
6. Add a service account name  
	a. Do not edit the ID field which will auto-populate  
	b. Optionally add a description to the service account  
	![Add service account name](../.gitbook/assets/google-sheets-service-account-name.png)  
7. Click "**CREATE AND CONTINUE**"  
8. Click "**Select a role**" dropdown  
	a. Scroll down the options and hover over "**Basic**"  
	b. Select "**Editor**"  
	![Add Editor role](../.gitbook/assets/google-sheets-basic-editor-role-selection.png)  
9. Click "**CONTINUE**"  
10. Click "**DONE**"  
11. Find the new service on the service accounts table  
	a. Click the pencil icon under the "Actions" column to edit
	![Service accounts table](../.gitbook/assets/google-sheets-service-accounts-table-edit.png)  
12. Click the "**KEYS**" tab  at the top
	![Service account keys tab](../.gitbook/assets/google-sheets-service-account-tabs.png)  
13. On the Keys tab, click the "**ADD KEY**" dropdown  and select "**Create new key**"
14. Click "**Create new key**"  
	![Create key dropdown button](../.gitbook/assets/service-account-add-key-button.png)  
15. In the popup modal select "**JSON**"  and click "**CREATE**"
16. Copy the downloaded file JSON contents and save for safe keeping. The contents of this file can be pasted into the "**Service Account**" input for all Google Sheets Blueprints.

### Inviting a Service Account to a Google Sheet

1. Navigate to the [credentials page](https://console.cloud.google.com/apis/api/sheets.googleapis.com/credentials) for the Google Sheets API. 
2. In the table shown, copy the email/name of the service account you want to use. It should be formatted like `name@project.iam.gserviceaccount.com`
![Service accounts table](../.gitbook/assets/google-sheets-service-accounts-table-edit.png)  
:::note
This value can also be found either be found under "client_email" in the Service Account JSON.
:::
3. Navigate to the Google Sheet you're wanting to use.
4. Click the Share button.
![Share Google Sheet](../.gitbook/assets/shipyard_2021_09_17_17_33_14.png)
5. Paste the email of the service account from step 2 and click the email option that appears (or press Enter)  
![Add Service Account Email](../.gitbook/assets/shipyard_2021_09_17_17_40_05.png)
6. Ensure that the Service Account email has Editor access.
7. Click "**Send**".
![Invite Service Account to Google Sheets](../.gitbook/assets/shipyard_2021_09_17_17_40_53.png)
8. Click "**Share anyway**"  
![Share outside of organization](../.gitbook/assets/shipyard_2021_09_17_17_41_28.png)
9. Now you can start using any of our Blueprints with that sheet!

:::info Pro Tip
Want to access multiple Google Sheets files with the same credentials? You can also share Google Drive folders with the Service Account Email, causing every file in that folder to be accessible.
:::

### Accessing the Sheet Name or ID
1. Navigate to the Google Sheet you want to access with a Blueprint. 
2. a. Copy the Name, shown in the top-left of the screen. This name is case sensitive.  **OR**  
b. Copy the ID, found in the URL `https://docs.google.com/spreadsheets/d/`**`sheet_id`**`/edit`
![Sheet Name or Sheet URL](../.gitbook/assets/shipyard_2021_09_19_15_13_12.png)

:::info Pro Tip
The ID of your Spreadsheet will never change, while the Spreadsheet name can be updated. We recommend using the ID where possible.
:::

## Download Sheet to CSV Blueprint

### Overview

Quickly export data from a single tab on a Google Sheet to a CSV. 

Only one tab of data can be downloaded at a time, since CSVs are flat files. If you leave the tab name blank, the first tab of data will be pulled.

Content of the downloaded file can be refined by providing a cell range. Otherwise, the entire contents of the tab will be downloaded.


### Variables

| Variable Name | Required? |Description |
|:---|:---|:---|
| **Google Sheet Name or ID** | ✔️ | Name or ID of the sheet to fetch data from.|
| **Tab Name** | ➖ | Name of the tab in the sheet to fetch data from. This field is case sensitive. If left blank, data will be pulled from the first tab. |
| **Shared Drive Name** | ➖ | Name of the Shared Drive the sheet exists in. This field is case sensitive. Leave blank if the file does not exist in a Shared Drive. |
| **Local File Name** | ✔️ | Name of file to be generated with the results. Should be `.csv` extension. |
| **Local Folder Name** | ➖ |Folder where the file should be downloaded. Leaving blank will place the file in the home directory. |
| **Cell Range** | ➖ | Range to fetch data from in the sheet formatted as `A1:B10`. If left blank the entire contents of the tab will be fetched. |
| **Service Account** | ✔️ | JSON from a Google Cloud Service account key. |

## Upload CSV to Sheet Blueprint

### Overview

Easily import data from a single CSV into a single Google Sheet tab. The Google Sheet must already exist for the data to be uploaded.

Only one CSV file can be uploaded at a time, since the upload process requires a static starting cell to determine where to place the data. If you leave the starting cell blank, data will be inserted starting at cell A1 and expanding in width and depth as needed.

If you leave the tab name blank, the data will be uploaded into the first tab. If you specify a Tab Name that doesn't exist, it will be created.

This Blueprint is still subject to [Google's limitations](https://support.google.com/drive/answer/37603) which restrict the number of cells, number of columns, and number of characters per cell in a spreadsheet.

### Variables

| Variable Name | Required? |Description |
|:---|:---|:---|
| **Google Sheet Name or ID** | ✔️ | Name or ID of the sheet to put data into. |
| **Tab Name** | ➖ |Name of the tab in the sheet to upload data tp. This field is case sensitive. If left blank, data will be put into the first tab. |
| **Shared Drive Name** | ➖ |Name of the Shared Drive the sheet exists in. This field is case sensitive. Leave blank if the file does not exist in a Shared Drive. |
| **Local File Name** | ✔️ |  Name of the target CSV file on Shipyard to be uploaded to the sheet. |
| **Local Folder Name** | ➖ |Name of the local folder on Shipyard to upload the target file from. If left blank, will look in the home directory. |
| **Starting Cell** | ➖ | Cell to start at when uploading data. If left blank, will start at cell A1. |
| **Service Account** | ✔️ |  JSON from a Google Cloud Service account key. |

## Clear Data from Sheet Blueprint

### Overview

Easily wipe data from a single tab on Google Sheet. Typically used to start fresh before inserting new data.

If you leave the cell range blank, data will be wiped from the entire tab.

If you leave the tab name blank, the data will be cleared from the first tab.

### Variables

| Variable Name | Required? |Description |
|:---|:---|:---|
| **Google Sheet Name or ID** | ✔️ |  Name or ID of the sheet to clear data from. |
| **Tab Name** | ➖ | Name of the tab in the sheet to clear data from. This field is case sensitive. If left blank, data will be put into the first tab.|
| **Shared Drive Name** | ➖ | Name of the Shared Drive the sheet exists in. This field is case sensitive. Leave blank if the file does not exist in a Shared Drive. |
| **Cell Range** | ➖ | Range to clear data from in the sheet formatted as `A1:B10`. If left blank the entire tab will be cleared.|
| **Service Account** | ✔️ |  JSON from a Google Cloud Service account key. |

## Helpful Links

[Google Sheets API Python Documentation](https://developers.google.com/sheets/api/quickstart/python)
