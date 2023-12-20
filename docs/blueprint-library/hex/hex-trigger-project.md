---
id: hex-trigger-project
title: Hex Template - Trigger Project
hide_title: true
sidebar_label: Trigger Project
description: Information about Shipyard's low-code Hex Trigger Project blueprint. Runs a Hex project through the Hex API 
keywords:
    - hex
    - blueprint
    - template
---

# Hex - Trigger Project

## Overview
Immediately runs a Hex project. The project must already be set up  and published within the Hex interface.

This Blueprint will create and store the source ID used to `shipyard-artifacts/hex-blueprints/variables/runId.pickle`


## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Project ID | HEX_PROJECT_ID  | Alphanumeric |:white_check_mark: | - | - | The Project Id can be acquired from the project URL itself or from within the project's variables section. See authorization page for more. |
| API Token | HEX_API_TOKEN  | Password |:white_check_mark: | - | - | The API token is generated by Hex for a set amount of time. See authorization page for more |
| Wait For Completion | HEX_WAIT  | Boolean |:heavy_minus_sign: | `TRUE` | - | Enable if you would like the vessel to wait for the final status of the project run |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
  blueprint: Hex - Trigger Project
  inputs:
    HEX_PROJECT_ID: null  ## REQUIRED
    HEX_API_TOKEN: null ## REQUIRED
    HEX_WAIT: 'TRUE'
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '201'
    - '226'

```