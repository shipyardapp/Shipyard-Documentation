---
id: azure-blob-storage-authorization
sidebar_position: 1
title: Azure Blob Storage Blueprint Authorization
hide_title: true
sidebar_label: Authorization
description: Instructions on how to authorize Azure Blob Storage to work with Shipyard's low-code Azure Blob Storage templates.
keywords:
  - azure blob storage
  - blueprint
  - template
  - authorization
---

#  Authorization

In order to get started with the Azure Blueprints, an access key connection string tied to the Azure Blob Storage you want to access is required.

## Access Key Connection String

1. Login to your [Azure Portal](https://portal.azure.com/)  
2. Search for and click on "**Storage accounts**"  
	![Storage accounts search](https://cdn.sanity.io/images/2xyydva6/production/63b6b8ce0b137ab5f0e071f462c2803def930f10-617x113.png?w=450)
3. Select the desired storage account from the table  
	![Storage accounts table](https://cdn.sanity.io/images/2xyydva6/production/68d14a6f1974e6b5c5c82c7614cd66d7bb727bf5-1258x284.png?w=450)
4. Scroll down left sidebar to the "**Security + networking**" section and click "**Access keys**"  
	![Storage accounts search](https://cdn.sanity.io/images/2xyydva6/production/1710b2b53b6b668adc8a66b5a780dcd6867268c9-257x333.png?w=450)
5. Click the "Show keys" button at the top of the access keys page  
	![Storage accounts search](https://cdn.sanity.io/images/2xyydva6/production/2a2afc81d75764e395cd16f0d43f1131406d4400-716x604.png?w=450)
6. Click the "**copy**" icon for the "**Connection string**" text field under the `key` option  
7. Store the "Connection String" value somewhere safe. It will be used for all Azure Blob Storage Blueprints.
