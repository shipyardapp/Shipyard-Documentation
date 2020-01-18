# Logs

## Definition

The Logs tab of a Vessel shows a list of each unique log that has been generated, alongside additional information and graphs around performance. The graph shows historical run durations trended out for all logs shown on the current page. The scorecards at the top give a high level insight into how successfully your Vessel has been running historically.

A log is created for a single, isolated instance of a Vessel running on Shipyard's cloud infrastructure. Every time your Vessel is [Triggered](vessels/triggers/), it produces a log. The Logs tab of a Vessel shows a list of each unique log that has been generated.

## Stored Data

| Name | Definition |
| :--- | :--- |
| \*\*\*\*[**Status**](other-functions/status.md)\*\*\*\* | The last known information about a run. |
| **Log ID** | UUIDv4 associated with the individual run. |
| \*\*\*\*[**Trigger**](vessels/triggers/)\*\*\*\* | What type of Trigger generated this log. |
| **Blueprint** | The Blueprint that the Vessel is built from. |
| **Created At** | The timestamp of when the run was originally scheduled within Shipyard. |
| **Expected Start** | The timestamp of when the run was scheduled to start. |
| **Start Time** | The timestamp of when the run actually started. |
| **End Time** | The timestamp of when the run ended. |
| **Time to Start** | The duration between the Expected Start and the Start Time |
| **Duration** | The total length of time that the Vessel ran for. |
| **Retries** | The number of times the run was retried. |
| **Exit Code** | The exit code that the script returned upon completion. |

## Screenshots

![Logs Tab for a Vessel](../.gitbook/assets/image%20%2823%29.png)

![Individual Log](../.gitbook/assets/image%20%2832%29.png)

## Limitations

1. Logs cannot currently be exported from Shipyard for analysis. If you need access to this data, reach out to [support](mailto:support@shipyardapp.com).

