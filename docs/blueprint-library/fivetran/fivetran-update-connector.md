---
id: fivetran-update-connector
title: Fivetran Template - Update Connector
hide_title: true
sidebar_label: Update Connector
description: Information about Shipyard's low-code Fivetran Update Connector blueprint. Update an existing connector's settings in Fivetran. Useful for pausing, setting manual schedules, or triggering historical syncs. 
keywords:
    - fivetran
    - blueprint
    - template
---

# Fivetran - Update Connector

## Overview
Update the settings of a connector in Fivetran. The connector must already exist in the Fivetran interface.

By default, every option is set to `No Change`. This ensures that existing settings will not be overwritten by running this Blueprint. However, this Blueprint requires that at least one setting be changed, otherwise it will result in an error.

The settings that can be updated with this Blueprint:
- Switch the connector's schedule between manual and auto.
- Pause and Unpause the connector
- Trigger a historical sync for the connector

The response for this request will always be stored at `shipyard-artifacts/fivetran-blueprints/responses/update_{connector_id}_response.json`

The full list of settings that can be changed can be found [here](https://fivetran.com/docs/rest-api/connectors#modifyaconnector).

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| API Key | FIVETRAN_API_KEY  | Password |:white_check_mark: | - | - | Your account's unique API Key for Fivetran. |
| API Secret | FIVETRAN_API_SECRET  | Password |:white_check_mark: | - | - | Your account's unique API Secret for Fivetran. |
| Connector ID | FIVETRAN_CONNECTOR_ID  | Alphanumeric |:white_check_mark: | - | - | The unique ID associated with a connector. Typically two words separated by an underscore. |
| Set Schedule Type | FIVETRAN_SCHEDULE_TYPE  | Select |:white_check_mark: | `None` | No Change: `None`<br></br><br></br>Manual: `manual`<br></br><br></br>Auto: `auto`<br></br><br></br> | Set your connector's schedule to sync automatically, manually, or make no change. |
| Set Connector State | FIVETRAN_PAUSED  | Select |:white_check_mark: | `None` | No Change: `None`<br></br><br></br>Paused: `TRUE`<br></br><br></br>Enabled: `FALSE`<br></br><br></br> | Set your connector to paused, enabled, or make no change. |
| Trigger Historical Sync? | FIVETRAN_HISTORICAL_SYNC  | Select |:white_check_mark: | `None` | No Change: `None`<br></br><br></br>Yes: `TRUE`<br></br><br></br> | Set your connector to start a historical sync, or make no change. |
| Custom Update | FIVETRAN_CUSTOM_UPDATE  | Alphanumeric |:heavy_minus_sign: | - | - | Additional connector parameters you would like to update, provided in a JSON format. These can be found at https://fivetran.com/docs/rest-api/connectors#modifyaconnector |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
  blueprint: Fivetran - Update Connector
  inputs:
    FIVETRAN_API_KEY: null ## REQUIRED
    FIVETRAN_API_SECRET: null ## REQUIRED
    FIVETRAN_CONNECTOR_ID: null ## REQUIRED
    FIVETRAN_SCHEDULE_TYPE: None ## REQUIRED
    FIVETRAN_PAUSED: None ## REQUIRED
    FIVETRAN_HISTORICAL_SYNC: None ## REQUIRED
    FIVETRAN_CUSTOM_UPDATE: null 
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - "0"
```
