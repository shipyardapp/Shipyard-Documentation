---
id: amazon-redshift-store-query-results-as-csv
title: Amazon Redshift Template - Store Query Results as CSV
hide_title: true
sidebar_label: Store Query Results as CSV
description: Information about Shipyard's low-code Amazon Redshift Store Query Results as CSV blueprint. Turn the results of your SQL SELECT statement into a CSV file. Extract your Amazon Redshift data into files for easier delivery to clients and partners.
keywords:
    - amazon redshift
    - blueprint
    - template
---

# Amazon Redshift - Store Query Results as CSV

## Overview

> ## **First time using this Blueprint? Make sure you follow our [Redshift authorization guide](https://www.shipyardapp.com/docs/blueprint-library/amazon-redshift/amazon-redshift-authorization/)**.

Turn the results of your SQL SELECT statement into a CSV file. Extract your Amazon Redshift data into files for easier delivery to clients and partners.



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Host | REDSHIFT_HOST | Alphanumeric | :white_check_mark: | - | - | The domain or the IP address of the database you want to connect to. |
| Port | REDSHIFT_PORT | Integer | :white_check_mark: | 5439 | - | Port number where the database accepts inbound connections. |
| Username | REDSHIFT_USERNAME | Alphanumeric | :white_check_mark: | - | - | Username configured as part of the database credentials. See Authorization documentation for more information. |
| Password | REDSHIFT_PASSWORD | Password | :heavy_minus_sign: | - | - | Password for the provided username |
| Database | REDSHIFT_DATABASE | Alphanumeric | :white_check_mark: | - | - | Name of the database to connect to. |
| Extra URL Parameters | REDSHIFT_URL_PARAMETERS | Alphanumeric | :heavy_minus_sign: | - | - | Extra parameters that will be placed at the end of the connection string, after the "?". Must be separated by "&" |
| Query | REDSHIFT_QUERY | Alphanumeric | :white_check_mark: | - | - | A SELECT statement that returns data. Formatting is ignored |
| Folder Name | REDSHIFT_DESTINATION_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | Folder where the file will be created. Leave blank to store in the current working directory |
| File Name | REDSHIFT_DESTINATION_FILE_NAME | Alphanumeric | :white_check_mark: | output.csv | - | File name that will be created with the results of the query |
| Include Column Names as Header? | REDSHIFT_FILE_HEADER | Boolean | :white_check_mark: | true | - | If checked, your CSV file will include a header row with column names. |


## YAML

Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets.md#yaml-editor).

```yaml
source:
  blueprint: Amazon Redshift - Store Query Results as CSV
  inputs:
    REDSHIFT_HOST: null ## REQUIRED
    REDSHIFT_PORT: 5439 ## REQUIRED
    REDSHIFT_USERNAME: null ## REQUIRED
    REDSHIFT_PASSWORD: null 
    REDSHIFT_DATABASE: null ## REQUIRED
    REDSHIFT_URL_PARAMETERS: null 
    REDSHIFT_QUERY: null ## REQUIRED
    REDSHIFT_DESTINATION_FOLDER_NAME: null 
    REDSHIFT_DESTINATION_FILE_NAME: output.csv ## REQUIRED
    REDSHIFT_FILE_HEADER: true ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0s
  runtime_cutoff: 4h0m0s
  exclude_exit_code_ranges:
    - "0"
```
