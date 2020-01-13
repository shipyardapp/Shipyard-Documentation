# Internal Triggers

## Definition

When you set a Vessel up with an Internal trigger, it indicates that the current Vessel will run **after** the selected vessel. Every time the indicated Vessel runs successfully \(with an exit code of 0\), the current Vessel will be triggered.

When you select to use an internal trigger, you are automatically creating a fleet.

## Limitations

1. Internal triggers can currently only indicate which Vessel the current vessel should run **after.**
2. An internal trigger can only be for a Vessel that lives in the same project as your current vessel.

