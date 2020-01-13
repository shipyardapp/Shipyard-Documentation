# Logs

## Definition

A log is created for a single, isolated instance of a Vessel running on Shipyard's cloud infrastructure. Every time your Vessel runs and does something, it produces a log. The Logs tab of a Vessel shows a list of each unique log that has been generated.

A log can be created through 3 different methods:

* Automated Scheduling
* Internal Triggers
* On Demand

## Stored Data

| Name | Definition |
| :--- | :--- |
| Log ID | UUIDv4 associated with the individual run. |
| Status | The last known information about a run. You can find all possible statuses in this article. |
| Blueprint | The Blueprint that the Vessel is built from. |
| Created At | The timestamp of when the run was originally scheduled within Shipyard. |
| Start Time | The timestamp of when the run started. |
| End Time | The timestamp of when the run ended. |
| Duration | The total length of time that the Vessel ran for. |

## Limitations

1. Logs are currently stored for an unlimited period of time. When we roll out different paid access tiers in the near future, we will likely implement limited log retention, starting at 7 days

