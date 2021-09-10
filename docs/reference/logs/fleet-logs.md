---
id: fleet-logs
title: Fleet Logs
hide_title: true
description: Information about how logs are created and stored for Fleets.
keywords:
  - logs
  - logging
  - fleets
---

# Fleet Logs

## Definition

The Logs tab of a Fleet shows a list of each unique log of every Fleet Voyage or run that has occurred, alongside additional metadata and graphs around performance. By clicking on an ID or the Open action, you can view more information.

The graph on the Fleet Logs tab shows historical run durations trended out for all logs shown on the current page.

### Individual Fleet Log

The graph on the individual Fleet Log page shows a Gantt chart view of the order and length of time that each Vessel in the fleet ran for.

The table below shows all of the [Vessel Logs](vessel-logs.md) that were created and run as a part of the current Fleet. You can view more information about the individual Vessel Log by clicking on the ID or the Open action.

### Live Update

If a log has a status of *Scheduled* or *Running*, the individual Log page will automatically refresh every few seconds to show:

- Current Fleet Status
- Current Duration
- Live Gantt Chart Updates

While the Fleet is actively running, you can click into an Individual [Vessel Log](vessel-logs.md) that's currently running and click **Stop Voyage** to terminate the voyage, thus terminating all downstream Vessels in the Fleet.

Once the Fleet has finished running, the page will no longer automatically refresh.

### Metadata

| Name                                                       | Definition                                                              |
| :--------------------------------------------------------- | :---------------------------------------------------------------------- |
| **Fleet Log ID**                                                 | UUIDv4 associated with the individual Fleet run.                              |
| [**Status**](../other-functions/status.md) | The last known information about a run.                                 |
| [**Trigger**](../triggers/triggers-overview.md)                | What type of Trigger generated this log.                                |
| **Vessels**                                                | The number of Vessels connected in the current run of the Fleet.                                |
| **Billable Runtime**                                               | The cumulative runtime of all Vessels in the Fleet that is billable.                      |
| **Duration**                                               | The total length of time that the Fleet ran for.                       |
| **Start Time**                                             | The timestamp of when the run started.                         |
| **End Time**                                               | The timestamp of when the run ended.                                    |


## Screenshots

![Fleet Logs Page](../../.gitbook/assets/shipyard_2021_09_10_11_56_40.png)

![Individual Fleet Log](../../.gitbook/assets/shipyard_2021_09_10_11_57_46.png)

## Additional Notes

1. If a Fleet runs into an error and can't finish, any Vessel Logs that were scheduled but not run are marked as incomplete with links disabled.
2. The table of Vessel Logs isn't guaranteed to show the Vessels in the order that they ran.
