---
id: fivetran-execute-sync
title: Fivetran Template - Execute Sync
hide_title: true
sidebar_label: Execute Sync
description: Information about Shipyard's low-code Fivetran Execute Sync blueprint. Execute a sync against an existing connector in the Fivetran interface without waiting for results. 
keywords:
    - fivetran
    - blueprint
    - template
---

# Fivetran - Execute Sync

## Overview
Immediately execute a sync of a Fivetran connector. The connector must already be set up within the Fivetran interface.

If a sync is already running for the specified connector, it will be stopped and restarted.

This Blueprint will only kick off the sync and will almost always return a status of success. It will not wait around to verify if the created sync was successfully completed, but it will create and store the connector ID used and the time of execution to `shipyard-artifacts/fivetran-blueprints/variables/{log_id}_force_sync.pickle`

The response for this request will always be stored at `shipyard-artifacts/fivetran-blueprints/responses/sync_{connector_id}_response.json`

**Recommended Setup:**

1. Before using this Blueprint on a connector, we strongly recommend first setting your connector to a manual schedule, using the **Update Connector** Blueprint. This setting **cannot** be updated in the Fivetran UI. This will ensure that Fivetran only syncs the connector when Shipyard kicks it off. Without this setting in place, it is possible to have conflicting syncs.
2. This Vessel should be immediately followed by a Vessel built from the **Check Sync Status** Blueprint so you can verify the status and completion of your sync.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| API Key | FIVETRAN_API_KEY  | Password |:white_check_mark: | - | - | Your account's unique API Key for Fivetran. |
| API Secret | FIVETRAN_API_SECRET  | Password |:white_check_mark: | - | - | Your account's unique API Secret for Fivetran. |
| Connector ID | FIVETRAN_CONNECTOR_ID  | Alphanumeric |:white_check_mark: | - | - | The unique ID associated with a connector. Typically two words separated by an underscore. |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
  blueprint: Fivetran - Execute Sync
  inputs:
    FIVETRAN_API_KEY: null ## REQUIRED
    FIVETRAN_API_SECRET: null ## REQUIRED
    FIVETRAN_CONNECTOR_ID: null ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - "0"
```
