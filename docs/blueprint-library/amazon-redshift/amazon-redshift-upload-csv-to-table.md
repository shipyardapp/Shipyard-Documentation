---
id: amazon-redshift-upload-csv-to-table
title: Amazon Redshift Template - Upload File to Table from Shipyard
hide_title: true
sidebar_label: Upload File to Table from Shipyard
description: Information about Shipyard's low-code Amazon Redshift Upload File to Table from Shipyard blueprint. Upload a CSV file to any table in Amazon Redshift.  
keywords:
    - amazon redshift
    - blueprint
    - template
---

# Amazon Redshift - Upload File to Table from Shipyard

## Overview
Upload a CSV file to any table in Amazon Redshift. With the file data, you can create a new table, overwrite the existing table, or append to the end of the table.

**Note:** This Vessel cannot be used to upload a local file from your computer.

**Recommended Setup:**

1. A Vessel built with this Blueprint should typically run after a Vessel that either downloads a file to Shipyard or generates a file with code. 



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Host | REDSHIFT_HOST  | Alphanumeric |:white_check_mark: | - | - | The domain or the IP address of the database you want to connect to. |
| Port | REDSHIFT_PORT  | Integer |:white_check_mark: | `"5439"` | - | Port number where the database accepts inbound connections |
| Username | REDSHIFT_USERNAME  | Alphanumeric |:white_check_mark: | - | - | Username configured as part of the database credentials. See Authorization documentation for more information. |
| Password | REDSHIFT_PASSWORD  | Password |:heavy_minus_sign: | - | - | Password for the provided username |
| Database | REDSHIFT_DATABASE  | Alphanumeric |:white_check_mark: | - | - | Name of the database to connect to. |
| Extra URL Parameters | REDSHIFT_URL_PARAMETERS  | Alphanumeric |:heavy_minus_sign: | - | - | Extra parameters that will be placed at the end of the connection string, after the "?". Must be separated by "&" |
| Shipyard Folder Name | REDSHIFT_SOURCE_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | Folder where the file to upload can be found. Leaving blank will search in the current working directory. |
| Shipyard File Name Match Type | REDSHIFT_SOURCE_FILE_NAME_MATCH_TYPE  | Select |:white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match`<br></br><br></br> | Determines if the text in "File Name" will match to one or multiple files. |
| Shipyard File Name | REDSHIFT_SOURCE_FILE_NAME  | Alphanumeric |:white_check_mark: | - | - | Name of the file to upload to the specified table |
| Table Name | REDSHIFT_TABLE_NAME  | Alphanumeric |:white_check_mark: | - | - | Name of the table where you want data inserted |
| Insertion Method | REDSHIFT_INSERT_METHOD  | Select |:white_check_mark: | `append` | Append Data: `append`<br></br><br></br>Replace Data: `replace`<br></br><br></br>Add Data Only if Table is Empty: `fail`<br></br><br></br> | Determines how the data in your file will be added to the table |
| Schema | REDSHIFT_SCHEMA  | Alphanumeric |:heavy_minus_sign: | - | - | The schema to establish a connection with; if omitted this will default to public. |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
    blueprint: Amazon Redshift - Upload File to Table from Shipyard
    inputs:
        REDSHIFT_HOST: null  ## REQUIRED
        REDSHIFT_PORT: '5439' ## REQUIRED
        REDSHIFT_USERNAME: null ## REQUIRED
        REDSHIFT_PASSWORD: null
        REDSHIFT_DATABASE: null  ## REQUIRED
        REDSHIFT_URL_PARAMETERS: null
        REDSHIFT_SOURCE_FOLDER_NAME: null
        REDSHIFT_SOURCE_FILE_NAME_MATCH_TYPE: exact_match ## REQUIRED
        REDSHIFT_SOURCE_FILE_NAME: null ## REQUIRED
        REDSHIFT_TABLE_NAME: null ## REQUIRED
        REDSHIFT_INSERT_METHOD: append ## REQUIRED
        REDSHIFT_SCHEMA: null
    type: BLUEPRINT
guardrails:
    retry_count: 1
    retry_wait: 0h0m0s
    runtime_cutoff: 1h0m0s
    exclude_exit_code_ranges:
    -   '0'

```
