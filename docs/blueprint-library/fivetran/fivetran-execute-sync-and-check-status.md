---
id: fivetran-execute-sync-and-check-status
title: Fivetran Template - Execute Sync and Check Status
hide_title: true
sidebar_label: Execute Sync and Check Status
description: Information about Shipyard's low-code Fivetran Execute Sync and Check Status blueprint. Execute a sync against an existing connector in the Fivetran interface and wait for the sync to finish. 
keywords:
    - fivetran
    - blueprint
    - template
---

# Fivetran - Execute Sync and Check Status

## Overview
This is considered an "all-in-one" Blueprint that Executes a Sync and checks the status of the sync until it's is finished. By using this Blueprint, you will accumulate runtime as the Vessel continuously waits for the job to be completed. The tradeoff is that results may be quicker and the setup/complexity is less.

If you want to reduce the overall runtime you're billed for, you will need to instead set up a Fleet with Vessels built with these Blueprints in this order:
`Execute Sync` -> `Check Sync Status`

A Vessel built with this Blueprint will sync a connector in Fivetran and check for the status every 30 seconds. Once the status is confirmed to be completed, the script will stop. The final status of this Vessel in Shipyard will reflect the status of the run in Fivetran.

**Recommended Setup:**

Before using this Blueprint on a connector, we strongly recommend first setting your connector to a manual schedule, using the **Update Connector** Blueprint. This setting **cannot** be updated in the Fivetran UI. This will ensure that Fivetran only syncs the connector when Shipyard kicks it off. Without this setting in place, it is possible to have conflicting syncs.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| API Key | FIVETRAN_API_KEY  | Password |:white_check_mark: | `-` | - | Your account's unique API Key for Fivetran. |
| API Secret | FIVETRAN_API_SECRET  | Password |:white_check_mark: | `-` | - | Your account's unique API Secret for Fivetran. |
| Connector ID | FIVETRAN_CONNECTOR_ID  | Alphanumeric |:white_check_mark: | `-` | - | The unique ID associated with a connector. Typically two words separated by an underscore. |


