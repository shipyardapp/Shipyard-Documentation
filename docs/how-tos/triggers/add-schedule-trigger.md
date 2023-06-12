---
id: add-schedule-trigger
title: How to Add a Schedule Trigger
hide_title: true
description: Quick how-to guide to add a Schedule Trigger.
keywords:
  - add
  - schedule
  - trigger
---

# How to Add a Schedule Trigger

## Overview

If you want to automate a Fleet to run at a specific time on a repeated schedule, you'll want to add a [Schedule Trigger](../../reference/triggers/schedule-triggers.md). These require answering 3 distinct questions.

- **How often** do you want the element to run?
- **When do** you want the element to run?
- **What time** do you want the element to run?

These 3 questions together define one distinct schedule. This how to guide will walk you through the steps to edit a schedule Trigger.

## Steps

1. Navigate the specific Fleet that you want to add schedules to and hover over the schedule trigger icon.
2. Click **Add Schedule**.
3. Click the **+** icon underneath the Schedules header.
4. Select an option for "How Often?". Your choices are hourly, daily, weekly, or monthly.
5. Select an option for "When?".
   - If you selected "Monthly" in the previous step, your options will be numeric dates.
   - If you selected "Weekly" in the previous step, your options will be days of the week.
   - If you selected "Hourly" or "Daily" this option will be disabled.
6. Select an option for "What Time?".
   - If you selected "Daily", "Weekly", or "Monthly", you will need to select an hour \(HH\), a minute \(MM\), and AM or PM.
   - If you selected "Hourly", you will need to select a 5 minute interval.
7. Repeat steps 3-6 for any additional schedules that you want to add.
8. Click **Save** at the bottom.

<div dangerouslySetInnerHTML={{ __html: `<div style="position: relative; padding-bottom: calc(66.66666666666666% + 41px); height: 0;"><iframe src="https://demo.arcade.software/a9q9qVEbrqIhWXdchPat?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;color-scheme: light;" title="How to Add a Schedule Trigger"></iframe></div>` }} />



:::tip success
You've now successfully added Schedule Triggers!
