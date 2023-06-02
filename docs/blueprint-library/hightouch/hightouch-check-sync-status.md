---
id: hightouch-check-sync-status
title: Hightouch Template - Check Sync Status
hide_title: true
sidebar_label: Check Sync Status
description: Information about Shipyard's low-code Hightouch Check Sync Status blueprint. Verify the status of a recently triggered Hightouch sync. 
keywords:
    - hightouch
    - blueprint
    - template
---

# Hightouch - Check Sync Status

## Overview
Check for the status of a Hightouch sync. The Vessel's exit code and status will match the status of the latest sync.

## Status Codes
- If the sync finishes successfully, an exit code of 0 will be returned.
- If the sync is finished but has errored, an exit code of 210 will be returned.
- If the sync is incomplete, an exit code of 211 will be returned.

The response for this request will always be stored at `shipyard-artifacts/hightouch-blueprints/responses/sync_run_{sync_run_id}_response.json`.

**Recommended Setup:**
1. A Vessel built with this Blueprint should be paired with guardrail retries. This will allow the Vessel to continually check for status until a final result is found.
2. This Vessel should run immediately after a Vessel built with the Trigger Sync Blueprint. With this setup, you can leave the Sync Run ID field blank and this Vessel will check for the results of the recently created sync.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| API Key | HIGHTOUCH_API_KEY  | Password |:white_check_mark: | - | - | The API Key associated with your Hightouch account. |
| Sync ID | HIGHTOUCH_SYNC_ID  | Alphanumeric |:white_check_mark: | - | - | The ID of the Hightouch sync you want to refresh. |
| Sync Run ID | HIGHTOUCH_SYNC_RUN_ID  | Alphanumeric |:heavy_minus_sign: | - | - | The sync run ID that you want to check the status of. Leave blank if connected to another Vessel that will Trigger Sync. |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
  blueprint: Hightouch - Check Sync Status
  inputs:
    HIGHTOUCH_API_KEY: null ## REQUIRED
    HIGHTOUCH_SYNC_ID: null ## REQUIRED
    HIGHTOUCH_SYNC_RUN_ID: null 
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - "200"
    - "201"
    - "210"
```
