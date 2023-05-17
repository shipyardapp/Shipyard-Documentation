---
id: coalesce-determine-job-status
title: Coalesce Template - Determine Job Status
hide_title: true
sidebar_label: Determine Job Status
description: Information about Shipyard's low-code Coalesce Determine Job Status blueprint. Quickly determine the status of Coalesce job
keywords:
    - coalesce
    - blueprint
    - template
---

# Coalesce - Determine Job Status

## Overview

> ## **First time using this Blueprint? Make sure you follow our [Coalesce authorization guide](https://www.shipyardapp.com/docs/blueprint-library/coalesce/coalesce-authorization/)**.

Check the status of a specific Coalesce job and return with the final status. Best used if run immediately after the Coalesce - Start Job blueprint.


## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Access Token | COALESCE_ACCESS_TOKEN | Password | :white_check_mark: | - | - | The Coalesce API token |
| Run ID | COALESCE_RUN_ID | Integer | :heavy_minus_sign: | - | - | The ID of the specific run to query |


## YAML

Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets.md#yaml-editor).

```yaml
source:
  blueprint: Coalesce - Determine Job Status
  inputs:
    COALESCE_ACCESS_TOKEN: null ## REQUIRED
    COALESCE_RUN_ID: null 
  type: BLUEPRINT
guardrails:
  retry_count: 4
  retry_wait: 5m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - "210"
    - "213"
    - "201"
    - "200"
```
