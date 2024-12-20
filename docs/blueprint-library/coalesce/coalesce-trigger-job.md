---
id: coalesce-trigger-job
title: Coalesce Template - Trigger Job
hide_title: true
sidebar_label: Trigger Job
description: Information about Platform's low-code Coalesce Trigger Job blueprint. Trigger the execution of a Coalesce job
keywords:
  - coalesce
  - blueprint
  - template
---

# Coalesce - Trigger Job


:::info
This Blueprint is classified as "Free" and does not incur billable runtime. [Learn more](../../reference/blueprints/blueprint-library/blueprint-library-overview.md#free-blueprints).
:::


## Overview

Trigger the execution of a Coalesce job. 

**Recommended Setup** 
It is recommended to set the `Wait For Completion` input to `TRUE` so that the blueprint completes once the Coalesce job has finished. 

**Parameters** 
Parameters can be used within the blueprint by passing in the JSON format of the parameters like so:

```json
{ "foo": "bar1" }

```
If you provide a value for a parameter that is different than the default value (defined in the Coalesce UI), the value provided will be used for the refresh. 


## Variables

| Name | Reference | Type | Required | Default | Options | Description             |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------------------|
| Access Token | COALESCE_ACCESS_TOKEN | Password | :white_check_mark: | - | - | The API token generated in Coalesce |
| Environment ID | COALESCE_ENVIRONMENT_ID | Alphanumeric | :white_check_mark: | - | - | The environment to be refreshed |
| Job ID | COALESCE_JOB_ID | Alphanumeric | :heavy_minus_sign: | - | - | The ID of the job being run |
| Snowflake Username | COALESCE_SNOWFLAKE_USERNAME | Alphanumeric | :white_check_mark: | - | - | Snowflake account username |
| Snowflake Password | COALESCE_SNOWFLAKE_PASSWORD | Password | :white_check_mark: | - | - | Snowflake account password |
| Snowflake Role | COALESCE_SNOWFLAKE_ROLE | Alphanumeric | :heavy_minus_sign: | - | - | Snowflake user role |
| Snowflake Warehouse | COALESCE_SNOWFLAKE_WAREHOUSE | Alphanumeric | :heavy_minus_sign: | - | - | Snowflake compute warehouse |
| Include Nodes Selector | COALESCE_INCLUDE_NODES_SELECTOR | Alphanumeric | :heavy_minus_sign: | - | - | The nodes to be included on a ad-hoc job run |
| Exclude Nodes Selector | COALESCE_EXCLUDE_NODES_SELECTOR | Alphanumeric | :heavy_minus_sign: | - | - | The nodes to be excluded for an ad-hoc job run |
| Parallelism | COALESCE_PARALLELISM | Integer | :heavy_minus_sign: | `16` | - | The maximum number of parallel nodes to run |
| Wait For Completion | COALESCE_WAIT | Boolean | :heavy_minus_sign: | `TRUE` | - | Enable if you want the vessel to wait until the sync job is successfully completed. Otherwise, the vessel will only initiate the sync job without waiting |
| Parameters | COALESCE_PARAMETERS | Alphanumeric | :heavy_minus_sign: | - | - | The optional parameters to use which are defined in the Coalesce UI. Format should be JSON where the Key is the name of the parameter and the Value is what the parameter should be.  |
| Region | COALESCE_REGION | Select | :white_check_mark: | `gcp-us-central-1` | US Primary: `gcp-us-central-1`<br></br><br></br>Europe Primary: `gcp-eu-west-3`<br></br><br></br>Australia Primary: `gcp-austrailia-southeast-1`<br></br><br></br>US AWS East: `aws-us-east-1`<br></br><br></br>US AWS West: `aws-us-west-2`<br></br><br></br>US West 2 Azure: `az-us-west-2`<br></br><br></br>US East 2 Azure: `az-us-east-2`<br></br><br></br> | The region for your Coalesce account. For most US customers, the default will be US Central 1. |




## YAML

Below is the YAML template for this Blueprint and can be used in the
Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: Coalesce - Trigger Job
  inputs:
    COALESCE_ACCESS_TOKEN: null  ## REQUIRED
    COALESCE_ENVIRONMENT_ID: null ## REQUIRED
    COALESCE_JOB_ID: null
    COALESCE_SNOWFLAKE_USERNAME: null ## REQUIRED
    COALESCE_SNOWFLAKE_PASSWORD: null ## REQUIRED
    COALESCE_SNOWFLAKE_ROLE: null
    COALESCE_SNOWFLAKE_WAREHOUSE: null
    COALESCE_INCLUDE_NODES_SELECTOR: null
    COALESCE_EXCLUDE_NODES_SELECTOR: null
    COALESCE_PARALLELISM: 16
    COALESCE_WAIT: 'TRUE'
    COALESCE_PARAMETERS: null
    COALESCE_REGION: gcp-us-central-1 ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '0'
 ```


