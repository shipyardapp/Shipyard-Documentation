# Fleet Logs

The Logs tab of a Fleet shows a list of each unique log of every Fleet Voyage or run that has occurred, alongside additional metadata and graphs around performance. By clicking on an ID or the Open action, you can view more information.

The graph on the Fleet Logs tab shows historical run durations trended out for all logs shown on the current page.

### Individual Fleet Log

The graph on the individual Fleet Log page shows a gantganttt chart view of the order and length of time that each Vessel in the fleet ran for. 

The table below shows all of the [Vessel Logs](vessel-logs.md) that were created and run as a part of the current Fleet.

You can view more information about the individual [Vessel Log](vessel-logs.md) by clicking on the ID or the Open action.

## Stored Data

| Name | Definition |
| :--- | :--- |
| \*\*\*\*[**Status**](../other-functions/status.md)\*\*\*\* | The last known information about a run. |
| **Log ID** | UUIDv4 associated with the individual run. |
| **Vessels** | The number of Vessels that were a part of this Fleet at runtime. |
| **Created At** | The timestamp of when the Fleet was scheduled within Shipyard. |
| **Expected Start** | The timestamp of when the starting Vessels were originally scheduled to run. |
| **Start Time** | The timestamp of when the starting Vessels began running. |
| **End Time** | The timestamp of when the last Vessel finished running. |
| **Time to Start** | The duration between the Expected Start and the Start Time |
| **Duration** | The total length of time that the Fleet ran for. |

## Screenshots

![Fleet Logs Page](../../.gitbook/assets/image%20%2873%29.png)

![Individual Fleet Log](../../.gitbook/assets/image%20%2882%29.png)

## Limitations

1. If a Fleet runs into an error and can't finish, any Vessel Logs that were scheduled but not run are removed. 
2. The table of Vessel Logs isn't guaranteed to show the Vessels in the order that they ran.

