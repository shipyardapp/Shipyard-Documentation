---
id: see-all-files
title: How to See All Available Files in a Fleet
hide_title: true
description: Quick how-to guide to see all of the files currently present within a fleet.
keywords:
  - files
  - view
---

# How to See All Available Files in a Fleet

## Overview

When running a [Fleet](../../reference/fleets/fleets-overview.md), every Vessel that either generates or downloads files can share the contents with other Vessels in the Fleet. Sometimes it can be difficult to remember the names and locations of the files that are available. This how to guide will walk you through the steps to easily show all available files in a Fleet.

## Steps

1. Find the Fleet you want to see files in on the **Fleets** tab.
2. Click on the **Fleet Builder** tab. 
3. Click the plus icon along the left side of the Fleet Builder sidebar.
4. Select the _Bash_ option from the _Code Vessels_ dropdown.
5. In the sidebar, name your file `list_files.sh`.
6. Ensure the code section is set to **Write** and paste in `ls -a -R`. This script lists all files in every directory.
7. Add the Vessel to the Fleet and connect it to existing Vessels. We recommend connecting it towards the end of the Fleet. Location matters!
8. Click **Run Now**.
9. Once the Fleet has finished running, navigate to the Log for the Bash Vessel you just added. You should see an output that shows all of the available files in the Fleet.

:::tip success
You've successfully created a Vessel that lists all the files in your Fleet.
:::