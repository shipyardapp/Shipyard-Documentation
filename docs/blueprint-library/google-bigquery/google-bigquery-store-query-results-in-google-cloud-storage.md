---
id: google-bigquery-store-query-results-in-google-cloud-storage
title: Google BigQuery Template - Download Query Results to Google Cloud Storage
hide_title: true
sidebar_label: Download Query Results to Google Cloud Storage
description: Information about Platform's low-code Google BigQuery Download Query Results to Google Cloud Storage blueprint. Turn the results of your SQL SELECT statement into CSV files that get stored in Google Cloud Storage (GCS).
keywords:
  - google bigquery
  - blueprint
  - template
---

# Google BigQuery - Download Query Results to Google Cloud Storage

## Overview

Turn the results of your SQL SELECT statement into CSV files that get stored in Google Cloud Storage (GCS).

When exporting data from BigQuery, a [file cannot contain more than 1GB of data](https://cloud.google.com/bigquery/docs/exporting-data). As a result, this Blueprint automatically splits up data that is >1GB in size into multiple files. The name of these files will be the Bucket File Name provided, with `_#` base 0 enumeration appended to the file name, before the file extension. This is the [default behavior provided by Google](https://cloud.google.com/bigquery/docs/exporting-data#exporting_data_into_one_or_more_files).

Ex. If you provide a file name of `data.csv` and your data is 2.4GB in total, 3 files would need to be generated. The names of these files will be `data_0.csv`, `data_1.csv`, and `data_2.csv`.

## Variables

| Name | Reference | Type | Required | Default | Options | Description             |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------------------|
| Query | BIGQUERY_QUERY | Alphanumeric | :white_check_mark: | - | - | Standard SQL query to be executed against BigQuery. Does not support Legacy SQL. |
| Bucket Name | BIGQUERY_BUCKET_NAME | Alphanumeric | :white_check_mark: | - | - | Name of the GCS bucket to store the results file(s) in. |
| Bucket File Name | BIGQUERY_DESTINATION_FILE_NAME | Alphanumeric | :white_check_mark: | - | - | Name of file to be generated with the results. Should be `.csv` extension. If the file size is >1GB, file name will be enumerated with `_#` before the extension. |
| Bucket Folder Name | BIGQUERY_DESTINATION_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | Folder where the file(s) should be uploaded. Leaving blank will place the file in the root directory. |
| Service Account | GOOGLE_APPLICATION_CREDENTIALS | Password | :white_check_mark: | - | - | JSON from a Google Cloud Service account key. |




## YAML

Below is the YAML template for this Blueprint and can be used in the
Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: Google BigQuery - Download Query Results to Google Cloud Storage
  inputs:
    BIGQUERY_QUERY: null  ## REQUIRED
    BIGQUERY_BUCKET_NAME: null ## REQUIRED
    BIGQUERY_DESTINATION_FILE_NAME: null ## REQUIRED
    BIGQUERY_DESTINATION_FOLDER_NAME: null
    GOOGLE_APPLICATION_CREDENTIALS: null ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '101'
    - '102'
    - '200'
    - '203'
    - '205'
    - '206'
 ```


