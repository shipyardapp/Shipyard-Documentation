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

When running a [Fleet](../../reference/fleets.md), every Vessel that either generates or downloads files can share the contents with other Vessels in the Fleet. Sometimes it can be difficult to remember the names and locations of the files that are available. This how to guide will walk you through the steps to easily show all available files in a Fleet.

## Steps

### Step 1 - Create a Vessel to List All Files
1. Create a Bash Vessel.
2. Name your file `list_files.sh`
3. Ensure the code section is set to **Write** and paste in `ls -a -R`. This script lists all files in every directory.
4. Complete the remaining steps and save your Vessel.
   
### Step 2 - Add the Vessel to Your Fleet
4. Navigate to the Fleet you want to see files in.
5. Add the Vessel to the Fleet and connect it to existing Vessels. We recommend connecting it towards the end of the Fleet. Location matters!
6. Save the Fleet.
7. Click **Run Now**
8. Once the Fleet has finished running, navigate to the Log for the Bash Vessel you just added. You should see an output that shows all of the available files in the Fleet.

:::success
You've successfully created a Vessel that lists all the files in your Fleet.
:::