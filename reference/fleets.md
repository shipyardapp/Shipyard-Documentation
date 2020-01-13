# Fleets

## Definition

A Fleet is a collection of multiple Vessels working together to tackle one larger job. Fleets can contain any number of Vessels and contain any different type of Vessels \(including a mixture of coding languages or Blueprints\). In their current state, the Vessels in a Fleet get run sequentially.

## **Limitations**

While fleets are a powerful way to automate an entire workflow, there are a few limitations to be aware of.

1. A fleet cannot be set up with Vessels that live across multiple projects. You'll need to make sure that all of the relevant Vessels live within the same project.
2. Vessels that are connected as part of a Fleet can only be triggered through the successful completion of the previous Vessel. There is no current support for conditional logic based on other error codes, and there is no way to skip to the next Vessel in the fleet if the previous Vessel failed.
3. One Vessel can kick off multiple other Vessels, but multiple Vessels can't all wait for completion to kick off a single Vessel. In other words, we support Branching Paths, but not Converging Paths.  If you tried to set up a fleet that looked like a converging path, Vessel D would actually get kicked off twice \(once by Vessel B, once by Vessel C\).

![](https://downloads.intercomcdn.com/i/o/164737155/50f9237b20a33a4d5e7fa2ea/paths.png)

4. Data cannot be shared between Vessels, because each Vessel is still running independently. If you need to reference a file that has been created earlier in the fleet, we recommend storing the file somewhere externally \(S3, SFTP, etc.\) and referencing that external file name later in the fleet.

5. A Vessel cannot belong to multiple Fleets. This is to prevent confusion about start and end points in a Fleet. In most cases, this can be resolved by just duplicating the Vessel.

