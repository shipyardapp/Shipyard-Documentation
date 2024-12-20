---
id: census-check-sync-status
title: Census Template - Check Sync Status (Deprecated)
hide_title: true
sidebar_label: Check Sync Status (Deprecated)
description: Information about Platform's low-code Census Check Sync Status (Deprecated) blueprint. Check and verify the status of a recently triggered sync on Census. 
keywords:
    - census
    - blueprint
    - template
---

# Census - Check Sync Status (Deprecated)

## Overview
This Blueprint has been deprecated. Please use the vendor's "Trigger" Blueprint and set the "Wait for Completion" option to "True". Using this new option is free, more stable, and will complete faster. Read more about this change [here](https://www.shipyardapp.com/blog/orchestrate-data-tools-free).

Check for the status of a Census sync. The Vessel's exit code and status will match the status of the latest sync.

## Status Codes
- If the sync finishes successfully, an exit code of 0 will be returned.
- If the sync is incomplete, an exit code of 210 will be returned.
- If the sync is finished but has errored, an exit code of 211 will be returned.

The response for this request will always be stored at `shipyard-artifacts/census-blueprints/responses/sync_run_{sync_run_id}_response.json`.

**Recommended Setup:**
1. A Vessel built with this Blueprint should be paired with guardrail retries. This will allow the Vessel to continually check for status until a final result is found.
2. This Vessel should run immediately after a Vessel built with the Trigger Sync Blueprint. With this setup, you can leave the Sync Run ID field blank and this Vessel will check for the results of the recently created sync.


## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| API Key | CENSUS_API_KEY  | Password |:white_check_mark: | - | - | The API Key associated with your Census account. |
| Sync Run ID | CENSUS_SYNC_RUN_ID  | Alphanumeric |:heavy_minus_sign: | - | - | The ID of the Census sync run you want to check the status of. If connected to "Trigger Sync" blueprint, leave blank. |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
  blueprint: Census - Check Sync Status (Deprecated)
  inputs:
    CENSUS_API_KEY: null  ## REQUIRED
    CENSUS_SYNC_RUN_ID: null
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '200'
    - '211'

```
