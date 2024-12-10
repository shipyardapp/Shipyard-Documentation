---
id: google-bigquery-upload-csv-to-table
title: Google BigQuery Template - Upload File to Table from Platform
hide_title: true
sidebar_label: Upload File to Table from Platform
description: Information about Platform's low-code Google BigQuery Upload File to Table from Platform blueprint. Upload a CSV file to any table in Google BigQuery.
keywords:
  - google bigquery
  - blueprint
  - template
---

# Google BigQuery - Upload File to Table from Platform

## Overview

Upload one or more CSV files to any table in BigQuery. The [match type](https://www.shipyardapp.com/docs/reference/blueprint-library/match-type/) selected greatly affects how this Blueprint works. With the file data, you can:
- **Append Data** - Add the contents of your file to the end of the table.
- **Overwrite Data** - Write over the entire contents of table with the contents of your file.


#### Schema 
Column names are inferred from the header row of your CSV file. If the table already exists, the header values are matched to the table column names. The header names must match the existing column names in your table, otherwise the Vessel will error. The preferred method of providing a schema is an array of JSON, see this example from BigQuery's documentation:
```json
[
  {
    "name": string,
    "type": string,
    "mode": string,
    "fields": [
      {
        object (TableFieldSchema)
      }
    ],
    "description": string,
    "policyTags": {
      "names": [
        string
      ]
    },
    "maxLength": string,
    "precision": string,
    "scale": string,
    "collation": string,
    "defaultValueExpression": string,
    "roundingMode": string
  },
  {
    "name": string,
    "type": string,
    ...
  }
]

```
For legacy purposes, this blueprint also supports specificying a schema as an array of arrays like so: 
`[['Column1', 'String'], ['Column2', 'Int64']]`


#### Data Loading
The data is copied from the provided file to the target endpoint in BigQuery. For larger datasets, we recommend running a [batch loading process](https://cloud.google.com/bigquery/docs/batch-loading-data#python).

In all instances, if the table name does not already exist, a new table will be created with datatypes inferred from the CSV contents or specified through the `Schema` input.

**Note:** This Vessel cannot be used to upload a local file from your computer.

**Recommended Setup:**

1. A Vessel built with this Blueprint should typically run after a Vessel that either downloads a file to Platform or generates a file with code. 


## Variables

| Name | Reference | Type | Required | Default | Options | Description             |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------------------|
| Dataset Name | BIGQUERY_DATASET_NAME | Alphanumeric | :white_check_mark: | - | - | Name of the dataset where the BigQuery table lives. |
| Table Name | BIGQUERY_TABLE_NAME | Alphanumeric | :white_check_mark: | - | - | Name of the BigQuery table to upload the dataset to. |
| Shipyard File Name Match Type | BIGQUERY_SOURCE_FILE_NAME_MATCH_TYPE | Select | :white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match`<br></br><br></br> | Determines if the text in "Local File Name" will look for one file with exact match, or multiple files using regex. |
| Shipyard File Name | BIGQUERY_SOURCE_FILE_NAME | Alphanumeric | :white_check_mark: | - | - | Name of the target CSV file on Platform. Can be regex if "Match Type" is set accordingly. |
| Shipyard Folder Name | BIGQUERY_SOURCE_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | Name of the local folder on Platform to upload the target file from. If left blank, will look in the home directory. |
| Upload Method | BIGQUERY_UPLOAD_TYPE | Select | :white_check_mark: | `append` | Append Data: `append`<br></br><br></br>Overwrite Data: `overwrite`<br></br><br></br> | Determines how the data in your file(s) will be added to the table. |
| Service Account | GOOGLE_APPLICATION_CREDENTIALS | Password | :white_check_mark: | - | - | JSON from a Google Cloud Service account key. |
| Schema | BIGQUERY_SCHEMA | Alphanumeric | :heavy_minus_sign: | - | - | Schema for the uploaded dataset, formatted as JSON or a double-nested list. If left blank, it will be auto-detected. |
| Header Rows to Skip | BIGQUERY_SKIP_HEADER_ROWS | Integer | :heavy_minus_sign: | `0` | - | Number of header rows to skip when inserting data. Only required if provided custom schema. |
| Quoted Newline | BIGQUERY_QUOTED_NEWLINE | Boolean | :white_check_mark: | `FALSE` | - | Allow quoted data containing newline characters |




## YAML

Below is the YAML template for this Blueprint and can be used in the
Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: Google BigQuery - Upload File to Table from Shipyard
  inputs:
    BIGQUERY_DATASET_NAME: null  ## REQUIRED
    BIGQUERY_TABLE_NAME: null ## REQUIRED
    BIGQUERY_SOURCE_FILE_NAME_MATCH_TYPE: exact_match ## REQUIRED
    BIGQUERY_SOURCE_FILE_NAME: null ## REQUIRED
    BIGQUERY_SOURCE_FOLDER_NAME: null
    BIGQUERY_UPLOAD_TYPE: append ## REQUIRED
    GOOGLE_APPLICATION_CREDENTIALS: null ## REQUIRED
    BIGQUERY_SCHEMA: null
    BIGQUERY_SKIP_HEADER_ROWS: 0
    BIGQUERY_QUOTED_NEWLINE: 'false'
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '101'
    - '102'
    - '103'
    - '104'
    - '105'
    - '106'
    - '200'
    - '203'
    - '204'
    - '205'
    - '206'
    - '207'
    - '208'
    - '209'
 ```


