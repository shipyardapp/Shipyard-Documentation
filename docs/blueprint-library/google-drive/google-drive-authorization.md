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

![](https://cdn.sanity.io/images/2xyydva6/production/c6086521985a1358443a2fda7d7d555468b0a411-594x126.png?w=450)

3. Search for "**Google Drive API**" in the search bar  

![](https://cdn.sanity.io/images/2xyydva6/production/c6086521985a1358443a2fda7d7d555468b0a411-594x126.png?w=450)

3. Depending on your existing setup, either click "**ENABLE**" or "**MANAGE**"
4.  Click "**Credentials**" in the sidebar  

![](https://cdn.sanity.io/images/2xyydva6/production/c25bed45caec57a4bdf20647d33a3e1c074f6e2f-254x221.png?w=450)

5. Click "**+ CREATE CREDENTIALS**" and select "**Service account**" from the options  

![](https://cdn.sanity.io/images/2xyydva6/production/c7cde0355f789ade9476d59c55c320c8b0adf8b0-455x168.png?w=450)

6. Add a service account name  
	a. Do not edit the ID field which will auto-populate  
	b. Optionally add a description to the service account  

![](https://cdn.sanity.io/images/2xyydva6/production/2c3cc345633c6cb4cb51bd03395cbcc7e07699f5-540x355.png?w=450)

7. Click "**CREATE AND CONTINUE**"  
8.  Click "Select a role" dropdown  
	a. Scroll down the options and hover over "Basic"  
	b. Select "Editor"  

![](https://cdn.sanity.io/images/2xyydva6/production/d13a1b878b5a0f2f72a79afe82216aee2b01e353-549x335.png?w=450)

12. Click "**CONTINUE**"  
13. Click "**DONE**"  
14. Find the new service on the service accounts table  
	a. Click the pencil icon under the "Actions" column to edit  

![](https://cdn.sanity.io/images/2xyydva6/production/04cc007fb42c0903a15498f9e08e227cb4c7e37d-990x117.png?w=450)

15. Click the "**KEYS**" tab  

![](https://cdn.sanity.io/images/2xyydva6/production/9580f670da956b9428bcdd618600a5359cd5571c-485x57.png?w=450)

16. On the Keys tab click the "**ADD KEY**" dropdown and click "**Create new key**"  

![](https://cdn.sanity.io/images/2xyydva6/production/ea6a61dd90c015952071b1f9e2f0dae0569938e7-183x130.png?w=450)

1.  In the popup modal select "**JSON**"  
2.  Click "**CREATE**"  
3.  Copy the downloaded file JSON contents and save for safe keeping. The contents of this file can be pasted into the "**Service Account**" input for all Google Drive Blueprints. 

## Inviting a Service Account to a Google Drive File

1. Navigate to the [credentials page](https://console.cloud.google.com/apis/api/drive.googleapis.com/credentials) for the Google Drive API. 
2. In the table shown, copy the email/name of the service account you want to use. It should be formatted like `name@project.iam.gserviceaccount.com`

![](https://cdn.sanity.io/images/2xyydva6/production/950c4edef15e3f322ba1eb3a10261b86ced1b44c-988x112.png?w=450)

**_NOTE:_** This value can also be found either be found under "client_email" in the Service Account JSON.

3. Navigate to the file you're wanting to use.
4. Click the Share button.

![](https://cdn.sanity.io/images/2xyydva6/production/3198ab679c9cbc653bb911beecf87e7223a66292-1268x121.png?w=450)

5. Paste the email of the service account from step 2 and click the email option that appears (or press Enter)  

![](https://cdn.sanity.io/images/2xyydva6/production/c7b0e8b7fdbf42765805de26858dbcd0dcc2e7e3-669x409.png?w=450)

6. Ensure that the Service Account email has Editor access.
7. Click "**Send**".

![](https://cdn.sanity.io/images/2xyydva6/production/40077ab85b73526b965fe5969590ae4606c86bfa-665x473.png?w=450)

8. Click "**Share anyway**"  

![](https://cdn.sanity.io/images/2xyydva6/production/03140e2248d816b73e1643cf27f1352f37da5a85-405x253.png?w=450)

9. Now you can start using any of our Blueprints with that file!

**_INFO:_** Pro Tip
Want to access multiple files with the same credentials? You can also share Google Drive folders with the Service Account Email, causing every file in that folder and its subfolders to be accessible.


## Drive and Folder ID's
When providing the `Shared Drive` or the `Google Drive Folder`, you have the option to either provide the name of the Drive/Folder or the ID. It is recommended to provide the ID, since that is unique. Both the ID's can be found from the URL. 

##### Drive ID
All Drive ID's start with `0A` and can be found by navigating to the root of the drive, and accessing it from the URL:
![](https://cdn.sanity.io/images/2xyydva6/production/3085f7a9bb91017f7d778a64f78210a2b618e7b7-711x209.png?w=450)

##### Folder ID
All Folder ID's start with a 1 and are 33 characters long. It can be found by selecting the folder and accessing it from the URL:
![](https://cdn.sanity.io/images/2xyydva6/production/49ef1377c7bdd99db61f84f27f9a5791efe740e9-835x217.png?w=450)


