---
id: assess-fleet-performance
title: How to Assess Fleet Performance
hide_title: true
description: Quick how-to guide to see the performance of any Fleet.
keywords:
  - how to
  - performance
  - status
  - state
  - logging
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# How to Assess Fleet Performance

## Overview

Once your Fleet is up and running on Platform, you'll want to track how it's performing over time, finding ways to prevent errors as they arise. This how to guide will walk you through the steps to assess Fleet performance at multiple levels.

## Steps

<Tabs
defaultValue="project"
values={[
{label: 'Project Level', value: 'project'},
{label: 'Fleet Level', value: 'fleet'},
{label: 'Log Level', value: 'log'},
]}>
<TabItem value="project">

1. Navigate to the project of your choice.
2. Click the Fleet tab at the top.
3. On the main screen, you'll be able to visually see all of the Fleets that have been built under that project. The left-most column will show the last 8 statuses for each given Fleet.

If you want to assess the performance of a single Fleet, you'll need to dive into the **Fleet Level** tab.

<div dangerouslySetInnerHTML={{ __html: `<div style="position: relative; padding-bottom: calc(66.66666666666666% + 41px); height: 0;"><iframe src="https://demo.arcade.software/167QZhvkym4HsfKSvR8f?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;color-scheme: light;" title="How to Assess Fleet Performance - Project"></iframe></div>` }} />

</TabItem>
<TabItem value="fleet">

1. Click a Fleet name to navigate to the Logs tab for that Vessel. On this page, you'll be able to visually see all of the Logs that have been created under that Fleet.

At this point, you may want to understand more about why a Fleet failed or ran into a particular status at a given time. To do so, view the steps on the **Log Level** tab.


<div dangerouslySetInnerHTML={{ __html: `<div style="position: relative; padding-bottom: calc(66.66666666666666% + 41px); height: 0;"><iframe src="https://demo.arcade.software/6hv2w01LQNmzp1Mzcpuy?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;color-scheme: light;" title="How to Assess Fleet Performance - Fleet"></iframe></div>
` }} />

</TabItem>
<TabItem value='log'>

1. Click the Log ID to dive one step deeper.
2. Use the the top information boxes to dissect how long the Fleet took to run, what the final exit code was, etc.
3. Click on any Vessel Log to dig into specific performance issues.

<div dangerouslySetInnerHTML={{ __html: `<div style="position: relative; padding-bottom: calc(66.66666666666666% + 41px); height: 0;"><iframe src="https://demo.arcade.software/U4mMJ2VPJMk5dbsuh2YA?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;color-scheme: light;" title="How to Assess Fleet Performance - Log"></iframe></div>` }} />

</TabItem>
</Tabs>

:::tip success
You've now successfully assessed the performance of a Fleet.
:::
