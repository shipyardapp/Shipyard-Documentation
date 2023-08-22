---
id: coalesce-trigger-job
title: Coalesce - Trigger Job
hide_title: true
sidebar_label: Trigger Job
description: Information about Shipyard's low-code Coalesce Trigger Job blueprint. Trigger the execution of a Coalesce job 
keywords:
    - coalesce
    - blueprint
    - template
---

# Coalesce - Trigger Job

## Overview
Trigger the execution of a Coalesce job without waiting for it to complete.

## Variables

| Name                   | Reference                       | Type         | Required           | Default | Options | Description                                                                                                                                               |
|:-----------------------|:--------------------------------|:-------------|:-------------------|:--------|:--------|:----------------------------------------------------------------------------------------------------------------------------------------------------------|
| Access Token           | COALESCE_ACCESS_TOKEN           | Password     | :white_check_mark: | -       | -       | The API token generated in Coalesce                                                                                                                       |
| Environment ID         | COALESCE_ENVIRONMENT_ID         | Alphanumeric | :white_check_mark: | -       | -       | The environment to be refreshed                                                                                                                           |
| Job ID                 | COALESCE_JOB_ID                 | Alphanumeric | :heavy_minus_sign: | -       | -       | The ID of the job being run                                                                                                                               |
| Snowflake Username     | COALESCE_SNOWFLAKE_USERNAME     | Alphanumeric | :white_check_mark: | -       | -       | Snowflake account username                                                                                                                                |
| Snowflake Password     | COALESCE_SNOWFLAKE_PASSWORD     | Password     | :white_check_mark: | -       | -       | Snowflake account password                                                                                                                                |
| Snowflake Role         | COALESCE_SNOWFLAKE_ROLE         | Alphanumeric | :white_check_mark: | -       | -       | Snowflake user role                                                                                                                                       |
| Snowflake Warehouse    | COALESCE_SNOWFLAKE_WAREHOUSE    | Alphanumeric | :heavy_minus_sign: | -       | -       | Snowflake compute warehouse                                                                                                                               |
| Include Nodes Selector | COALESCE_INCLUDE_NODES_SELECTOR | Alphanumeric | :heavy_minus_sign: | -       | -       | The nodes to be included on a ad-hoc job run                                                                                                              |
| Exclude Nodes Selector | COALESCE_EXCLUDE_NODES_SELECTOR | Alphanumeric | :heavy_minus_sign: | -       | -       | The nodes to be excluded for an ad-hoc job run                                                                                                            |
| Parallelism            | COALESCE_PARALLELISM            | Integer      | :heavy_minus_sign: | `16`    | -       | The maximum number of parallel nodes to run                                                                                                               |
| Wait For Completion    | COALESCE_WAIT                   | Boolean      | :heavy_minus_sign: | `FALSE` | -       | Enable if you want the vessel to wait until the sync job is successfully completed. Otherwise, the vessel will only initiate the sync job without waiting |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
    blueprint: Coalesce - Trigger Job
    inputs:
        COALESCE_ACCESS_TOKEN: null  ## REQUIRED
        COALESCE_ENVIRONMENT_ID: null ## REQUIRED
        COALESCE_JOB_ID: null
        COALESCE_SNOWFLAKE_USERNAME: null ## REQUIRED
        COALESCE_SNOWFLAKE_PASSWORD: null ## REQUIRED
        COALESCE_SNOWFLAKE_ROLE: null ## REQUIRED
        COALESCE_SNOWFLAKE_WAREHOUSE: null
        COALESCE_INCLUDE_NODES_SELECTOR: null
        COALESCE_EXCLUDE_NODES_SELECTOR: null
        COALESCE_PARALLELISM: 16
        COALESCE_WAIT: 'FALSE'
    type: BLUEPRINT
guardrails:
    retry_count: 1
    retry_wait: 0h0m0s
    runtime_cutoff: 1h0m0s
    exclude_exit_code_ranges:
    -   '0'

```
