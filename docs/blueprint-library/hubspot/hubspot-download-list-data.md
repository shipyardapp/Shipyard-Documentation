---
id: hubspot-download-list-data
title: Hubspot Template - Download List Data
hide_title: true
sidebar_label: Download List Data
description: Information about Shipyard's low-code Hubspot Download List Data blueprint. Exports specified Hubspot list data based on given object properties and saves it to a designated file 
keywords:
    - hubspot
    - blueprint
    - template
---

# Hubspot - Download List Data

## Overview
Preparation:

Ensure you have a Hubspot Access Token. This is a requirement for authenticating and accessing your Hubspot data. If you don’t have one, you can obtain it via the Hubspot API settings in your account.

Identify the Hubspot List ID of the list you intend to export. This ID can usually be found in the list’s URL or details page on Hubspot.

Decide on the object properties you want to export. These are the specific fields or columns of data you wish to extract from the list.

Choose a destination filename where the exported data will be saved.

Using the Blueprint:

Launch the "Hubspot - Export List Data" blueprint on the Shipyard platform.

Input the Hubspot Access Token into the designated field.

Provide the Export Job Name. This is a unique identifier for this export operation, allowing you to track or reference it later.

Input the Hubspot List ID.

Enter the object properties you decided on, separated by commas. For example: firstname,lastname,email.

Specify the destination filename. Remember, the blueprint will append .csv to whatever name you provide.

Initiate the blueprint. It will start the export process, monitor the status, and download the file once the export is ready.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Access Token | HUBSPOT_ACCESS_TOKEN  | Password |:white_check_mark: | - | - | Token for authenticating with Hubspot. This ensures secure access to the Hubspot account for exporting data. |
| Export Job Name | HUBSPOT_EXPORT_NAME  | Alphanumeric |:white_check_mark: | - | - | A unique name to identify the export job. Useful for referencing and tracking the job later. |
| ILS List ID | HUBSPOT_LIST_ID  | Alphanumeric |:white_check_mark: | - | - | The unique ID of the Hubspot list you wish to export. Ensure the list exists in your Hubspot account. |
| Object Properties to Export | HUBSPOT_OBJECT_PROPERTIES  | Alphanumeric |:heavy_minus_sign: | - | - | Comma-separated list of object properties from the Hubspot list that you want to export. Ensure these properties exist for the specified list. |
| Destination Filename | HUBSPOT_DESTINATION_FILENAME  | Alphanumeric |:white_check_mark: | - | - | The desired filename for the exported data. The file will be saved with a .csv extension. |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
    blueprint: Hubspot - Download List Data
    inputs:
        HUBSPOT_ACCESS_TOKEN: null  ## REQUIRED
        HUBSPOT_EXPORT_NAME: null ## REQUIRED
        HUBSPOT_LIST_ID: null ## REQUIRED
        HUBSPOT_OBJECT_PROPERTIES: null
        HUBSPOT_DESTINATION_FILENAME: null ## REQUIRED
    type: BLUEPRINT
guardrails:
    retry_count: 1
    retry_wait: 0h0m0s
    runtime_cutoff: 1h0m0s
    exclude_exit_code_ranges:
    -   102
    -   202
    -   206

```
