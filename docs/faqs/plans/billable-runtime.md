---
id: billable-runtime
title: How do you calculate billable runtime?
hide_title: true
description: How do you calculate billable runtime?
hide_table_of_contents: true
keywords:
  - faq
  - frequently asked questions
  - runtime
  - billable
---


## How do you calculate billable runtime?

Shipyard charges for the cumulative time that your scripts take to run on our infrastructure, regardless of the final status of the job. This is distinct from the duration.

You are not charged for any time delays between [automatic retries](../../reference/guardrails.md), but each retry will have its own billable runtime associated to it. You are not charged for any time delay between two Vessels in a Fleet. On your invoice, we bill per second, with each Vessel's billable runtime rounded up to the nearest second. Below are a few examples to demonstrate this calculation.

Assumptions:
- Process A always takes 1hr
- Process B always takes 10m
- Process C always takes 1m

Examples:
- You have Process A scheduled to run at 2:00pm and Process B scheduled to run at 4:00pm. Everything will finish running at 4:10pm. Total billable runtime is 1h 10m.
- Shipyard allows you to link together Process A and Process B as a Fleet, so that as soon as Process A completes, Process B will immediately run. If you ran Process A at 2:00pm, Process B will start running at 3:00pm and finish at 3:10pm. Total billable runtime is 1h 10m.
- You run three instances of Process A, in parallel, but still only need to run Process B once after both Process A jobs have completed. If you run Process A three times at 2:00pm, all instances would complete at 3:00pm and kick off Process B which would finish at 3:10pm. Total billable runtime is calculated as 3h 10m, even though the Fleet only had a duration of 1h 10m.
- You run Process C with guardrails to retry itself 10x upon failure, with 5m between each retry. Process C starts running at 8:00am and fails every time. Process C finishes running at 8:55am, with a total billable runtime of 10m.
- You run Process C with guardrails to retry itself 10x upon failure, with 5m between each retry. Process C starts running at 8:00am and succeeds after the 3rd time. Process C finishes running at 8:13am, with a total runtime of 3m.

:::note
Some Blueprints in Shipyard do not charge Billable Runtime and are classified as [Free Blueprints](../../reference/blueprints/blueprint-library/blueprint-library-overview.md#free-blueprints)