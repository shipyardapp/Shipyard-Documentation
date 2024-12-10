---
id: shipyard-environment-variables
title: Platform Environment Variables
hide_title: true
description: Information about environment variables created by the Platform platform at runtime and how to access them.
keywords:
  - context
  - dynamic
  - ids
  - environment variables
  - env var
  - env_var
---

# Platform Environment Variables

## Definition

By default, every Vessel that runs in Platform generates a series of environment variables. These variables are _invisible_ in the sense that you'll never see them in the platform but they can always be accessed by your scripts.

These environment variables can help your scripts be context-aware as they run, giving knowledge into the structure and placement of the Vessel in relation to other Vessels.

| Name                      | Example                                | Definition                                                                                                                 |
| :------------------------ | :------------------------------------- | :------------------------------------------------------------------------------------------------------------------------- |
| `SHIPYARD_ORG_ID`         | `5c35c2da-a9a5-472a-a215-29b616ebc2c9` | Set to the UUIDv4 of the Organization that the Vessel belongs to.                                                          |
| `SHIPYARD_ORG_NAME`       | `Platform`                             | Set to the name of the Organization that the Vessel belongs to.                                                            |
| `SHIPYARD_PROJECT_ID`     | `03cf3d8b-95c0-4b6c-8d57-be58c252c4be` | Set to the UUIDv4 of the Project that the Vessel belongs to.                                                               |
| `SHIPYARD_PROJECT_NAME`   | `Platform Tutorials`                   | Set to the name of the Project that the Vessel belongs to.                                                                 |
| `SHIPYARD_BLUEPRINT_ID`   | `d07f3355-ab62-479b-8756-27c7cbf48907` | Set to the UUIDv4 of the Blueprint that the Vessel is built from. In the case of a Code Vessel, the ID will not be UUIDv4. |
| `SHIPYARD_BLUEPRINT_NAME` | `Print Text`                           | Set to the name of the Blueprint that the Vessel is built from.                                                            |
| `SHIPYARD_VESSEL_ID`      | `20e347ff-fe74-43dc-8f38-6a31910c0533` | Set to the UUIDv4 of the Vessel that the Log belongs to.                                                                   |
| `SHIPYARD_VESSEL_NAME`    | `Hello, World`                         | Set to the name of the Vessel that the Log belongs to.                                                                     |
| `SHIPYARD_LOG_ID`         | `c81a050c-5caf-445c-90d0-dc3b761979b0` | Set to the UUIDv4 of the current Log that is running.                                                                      |
| `SHIPYARD_LOG_WORKDIR`    | `/home/shipyard`                       | Set to the working directory that your Vessel is set to do its work in.                                                    |
| `SHIPYARD_REPO_NAME`      | `example-repo`                         | Set to the name of the Git repository selected for Code. **Only set when the Vessel is connected to Git**.                 |
| `SHIPYARD_CLONE_LOCATION` | `/home/shipyard/example-repo`          | Set to the directory where the Git repository root was cloned. **Only set when the Vessel is connected to Git**.           |
| `SHIPYARD_VESSEL_START_TIME` | `2021-03-12T21:22:47Z` | The time at which the Vessel started running. Formatted using the [RFC3339](https://tools.ietf.org/html/rfc3339) standard.
| `SHIPYARD_VESSEL_SCHEDULED_TIME` | `2021-03-12T21:22:00Z` | The time at which the Vessel started running. Formatted using the [RFC3339](https://tools.ietf.org/html/rfc3339) standard.
| `SHIPYARD_VESSEL_START_TIME_YEAR` | `2022` | The year of the Vessel start time.
| `SHIPYARD_VESSEL_START_TIME_MONTH` | `12` | The month of the Vessel start time in format 01-12.
| `SHIPYARD_VESSEL_START_TIME_DAY` | `07` | The day of the Vessel start time in format 01-31.
| `SHIPYARD_VESSEL_START_TIME_HOUR` | `14` | The hour of the Vessel start time in format 0-23.
| `SHIPYARD_VESSEL_START_TIME_MINUTE` | `34` | The minute of the Vessel start time in format 0-59.
| `SHIPYARD_VESSEL_START_TIME_SECOND` | `12` | The second of the Vessel start time in format 0-59.
| `SHIPYARD_VESSEL_START_TIME_MILLISECOND` | `434` | The millisecond of the Vessel start time in format 0-999.
| `SHIPYARD_VESSEL_START_TIME_EPOCH` | `1670443778` | The number of seconds since the Unix epoch.

### Fleet Environment Variables

When a Vessel is run as part of a Fleet, the following Environment Variables will be available. For an overview of Upstream, Currentstream, and Downstream read our [Glossary of Terms](../../glossary.md).

| Name                                      | Example                                                                     | Definition                                                                                                                                                                                                     |
| :---------------------------------------- | :-------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `SHIPYARD_FLEET_ID`                       | `32f0f12f-8f68-46fd-b3ab-eeddce439f49`                                      | Set to the UUIDv4 of the Fleet that the Vessel belongs to.                                                                                                                                                     |
| `SHIPYARD_FLEET_NAME`                     | `ETL Workflow`                                                              | Set to the name of the Fleet that the Vessel belongs to.                                                                                                                                                       |
| `SHIPYARD_FLEET_LOG_ID`                   | `ac0332d3-2420-4e8e-a58c-dfe78ae5bdf0`                                      | Set to the UUIDv4 of the current Fleet Log that is running. This ID will be constant for all Vessels in the current run.                                                                                       |
| `SHIPYARD_FLEET_CURRENTSTREAM_INDEX`      | `0`                                                                         | The position of the current Vessel in the currentstream. This value is 0 based. Useful for splitting tasks into chunks dynamically and consistently.                                                           |
| `SHIPYARD_FLEET_UPSTREAM_COUNT`           | `2`                                                                         | The number of Vessels that ran upstream.                                                                                                                                                                       |
| `SHIPYARD_FLEET_CURRENTSTREAM_COUNT`      | `2`                                                                         | The number of Vessels running in the currentstream.                                                                                                                                                            |
| `SHIPYARD_FLEET_DOWNSTREAM_COUNT`         | `2`                                                                         | The number of Vessels that will run downstream.                                                                                                                                                                |
| `SHIPYARD_FLEET_UPSTREAM_LOG_IDS`         | `46a41790-310b-4627-b1b7-492c6c042538,b93766e0-e89b-49d9-ae15-6045e9387b3c` | A comma-separated list of Log IDs from Vessels that ran upstream. The order of the IDs will match the corresponding upstream environment variables, but may change with every run.                             |
| `SHIPYARD_FLEET_CURRENTSTREAM_LOG_IDS`    | `c930d35f-4396-4316-8d3b-c1ed5a1f100f,524bf2c7-18fa-47a1-bb3b-16bf487a45a9` | A comma-separated list of Log IDs from Vessels that are running in the currentstream. The order of the IDs will match the corresponding currentstream environment variables, but may change with every run.    |
| `SHIPYARD_FLEET_DOWNSTREAM_LOG_IDS`       | `48542f9d-fa9f-4a77-810b-417eab4fe810,030f7490-36c9-446c-9f84-5aceb03176dd` | A comma-separated list of Log IDs from Vessels that will run downstream. The order of the IDs will match the corresponding downstream environment variables, but may change with every run.                    |
| `SHIPYARD_FLEET_UPSTREAM_VESSEL_IDS`      | `38621a35-8c94-4e41-817a-8ff2587a871d,7700aea1-599a-486d-be32-09fcb200cdce` | A comma-separated list of Vessel IDs from Vessels that ran upstream. The order of the IDs will match the corresponding upstream environment variables, but may change with every run.                          |
| `SHIPYARD_FLEET_CURRENTSTREAM_VESSEL_IDS` | `02ce1830-14a1-4d6b-ada1-ea39e8add14f,83ca8dcb-b2b7-4456-bbe0-ab550db98bb5` | A comma-separated list of Vessel IDs from Vessels that are running in the currentstream. The order of the IDs will match the corresponding currentstream environment variables, but may change with every run. |
| `SHIPYARD_FLEET_DOWNSTREAM_VESSEL_IDS`    | `8934f43f-413a-4bc9-b267-0924035e3459,aa0c6a42-c61d-4f15-b54a-75247c4281da` | A comma-separated list of Vessel IDs from Vessels that will run downstream. The order of the IDs will match the corresponding downstream environment variables, but may change with every run.                 |
| `SHIPYARD_FLEET_START_TIME` | `2021-03-12T21:22:47Z` | The time at which the Vessel started running. Formatted using the [RFC3339](https://tools.ietf.org/html/rfc3339) standard. |
| `SHIPYARD_FLEET_SCHEDULED_TIME` | `2021-03-12T21:22:00Z` | The time at which the Vessel started running. Formatted using the [RFC3339](https://tools.ietf.org/html/rfc3339) standard. |
| `SHIPYARD_FLEET_START_TIME_YEAR` | `2022` | The year of the Fleet start time.
| `SHIPYARD_FLEET_START_TIME_MONTH` | `12` | The month of the Fleet start time in format 01-12.
| `SHIPYARD_FLEET_START_TIME_DAY` | `07` | The day of the Fleet start time in format 01-31.
| `SHIPYARD_FLEET_START_TIME_HOUR` | `14` | The hour of the Fleet start time in format 0-23.
| `SHIPYARD_FLEET_START_TIME_MINUTE` | `34` | The minute of the Fleet start time in format 0-59.
| `SHIPYARD_FLEET_START_TIME_SECOND` | `12` | The second of the Fleet start time in format 0-59.
| `SHIPYARD_FLEET_START_TIME_MILLISECOND` | `434` | The millisecond of the Fleet start time in format 0-999.
| `SHIPYARD_FLEET_START_TIME_EPOCH` | `1670443778` | The number of seconds since the Unix epoch.
| `SHIPYARD_WEBHOOK_HEADERS_FILE` | `/home/shipyard/2560137a-5360-4561-8bfb-810280dce3f0.webhook_headers` | The path to the file that will be optionally created if headers are provided in the webhook invocation. |
| `SHIPYARD_WEBHOOK_BODY_FILE` | `/home/shipyard/2560137a-5360-4561-8bfb-810280dce3f0.webhook_body` | The path to the file that will be optionally created if a body is provided in the webhook invocation. |
