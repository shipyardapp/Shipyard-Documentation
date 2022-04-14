---
id: census-check-sync-run-status
title: Census Template - Check Sync Run Status
hide_title: true
sidebar_label: Check Sync Run Status
description: Information about Shipyard's low-code Census Check Sync Run Status blueprint. Check the status of a specific sync run.
keywords:
    - census
    - blueprint
    - template
---

# Census - Check Sync Run Status

## Overview

Check for the status of a single sync run on Census. By default, Census will usually return completed when the run is finished. 

This Blueprint allows you to select numeric thresholds for number of failed records and number of incomplete records. If the values returned by Census exceed your threshold, your run will be considered to be an error.

The Vessel&#39;s exit code and status will match the status of the Census sync run. 

- If the run is not completed, the Vessel will return an exit code of 255, an error.
- If the run has completed with an error, the Vessel will return an exit code of 1, an error.
- If the run has completed and the number of errored records exceeds your threshold, the Vessel will return an exit code of 1, an error.
- If the run has completed and the number of incomplete records exceeds your threshold, the Vessel will return an exit code of 2, an error.
- If the run has completed and the number of errored and incomplete records are both below your threshold, the Vessel will return an exit code of 0, interpreted by Shipyard as Successful.

The response for this request will always be stored at `shipyard-artifacts/census-blueprints/responses/run_RUNID_response.json`

**Recommended Setup:**

1. A Vessel built with this Blueprint should be paired with guardrail retries. This will allow the Vessel to continually check for status until a final result is found.
2. This Vessel should run immediately after a Vessel built with the _Census - Execute Job_ Blueprint. With this setup, you can leave the Run ID field blank and this Vessel will check for the results of the recently created run.


## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Trigger URL | URL | Password | :white_check_mark: | - | - | - |
| Sync Run ID | SYNC_RUN_ID | Alphanumeric | :heavy_minus_sign: | - | - | - |
| Failure Threshold | FAILURE_THRESHOLD | Alphanumeric | :heavy_minus_sign: | 0 | - | - |
| Invalid Threshold | INVALID_THRESHOLD | Alphanumeric | :heavy_minus_sign: | 0 | - | - |


