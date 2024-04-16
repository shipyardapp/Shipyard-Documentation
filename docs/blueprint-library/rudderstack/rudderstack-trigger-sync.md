---
id: rudderstack-trigger-sync
title: Rudderstack Template - Trigger Sync
hide_title: true
sidebar_label: Trigger Sync
description: Information about Shipyard's low-code Rudderstack Trigger Sync blueprint. Immediately trigger a sync of a RudderStack source. 
keywords:
    - rudderstack
    - blueprint
    - template
---

# RudderStack - Trigger Sync

:::info
This Blueprint is classified as "Free" and does not incur billable runtime. [Learn more](../../reference/blueprints/blueprint-library/blueprint-library-overview.md#free-blueprints).
:::

## Overview
Immediately execute a sync of a Rudderstack source. This can kick off either an ETL or a reverse ETL job. The source must already be set up within the Rudderstack interface.

If a sync is already running for the specified connector, it will be stopped and restarted.

This Blueprint will create and store the source ID used to `shipyard-artifacts/rudderstack-blueprints/variables/source_id.pickle`


## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Access Token | RUDDERSTACK_ACCESS_TOKEN  | Password |:white_check_mark: | - | - | The access token associated with your Rudderstack account. |
| Source ID | RUDDERSTACK_SOURCE_ID  | Alphanumeric |:white_check_mark: | - | - | The ID of the Rudderstack source you want to refresh. |
| Wait For Completion | RUDDERSTACK_WAIT  | Boolean |:heavy_minus_sign: | `TRUE` | - | Enable if you want the vessel to wait until the sync job is successfully completed. Otherwise, the vessel will only initiate the sync job without waiting |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
  blueprint: RudderStack - Trigger Sync
  inputs:
    RUDDERSTACK_ACCESS_TOKEN: null  ## REQUIRED
    RUDDERSTACK_SOURCE_ID: null ## REQUIRED
    RUDDERSTACK_WAIT: 'TRUE'
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '200'
    - '203'
    - '204'

```
