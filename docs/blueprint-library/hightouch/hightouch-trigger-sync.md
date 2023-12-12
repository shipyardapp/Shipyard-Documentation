---
id: hightouch-trigger-sync
title: Hightouch Template - Trigger Sync
hide_title: true
sidebar_label: Trigger Sync
description: Information about Shipyard's low-code Hightouch Trigger Sync blueprint. Immediately trigger a Hightouch sync. 
keywords:
    - hightouch
    - blueprint
    - template
---

# Hightouch - Trigger Sync

## Overview
Immediately execute a Hightouch snyc. The sync must already be set up within the Hightouch interface.

If a sync is already running for the specified connector, it will be stopped and restarted.

This Blueprint will only kick off the sync and will almost always return a status of success. It will not wait around to verify if the sync was successfully completed, but it will create and store the source ID used to `shipyard-artifacts/hightouch-blueprints/variables/sync_run_id.pickle`

**Recommended Setup:**
1. The Hightouch Sync being triggered should be set to a *Manual* schedule to avoid conflicting runs.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| API Key | HIGHTOUCH_API_KEY  | Password |:white_check_mark: | - | - | The API Key associated with your Hightouch account. |
| Sync ID | HIGHTOUCH_SYNC_ID  | Alphanumeric |:white_check_mark: | - | - | The ID of the Hightouch sync you want to refresh. |
| Run a Full Resync? | HIGHTOUCH_FULL_RESYNC  | Boolean |:white_check_mark: | `False` | - | If TRUE, will rescync all of the rows in the query, rather than only the new ones. |
| Wait For Completion | HIGHTOUCH_WAIT  | Boolean |:heavy_minus_sign: | `TRUE` | - | Enable if you want the vessel to wait until the sync job is successfully completed. Otherwise, the vessel will only initiate the sync job without waiting |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
    blueprint: Hightouch - Trigger Sync
    inputs:
        HIGHTOUCH_API_KEY: null  ## REQUIRED
        HIGHTOUCH_SYNC_ID: null ## REQUIRED
        HIGHTOUCH_FULL_RESYNC: false ## REQUIRED
        HIGHTOUCH_WAIT: 'TRUE'
    type: BLUEPRINT
guardrails:
    retry_count: 1
    retry_wait: 0h0m0s
    runtime_cutoff: 1h0m0s
    exclude_exit_code_ranges:
    -   200
    -   201
    -   210

```
