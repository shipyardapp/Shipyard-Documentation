---
id: fivetran-trigger-sync
title: Fivetran Template - Trigger Sync
hide_title: true
sidebar_label: Trigger Sync
description: Information about Shipyard's low-code Fivetran Trigger Sync blueprint. Execute a sync against an existing connector in the Fivetran interface without waiting for results. 
keywords:
    - fivetran
    - blueprint
    - template
---

# Fivetran - Trigger Sync

## Overview
Immediately execute a sync of a Fivetran connector. The connector must already be set up within the Fivetran interface.

If a sync is already running for the specified connector, it will be stopped and restarted.

This Blueprint will create and store the connector ID used and the time of execution to `shipyard-artifacts/fivetran-blueprints/variables/{log_id}_force_sync.pickle`

The response for this request will always be stored at `shipyard-artifacts/fivetran-blueprints/responses/sync_{connector_id}_response.json`


## Variables

| Name                | Reference             | Type         | Required           | Default | Options                                                              | Description                                                                                                                                               |
|:--------------------|:----------------------|:-------------|:-------------------|:--------|:---------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------|
| API Key             | FIVETRAN_API_KEY      | Password     | :white_check_mark: | -       | -                                                                    | Your account's unique API Key for Fivetran.                                                                                                               |
| API Secret          | FIVETRAN_API_SECRET   | Password     | :white_check_mark: | -       | -                                                                    | Your account's unique API Secret for Fivetran.                                                                                                            |
| Connector ID        | FIVETRAN_CONNECTOR_ID | Alphanumeric | :white_check_mark: | -       | -                                                                    | The unique ID associated with a connector. Typically two words separated by an underscore.                                                                |
| Force Sync          | FIVETRAN_FORCE        | Select       | :white_check_mark: | `TRUE`  | Enabled: `TRUE`<br></br><br></br>Disabled: `FALSE`<br></br><br></br> | Enabling this feature will interrupt any current running jobs                                                                                             |
| Wait For Completion | FIVETRAN_WAIT         | Boolean      | :heavy_minus_sign: | `FALSE` | Enabled: `TRUE`<br></br><br></br>Disabled: `FALSE`<br></br><br></br> | Enable if you want the vessel to wait until the sync job is successfully completed. Otherwise, the vessel will only initiate the sync job without waiting |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
    blueprint: Fivetran - Trigger Sync
    inputs:
        FIVETRAN_API_KEY: null  ## REQUIRED
        FIVETRAN_API_SECRET: null ## REQUIRED
        FIVETRAN_CONNECTOR_ID: null ## REQUIRED
        FIVETRAN_FORCE: 'TRUE' ## REQUIRED
        FIVETRAN_WAIT: 'FALSE'
    type: BLUEPRINT
guardrails:
    retry_count: 1
    retry_wait: 0h0m0s
    runtime_cutoff: 1h0m0s
    exclude_exit_code_ranges:
    -   200
    -   201
    -   204
    -   299

```
