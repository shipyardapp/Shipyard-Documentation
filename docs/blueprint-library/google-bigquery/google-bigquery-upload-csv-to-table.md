---
id: google-bigquery-upload-csv-to-table
title: Google BigQuery Template - Upload File to Table from Shipyard
hide_title: true
sidebar_label: Upload File to Table from Shipyard
description: Information about Shipyard's low-code Google BigQuery Upload File to Table from Shipyard blueprint. Upload a CSV file to any table in Google BigQuery. 
keywords:
    - google bigquery
    - blueprint
    - template
---

# Google BigQuery - Upload File to Table from Shipyard

## Overview
Upload one or more CSV files to any table in BigQuery. The [match type](https://www.shipyardapp.com/docs/reference/blueprint-library/match-type/) selected greatly affects how this Blueprint works. With the file data, you can:
- **Append Data** - Add the contents of your file to the end of the table.
- **Replace Data** - Write over the entire contents of table with the contents of your file.

Column names are inferred from the header row of your CSV file. If the table already exists, the header values are matched to the table column names. The header names must match the existing column names in your table, otherwise the Vessel will error.

Data is inserted into the table by using multiple INSERT statements. For larger datasets, we recommend running a [batch loading process](https://cloud.google.com/bigquery/docs/batch-loading-data#python).

In all instances, if the table name does not already exist, a new table will be created with datatypes inferred from the CSV contents.

**Note:** This Vessel cannot be used to upload a local file from your computer.

**Recommended Setup:**

1. A Vessel built with this Blueprint should typically run after a Vessel that either downloads a file to Shipyard or generates a file with code. 


## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Dataset Name | BIGQUERY_DATASET_NAME  | Alphanumeric |:white_check_mark: | - | - | Name of the dataset where the BigQuery table lives. |
| Table Name | BIGQUERY_TABLE_NAME  | Alphanumeric |:white_check_mark: | - | - | Name of the BigQuery table to upload the dataset to. |
| Shipyard File Name Match Type | BIGQUERY_SOURCE_FILE_NAME_MATCH_TYPE  | Select |:white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match`<br></br><br></br> | Determines if the text in "Local File Name" will look for one file with exact match, or multiple files using regex. |
| Shipyard File Name | BIGQUERY_SOURCE_FILE_NAME  | Alphanumeric |:white_check_mark: | - | - | Name of the target CSV file on Shipyard. Can be regex if "Match Type" is set accordingly. |
| Shipyard Folder Name | BIGQUERY_SOURCE_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | Name of the local folder on Shipyard to upload the target file from. If left blank, will look in the home directory. |
| Upload Method | BIGQUERY_UPLOAD_TYPE  | Select |:white_check_mark: | `append` | Append Data: `append`<br></br><br></br>Overwrite Data: `overwrite`<br></br><br></br> | Determines how the data in your file(s) will be added to the table. |
| Service Account | GOOGLE_APPLICATION_CREDENTIALS  | Password |:white_check_mark: | - | - | JSON from a Google Cloud Service account key. |
| Schema | BIGQUERY_SCHEMA  | Alphanumeric |:heavy_minus_sign: | - | - | Schema for the uploaded dataset, formatted as a double-nested list. If left blank, it will be auto-detected. |
| Header Rows to Skip | BIGQUERY_SKIP_HEADER_ROWS  | Integer |:heavy_minus_sign: | `0` | - | Number of header rows to skip when inserting data. Only required if provided custom schema. |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
  blueprint: Google BigQuery - Upload CSV to Table
  inputs:
    BIGQUERY_DATASET_NAME: null ## REQUIRED
    BIGQUERY_TABLE_NAME: null ## REQUIRED
    BIGQUERY_SOURCE_FILE_NAME_MATCH_TYPE: exact_match ## REQUIRED
    BIGQUERY_SOURCE_FILE_NAME: null ## REQUIRED
    BIGQUERY_SOURCE_FOLDER_NAME: null 
    BIGQUERY_UPLOAD_TYPE: append ## REQUIRED
    GOOGLE_APPLICATION_CREDENTIALS: null ## REQUIRED
    BIGQUERY_SCHEMA: null 
    BIGQUERY_SKIP_HEADER_ROWS: null 
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - "0"
```
