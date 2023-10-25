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

![](https://cdn.sanity.io/images/2xyydva6/production/54bfac0aa4bd528b56ef88940946b91c2c119c2c-1634x86.png?w=450)

3. Search for "**Google Sheets API**" in the search bar  

![](https://cdn.sanity.io/images/2xyydva6/production/572f61ada00a8be3a5075e242721380ce8ca5fee-594x129.png?w=450)

3. Depending on your existing setup, either click "**ENABLE**" or "**MANAGE**"
4. Click "**Credentials**" in the sidebar  

![](https://cdn.sanity.io/images/2xyydva6/production/7ae707872b14ae6478fc0b8cb5ad7e071885e60a-265x229.png?w=450)

5. Click "**+ CREATE CREDENTIALS**" and select "**Service account**" from the options  

![](https://cdn.sanity.io/images/2xyydva6/production/c7cde0355f789ade9476d59c55c320c8b0adf8b0-455x168.png?w=450)

6. Add a service account name  
	a. Do not edit the ID field which will auto-populate  
	b. Optionally add a description to the service account  

![](https://cdn.sanity.io/images/2xyydva6/production/8c9427d4f404f20701928e58592041b8630b2db3-541x352.png?w=450)

7. Click "**CREATE AND CONTINUE**"  
8. Click "**Select a role**" dropdown  
	a. Scroll down the options and hover over "**Basic**"  
	b. Select "**Editor**"  

![](https://cdn.sanity.io/images/2xyydva6/production/9d73bd6bba313531f225bba75b9707582279a30d-554x332.png?w=450)

9. Click "**CONTINUE**"  
10. Click "**DONE**"  
11. Find the new service on the service accounts table  
	a. Click the pencil icon under the "Actions" column to edit

![](https://cdn.sanity.io/images/2xyydva6/production/950c4edef15e3f322ba1eb3a10261b86ced1b44c-988x112.png?w=450)

12. Click the "**KEYS**" tab  at the top

![](https://cdn.sanity.io/images/2xyydva6/production/d71521ea0442c30858dfdcf813340a07f2bc5b48-477x55.png?w=450)

13. On the Keys tab, click the "**ADD KEY**" dropdown  and select "**Create new key**"
14. Click "**Create new key**"  

![](https://cdn.sanity.io/images/2xyydva6/production/ea6a61dd90c015952071b1f9e2f0dae0569938e7-183x130.png?w=450)

15. In the popup modal select "**JSON**"  and click "**CREATE**"
16. Copy the downloaded file JSON contents and save for safe keeping. The contents of this file can be pasted into the "**Service Account**" input for all Google Sheets Blueprints.
17. Enable the Google Drive API [here](https://console.developers.google.com/apis/api/drive.googleapis.com/overview)
![](https://cdn.sanity.io/images/2xyydva6/production/1a558dc0e2c2f739aa92fd43ecbe9c1899938a3d-568x223.png?w=450)

## Inviting a Service Account to a Google Sheet

1. Navigate to the [credentials page](https://console.cloud.google.com/apis/api/sheets.googleapis.com/credentials) for the Google Sheets API. 
2. In the table shown, copy the email/name of the service account you want to use. It should be formatted like `name@project.iam.gserviceaccount.com`

![](https://cdn.sanity.io/images/2xyydva6/production/950c4edef15e3f322ba1eb3a10261b86ced1b44c-988x112.png?w=450)

**_NOTE:_** This value can also be found either be found under "client_email" in the Service Account JSON.

3. Navigate to the Google Sheet you're wanting to use.
4. Click the Share button.

![](https://cdn.sanity.io/images/2xyydva6/production/3198ab679c9cbc653bb911beecf87e7223a66292-1268x121.png?w=450)

5. Paste the email of the service account from step 2 and click the email option that appears (or press Enter)  

![](https://cdn.sanity.io/images/2xyydva6/production/c7b0e8b7fdbf42765805de26858dbcd0dcc2e7e3-669x409.png?w=450)

6. Ensure that the Service Account email has Editor access.
7. Click "**Send**".

![](https://cdn.sanity.io/images/2xyydva6/production/40077ab85b73526b965fe5969590ae4606c86bfa-665x473.png?w=450)

8. Click "**Share anyway**"  

![](https://cdn.sanity.io/images/2xyydva6/production/03140e2248d816b73e1643cf27f1352f37da5a85-405x253.png?w=450)

9. Now you can start using any of our Blueprints with that sheet!

**_INFO:_** Pro Tip
Want to access multiple Google Sheets files with the same credentials? You can also share Google Drive folders with the Service Account Email, causing every file in that folder to be accessible.


## Accessing the Sheet Name or ID
1. Navigate to the Google Sheet you want to access with a Blueprint. 
2. a. Copy the Name, shown in the top-left of the screen. This name is case sensitive.  **OR**  
b. Copy the ID, found in the URL `https://docs.google.com/spreadsheets/d/`**`sheet_id`**`/edit`

![](https://cdn.sanity.io/images/2xyydva6/production/740695fa050a34ee45e8b1c8883b0a1cc9862820-773x99.png?w=450)

**_INFO:_** Pro Tip
The ID of your Spreadsheet will never change, while the Spreadsheet name can be updated. We recommend using the ID where possible.

