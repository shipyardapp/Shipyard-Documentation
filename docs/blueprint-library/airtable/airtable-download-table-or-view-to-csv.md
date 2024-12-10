---
id: airtable-download-table-or-view-to-csv
title: Airtable Template - Download Table or View to Platform
hide_title: true
sidebar_label: Download Table or View to Platform
description: Information about Platform's low-code Airtable Download Table or View to Platform blueprint. Quickly export your data from an Airtable Table or View. 
keywords:
  - airtable
  - blueprint
  - template
---

# Airtable - Download Table or View to Platform

## Overview

Quickly export data from a single table on an Airtable base to a CSV. 

Only one table or view of data can be downloaded at a time, since CSVs are flat files.

Content of the downloaded file can be further refined by providing a view. Otherwise, the entire contents of the table will be downloaded.


## Variables

| Name | Reference | Type | Required | Default | Options | Description             |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------------------|
| Base ID | AIRTABLE_BASE_ID | Alphanumeric | :white_check_mark: | - | - | The ID of your Airtable base. Found in the URL of your base and starts with `app` |
| Table Name or ID | AIRTABLE_TABLE_NAME | Alphanumeric | :white_check_mark: | - | - | Can be the Name (case sensitive) or the ID of the table. The ID can be found in the URL and always starts with `tbl`. |
| View Name or ID | AIRTABLE_VIEW_NAME | Alphanumeric | :heavy_minus_sign: | - | - | Can be the Name (case sensitive) or the ID of the view. The ID can be found in the URL and always starts with `viw`. |
| Include Record IDs? | AIRTABLE_INCLUDE_RECORD_ID | Boolean | :white_check_mark: | `True` | - | If checked, an additional column named `airtable_record_ids` will be created in the CSV containing each row's unique Airtable Record ID. This is recommended if data ever needs to be reloaded back into Airtable in the future. |
| Personal Access Token | AIRTABLE_API_KEY | Password | :white_check_mark: | - | - | Personal Access Token associated with a user that has access to the specified Base, Table, and View listed. |
| Shipyard File Name | AIRTABLE_DESTINATION_FILE_NAME | Alphanumeric | :white_check_mark: | - | - | Name of file to be generated with the results. Should be `.csv` extension. |
| Shipyard Folder Name | AIRTABLE_DESTINATION_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | Folder where the file should be downloaded. Leaving blank will place the file in the home directory. |




## YAML

Below is the YAML template for this Blueprint and can be used in the
Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: Airtable - Download Table or View to Shipyard
  inputs:
    AIRTABLE_BASE_ID: null  ## REQUIRED
    AIRTABLE_TABLE_NAME: null ## REQUIRED
    AIRTABLE_VIEW_NAME: null
    AIRTABLE_INCLUDE_RECORD_ID: true ## REQUIRED
    AIRTABLE_API_KEY: null ## REQUIRED
    AIRTABLE_DESTINATION_FILE_NAME: null ## REQUIRED
    AIRTABLE_DESTINATION_FOLDER_NAME: null
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


