---
id: rudderstack-check-sync-status
title: Rudderstack Template - Check Sync Status
hide_title: true
sidebar_label: Check Sync Status
description: Information about Shipyard's low-code Rudderstack Check Sync Status blueprint. Check for the status of a Rudderstack source. The Vessel's exit code and status will match the status of the latest sync. 
keywords:
    - rudderstack
    - blueprint
    - template
---

# RudderStack - Check Sync Status

## Overview
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
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Access Token | RUDDERSTACK_ACCESS_TOKEN  | Password |:white_check_mark: | `-` | - | The access token associated with your Rudderstack account. |
| Source ID | RUDDERSTACK_SOURCE_ID  | Alphanumeric |:heavy_minus_sign: | `-` | - | The ID of the Rudderstack source you want to refresh. This should be left blank if connected to an Trigger Sync Blueprint. |


