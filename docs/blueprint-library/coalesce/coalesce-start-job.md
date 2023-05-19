---
id: coalesce-start-job
title: Coalesce Template - Start Job
hide_title: true
sidebar_label: Start Job
description: Information about Shipyard's low-code Coalesce Start Job blueprint. Trigger the execution of a Coalesce job 
keywords:
    - coalesce
    - blueprint
    - template
---

# Coalesce - Start Job

## Overview
Trigger the execution of a Coalesce job without waiting for it to complete.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Access Token | COALESCE_ACCESS_TOKEN  | Password |:white_check_mark: | `-` | - | The API token generated in Coalesce |
| Environment ID | COALESCE_ENVIRONMENT_ID  | Alphanumeric |:white_check_mark: | `-` | - | The environment to be refreshed |
| Job ID | COALESCE_JOB_ID  | Alphanumeric |:heavy_minus_sign: | `-` | - | The ID of the job being run |
| Snowflake Username | COALESCE_SNOWFLAKE_USERNAME  | Alphanumeric |:white_check_mark: | `-` | - | Snowflake account username |
| Snowflake Password | COALESCE_SNOWFLAKE_PASSWORD  | Password |:white_check_mark: | `-` | - | Snowflake account password |
| Snowflake Role | COALESCE_SNOWFLAKE_ROLE  | Alphanumeric |:white_check_mark: | `-` | - | Snowflake user role |
| Snowflake Warehouse | COALESCE_SNOWFLAKE_WAREHOUSE  | Alphanumeric |:heavy_minus_sign: | `-` | - | Snowflake compute warehouse |
| Include Nodes Selector | COALESCE_INCLUDE_NODES_SELECTOR  | Alphanumeric |:heavy_minus_sign: | `-` | - | The nodes to be included on a ad-hoc job run |
| Exclude Nodes Selector | COALESCE_EXCLUDE_NODES_SELECTOR  | Alphanumeric |:heavy_minus_sign: | `-` | - | The nodes to be excluded for an ad-hoc job run |
| Parallelism | COALESCE_PARALLELISM  | Integer |:heavy_minus_sign: | `16` | - | The maximum number of parallel nodes to run |


