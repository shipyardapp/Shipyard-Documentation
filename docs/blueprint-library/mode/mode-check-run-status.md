---
id: mode-check-run-status
title: Mode Template - Check Run Status (Deprecated)
hide_title: true
sidebar_label: Check Run Status (Deprecated)
description: Information about Platform's low-code Mode Check Run Status (Deprecated) blueprint. Verify the status of a recently triggered Mode report. 
keywords:
    - mode
    - blueprint
    - template
---

# Mode - Check Run Status (Deprecated)

## Overview
This Blueprint has been deprecated. Please use the vendor's "Trigger" Blueprint and set the "Wait for Completion" option to "True". Using this new option is free, more stable, and will complete faster. Read more about this change [here](https://www.shipyardapp.com/blog/orchestrate-data-tools-free).

Check for the status of a single report run on Mode. The Vessel's exit code and status will match the status of the Mode run.

- If the run is not completed, the Vessel will return an exit code of 210, an error.
- If the run has completed with an error, the Vessel will return an exit code of 211, an error.
- If the run has completed, but was canceled, the Vessel will return an exit code of 213, an error.
- If the run is not started, the Vessel will return an exit code of 214, an error.
- If the run has completed successfully, the Vessel will return an exit code of 0, interpreted by Platform as Successful.

The response for this request will always be stored at `shipyard-artifacts/mode-blueprints/responses/verify_run_{report_run_id}_response.json`

**Recommended Setup:**

1. A Vessel built with this Blueprint should be paired with guardrail retries. This will allow the Vessel to continually check for status until a final result is found.
2. This Vessel should run immediately after a Vessel built with the Mode - Trigger Report Refresh Blueprint. With this setup, you can leave the Run ID field blank and this Vessel will check for the results of the recently created run.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Token ID | MODE_TOKEN_ID  | Password |:white_check_mark: | - | - | The ID of the Token used to authenticate with Mode. |
| Token Password | MODE_TOKEN_PASSWORD  | Password |:white_check_mark: | - | - | The Token Password associated to the Token ID used to authenticate with Mode. |
| Workspace Name | MODE_WORKSPACE_NAME  | Alphanumeric |:white_check_mark: | - | - | Typically found in the URL structure as https://app.mode.com/ACCOUNT_NAME/ |
| Report ID | MODE_REPORT_ID  | Alphanumeric |:white_check_mark: | - | - | Numeric ID of the report you want to download, typically found at the end of the URL. |
| Run ID | MODE_RUN_ID  | Alphanumeric |:heavy_minus_sign: | - | - | The report run ID that you want to check the status of. If connected to a "Trigger Sync" Blueprint, leave blank. |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
  blueprint: Mode - Check Run Status (Deprecated)
  inputs:
    MODE_TOKEN_ID: null  ## REQUIRED
    MODE_TOKEN_PASSWORD: null ## REQUIRED
    MODE_WORKSPACE_NAME: null ## REQUIRED
    MODE_REPORT_ID: null ## REQUIRED
    MODE_RUN_ID: null
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '200'
    - '203'
    - '204'
    - '211'
    - '213'

```
