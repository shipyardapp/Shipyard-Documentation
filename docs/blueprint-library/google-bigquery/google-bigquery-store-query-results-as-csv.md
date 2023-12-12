---
id: google-bigquery-store-query-results-as-csv
title: Google BigQuery Template - Download Query Results to Shipyard
hide_title: true
sidebar_label: Download Query Results to Shipyard
description: Information about Shipyard's low-code Google BigQuery Download Query Results to Shipyard blueprint. Turn the results of your SQL SELECT statement into a CSV file. 
keywords:
    - google bigquery
    - blueprint
    - template
---

# Google BigQuery - Download Query Results to Shipyard

## Overview
Larger datasets may run into file size limitations set by BigQuery. In these instances, we recommend using the **Google BigQuery - Store Query Results in Google Cloud Storage** Blueprint.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Query | BIGQUERY_QUERY  | Alphanumeric |:white_check_mark: | - | - | Standard SQL query to be executed against BigQuery. Does not support Legacy SQL. |
| Shipyard File Name | BIGQUERY_DESTINATION_FILE_NAME  | Alphanumeric |:white_check_mark: | - | - | Name of file to be generated with the results. Should be `.csv` extension. |
| Shipyard Folder Name | BIGQUERY_DESTINATION_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | Folder where the file should be downloaded. Leaving blank will place the file in the home directory. |
| Service Account | GOOGLE_APPLICATION_CREDENTIALS  | Password |:white_check_mark: | - | - | JSON from a Google Cloud Service account key. |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
    blueprint: Google BigQuery - Download Query Results to Shipyard
    inputs:
        BIGQUERY_QUERY: null  ## REQUIRED
        BIGQUERY_DESTINATION_FILE_NAME: null ## REQUIRED
        BIGQUERY_DESTINATION_FOLDER_NAME: null
        GOOGLE_APPLICATION_CREDENTIALS: null ## REQUIRED
    type: BLUEPRINT
guardrails:
    retry_count: 1
    retry_wait: 0h0m0s
    runtime_cutoff: 1h0m0s
    exclude_exit_code_ranges:
    -   '0'

```
