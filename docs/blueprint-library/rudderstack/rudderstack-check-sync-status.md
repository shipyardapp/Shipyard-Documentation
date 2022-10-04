---
id: rudderstack-check-sync-status
title: RudderStack Template - Check Sync Status
hide_title: true
sidebar_label: Check Sync Status
description: Information about Shipyard's low-code RudderStack Check Sync Status blueprint. Check for the status of a Rudderstack source. The Vessel's exit code and status will match the status of the latest sync.
keywords:
    - rudderstack
    - blueprint
    - template
---

# RudderStack - Check Sync Status

## Overview

> ## **First time using this Blueprint? Make sure you follow our [Rudderstack authorization guide](https://www.shipyardapp.com/docs/blueprint-library/rudderstack/rudderstack-authorization/)**.

Check for the status of a Rudderstack source. The Vessel's exit code and status will match the status of the latest sync.

## Status Codes
- If the sync finishes successfully, an exit code of 0 will be returned.
- If the sync is incomplete, an exit code of 210 will be returned.
- If the sync is finished but has errored, an exit code of 211 will be returned.
- If the sync has finished but the status is invalid, an exit code of 212 will be returned.
- If the sync's status is unknown, an exit code of 213 will be returned.

The response for this request will always be stored at `shipyard-artifacts/rudderstack-blueprints/responses/sync_run_{source_id}_response.json`.

**Recommended Setup:**
1. A Vessel built with this Blueprint should be paired with guardrail retries. This will allow the Vessel to continually check for status until a final result is found.
2. This Vessel should run immediately after a Vessel built with the Trigger Sync Blueprint. With this setup, you can leave the Source ID field blank and this Vessel will check for the results of the recently created sync.



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Access Token | RUDDERSTACK_ACCESS_TOKEN | Password | :white_check_mark: | - | - | The access token associated with your Rudderstack account. |
| Source ID | RUDDERSTACK_SOURCE_ID | Alphanumeric | :heavy_minus_sign: | - | - | The ID of the Rudderstack source you want to refresh. This should be left blank if connected to an Trigger Sync Blueprint. |


## YAML

Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: RudderStack - Check Sync Status
  inputs:
    RUDDERSTACK_ACCESS_TOKEN: null ## REQUIRED
    RUDDERSTACK_SOURCE_ID: null 
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0s
  runtime_cutoff: 4h0m0s
  exclude_exit_code_ranges:
    - "200"
    - "203"
    - "204"
    - "211"
    - "212"
```
