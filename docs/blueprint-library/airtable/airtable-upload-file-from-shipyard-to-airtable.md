---
id: airtable-upload-file-from-shipyard-to-airtable
title: Airtable Template - Upload File from Shipyard to Airtable
hide_title: true
sidebar_label: Upload File from Shipyard to Airtable
description: Information about Shipyard's low-code Airtable Upload File from Shipyard to Airtable blueprint. Quickly export your data to an Airtable Table or View. 
keywords:
  - airtable
  - blueprint
  - template
---

# Airtable - Upload File from Shipyard to Airtable

## Overview

Easily transfer data from a CSV file to Airtable using batch operations.

Choose to either append new records, update existing ones, or completely replace the table's contents. When updating, you can identify records by their ID or match them based on specific fields (key_fields). 

Be cautious with the replace option, as it will remove all existing records in the table before adding the new data from the CSV file.

## Variables

| Name | Reference | Type | Required | Default | Options | Description             |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------------------|
| Personal Access Token | AIRTABLE_API_KEY | Password | :white_check_mark: | - | - | Personal Access Token associated with a user that has access to the specified Base, Table, and View listed. |
| Base | AIRTABLE_BASE_ID | Alphanumeric | :white_check_mark: | - | - | The ID of your Airtable base. Found in the URL of your base and starts with `app` |
| Table ID | AIRTABLE_TABLE_ID | Alphanumeric | :white_check_mark: | - | - | Can be the Name (case sensitive) or the ID of the table. The ID can be found in the URL and always starts with `tbl`. |
| Key Fields | AIRTABLE_KEY_FIELDS | Alphanumeric | :heavy_minus_sign: | - | - | List of field names separated by commas that Airtable should use to match records in the input with existing records on the server. |
| Typecast | AIRTABLE_TYPECAST | Boolean | :heavy_minus_sign: | `FALSE` | - | If enabled, the Airtable API will perform best-effort automatic data conversion from string values. |
| Shipyard Folder Name | AIRTABLE_SOURCE_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | Name of the local folder on Shipyard to upload the target file from. If left blank, will look in the home directory. |
| Source Filename or Pattern | AIRTABLE_FILENAME_OR_PATTERN | Alphanumeric | :white_check_mark: | - | - | The name of the file to upload or search criteria |
| Match Type | AIRTABLE_MATCH_TYPE | Select | :white_check_mark: | `exact_match` | Exact: `exact_match`<br></br><br></br>Regex: `regex_match`<br></br><br></br>Glob: `glob_match`<br></br><br></br> | Determines if the text in "Filename or Pattern" will look for one file with exact match, or multiple files using regex or glob. |
| Insert Method | AIRTABLE_INSERT_METHOD | Select | :white_check_mark: | - | Upsert: `upsert`<br></br><br></br>Replace: `replace`<br></br><br></br>Append: `append`<br></br><br></br> |  Upsert: Inserts or updates records as needed. Replace: Replaces table content with CSV data, removing old data. Append: Adds new records, ignoring potential duplicates. |






## YAML

Below is the YAML template for this Blueprint and can be used in the
Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: Airtable - Upload File from Shipyard to Airtable
  inputs:
    AIRTABLE_API_KEY: null  ## REQUIRED
    AIRTABLE_BASE_ID: null ## REQUIRED
    AIRTABLE_TABLE_ID: null ## REQUIRED
    AIRTABLE_KEY_FIELDS: null ## REQUIRED
    AIRTABLE_TYPECAST: 'FALSE'
    AIRTABLE_SOURCE_FOLDER_NAME: null
    AIRTABLE_FILENAME_OR_PATTERN: null ## REQUIRED
    AIRTABLE_MATCH_TYPE: exact_match ## REQUIRED
    AIRTABLE_INSERT_METHOD: null ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '100'
    - '101'
    - '102'
    - '103'
    - '104'
    - '205'
    - '206'
 ```


