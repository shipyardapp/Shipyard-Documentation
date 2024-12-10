---
id: census-trigger-sync
title: Census Template - Trigger Sync
hide_title: true
sidebar_label: Trigger Sync
description: Information about Platform's low-code Census Trigger Sync blueprint. Immediately trigger a Census sync. 
keywords:
    - census
    - blueprint
    - template
---

# Census - Trigger Sync

:::info
This Blueprint is classified as "Free" and does not incur billable runtime. [Learn more](../../reference/blueprints/blueprint-library/blueprint-library-overview.md#free-blueprints).
:::

## Overview
Immediately execute a Census snyc. The sync must already be set up within the Census interface.

If a sync is already running for the specified connector, it will be stopped and restarted.

This Blueprint will create and store the source ID used to `shipyard-artifacts/census-blueprints/variables/sync_run_id.pickle`

**Recommended Setup:**
The Census Sync being triggered should not have any other schedules set in the Census UI to avoid conflicting runs.


## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| API Key | CENSUS_API_KEY  | Password |:white_check_mark: | - | - | The API Key associated with your Census account. |
| Sync ID | CENSUS_SYNC_ID  | Alphanumeric |:white_check_mark: | - | - | The ID of the Census sync you want to refresh. |
| Wait For Completion | CENSUS_WAIT  | Boolean |:heavy_minus_sign: | `TRUE` | - | Enable if you want the vessel to wait until the sync job is successfully completed. Otherwise, the vessel will only initiate the sync job without waiting |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
  blueprint: Census - Trigger Sync
  inputs:
    CENSUS_API_KEY: null  ## REQUIRED
    CENSUS_SYNC_ID: null ## REQUIRED
    CENSUS_WAIT: 'TRUE'
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '200'

```
