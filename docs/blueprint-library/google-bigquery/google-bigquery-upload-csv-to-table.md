---
id: google-bigquery-upload-csv-to-table
title: Google BigQuery Template - Upload CSV to Table
hide_title: true
sidebar_label: Upload CSV to Table
description: Information about Shipyard's low-code Google BigQuery Upload CSV to Table blueprint. Upload a CSV file to any table in Google BigQuery. With the file data, you can create a new table, overwrite the existing table, or append to the end of the table.
keywords:
    - google bigquery
    - blueprint
    - template
---

# Google BigQuery - Upload CSV to Table

## Overview

Upload one or more CSV files to any table in BigQuery. The [match type](https://www.shipyardapp.com/docs/reference/blueprint-library/match-type/) selected greatly affects how this Blueprint works. With the file data, you can:
- **Append Data** - Add the contents of your file to the end of the table.
- **Replace Data** - Write over the entire contents of table with the contents of your file.

Column names are inferred from the header row of your CSV file. If the table already exists, the header values are matched to the table column names. The header names must match the existing column names in your table, otherwise the Vessel will error.

Data is inserted into the table by using multiple INSERT statements. For larger datasets, we recommend running a [batch loading process](https://cloud.google.com/bigquery/docs/batch-loading-data#python).

In all instances, if the table name does not already exist, a new table will be created with datatypes inferred from the CSV contents.



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Dataset Name | dataset_name | Alphanumeric | :white_check_mark: | - | - | Name of the dataset where the BigQuery table lives. |
| Table Name | table_name | Alphanumeric | :white_check_mark: | - | - | Name of the BigQuery table to upload the dataset to. |
| Local File Name Match Type | source_file_name_match_type | Select | :white_check_mark: | `exact_match` | Exact Match: `exact_match`<br><br><br>Regex Match: `regex_match` | Determines if the text in &#34;Local File Name&#34; will look for one file with exact match, or multiple files using regex. |
| Local File Name | source_file_name | Alphanumeric | :white_check_mark: | - | - | Name of the target CSV file on Shipyard. Can be regex if &#34;Match Type&#34; is set accordingly. |
| Local Folder Name | source_folder_name | Alphanumeric | :heavy_minus_sign: | - | - | Name of the local folder on Shipyard to upload the target file from. If left blank, will look in the home directory. |
| Upload Method | upload_type | Select | :white_check_mark: | `append` | Append Data: `append`<br><br><br>Overwrite Data: `overwrite` | Determines how the data in your file(s) will be added to the table. |
| Service Account | GOOGLE_APPLICATION_CREDENTIALS | Password | :white_check_mark: | - | - | JSON from a Google Cloud Service account key. |
| Schema | SCHEMA | Alphanumeric | :heavy_minus_sign: | - | - | Schema for the uploaded dataset, formatted as a double-nested list. If left blank, it will be auto-detected. |
| Header Rows to Skip | SKIP_HEADER_ROWS | Integer | :heavy_minus_sign: | - | - | Number of header rows to skip when inserting data. Only required if provided custom schema. |


