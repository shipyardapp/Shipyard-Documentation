# State

## Definition

**State** refers to a constant indicator that shows how an element is currently being used. 

**Vessels** have the following states:

*  **Active** - The Vessel is currently in use and running on all Schedule Triggers.
*  **Inactive** - The Vessel is not currently running on any of the Schedule Triggers. It can, however, still be run On Demand and with an Internal Trigger.

**Blueprints** have the following states:

*  **Active** - All users can view and use this Blueprint.
*  **Test** - Only those with permissions to create and edit Blueprints can use this Blueprint to build a Vessel.
*  **Inactive** - New Vessels cannot be created from this Blueprint. In addition, when setting a Blueprint to inactive, all previously dependent Vessels will be set to inactive.

