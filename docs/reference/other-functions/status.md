---
id: status
title: Status
hide_title: true
description: Information about the different statuses of Vessels and Fleets.
keywords:
  - status
  - state
  - end result
  - exit code
---

# Status

## Definition

**Status** refers to the final outcome of a single run for a Vessel or Fleet, tied to an individual [log](../logs/logs-overview.md).

### Status Column
The Status column for Vessels and Fleets will show the last 8 completed statuses so you can assess performance at a glance. This column will never show scheduled, running, or retrying statuses. The last 8 statuses should be read from left-to-right, with the right-most circle indicating the most recent status.

![Last 8 Statuses](../../.gitbook/assets/shipyard_2021_04_12_16_55_12.png)

- A green circle indicates a status of Success.
- A red circle indicates a status of Errored or Terminated.
- A white circle with a grey border indicates a lack of data. This only occurs when the Vessel or Fleet has less than 8 runs in total.

### Vessel Statuses
The following statuses are possible for Vessels:

| Name           | Icon |Definition                                                                                                                    |
| :------------- |:----- |:---------------------------------------------------------------------------------------------------------------------------- |
| **Success**    | ![Success Status Icon](../../.gitbook/assets/success.png) | This run completed with an exit code of 0.                                                                                    |
| **Errored**    | ![Errored Status Icon](../../.gitbook/assets/errored.png)| This run completed with an exit code from 1 to 255.                                                                           |
| **Terminated** | ![Terminated Status Icon](../../.gitbook/assets/terminated.png)| This run was manually stopped by a user.                                                                                      |        |
| **Retrying**   | ![Retrying Status Icon](../../.gitbook/assets/retry.png) | This run has previously errored and is running again based on options selected in the Guardrails.                              |
| **Running**    | ![Running Status Icon](../../.gitbook/assets/running.png) | This run is currently occuring.                                                                                               |
| **Scheduled**  | ![Scheduled Status Icon](../../.gitbook/assets/scheduled.png) | This run has not yet occurred, but is scheduled to occur in the next 24 hours                                                 |
| **Incomplete** | ![Incoemplet Status Icon](../../.gitbook/assets/incomplete.png) | This run will never occur. This status can only be seen on Fleet logs, when upstream Vessels failed to take a branching path. |

### Fleet Statuses
The following statuses are possible for Fleets:

| Name           | Icon |Definition                                                                                                                    |
| :------------- |:----- |:---------------------------------------------------------------------------------------------------------------------------- |
| **Success**    | ![Success Status Icon](../../.gitbook/assets/success.png) | Every Vessel in this Fleet that ran resulted in a final status of Success.                                                                                    |
| **Errored**    | ![Errored Status Icon](../../.gitbook/assets/errored.png)| One or more Vessels in this Fleet that ran resulted in a final status of Errored. <br></br><br></br>This status occurs even if an error path was intentional, as error pathing typically indicates a resolution process for something that went wrong.
| **Terminated** | ![Terminated Status Icon](../../.gitbook/assets/terminated.png)| One or more Vessels in this Fleet were manually stopped by a user.                                                                                      |        
| **Running**    | ![Running Status Icon](../../.gitbook/assets/running.png) | One or more Vessels in this Fleet are still actively running.                                                                                             |
| **Scheduled**  | ![Scheduled Status Icon](../../.gitbook/assets/scheduled.png) | This Fleet has been scheduled to run in the next 24 hours.                                                 |