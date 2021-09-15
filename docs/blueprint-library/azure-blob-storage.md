---
id: azure-blob-storage
title: Azure Blob Storage Blueprints
hide_title: true
sidebar_label: Azure Blob Storage
description: Information about the Blueprint Library connections with Azure Blob Storage.
keywords:
  - azure
  - blob
  - storage
  - template
  - blueprint
---

# Azure Blob Storage Blueprints

## Authorization

### Overview

In order to get started with the Azure Blueprints, an access key connection string tied to the Azure Blob Storage you want to access is required.

### Access Key Connection String

1. Login to your [Azure Portal](https://portal.azure.com/)  
2. Search for and click on "**Storage accounts**"  
	![Storage accounts search](../.gitbook/assets/azure-search-storage-account.png)  
3. Select the desired storage account from the table  
	![Storage accounts table](../.gitbook/assets/azure-storage-accounts-table.png)  
4. Scroll down left sidebar to the "**Security + networking**" section and click "**Access keys**"  
	![Storage accounts search](../.gitbook/assets/azure-sidebar-access-keys.png)  
5. Click the "Show keys" button at the top of the access keys page  
	![Storage accounts search](../.gitbook/assets/azure-access-keys-page.png)  
6. Click the "**copy**" icon for the "**Connection string**" text field under the `key` option  
7. Store the "Connection String" value somewhere safe. It will be used for all Azure Blob Storage Blueprints.

## Download Files Blueprint

### Overview

Quickly export one or more files directly into an an Azure Blob Storage container, no matter how big they are. The [match type](../reference/blueprint-library/match-type.md) selected greatly affects how this Blueprint works.

### Variables

| Variable Name | Required? | Required Description |
|:---|:---|:---|
| **Container Name** | ✔️ | Name of the target Azure storage container. |
| **Azure Storage Folder Name** | ➖| Name of the folder where the file is stored in the Azure storage container. |
| **Azure Storage File Name Match Type** | ✔️ | Determines if the text in "Azure Storage File Name" will look for one file with exact match, or multiple files using regex.  |
| **Azure Storage File Name** | ✔️ | Name of the target file(s) in the Azure storage storage container. Can be regex if "Match Type" is set accordingly.  |
| **Local Folder Name** | ➖| Folder where the file(s) should be downloaded. Leaving blank will place the file in the home directory.  |
| **Local File Name** | ➖| What to name the file(s) being downloaded. If left blank, defaults to the original file name(s). |
| **Connection String** | ✔️ |Connection string for programmatic access to download the file from the specified Azure storage container. |

## Upload Files Blueprint

### Overview

Easily import one or more files directly into an an Azure Blob Storage container, no matter how big they are. The [match type](../reference/blueprint-library/match-type.md) selected greatly affects how this Blueprint works.

### Variables

| Variable Name | Required? | Description |
|:---|:---|:---|
| **Local Folder Name** | ➖|Name of the local folder on Shipyard to upload the target file from. If left blank, will look in the home directory.  |
| **Local File Name Match Type** | ✔️ | Determines if the text in "Local File Name" will look for one file with exact match, or multiple files using regex. |
| **Local File Name** | ✔️ | Name of the target file on Shipyard. Can be regex if "Match Type" is set accordingly. |
| **Container Name** | ✔️ | Name of the target Azure storage container.  |
| **Azure Storage Folder Name** | ➖| Folder where the file(s) should be downloaded in the Azure Storage container. Leaving blank will place the file in the root directory. |
| **Azure Storage File Name** | ➖| What to name the file(s) being uploaded to Azure Storage. If left blank, defaults to the original file name(s). |
| **Connection String** | ✔️| Connection string for programmatic access to upload the file to the specified Azure storage container. |

## Helpful Links

[Azure Blob Storage Help Docs](https://docs.microsoft.com/en-us/azure/storage/blobs/)
