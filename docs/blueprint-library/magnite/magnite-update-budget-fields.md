---
id: magnite-update-budget-fields
title: Magnite Template - Update Budget Fields
hide_title: true
sidebar_label: Update Budget Fields
description: Information about Shipyard's low-code Magnite Update Budget Fields blueprint. Quickly update the budget fields in Magnite
keywords:
  - magnite
  - blueprint
  - template
---

# Magnite - Update Budget Fields



## Overview

Quickly update the budget fields in Magnite. The blueprint allows for both single updates (by providing the ID) or bulk updates (by providing the file). 

### Bulk updates
A CSV file can be provided for updating multiple campaigns. 
The file must contain the following fields:
- id
- budget_value

Optional fields to update include:
- `budget_period`: (hour, day, week, month, life)
- `budget_pacing`: (asap, smooth, even, front_loaded)
- `budget_metric`: (revenue, gross_cost, net_cost, requests, impressions, clicks)

### Single updates
In order to update a single campaign, you must minimally provide the associated `ID` as well as the desired budget value to set.


## Variables

| Name | Reference | Type | Required | Default | Options | Description             |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------------------|
| Username | MAGNITE_USERNAME | Alphanumeric | :white_check_mark: | - | - | The username to authenticate with |
| Password | MAGNITE_PASSWORD | Password | :white_check_mark: | - | - | None |
| Endpoint | MAGNITE_ENDPOINT | Select | :white_check_mark: | - | Campaigns: `campaigns`<br></br><br></br> | None |
| ID | MAGNITE_ID | Alphanumeric | :heavy_minus_sign: | - | - | The ID of the associated item to update. Required for single updates |
| File Name | MAGNITE_FILE | Alphanumeric | :heavy_minus_sign: | - | - | The file that contains multiple ID's to update. Required for bulk updates |
| Budget Value | MAGNITE_BUDGET_VALUE | Integer | :heavy_minus_sign: | - | - | The new budget value to set. Required if performing a single update |
| Budget Period | MAGNITE_BUDGET_PERIOD | Alphanumeric | :heavy_minus_sign: | - | - | The optional budget period to set |
| Budget Pacing | MAGNITE_BUDGET_PACING | Alphanumeric | :heavy_minus_sign: | - | - | The optional budget pacing to set |




## YAML

Below is the YAML template for this Blueprint and can be used in the
Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: Magnite - Update Budget Fields
  inputs:
    MAGNITE_USERNAME: null  ## REQUIRED
    MAGNITE_PASSWORD: null ## REQUIRED
    MAGNITE_ENDPOINT: null ## REQUIRED
    MAGNITE_ID: null
    MAGNITE_FILE: null
    MAGNITE_BUDGET_VALUE: null
    MAGNITE_BUDGET_PERIOD: null
    MAGNITE_BUDGET_PACING: null
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '200'
    - '201'
    - '202'
    - '203'
 ```


