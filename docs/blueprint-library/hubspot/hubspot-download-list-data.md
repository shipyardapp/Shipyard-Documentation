---
id: hubspot-download-list-data
title: Hubspot Template - Download List Data to Platform
hide_title: true
sidebar_label: Download List Data to Platform
description: Information about Platform's low-code Hubspot Download List Data to Platform blueprint. Exports specified Hubspot list data based on given object properties and saves it to a designated file 
keywords:
    - hubspot
    - blueprint
    - template
---

# Hubspot - Download List Data to Platform

## Overview
The "Hubspot - Download List Data to Platform" blueprint on Platform allows you to export selected data fields from a specific Hubspot list. Simply provide your Hubspot Access Token, specify the list ID and desired data fields, set a filename (which will auto-append .csv), and initiate the process. 

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Access Token | HUBSPOT_ACCESS_TOKEN  | Password |:white_check_mark: | - | - | Token for authenticating with Hubspot. This ensures secure access to the Hubspot account for exporting data. |
| Export Job Name | HUBSPOT_EXPORT_NAME  | Alphanumeric |:white_check_mark: | - | - | A unique name to identify the export job. Useful for referencing and tracking the job later. |
| ILS List ID | HUBSPOT_LIST_ID  | Alphanumeric |:white_check_mark: | - | - | The unique ID of the Hubspot list you wish to export. Ensure the list exists in your Hubspot account. |
| Object Properties to Export | HUBSPOT_OBJECT_PROPERTIES  | Alphanumeric |:heavy_minus_sign: | - | - | Comma-separated list of object properties from the Hubspot list that you want to export. Ensure these properties exist for the specified list. |
| Destination Filename | HUBSPOT_DESTINATION_FILENAME  | Alphanumeric |:white_check_mark: | - | - | The desired filename for the exported data. The file will be saved with a .csv extension. |
| Hubspot Data Type | HUBSPOT_OBJECT_TYPE  | Select |:white_check_mark: | `contacts` | Contacts: `contacts`<br></br><br></br>Company: `companies`<br></br><br></br>Deals: `deals`<br></br><br></br> | Select which data object is that is included in the list. |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
  blueprint: Hubspot - Download List Data to Shipyard
  inputs:
    HUBSPOT_ACCESS_TOKEN: null  ## REQUIRED
    HUBSPOT_EXPORT_NAME: null ## REQUIRED
    HUBSPOT_LIST_ID: null ## REQUIRED
    HUBSPOT_OBJECT_PROPERTIES: null
    HUBSPOT_DESTINATION_FILENAME: null ## REQUIRED
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
