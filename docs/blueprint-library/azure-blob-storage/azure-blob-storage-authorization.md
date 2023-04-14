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

# Azure Blob Storage Authorization

## Overview

In order to get started with the Azure Blueprints, an access key connection string tied to the Azure Blob Storage you want to access is required.

## Access Key Connection String

1. Login to your [Azure Portal](https://portal.azure.com/)  
2. Search for and click on "**Storage accounts**"  
	![Storage accounts search](../../.gitbook/assets/azure-search-storage-account.png)  
3. Select the desired storage account from the table  
	![Storage accounts table](../../.gitbook/assets/azure-storage-accounts-table.png)  
4. Scroll down left sidebar to the "**Security + networking**" section and click "**Access keys**"  
	![Storage accounts search](../../.gitbook/assets/azure-sidebar-access-keys.png)  
5. Click the "Show keys" button at the top of the access keys page  
	![Storage accounts search](../../.gitbook/assets/azure-access-keys-page.png)  
6. Click the "**copy**" icon for the "**Connection string**" text field under the `key` option  
7. Store the "Connection String" value somewhere safe. It will be used for all Azure Blob Storage Blueprints.
