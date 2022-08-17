---
id: amazon-redshift-upload-csv-to-table
title: Amazon Redshift Template - Upload CSV to Table
hide_title: true
sidebar_label: Upload CSV to Table
description: Information about Shipyard's low-code Amazon Redshift Upload CSV to Table blueprint. Upload a CSV file to any table in Amazon Redshift. With the file data, you can create a new table, overwrite the existing table, or append to the end of the table.
keywords:
    - amazon redshift
    - blueprint
    - template
---

# Amazon Redshift - Upload CSV to Table

## Overview

&gt; ## **First time using this Blueprint? Make sure you follow our [Redshift authorization guide](https://www.shipyardapp.com/docs/blueprint-library/amazon-redshift/amazon-redshift-authorization/)**.

Upload a CSV file to any table in Amazon Redshift. With the file data, you can create a new table, overwrite the existing table, or append to the end of the table.

**Note:** This Vessel cannot be used to upload a local file from your computer.

**Recommended Setup:**

1. A Vessel built with this Blueprint should typically run after a Vessel that either downloads a file to Shipyard or generates a file with code. 



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Host | REDSHIFT_HOST | Alphanumeric | :white_check_mark: | - | - | The domain or the IP address of the database you want to connect to. |
| Port | REDSHIFT_PORT | Integer | :white_check_mark: | 5439 | - | Port number where the database accepts inbound connections |
| Username | REDSHIFT_USERNAME | Alphanumeric | :white_check_mark: | - | - | Username configured as part of the database credentials. See Authorization documentation for more information. |
| Password | REDSHIFT_PASSWORD | Password | :heavy_minus_sign: | - | - | Password for the provided username |
| Database | REDSHIFT_DATABASE | Alphanumeric | :white_check_mark: | - | - | Name of the database to connect to. |
| Extra URL Parameters | REDSHIFT_URL_PARAMETERS | Alphanumeric | :heavy_minus_sign: | - | - | Extra parameters that will be placed at the end of the connection string, after the &#34;?&#34;. Must be separated by &#34;&amp;&#34; |
| Folder Name | REDSHIFT_SOURCE_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | Folder where the file to upload can be found. Leaving blank will search in the current working directory. |
| File Name Match Type | REDSHIFT_SOURCE_FILE_NAME_MATCH_TYPE | Select | :white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match` | Determines if the text in &#34;File Name&#34; will match to one or multiple files. |
| File Name | REDSHIFT_SOURCE_FILE_NAME | Alphanumeric | :white_check_mark: | - | - | Name of the file to upload to the specified table |
| Table Name | REDSHIFT_TABLE_NAME | Alphanumeric | :white_check_mark: | - | - | Name of the table where you want data inserted |
| Insertion Method | REDSHIFT_INSERT_METHOD | Select | :white_check_mark: | `append` | Append Data: `append`<br></br><br></br>Replace Data: `replace`<br></br><br></br>Add Data Only if Table is Empty: `fail` | Determines how the data in your file will be added to the table |


## YAML

Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets.md#yaml-editor).

```yaml
source:
  blueprint: Amazon Redshift - Upload CSV to Table
  inputs:
    Host: null ## REQUIRED
    Port: 5439 ## REQUIRED
    Username: null ## REQUIRED
    Password: null 
    Database: null ## REQUIRED
    Extra URL Parameters: null 
    Folder Name: null 
    File Name Match Type: exact_match ## REQUIRED
    File Name: null ## REQUIRED
    Table Name: null ## REQUIRED
    Insertion Method: append ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0s
  runtime_cutoff: 4h0m0s
  exclude_exit_code_ranges:
    - "0"
```
