---
id: domo-update-dataset
title: Domo Template - Update Dataset
hide_title: true
sidebar_label: Update Dataset
description: Information about Shipyard's low-code Domo Update Dataset blueprint. Updates a dataset in Domo by loading a new CSV to replace it
keywords:
    - domo
    - blueprint
    - template
---

# Domo - Update Dataset

## Overview

> ## **First time using this Blueprint? Make sure you follow our [Domo authorization guide](https://www.shipyardapp.com/docs/blueprint-library/domo/domo-authorization/)**.

Update an existing dataset in Domo by loading a CSV to replace the original data. Any schema changes will be updated automatically. **This is only possible for datasets that have been created via the API.**



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Client ID | DOMO_CLIENT_ID | Password | :white_check_mark: | - | - | Client ID is generated in the Domo Developer Portal. The ID should have the following scope: data, workflow, user, account, dashboard |
| Secret Key | DOMO_SECRET_KEY | Password | :white_check_mark: | - | - | The secret attached to the generated Client ID |
| Local File to Load | DOMO_FILE | Alphanumeric | :white_check_mark: | - | - | The name of the csv file that you would like to load into Domo |
| Domo Dataset ID | DOMO_DATASET_ID | Alphanumeric | :white_check_mark: | - | - | The id of the dataset desired to be replaced. Can be acquired from the url of the dataset |


## YAML

Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets.md#yaml-editor).

```yaml
source:
  blueprint: Domo - Update Dataset
  inputs:
    DOMO_CLIENT_ID: null ## REQUIRED
    DOMO_SECRET_KEY: null ## REQUIRED
    DOMO_FILE: null ## REQUIRED
    DOMO_DATASET_ID: null ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 0
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
```
