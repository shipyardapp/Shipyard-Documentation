---
id: mode-trigger-report-refresh
title: Mode Template - Trigger Report Refresh
hide_title: true
sidebar_label: Trigger Report Refresh
description: Information about Shipyard's low-code Mode Trigger Report Refresh blueprint. Trigger a Mode report to refresh immediately. 
keywords:
    - mode
    - blueprint
    - template
---

# Mode - Trigger Report Refresh

## Overview
Manually trigger a refresh of a report in Mode.

This Blueprint will only kick off the refresh and will almost always return a status of success. It will not wait around to verify if the created refresh job was successfully completed, but it will create and store the generated run ID to `shipyard-artifacts/mode-blueprints/variables/report_run_id.pickle`

**Recommended Setup:**

1. A Vessel built with the Mode - Check Refresh Status Blueprint should be run immediately after this Vessel. This will ensure that you build your Fleet to act on the final status of your refresh.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Token ID | MODE_TOKEN_ID  | Password |:white_check_mark: | - | - | The ID of the Token used to authenticate with Mode. |
| Token Password | MODE_TOKEN_PASSWORD  | Password |:white_check_mark: | - | - | The Token Password associated to the Token ID used to authenticate with Mode. |
| Workspace Name | MODE_WORKSPACE_NAME  | Alphanumeric |:white_check_mark: | - | - | Typically found in the URL structure as https://app.mode.com/ACCOUNT_NAME/ |
| Report ID | MODE_REPORT_ID  | Alphanumeric |:white_check_mark: | - | - | Numeric ID of the report you want to download, typically found at the end of the URL. |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
  blueprint: Mode - Trigger Report Refresh
  inputs:
    MODE_TOKEN_ID: null ## REQUIRED
    MODE_TOKEN_PASSWORD: null ## REQUIRED
    MODE_WORKSPACE_NAME: null ## REQUIRED
    MODE_REPORT_ID: null ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - "200"
    - "203"
    - "204"
```
