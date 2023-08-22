---
id: fivetran-check-sync-status
title: Fivetran Template - Check Sync Status
hide_title: true
sidebar_label: Check Sync Status
description: Information about Shipyard's low-code Fivetran Check Sync Status blueprint. Check the status of a specific Fivetran connector run and return with the final status. 
keywords:
    - fivetran
    - blueprint
    - template
---

# Fivetran - Check Sync Status

## Overview
Check for the status of a connector on Fivetran. The Vessel's exit code and status will match the status of the latest sync.

Fivetran does not have a synchronous API that allows you to determine if the exact sync you kicked off has finished. Instead, status has to be determined by comparing data to the returned `last_success` and `last_failure` timestamps for a connector. 

### Connecting to Execute Sync
If a Vessel built with this Blueprint is directly attached to a Vessel built with the **Execute Sync** Blueprint, Execute Sync will pass on an `execution_time` variable. We make the assumption that if the connector has either succeeded or failed after the execution time, it is likely associated to the recently kicked off sync. 

Status will be determined with the following logic:

- If neither timestamp is after the execution time, the Vessel will return an exit code of 255, an error.
- If the `last_failure` timestamp is after the execution time, the Vessel will return an exit code of 1, an error.
- If the `last_success` timestamp is after the execution time, the Vessel will return an exit code of 0, interpreted by Shipyard as Successful.

### Running Independently
If a Vessel built with the Blueprint runs independently, or does not run immediately after an **Execute Sync** Vessel, we won't know when the sync was initially executed. Instead, status will be determined with the following logic:

- If the `last_failure` timestamp is more recent than the `last_success` timestamp, the Vessel will return an exit code of 1, an error.
- If the `last_success` timestamp is more recent than the `last_failure` timestamp, the Vessel will return an exit code of 0, interpreted by Shipyard as Successful. 

The response for this request will always be stored at `shipyard-artifacts/fivetran-blueprints/responses/connector_{connector_id}_response.json`

**Recommended Setup:**

1. A Vessel built with this Blueprint should be paired with guardrail retries. This will allow the Vessel to continually check for status until a final result is found.
2. This Vessel should run immediately after a Vessel built with the **Execute Sync** Blueprint. With this setup, you can leave the Connector ID field blank and this Vessel will check for the results of the recently created sync.

## Variables

| Name         | Reference             | Type         | Required           | Default | Options | Description                                                                                                     |
|:-------------|:----------------------|:-------------|:-------------------|:--------|:--------|:----------------------------------------------------------------------------------------------------------------|
| API Key      | FIVETRAN_API_KEY      | Password     | :white_check_mark: | -       | -       | Your account's unique API Key for Fivetran.                                                                     |
| API Secret   | FIVETRAN_API_SECRET   | Password     | :white_check_mark: | -       | -       | Your account's unique API Secret for Fivetran.                                                                  |
| Connector ID | FIVETRAN_CONNECTOR_ID | Alphanumeric | :heavy_minus_sign: | -       | -       | The unique ID associated with a connector. This should be left blank if connected to an Execute Sync Blueprint. |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
    blueprint: Fivetran - Check Sync Status
    inputs:
        FIVETRAN_API_KEY: null  ## REQUIRED
        FIVETRAN_API_SECRET: null ## REQUIRED
        FIVETRAN_CONNECTOR_ID: null
    type: BLUEPRINT
guardrails:
    retry_count: 1
    retry_wait: 0h5m0s
    runtime_cutoff: 1h0m0s
    exclude_exit_code_ranges:
    -   '0'

```