---
id: census-trigger-sync
title: Census Template - Trigger Sync
hide_title: true
sidebar_label: Trigger Sync
description: Information about Shipyard's low-code Census Trigger Sync blueprint. Immediately trigger a Census sync. 
keywords:
    - census
    - blueprint
    - template
---

# Census - Trigger Sync

## Overview
Immediately execute a Census snyc. The sync must already be set up within the Census interface.

If a sync is already running for the specified connector, it will be stopped and restarted.

This Blueprint will only kick off the sync and will almost always return a status of success. It will not wait around to verify if the sync was successfully completed, but it will create and store the source ID used to `shipyard-artifacts/census-blueprints/variables/sync_run_id.pickle`

**Recommended Setup:**
1. This Vessel should be immediately followed by a Vessel built from the Check Sync Status Blueprint so you can verify the status and completion of your sync.
2. The Census Sync being triggered should not have any other schedules set in the Census UI to avoid conflicting runs.


## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| API Key | CENSUS_API_KEY  | Password |:white_check_mark: | - | - | The API Key associated with your Census account. |
| Sync ID | CENSUS_SYNC_ID  | Alphanumeric |:white_check_mark: | - | - | The ID of the Census sync you want to refresh. |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
  blueprint: Census - Trigger Sync
  inputs:
    CENSUS_API_KEY: null ## REQUIRED
    CENSUS_SYNC_ID: null ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - "200"
```
