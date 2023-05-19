---
id: google-bigquery-execute-query
title: Google BigQuery Template - Execute Query
hide_title: true
sidebar_label: Execute Query
description: Information about Shipyard's low-code Google BigQuery Execute Query blueprint. Execute any Standard SQL query against a Google BigQuery database. 
keywords:
    - google bigquery
    - blueprint
    - template
---

# Google BigQuery - Execute Query

## Overview
Execute any Standard SQL query against a Google BigQuery database. Perfect for creating multi-step SQL jobs, executing DML statements, or running scheduled queries.


## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Query | BIGQUERY_QUERY  | Alphanumeric |:white_check_mark: | `-` | - | Standard SQL query to be executed against BigQuery. Does not support Legacy SQL. |
| Service Account | GOOGLE_APPLICATION_CREDENTIALS  | Password |:white_check_mark: | `-` | - | JSON from a Google Cloud Service account key. |


