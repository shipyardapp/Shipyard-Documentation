---
id: domo-upload-csv-as-dataset
title: Domo Template - Upload CSV as Dataset
hide_title: true
sidebar_label: Upload CSV as Dataset
description: Information about Shipyard's low-code Domo Upload CSV as Dataset blueprint. Uploads a CSV as a Dataset in Domo
keywords:
    - domo
    - blueprint
    - template
---

# Domo - Upload CSV as Dataset

## Overview

> ## **First time using this Blueprint? Make sure you follow our [Domo authorization guide](https://www.shipyardapp.com/docs/blueprint-library/domo/domo-authorization/)**.

Create a Domo dataset by uploading a csv to Domo. If the `Domo Dataset Name` already exists in Domo (and there are not multiple datasets with the same name), the CSV file will replace the existing dataset; otherwise a new one will be created. This will create a static dataset that can be updated by reusing this blueprint.



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Client ID | DOMO_CLIENT_ID | Password | :white_check_mark: | - | - | Client ID is generated in the Domo Developer Portal. The ID should have the following scope: data, workflow, user, account, dashboard |
| Secret Key | DOMO_SECRET_KEY | Password | :white_check_mark: | - | - | The secret attached to the generated Client ID |
| Local Folder Name | DOMO_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | The local folder name where the file is contained |
| File Name Match Type | FILE_NAME_MATCH_TYPE | Select | :white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match` | Determines if the text in "File Name" will match to one or multiple files. |
| Local File to Load | DOMO_FILE | Alphanumeric | :white_check_mark: | - | - | The name of the csv file that you would like to load into Domo |
| Domo Dataset Name | DOMO_DATASET_NAME | Alphanumeric | :white_check_mark: | - | - | The name of that the dataset will be given in Domo |
| Domo Dataset Description | DOMO_DATASET_DESCRIPTION | Alphanumeric | :heavy_minus_sign: | - | - | Optional description of the dataset |
| Schema in Domo | DOMO_SCHEMA | Alphanumeric | :heavy_minus_sign: | - | - | The Domo data types of the dataset that is to be loaded. This is an optional argument, and is only recommended if the number of columns and types is known beforehand. If left blank, the data types will be inferred by sampling the entire dataset. |
| Insert Method | DOMO_INSERT_METHOD | Select | :white_check_mark: | `REPLACE` | Replace: `REPLACE`<br></br><br></br>Append: `APPEND` | The option to replace the entire data set with new data, or add to the existing rows |
| Dataset Id | DOMO_DATASET_ID | Alphanumeric | :heavy_minus_sign: | - | - | The ID associated with the desired dataset. This is only necessary if modifying an existing dataset, not creating a new one. |


## YAML

Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets.md#yaml-editor).

```yaml
source:
  blueprint: Domo - Upload CSV as Dataset
  inputs:
    DOMO_CLIENT_ID: null ## REQUIRED
    DOMO_SECRET_KEY: null ## REQUIRED
    DOMO_FOLDER_NAME: null 
    FILE_NAME_MATCH_TYPE: exact_match ## REQUIRED
    DOMO_FILE: null ## REQUIRED
    DOMO_DATASET_NAME: null ## REQUIRED
    DOMO_DATASET_DESCRIPTION: null 
    DOMO_SCHEMA: null 
    DOMO_INSERT_METHOD: REPLACE ## REQUIRED
    DOMO_DATASET_ID: null 
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0s
  runtime_cutoff: 4h0m0s
  exclude_exit_code_ranges:
    - "200"
    - "201"
    - "203"
    - "204"
    - "205"
    - "210"
    - "211"
    - "214"
    - "215"
    - "216-220"
```
