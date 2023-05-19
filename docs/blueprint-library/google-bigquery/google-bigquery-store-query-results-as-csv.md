---
id: google-bigquery-store-query-results-as-csv
title: Google BigQuery Template - Store Query Results as CSV
hide_title: true
sidebar_label: Store Query Results as CSV
description: Information about Shipyard's low-code Google BigQuery Store Query Results as CSV blueprint. Turn the results of your SQL SELECT statement into a CSV file. 
keywords:
    - google bigquery
    - blueprint
    - template
---

# Google BigQuery - Store Query Results as CSV

## Overview
Larger datasets may run into file size limitations set by BigQuery. In these instances, we recommend using the **Google BigQuery - Store Query Results in Google Cloud Storage** Blueprint.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Query | BIGQUERY_QUERY  | Alphanumeric |:white_check_mark: | `-` | - | Standard SQL query to be executed against BigQuery. Does not support Legacy SQL. |
| Local File Name | BIGQUERY_DESTINATION_FILE_NAME  | Alphanumeric |:white_check_mark: | `-` | - | Name of file to be generated with the results. Should be `.csv` extension. |
| Local Folder Name | BIGQUERY_DESTINATION_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | `-` | - | Folder where the file should be downloaded. Leaving blank will place the file in the home directory. |
| Service Account | GOOGLE_APPLICATION_CREDENTIALS  | Password |:white_check_mark: | `-` | - | JSON from a Google Cloud Service account key. |


