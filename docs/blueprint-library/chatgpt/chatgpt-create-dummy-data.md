---
id: chatgpt-create-dummy-data
title: OpenAI ChatGPT Template - Create Dummy Data
hide_title: true
sidebar_label: Create Dummy Data
description: Information about Platform's low-code OpenAI ChatGPT Create Dummy Data blueprint. Takes in a comma separated list of columns and creates a user-specified number of columns of data in a CSV. 
keywords:
    - openai chatgpt
    - blueprint
    - template
---

# ChatGPT - Create Dummy Data

## Overview
> ## **First time using this Blueprint? Make sure you follow our [ChatGPT authorization guide](https://www.shipyardapp.com/docs/blueprint-library/chatgpt/chatgpt-authorization/)**.

Takes in a comma separated list of columns and creates a user-specified number of columns of data in a CSV.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| API Key | CHATGPT_API_KEY  | Password |:white_check_mark: | - | - | API Key from OpenAI |
| Number of Rows | CHATGPT_NUMBER_OF_ROWS  | Integer |:white_check_mark: | `10` | - | The number of rows of dummy data |
| List of Columns | CHATGPT_COLUMNS  | Alphanumeric |:white_check_mark: | - | - | The columns for the dummy data. The columns should be listed in a column separate list. |
| Data File Name | CHATGPT_DESTINATION_FILE_NAME  | Alphanumeric |:white_check_mark: | - | - | Name of the file for the dummy data |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
  blueprint: ChatGPT - Create Dummy Data
  inputs:
    CHATGPT_API_KEY: null  ## REQUIRED
    CHATGPT_NUMBER_OF_ROWS: '10' ## REQUIRED
    CHATGPT_COLUMNS: null ## REQUIRED
    CHATGPT_DESTINATION_FILE_NAME: null ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '0'

```
