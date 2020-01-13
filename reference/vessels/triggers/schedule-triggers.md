# Schedule Triggers

## Definition

Automated scheduling allows a vessel to run autonomously in the background on our cloud infrastructure. To run a Vessel on an automated schedule, you must have one or more schedules listed and the Vessel must be in an "Active" state.

There are four distinct types of schedules:  
**Hourly** - Select the distinct minute that you want a Vessel to run every hour.  
**Daily** - Select the distinct time that you want a Vessel to run every day.  
**Weekly** - Select the day of the week and the time that you want a Vessel to run every 7 days.  
**Monthly** - Select the numeric day \(1-31\) and the time that you want a vessel to run every month.

### Timing of Scheduling <a id="timing-of-scheduling"></a>

At 12:00am UTC, all runs for the next 24 hour cycle get added as empty logs with a status of "Scheduled".

If a schedule is added, removed, or changed after 12:00am UTC, the Vessel's scheduled runs will be updated to reflect the new schedule up until 11:59pm UTC of the current day.  


## Limitations

1. A schedule's maximum frequency is every 5 minutes. If you need to run a Vessel more frequently, please reach out to support.
2. If a schedule is duplicated, the Vessel will be run multiple times concurrently at the scheduled time.
3. A Vessel's scheduling is agnostic to other ways that the Vessel can be triggered. There is no way to prevent a Vessel from running on its schedule if it has been recently been triggered On Demand or as part of a Fleet.
4. Selecting a schedule of `Monthly`  on the 31st will only result in a run being scheduled when the month has 31 days. As an alternative, we've provided an option of "Last" which will always trigger on the last day of the current month. 
5. There is currently no way to create a schedule that is tied to an irregular mix of dates and times. Some examples of schedules we don't natively support, but are still possible to create within Shipyard:  - A schedule that only runs on specific dates, like holidays. - A schedule that runs every hour except on specific days. - A schedule that can be described as "every other" or "every nth" 

