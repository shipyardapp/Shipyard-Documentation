---
id: domo-refresh-dataset
title: Domo Template - Trigger Dataset Refresh
hide_title: true
sidebar_label: Trigger Dataset Refresh
description: Information about Shipyard's low-code Domo Trigger Dataset Refresh blueprint. Manually trigger a refresh of a dataset in Domo. 
keywords:
    - domo
    - blueprint
    - template
---

# Domo - Trigger Dataset Refresh

## Overview
Manually trigger a refresh of a dataset in Domo.

Authentication can be provided with a Client ID and Secret which can be obtained through Domo's developer portal.

This Blueprint will only kick off the refresh and will almost always return a status of success. It will not wait around to verify if the created refresh job was successfully completed, but it will create and store the generated job ID to shipyard-artifacts/domo-blueprints/variables/job_id.pickle

**Recommended Setup:**

1. The `Wait for Completion` input should be set to `TRUE` which will ensure that the vessel waits for the final status of the refresh. 

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Client ID | DOMO_CLIENT_ID  | Alphanumeric |:white_check_mark: | - | - | Client ID of your organization's Domo App. |
| Secret | DOMO_SECRET_KEY  | Password |:white_check_mark: | - | - | Secret associated with the provided Client ID. |
| Dataset ID | DOMO_DATASET_ID  | Alphanumeric |:white_check_mark: | - | - | UUID of the dataset you want to download, typically found at the end of the URL. |
| Wait for Completion | DOMO_WAIT  | Boolean |:heavy_minus_sign: | `TRUE` | - | Whether the blueprint should wait for the Domo refresh to finish. It is recommended to set this to TRUE. |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
    blueprint: Domo - Trigger Dataset Refresh
    inputs:
        DOMO_CLIENT_ID: null  ## REQUIRED
        DOMO_SECRET_KEY: null ## REQUIRED
        DOMO_DATASET_ID: null ## REQUIRED
        DOMO_WAIT: 'TRUE'
    type: BLUEPRINT
guardrails:
    retry_count: 1
    retry_wait: 0h0m0s
    runtime_cutoff: 1h0m0s
    exclude_exit_code_ranges:
    -   200
    -   201
    -   203
    -   204
    -   205
    -   210
    -   211
    -   207

```
