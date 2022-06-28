---
id: census-execute-sync-and-return-status
title: Census Template - Execute Sync and Return Status
hide_title: true
sidebar_label: Execute Sync and Return Status
description: Information about Shipyard's low-code Census Execute Sync and Return Status blueprint. Execute a Census sync and wait for the results.
keywords:
    - census
    - blueprint
    - template
---

# Census - Execute Sync and Return Status

## Overview

This is considered an &#34;all-in-one&#34; Blueprint for the other 2 Blueprints listed above. By using this Blueprint, you will accumulate runtime as the Vessel continuously waits for the sync to be completed. The tradeoff is that results may be quicker and the setup/complexity is less.

If you want to reduce the overall runtime you&#39;re billed for, you will need to instead set up a Fleet with Vessels built with these blueprints in this order:
`Execute Sync` -&gt; `Check Sync Status`

A Vessel built with this Blueprint will kick off a single sync on Census and check for the status every 30 seconds. Once the status is confirmed to be completed, the Vessel will exit with the appropriate exit code.

The response for this request will always be stored at `shipyard-artifacts/census-blueprints/responses/sync_SYNCID_response.json` and `shipyard-artifacts/census-blueprints/responses/run_RUNID_response.json`



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| API Trigger URL | URL | Password | :white_check_mark: | - | - | - |
| Failure Threshold | FAILURE_THRESHOLD | Alphanumeric | :heavy_minus_sign: | 0 | - | - |
| Invalid Threshold | INVALID_THRESHOLD | Alphanumeric | :heavy_minus_sign: | 0 | - | - |


