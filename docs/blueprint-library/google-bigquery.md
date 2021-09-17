---
id: google-bigquery
title: Google Bigquery Blueprints
hide_title: true
sidebar_label: Google Bigquery
description: Information about the Blueprint Library connections with Google Bigquery.
keywords:
  - bigquery
  - bq
  - template
  - blueprint
---

# Google BigQuery Blueprints

## Authorization

### Overview

In order to get started with the Google BigQuery Blueprints, a service account with the necessary GCP permissions is required. All BigQuery Blueprints are still subject to [BigQuery quotas and limits](https://cloud.google.com/bigquery/quotas#queries).

### Creating a BigQuery Service Account

1. Login to your [GCP console](https://console.cloud.google.com/)
2. Using the top selector, choose the Project where your BigQuery Instance lives.  
![Select Project](../.gitbook/assets/shipyard_2021_09_15_17_36_07.png)
3. Open the sidebar and select "**IAM & Admin**"  
	![IAM Service Accounts sidebar](../.gitbook/assets/iam-service-accounts-sidebar-selection.png)  
3. Click "**Service Accounts**" in the options  
4. Click "**+ CREATE SERVICE ACCOUNT**"  
	![Create service account button](../.gitbook/assets/create-service-account-button.png)  
5. Add a service account name  
	a. Do not edit the ID field which will auto-populate  
	b. Optionally add a description to the service account  
	![Add service account name](../.gitbook/assets/bigquery-service-account-name.png)  
6. Click "**CREATE AND CONTINUE**"  
7. Click "**Select a role**" dropdown  
	
	a. Search for and select "**BigQuery Data Editor**"  
	![](../.gitbook/assets/shipyard_2021_09_15_17_27_59.png)
	b. "Click "+ ADD ANOTHER ROLE"  
	c. Search for and select "**BigQuery Job User**"  
	![](../.gitbook/assets/shipyard_2021_09_15_17_28_31.png)
	:::info
	If you want to use our "Store Query Results in Google Cloud Storage" Blueprint, you will also need to:
	
	a. "Click "+ ADD ANOTHER ROLE"  
	b. Click the "**Select a role**" dropdown  
	c. Search for and select **Storage Object Admin**  
	![Add Cloud Storage role](../.gitbook/assets/bigquery-role-cloud-storage-object-creator-selection.png)
	:::  

8. Click "**CONTINUE**"  
9. Click "**DONE**"  
10. Find the new service on the service accounts table  
	a. Click the menu dots under the "Actions" column  
	b. Click "**Manage keys**"  
	![Service accounts table](../.gitbook/assets/bigquery-service-accounts-table-manage-keys-dropdown.png)  
11. On the Keys page click the "**ADD KEY**" dropdown  
12. Click "**Create new key**"  
	![Create key dropdown button](../.gitbook/assets/service-account-add-key-button.png)  
13. In the popup modal select the "**JSON**" radio button  
14. Click "**CREATE**"  
15. Copy the downloaded file JSON contents and save for safe keeping. The contents of this file can be pasted into the "**Service Account**" input for all Bigquery Blueprints.

## Execute Query Blueprint

### Overview

Execute any Standard SQL query against a Google BigQuery database. Perfect for creating multi-step SQL jobs, executing DML statements, or running scheduled queries.

### Variables

| Variable Name | Required? |Description |
|:---|:---|:---|
| **Query** | ✔️ | Standard SQL query to be executed against BigQuery. Does not support Legacy SQL. |
| **Service Account** | ✔️ | JSON from a Google Cloud Service account key. |

## Store Query Results as CSV Blueprint

### Overview

Turn the results of your Standard SQL SELECT statement into a CSV file. 

Larger datasets may run into file size limitations set by BigQuery. In these instances, we recommend using the **Google BigQuery - Store Query Results in Google Cloud Storage** Blueprint.

### Variables

| Variable Name | Required? |Description |
|:---|:---|:---|
| **Query** | ✔️ | Standard SQL query to be executed against BigQuery. Does not support Legacy SQL. |
| **Local File Name** | ✔️ | Name of file to be generated with the results. Should be `.csv` extension. |
| **Local Folder Name** | ➖ | Folder where the file should be downloaded. Leaving blank will place the file in the home directory. |
| **Service Account** | ✔️ | JSON from a Google Cloud Service account key. |

## Store Query Results in Google Cloud Storage Blueprint

### Overview

Turn the results of your SQL SELECT statement into CSV files that get stored in Google Cloud Storage (GCS).

When exporting data from Bigquery, a [file cannot contain more than 1GB of data](https://cloud.google.com/bigquery/docs/exporting-data). As a result, this Blueprint automatically splits up data that is >1GB in size into multiple files. The name of these files will be the Bucket File Name provided, with `_#` base 0 enumeration appended to the file name, before the file extension. This is the [default behavior provided by Google](https://cloud.google.com/bigquery/docs/exporting-data#exporting_data_into_one_or_more_files).

Ex. If you provide a file name of `data.csv` and your data is 2.4GB in total, 3 files would need to be generated. The names of these files will be `data_0.csv`, `data_1.csv`, and `data_2.csv`.

### Variables

| Variable Name | Required? | Description |
|:---|:---|:---|
| **Query** | ✔️ | Standard SQL query to be executed against BigQuery. Does not support Legacy SQL. |
| **Bucket Name** | ✔️ | Name of the GCS bucket to store the results file(s) in. |
| **Bucket File Name** | ✔️ | Name of file to be generated with the results. Should be `.csv` extension. If the file size is >1GB, file name will be enumerated with `_#` before the extension.|
| **Bucket Folder Name** | ➖ | Folder where the file(s) should be uploaded. Leaving blank will place the file in the root directory. |
| **Service Account** | ✔️ | JSON from a Google Cloud Service account key. |

## Upload CSV to Table Blueprint

### Overview

Upload one or more CSV files to any table in BigQuery. The [match type](../reference/blueprint-library/match-type.md) selected greatly affects how this Blueprint works. With the file data, you can:
- **Append Data** - Add the contents of your file to the end of the table.
- **Replace Data** - Write over the entire contents of table with the contents of your file.

Column names are inferred from the header row of your CSV file. If the table already exists, the header values are matched to the table column names. The header names must match the existing column names in your table, otherwise the Vessel will error.

Data is inserted into the table by using multiple INSERT statements. For larger datasets, we recommend running a [batch loading process](https://cloud.google.com/bigquery/docs/batch-loading-data#python).

In all instances, if the table name does not already exist, a new table will be created with datatypes inferred from the CSV contents.

### Variables

| Variable Name | Required? | Description |
|:---|:---|:---|
| **Dataset Name** | ✔️ | Name of the dataset where the BigQuery table lives. |
| **Table Name** | ✔️ | Name of the BigQuery table to upload the dataset to. |
| **Local File Name Match Type** | ✔️ | Determines if the text in "Local File Name" will look for one file with exact match, or multiple files using regex. |
| **Local File Name** | ✔️ | Name of the target CSV file on Shipyard. Can be regex if "Match Type" is set accordingly. |
| **Local Folder Name** | ➖ | Name of the local folder on Shipyard to upload the target file from. If left blank, will look in the home directory. |
| **Upload Method** | ✔️ | Determines how the data in your file(s) will be added to the table. |
| **Service Account** | ✔️ | JSON from a Google Cloud Service account key. |
| **Schema** | ➖ | Schema for the uploaded dataset, formatted as a double-nested list. If left blank, it will be auto-detected. |
| **Header Rows to Skip** | ➖ | Number of header rows to skip when inserting data. Only necessary if a custom schema is provided. |

## Helpful Links
- [Creating Google Cloud Platform Service Accounts](https://cloud.google.com/iam/docs/creating-managing-service-accounts)
- [Creating Google Cloud Platform Service Account Keys](https://cloud.google.com/iam/docs/creating-managing-service-account-keys)
- [Google Bigquery Python Library Documentation](https://cloud.google.com/bigquery/docs/reference/libraries)  
- [Pandas to_sql Method](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.to_sql.html)  
