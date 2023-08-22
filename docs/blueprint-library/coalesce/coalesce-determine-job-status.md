---
id: coalesce-determine-job-status
title: Coalesce Template - Check Job Status
hide_title: true
sidebar_label: Check Job Status
description: Information about Shipyard's low-code Coalesce Check Job Status blueprint. Quickly determine the status of Coalesce job 
keywords:
    - coalesce
    - blueprint
    - template
---

# Coalesce - Check Job Status

## Overview
Check the status of a specific Coalesce job and return with the final status. Best used if run immediately after the Coalesce - Start Job blueprint.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Access Token | COALESCE_ACCESS_TOKEN  | Password |:white_check_mark: | - | - | The Coalesce API token |
| Run ID | COALESCE_RUN_ID  | Integer |:heavy_minus_sign: | - | - | The ID of the specific run to query |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
    blueprint: Coalesce - Check Job Status
    inputs:
        COALESCE_ACCESS_TOKEN: null  ## REQUIRED
        COALESCE_RUN_ID: null
    type: BLUEPRINT
guardrails:
    retry_count: 4
    retry_wait: 0h5m0s
    runtime_cutoff: 1h0m0s
    exclude_exit_code_ranges:
    -   214
    -   210
    -   213
    -   201
    -   200
    -   213
    -   202

```
