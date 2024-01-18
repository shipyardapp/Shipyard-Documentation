---
id: run-with-params
title: How to Run a Fleet with Parameters
description: Learn how to run a Fleet with custom parameter overrides in our application.
keywords:
  - run
  - fleet
  - parameters
  - overrides
---

# How to Run a Fleet with Parameters

## Overview
Running a Fleet with parameters allows you to override the standard environment variables of your Fleet for one-off runs. This guide will walk you through the steps to run a Fleet with custom parameters using our application.

## Prerequisites
- Basic understanding of JSON.
- Familiarity with the Fleet and Vessel concepts in our application.

## Steps

### Step 1 - Access a Fleet
- Navigate to the **Fleets** page.
- Click on the Fleet you want to run with parameter overrides.

### Step 2 - Open Parameter Overrides
- Click the button with the parameters symbol `{...}` to open the Parameter Overrides modal.

### Step 3 - Review the Instructions
- The modal will include instructions for how to use the JSON editor.
- Read through the instructions and make sure the example JSON structure makes sense to you.

### Step 4 - Providing Parameter Overrides
- In the **Parameter Overrides** section, you will see a Vessel overrides JSON structure already created from the Vessels in your Fleet.
- The JSON structure will include:
    - A `vessel_overrides` key with an array of Vessel objects.
    - Each Vessel object will include:
        - A `name` key with the Vessel's name.
        - An `environment_variable_overrides` key with key-value pairs for the variables already within that Vessel. The values will be set to `null` by default. You can override these values with your own or add new key-value pairs.
- You can edit the JSON structure directly in the editor.
- As you type, the editor will indicate any syntax errors or inconsistencies with your JSON structure.

### Step 5 - Reset or Run
- You can reset your inputs to the original pre-generated JSON using the **Reset** button.
- Once the JSON is valid, the **Run Now with Parameters** button will be enabled.
- Click this button to execute the Fleet with your specified parameter overrides.

## Example JSON
```json
{
  "vessel_overrides": [
    {
      "name": "Vessel A",
      "environment_variable_overrides": {
        "ENV_VAR_1": "One",
        "ENV_VAR_2": "Two",
        "ENV_VAR_3": "Three",
        "explicit_empty": "",
        "explicit_do_not_set": null
      }
    },
    {
      "name": "Vessel B",
      "environment_variable_overrides": {
        "ENV_VAR_A": "Apple",
        "ENV_VAR_B": "Blossom",
        "ENV_VAR_C": "Chai"
      }
    }
  ]
}
