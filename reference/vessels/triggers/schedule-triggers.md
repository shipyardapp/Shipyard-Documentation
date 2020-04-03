# Schedule Triggers

## Definition

Schedule Triggers allow a vessel to run autonomously in the background on our cloud infrastructure. To run a Vessel on an automated schedule, you must have one or more schedules listed and the Vessel must be in an [**Active state**](../../other-functions/state.md).

There are four distinct types of schedules:  
**Hourly** - Select the distinct minute that you want a Vessel to run every hour.   
**Daily** - Select the distinct time that you want a Vessel to run every day.  
**Weekly** - Select the day of the week and the time that you want a Vessel to run every 7 days.  
**Monthly** - Select the numeric day \(1-31\) and the time that you want a vessel to run every month.

### Timing of Scheduling <a id="timing-of-scheduling"></a>

At 12:00am UTC, all runs for the next 24 hour cycle get added as empty logs with a [status ](../../other-functions/status.md)of **Scheduled**.

If a schedule is added, removed, or changed after 12:00am UTC, the Vessel's scheduled runs will be updated to reflect the new schedule up until 11:59pm UTC of the current day.

## Screenshots

![](../../../.gitbook/assets/image%20%2848%29.png)

## Limitations

1. A schedule's maximum frequency is every 5 minutes. If you need to run a Vessel more frequently, please reach out to support.
2. If a schedule is duplicated, the Vessel will be run multiple times concurrently at the scheduled time.
3. A Vessel cannot have a Schedule Trigger and an Internal Trigger simultaneously. One of the two options must be selected.
4. Selecting a schedule of `Monthly`  on the 31st will only result in a run being scheduled when the month has 31 days. If you want a schedule to run at the end of every month, we suggested scheduling it for the 1st.
5. There is currently no way to create a schedule that is tied to an irregular mix of dates and times.   Some examples of schedules we don't natively support, but are still possible to create within Shipyard:
   1. A schedule that only runs on specific dates, like holidays.
   2. A schedule that runs every hour except on specific days.
   3. A schedule that can be described as "every other" or "every nth"

## Learn More

* [How to Edit a Vessel's Schedule Triggers](../../../how-tos/vessels/how-to-edit-a-vessels-schedule-triggers.md)

