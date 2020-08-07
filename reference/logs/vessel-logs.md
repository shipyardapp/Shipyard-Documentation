# Vessel Logs

## Definition

The Logs tab of a Vessel shows a list of each unique log of every Voyage or run that has occurred, alongside additional metadata and graphs around performance. By clicking on an ID or the Open action, you can view more information.

The graph on the Vessel Logs tab shows historical run durations trended out for all logs shown on the current page. The scorecards at the top give a high level insight into how successfully your Vessel has been running historically.

### Individual Vessel Log

#### Output

The output section of an individual Vessel Log will show you:

* Any [environment variables](../vessels/environment-variables/) that were set via the Requirements tab or via [Blueprint Variable](../blueprints/blueprint-variables.md) inputs.
* Shipyard functionality, such as downloading your script and changing the current working directory.
* Any data that your script printed to \`stdout\`. 

#### Live Update

If a log has a status of "Scheduled" or "Running", the individual Log page will automatically refresh every few seconds to show:

* Current Vessel Status
* Current Duration
* Live Output

While the Vessel is actively running, you can click "Stop Voyage" to immediately terminate the job.

Once the Vessel has finished running, the page will no longer automatically refresh.  

## Stored Data

| Name | Definition |
| :--- | :--- |
| \*\*\*\*[**Status**](../other-functions/status.md)\*\*\*\* | The last known information about a run. |
| **Log ID** | UUIDv4 associated with the individual run. |
| \*\*\*\*[**Trigger**](../triggers/)\*\*\*\* | What type of Trigger generated this log. |
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

![Logs Tab for a Vessel](../../.gitbook/assets/image%20%2823%29.png)

![Individual Log](../../.gitbook/assets/image%20%2832%29.png)

## Limitations

1. Logs cannot currently be exported from Shipyard for analysis. If you need access to this data, reach out to [support](mailto:support@shipyardapp.com).
2. The Log Output does not contain any information pertaining to the package installation process.
3. The "Live Update" feature of the Log Output only updates every time there are 256 additional bytes of data. In some instances where very little data is sent to the output, it may look like the Vessel is not actually showing any new data.

