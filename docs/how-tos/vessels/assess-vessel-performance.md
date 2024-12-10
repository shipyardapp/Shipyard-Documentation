---
id: assess-vessel-performance
title: How to Assess Vessel Performance
hide_title: true
description: Quick how-to guide to see the performance of any Vessel.
keywords:
  - how to
  - performance
  - status
  - state
  - logging
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# How to Assess Vessel Performance

## Overview

Once your Vessel is up and running on Platform, you'll want to track how it's performing over time, finding ways to prevent errors as they arise. This how to guide will walk you through the steps to assess Vessel performance at multiple levels.

## Steps

<Tabs
defaultValue="project"
values={[
{label: 'Project Level', value: 'project'},
{label: 'Vessel Level', value: 'vessel'},
{label: 'Log Level', value: 'log'},
]}>
<TabItem value="project">

1. Navigate to the project of your choice.
2. On the main screen, you'll be able to visually see all of the Vessels that have been built under that project. The left-most column will show the last 8 statuses for each given Vessel.

If you want to assess the performance of a single Vessel, you'll need to dive into the **Vessel Level** tab.
</TabItem>
<TabItem value="vessel">

1. Click a Vessel name to navigate to the Logs tab for that Vessel. On this page, you'll be able to visually see all of the Logs that have been created under that Vessel. Additionally, you can use the scorecards at the top to understand the % of times that your Vessel is running successful.
2. Filter by status by clicking the filter icon (![Filter Icon](../../.gitbook/assets/filter-icon.png)) to the right of the column header.
3. Select the status\(es\) you want to view and click **OK**. This will allow you to see all Vessels whose last run matched the status\(es\) you selected.

At this point, you may want to understand more about why a Vessel failed or ran into a particular status at a given time. To do so, view the steps on the **Log Level** tab.
</TabItem>
<TabItem value='log'>

1. Click the Log ID to dive one step deeper.
2. Use the the top information boxes to dissect how long the vessel took to run, what the final exit code was, etc.
3. Use the output section to dig into specific errors that may have been printed while the Vessel was running.

</TabItem>
</Tabs>

:::tip success
You've now successfully assessed the performance of a Vessel.
:::
