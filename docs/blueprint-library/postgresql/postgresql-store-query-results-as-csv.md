---
id: postgresql-store-query-results-as-csv
title: PostgreSQL Template - Store Query Results as CSV
hide_title: true
sidebar_label: Store Query Results as CSV
description: Information about Shipyard's low-code PostgreSQL Store Query Results as CSV blueprint. Turn the results of your SQL SELECT statement into a CSV file. Extract your PostgreSQL data into files for easier delivery to clients and partners.
keywords:
    - postgresql
    - blueprint
    - template
---

# PostgreSQL - Store Query Results as CSV

## Overview

&gt; ## **First time using this Blueprint? Make sure you follow our [PostgreSQL authorization guide](https://www.shipyardapp.com/docs/blueprint-library/postgresql/postgresql-authorization/)**.

Turn the results of your SQL SELECT statement into a CSV file. Extract your PostgreSQL data into files for easier delivery to clients and partners.



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Host | POSTGRES_HOST | Alphanumeric | :white_check_mark: | - | - | The domain or the IP address of the database you want to connect to. |
| Port | POSTGRES_PORT | Integer | :white_check_mark: | 5432 | - | Number for the database port to connect to. Defaults to 5432. |
| Username | POSTGRES_USERNAME | Alphanumeric | :white_check_mark: | - | - | Name of the user to connect to the database with. |
| Password | POSTGRES_PASSWORD | Password | :heavy_minus_sign: | - | - | Password associated to the provided username. |
| Database | POSTGRES_DATABASE | Alphanumeric | :white_check_mark: | - | - | Name of the database in PostgreSQL to connect to. |
| Extra URL Parameters | POSTGRES_URL_PARAMETERS | Alphanumeric | :heavy_minus_sign: | - | - | Extra parameters that will be placed at the end of the connection string, after the &#34;?&#34;. Must be separated by &#34;&amp;&#34;. |
| Query | POSTGRES_QUERY | Alphanumeric | :white_check_mark: | - | - | A SELECT statement that returns data. Formatting is ignored. |
| Folder Name | POSTGRES_DESTINATION_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | The folder structure that you want your CSV to be created in. If left blank, the file will be created in the home directory. |
| File Name | POSTGRES_DESTINATION_FILE_NAME | Alphanumeric | :white_check_mark: | output.csv | - | The file name that you want your generated CSV to have. |
| Include Column Names as Header? | POSTGRES_FILE_HEADER | Boolean | :white_check_mark: | true | - | If checked, your CSV file will include a header row with column names. |


## YAML

Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: PostgreSQL - Store Query Results as CSV
  inputs:
    Host: null ## REQUIRED
    Port: 5432 ## REQUIRED
    Username: null ## REQUIRED
    Password: null 
    Database: null ## REQUIRED
    Extra URL Parameters: null 
    Query: null ## REQUIRED
    Folder Name: null 
    File Name: output.csv ## REQUIRED
    Include Column Names as Header?: true ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0s
  runtime_cutoff: 4h0m0s
  exclude_exit_code_ranges:
    - "0"
```
