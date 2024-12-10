---
id: hubspot-csv-header-validator
title: Hubspot Template - CSV Header Validator
hide_title: true
sidebar_label: CSV Header Validator
description: Information about Platform's low-code Hubspot CSV Header Validator blueprint. Validates CSV headers against available Hubspot properties and logs property details. 
keywords:
    - hubspot
    - blueprint
    - template
---

# Hubspot - CSV Header Validator

## Overview
Preparation:

Have your Hubspot Access Token ready. This token is essential for accessing the list of available Hubspot properties.
Prepare the CSV file you want to validate. Make sure it's accessible and you know its path.
Using the Blueprint:

Launch the "Hubspot - CSV Header Validator" blueprint.
Input the Hubspot Access Token into the corresponding field.
Provide the path to your CSV file. If you don't provide a CSV file, the blueprint will default to logging available Hubspot properties.
Initiate the blueprint. Depending on your input, it will either validate the CSV headers or provide a detailed log of available Hubspot properties.
Post-Validation:

Review the logs. If you provided a CSV, it would indicate whether all headers are valid Hubspot properties or list any discrepancies. If no CSV was provided, you'd see a detailed log of all available Hubspot contact properties.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Access Token | HUBSPOT_ACCESS_TOKEN  | Password |:white_check_mark: | - | - | Token for authenticating with Hubspot. This ensures secure access to the Hubspot account for exporting data. |
| CSV File Path (Optional) | HUBSPOT_CSV_FILE  | Alphanumeric |:heavy_minus_sign: | - | - | Path to the CSV file you want to validate. If not provided, the blueprint will log available Hubspot properties. |
| Hubspot Data Type | HUBSPOT_OBJECT_TYPE  | Select |:white_check_mark: | `contacts` | Contacts: `contacts`<br></br><br></br>Companies: `companies`<br></br><br></br>Deals: `deals`<br></br><br></br> | None |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
  blueprint: Hubspot - CSV Header Validator
  inputs:
    HUBSPOT_ACCESS_TOKEN: null  ## REQUIRED
    HUBSPOT_CSV_FILE: null
    HUBSPOT_OBJECT_TYPE: contacts ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '102'
    - '201'
    - '202'
    - '206'

```
