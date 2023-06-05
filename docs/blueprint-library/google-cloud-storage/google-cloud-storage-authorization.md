---
id: google-cloud-storage-authorization
sidebar_position: 1
title: Google Cloud Storage Blueprint Authorization
hide_title: true
sidebar_label: Authorization
description: Instructions on how to authorize Google Cloud Storage to work with Shipyard's low-code Google Cloud Storage templates.
keywords:
- google cloud storage
- blueprint
- template
- authorization
---

# Google Cloud Storage Authorization
In order to get started with the Google Cloud Storage Blueprints, a service account with the necessary GCP permissions is required.

## Creating a Service Account for Google Cloud Storage (GCS)

1. Login to your [GCP console](https://console.cloud.google.com/)  
2. Using the top selector, choose the Project where your Google Cloud Storage bucket lives.  

![](https://cdn.sanity.io/images/2xyydva6/production/54bfac0aa4bd528b56ef88940946b91c2c119c2c-1634x86.png?w=450)

3. Hover over "**IAM & Admin**" in the sidebar  

![](https://cdn.sanity.io/images/2xyydva6/production/a7350e081367cdfb489da2dd80a76b0d658acdb2-472x411.png?w=450)

3. Click "**Service Accounts**" in the options  
4. Click "**+ CREATE SERVICE ACCOUNT**"  

![](https://cdn.sanity.io/images/2xyydva6/production/39d586b63da5d8466271af74f86ad765b6b27f5f-679x58.png?w=450)

5. Add a service account name  
	a. Do not edit the ID field which will auto-populate  
	b. Optionally add a description to the service account

![](https://cdn.sanity.io/images/2xyydva6/production/db0266cfdb103c716f458e2fd4b4f1c4530900bd-535x352.png?w=450)

6. Click "**CREATE AND CONTINUE**"  
7. Click "**Select a role**" dropdown  
	a. Scroll down the options and hover over "**Cloud Storage**"  
	b. Select "**Storage Admin**"  

![](https://cdn.sanity.io/images/2xyydva6/production/f5a7d66197276244e2426bbaca0ec9c766603191-416x383.png?w=450)

8. Click "**CONTINUE**"  

![](https://cdn.sanity.io/images/2xyydva6/production/79dfcfc83a0b08d362a7253c1ccb4a8a138a4dca-534x349.png?w=450)

9.  Click "**DONE**"  
10. Find the new service on the service accounts table  
	a. Click the menu dots under the "Actions" column  
	b. Click "**Manage keys**"  

![](https://cdn.sanity.io/images/2xyydva6/production/59cea52f2ade8f56a06372d734592b185394ffbf-986x215.png?w=450)

12. On the Keys page click the "**ADD KEY**" dropdown  
13. Click "**Create new key**"  

![](https://cdn.sanity.io/images/2xyydva6/production/ea6a61dd90c015952071b1f9e2f0dae0569938e7-183x130.png?w=450)

14. In the popup modal select "**JSON**"  
15. Click "**CREATE**"  
16. Copy the downloaded file JSON contents and save for safe keeping. The contents of this file can be pasted into the "**Service Account**" input for all Google Cloud Storage Blueprints.  
