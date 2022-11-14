---
id: rudderstack-trigger-sync
title: RudderStack Template - Trigger Sync
hide_title: true
sidebar_label: Trigger Sync
description: Information about Shipyard's low-code RudderStack Trigger Sync blueprint. Immediately trigger a sync of a RudderStack source.
keywords:
    - rudderstack
    - blueprint
    - template
---

# RudderStack - Trigger Sync

## Overview

> ## **First time using this Blueprint? Make sure you follow our [Rudderstack authorization guide](https://www.shipyardapp.com/docs/blueprint-library/rudderstack/rudderstack-authorization/)**.

Immediately execute a sync of a Rudderstack source. This can kick off either an ETL or a reverse ETL job. The source must already be set up within the Rudderstack interface.

If a sync is already running for the specified connector, it will be stopped and restarted.

This Blueprint will only kick off the source and will almost always return a status of success. It will not wait around to verify if the created sync was successfully completed, but it will create and store the source ID used to `shipyard-artifacts/rudderstack-blueprints/variables/source_id.pickle`

**Recommended Setup:**
1. This Vessel should be immediately followed by a Vessel built from the Check Sync Status Blueprint so you can verify the status and completion of your sync.



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Access Token | RUDDERSTACK_ACCESS_TOKEN | Password | :white_check_mark: | - | - | The access token associated with your Rudderstack account. |
| Source ID | RUDDERSTACK_SOURCE_ID | Alphanumeric | :white_check_mark: | - | - | The ID of the Rudderstack source you want to refresh. |


## YAML

Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets.md#yaml-editor).

```yaml
source:
  blueprint: RudderStack - Trigger Sync
  inputs:
    RUDDERSTACK_ACCESS_TOKEN: null ## REQUIRED
    RUDDERSTACK_SOURCE_ID: null ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0s
  runtime_cutoff: 4h0m0s
  exclude_exit_code_ranges:
    - "200"
    - "203"
    - "204"
```
