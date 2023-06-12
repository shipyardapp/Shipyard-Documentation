---
id: google-bigquery-authorization
sidebar_position: 1
title: Google BigQuery Blueprint Authorization
hide_title: true
sidebar_label: Authorization
description: Instructions on how to authorize Google BigQuery to work with Shipyard's low-code Google BigQuery templates.
keywords:
- google bigquery
- blueprint
- template
- authorization
---

# Google BigQuery Authorization
In order to get started with the Google BigQuery Blueprints, a service account with the necessary GCP permissions is required. All BigQuery Blueprints are still subject to [BigQuery quotas and limits](https://cloud.google.com/bigquery/quotas#queries).

You may also need to ensure that Shipyard [IP Addresses are whitelisted](https://www.shipyardapp.com/docs/faqs/security/ip-whitelist/)

## Creating a BigQuery Service Account

1. Login to your [GCP console](https://console.cloud.google.com/)
2. Using the top selector, choose the Project where your BigQuery Instance lives.  

![](https://cdn.sanity.io/images/2xyydva6/production/54bfac0aa4bd528b56ef88940946b91c2c119c2c-1634x86.png?w=450)

3. Open the sidebar and select "**IAM & Admin**"  

![](https://cdn.sanity.io/images/2xyydva6/production/a7350e081367cdfb489da2dd80a76b0d658acdb2-472x411.png?w=450)

3. Click "**Service Accounts**" in the options  
4. Click "**+ CREATE SERVICE ACCOUNT**"  

![](https://cdn.sanity.io/images/2xyydva6/production/39d586b63da5d8466271af74f86ad765b6b27f5f-679x58.png?w=450)

5. Add a service account name  
	a. Do not edit the ID field which will auto-populate  
	b. Optionally add a description to the service account  

![](https://cdn.sanity.io/images/2xyydva6/production/2db3b4889f39abd1c68670d3a95cf568fb6cc83a-545x361.png?w=450)

6. Click "**CREATE AND CONTINUE**"  
7. Click "**Select a role**" dropdown  

	a. Search for and select "**BigQuery Data Editor**"  

![](https://cdn.sanity.io/images/2xyydva6/production/21ee38462202e7523cd4c47e865cefb0ede09cc8-982x794.png?w=450)

b. "Click "+ ADD ANOTHER ROLE"  
	c. Search for and select "**BigQuery Job User**"  

![](https://cdn.sanity.io/images/2xyydva6/production/f4e6acb28030d287bbb0b241df3373305e36bc64-852x796.png?w=450)

**_INFO:_**	If you want to use our "Store Query Results in Google Cloud Storage" Blueprint, you will also need to:
	a. "Click "+ ADD ANOTHER ROLE"  
	b. Click the "**Select a role**" dropdown  
	c. Search for and select **Storage Object Admin**  

![](https://cdn.sanity.io/images/2xyydva6/production/d6b1707c04b05428b9c05b75d232d7a0373c6d91-415x378.png?w=450)


8. Click "**CONTINUE**"  
9. Click "**DONE**"  
10. Find the new service on the service accounts table  
	a. Click the menu dots under the "Actions" column  
	b. Click "**Manage keys**"  

![](https://cdn.sanity.io/images/2xyydva6/production/4e2e7155ed0331edc9ec0611b61f6b7c66bd6abd-990x211.png?w=450)

11. On the Keys page click the "**ADD KEY**" dropdown  
12. Click "**Create new key**"  

![](https://cdn.sanity.io/images/2xyydva6/production/ea6a61dd90c015952071b1f9e2f0dae0569938e7-183x130.png?w=450)

13. In the popup modal select the "**JSON**" radio button  
14. Click "**CREATE**"  
15. Copy the downloaded file JSON contents and save for safe keeping. The contents of this file can be pasted into the "**Service Account**" input for all BigQuery Blueprints.
