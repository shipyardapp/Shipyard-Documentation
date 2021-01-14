# Timestamps and Timezones

## Definition

Throughout the application, you'll see timestamps for the following pieces of information:

* Last Update
* Last Run
* Created At
* Expected Start
* Start Time
* End Time

These timestamps are commonly shown on the Logs tab or within a Table. All of these timestamps are shown in the timezone that your computer is currently set to, which should _usually_ be the timezone where you are physically located.

In the settings of a project, you're able to set the project's timezone. This setting only affects the timezone that Vessels are scheduled in, not how those times are displayed throughout the project.

### Example

* You have a project named "Test" with **Pacific Time** selected.
* Your computer is set to **Eastern Time**.
* You schedule a Vessel in the project "Test" to run at 12:00 PM.
* On the Logs, the Vessel will show that it is scheduled to run at 3:00 PM.
* On the Triggers/Schedule tab, the Vessel will show that it is scheduled to run at 12:00.

