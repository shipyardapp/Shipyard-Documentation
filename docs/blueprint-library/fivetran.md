---
id: fivetran
title: Fivetran Blueprints
hide_title: true
sidebar_label: Fivetran
description: Information about the Blueprint Library connections with Fivetran.
keywords:
  - fivetran
  - five tran
  - blueprint
  - template
---

# Fivetran Blueprints
Fivetran Blueprints help data teams orchestrate their Fivetran connectors with other tools in their data stack. Our modular Fivetran Blueprints make it easy to execute a sync, check the status of a sync, or update the settings for a specific connector. We've also included an all-in-one Blueprint so you can flexibly determine how you would like to interact with Fivetran.

Beyond making it easier to connect Fivetran syncs to your other data tools, these Blueprints also give you finer-tuned control over how often your data syncs and can prevent downstream processes from running if Fivetran runs into issues.

Every Blueprint listed on this page stores the JSON response of the API calls and other files under the following folder structure:
`shipyard-artifacts/fivetran-blueprints/`

Sub-folders can be any of the following:
- responses
- variables

If you would like to run an action against Fivetran that is not built out as a Blueprint, you can use an HTTP Blueprint to run any command against the [Fivetran API](https://fivetran.com/docs/rest-api).

:::note
These Blueprints will only work for Fivetran customers that have API access (Starter and Enterprise Plans).
:::

## Authorization

### Overview
To get started with any Fivetran Blueprints, you will need to generate an API Key and know how to find a connector ID. The API Key is a secure way for Shipyard to access Fivetran. The Connector ID is a unique generated ID attached to each connector. These two pieces of information will be required for **every** Fivetran Blueprint.

### Generate an API Key

1. Navigate to the [Settings Tab](https://fivetran.com/account/settings) of your Account.
2. Scroll down to the API Config Section. Select an option to generate a Key. If you already have a key, skip to the next step.
![API Config Section](../.gitbook/assets/shipyard_2021_08_26_16_50_47.png)
3. Copy both the API Key and the API Secret somewhere safe.

### Connector ID
1. Navigate to the [Connectors page](https://fivetran.com/dashboard/connectors) of your dashboard.
2. Click on the connector you want to get the ID of.
![Fivetran Connectors](../.gitbook/assets/shipyard_2021_08_26_17_01_22.png)
3. Click the setup tab at the top.
![Fivetran Connector Setup Tab](../.gitbook/assets/shipyard_2021_08_26_17_02_57.png)
4. Copy down the value under Fivetran Connector ID. This will typically be two words separated by an underscore. e.x. (`lively_planted`)
![Connection Details](../.gitbook/assets/shipyard_2021_08_26_17_04_21.png)


## Execute Sync

### Overview

Immediately execute a sync of a Fivetran connector. The connector must already be set up within the Fivetran interface.

If a sync is already running for the specified connector, it will be stopped and restarted.

This Blueprint will only kick off the sync and will almost always return a status of success. It will not wait around to verify if the created sync was successfully completed, but it will create and store the connector ID used and the time of execution to `shipyard-artifacts/fivetran-blueprints/variables/{log_id}_force_sync.pickle`

The response for this request will always be stored at `shipyard-artifacts/fivetran-blueprints/responses/sync_{connector_id}_response.json`

**Recommended Setup:**
1. Before using this Blueprint on a connector, we strongly recommend first setting your connector to a manual schedule, using the [Update Connector](#update-connector) Blueprint. This setting **cannot** be updated in the Fivetran UI. This will ensure that Fivetran only syncs the connector when Shipyard kicks it off. Without this setting in place, it is possible to have conflicting syncs.
2. This Vessel should be immediately followed by a Vessel built from the [Check Sync Status](#check-sync-status) Blueprint so you can verify the status and completion of your sync.

### Variables

| Variable Name     | Description                                                                                                                                                        |
| :---------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **API Key** | Your account's unique API Key for Fivetran. Instructions for how to get this token can be found under the [authorization](#authorization) section.                    |
| **API Secret** | Your account's unique API Secret for Fivetran. Instructions for how to get this token can be found under the [authorization](#authorization) section.                    |
| **Connector ID**    | The unique ID associated with a connector. Typically two words separated by an underscore. e.x. (`lively_planted`). Instructions for how to find this ID can be found under the [authorization](#authorization) section.                     |

### Screenshots

## Check Sync Status


### Overview

Check for the status of a connector on Fivetran. The Vessel's exit code and status will match the status of the latest sync.

Fivetran does not have a syncronous API that allows you to determine if the exact sync you kicked off has finished. Instead, status has to be determined by comparing data to the returned `last_success` and `last_failure` timestamps for a connector. 

### Connecting to Execute Sync
If a Vessel built with this Blueprint is directly attached to a Vessel built with the [Execute Sync](#execute-sync) Blueprint, Execute Sync will pass on an `execution_time` variable. We make the assumption that if the connector has either succeeded or failed after the execution time, it is likely associated to the recently kicked off sync. 

Status will be determined with the following logic:

- If neither timestamp is after the execution time, the Vessel will return an exit code of 255, an error.
- If the `last_failure` timestamp is after the execution time, the Vessel will return an exit code of 1, an error.
- If the `last_success` timestamp is after the execution time, the Vessel will return an exit code of 0, interpreted by Shipyard as Successful.

### Running Independently
If a Vessel built with the Blueprint runs independently, or does not run immediately after an [Execute Sync](#execute-sync) Vessel, we won't know when the sync was initially executed. Instead, status will be determined with the following logic:

- If the `last_failure` timestamp is more recent than the `last_success` timestamp, the Vessel will return an exit code of 1, an error.
- If the `last_success` timestamp is more recent than the `last_failure` timestamp, the Vessel will return an exit code of 0, interpreted by Shipyard as Successful. 

The response for this request will always be stored at `shipyard-artifacts/fivetran-blueprints/responses/connector_{connector_id}_response.json`

**Recommended Setup:**
1. A Vessel built with this Blueprint should be paired with [guardrail retries](../reference/settings/guardrails.md). This will allow the Vessel to continually check for status until a final result is found.
2. This Vessel should run immediately after a Vessel built with the [Execute Sync](#execute-sync) Blueprint. With this setup, you can leave the Connector ID field blank and this Vessel will check for the results of the recently created sync.

### Variables
| Variable Name     | Description                                                                                                                                                                                                                                                    |
| :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **API Key** | Your account's unique API Key for Fivetran. Instructions for how to get this token can be found under the [authorization](#authorization) section.                    |
| **API Secret** | Your account's unique API Secret for Fivetran. Instructions for how to get this token can be found under the [authorization](#authorization) section.                    |
| **Connector ID**    | The unique ID associated with a connector. Typically two words separated by an underscore. e.x. (`lively_planted`). Instructions for how to find this ID can be found under the [authorization](#authorization) section. This can be left blank if connected to an Execute Sync Blueprint.                    |

### Screenshots



## Execute Sync and Check Status

### Overview
This is considered an "all-in-one" Blueprint for the other 2 Blueprints listed above. By using this Blueprint, you will accumulate runtime as the Vessel continuously waits for the job to be completed. The tradeoff is that results may be quicker and the setup/complexity is less.

If you want to reduce the overall runtime you're billed for, you will need to instead set up a Fleet with Vessels built with these Blueprints in this order:
`Execute Sync` -> `Check Sync Status`

A Vessel built with this Blueprint will sync a connector in Fivetran and check for the status every 30 seconds. Once the status is confirmed to be completed, the script will stop. The final status of this Vessel in Shipyard will reflect the status of the run in Fivetran.

**Recommended Setup:**

Before using this Blueprint on a connector, we strongly recommend first setting your connector to a manual schedule, using the [Update Connector](#update-connector) Blueprint. This setting **cannot** be updated in the Fivetran UI. This will ensure that Fivetran only syncs the connector when Shipyard kicks it off. Without this setting in place, it is possible to have conflicting syncs.

### Variables
| Variable Name           | Description                                                                                                                                                        |
| :---------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **API Key** | Your account's unique API Key for Fivetran. Instructions for how to get this token can be found under the [authorization](#authorization) section.                    |
| **API Secret** | Your account's unique API Secret for Fivetran. Instructions for how to get this token can be found under the [authorization](#authorization) section.                    |
| **Connector ID**    | The unique ID associated with a connector. Typically two words separated by an underscore. e.x. (`lively_planted`). Instructions for how to find this ID can be found under the [authorization](#authorization) section.                     |

### Screenshots


## Update Connector

### Overview
Update the settings of a connector in Fivetran. The connector must already exist in the Fivetran interface.

By default, every option is set to `No Change`. This ensures that existing settings will not be overwritten by running this Blueprint. However, this Blueprint requires that at least one setting be changed, otherwise it will result in an error.

The settings that can be updated with this Blueprint:
- Switch the connector's schedule between manual and auto.
- Pause and Unpause the connector
- Trigger a historical sync for the connector

The response for this request will always be stored at `shipyard-artifacts/fivetran-blueprints/responses/update_{connector_id}_response.json`

The full list of settings that can be changed can be found [here](https://fivetran.com/docs/rest-api/connectors#modifyaconnector). If you need the ability to update a setting not found in this Blueprint, let us know at [support@shipyardapp.com](mailto:support@shipyardapp.com)

### Variables
| Variable Name           | Description                                                                                                                                                        |
| :---------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **API Key** | Your account's unique API Key for Fivetran. Instructions for how to get this token can be found under the [authorization](#authorization) section.                    |
| **API Secret** | Your account's unique API Secret for Fivetran. Instructions for how to get this token can be found under the [authorization](#authorization) section.                    |
| **Connector ID**    | The unique ID associated with a connector. Typically two words separated by an underscore. e.x. (`lively_planted`). Instructions for how to find this ID can be found under the [authorization](#authorization) section.                     |
| **Set Schedule Type** | Set your connector's schedule to sync automatically, manually, or make no change.                    |
| **Set Connector State** | Set your connector to paused, enabled, or make no change.                   |
| **Trigger Historical Sync?**    | Set your connector to start a historical sync, or make no change.                     |
| **Custom Update**    | Additional connector parameters you would like to update, provided in a JSON format. These can be found [here](https://fivetran.com/docs/rest-api/connectors#modifyaconnector)                    |

### Screenshots

## Helpful Links

[Fivetran API Documentation](https://fivetran.com/docs/rest-api)
