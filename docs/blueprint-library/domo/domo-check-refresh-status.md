---
id: domo-check-refresh-status
title: Domo Template - Check Refresh Status
hide_title: true
sidebar_label: Check Refresh Status
description: Information about Shipyard's low-code Domo Check Refresh Status blueprint. Check the status of a recently refreshed dataset in Domo. 
keywords:
    - domo
    - blueprint
    - template
---

# Domo - Check Refresh Status

## Overview
Check the job status of a dataset that has recently been refreshed in Domo.

**Recommended Setup:**

1. A Vessel built with this Blueprint should be paired with guardrail retries. This will allow the Vessel to continually check for status until a final result is found.

2. This Vessel should run immediately after a Vessel built with the _Domo - Trigger Dataset Refresh_ Blueprint. With this setup, you can leave the Execution ID field blank and this Vessel will check for the results of the recently created job.


## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Client ID | DOMO_CLIENT_ID  | Alphanumeric |:white_check_mark: | - | - | Client ID of your organization's Domo App. |
| Secret | DOMO_SECRET_KEY  | Password |:white_check_mark: | - | - | Secret associated with the provided Client ID. |
| Dataset ID | DOMO_DATASET_ID  | Alphanumeric |:white_check_mark: | - | - | UUID of the dataset you want to download, typically found at the end of the URL. |
| Execution ID | DOMO_EXECUTION_ID  | Alphanumeric |:heavy_minus_sign: | - | - | The ID of a specific execution you check the status of. If left blank, will try to find the execution ID from an "Refresh Dataset" Vessel that ran upstream. |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
    blueprint: Domo - Check Refresh Status
    inputs:
        DOMO_CLIENT_ID: null  ## REQUIRED
        DOMO_SECRET_KEY: null ## REQUIRED
        DOMO_DATASET_ID: null ## REQUIRED
        DOMO_EXECUTION_ID: null
    type: BLUEPRINT
guardrails:
    retry_count: 12
    retry_wait: 0h5m0s
    runtime_cutoff: 1h0m0s
    exclude_exit_code_ranges:
    -   200
    -   201
    -   203
    -   204
    -   205
    -   210
    -   211

```
