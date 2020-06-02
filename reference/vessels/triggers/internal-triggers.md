# Internal Triggers

## Definition

An Internal Trigger indicates which selected Vessel the current Vessel will run **after**. Every time the selected Vessel runs successfully \(with an exit code of 0\), the current Vessel will be triggered.

When you select to use an internal trigger, you are automatically creating a fleet.

## Screenshots

![](../../../.gitbook/assets/image%20%2860%29.png)

## Limitations

1. Internal triggers can currently only indicate which Vessel the current vessel should run **after.**
2. An internal trigger can only be for a Vessel that lives in the same project as your current vessel.
3. A Vessel cannot have a Internal Trigger and an Schedule Trigger simultaneously. One of the two options must be selected.

## **Learn More**

* [How to Create a New Fleet](../../../how-tos/fleets/how-to-create-a-new-fleet.md)

