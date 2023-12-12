---
id: chatgpt-create-data-dictionary
title: OpenAI ChatGPT Template - Create Data Dictionary
hide_title: true
sidebar_label: Create Data Dictionary
description: Information about Shipyard's low-code OpenAI ChatGPT Create Data Dictionary blueprint. This Blueprint takes in a CSV file and creates a data dictionary. 
keywords:
    - openai chatgpt
    - blueprint
    - template
---

# ChatGPT - Create Data Dictionary

## Overview
> ## **First time using this Blueprint? Make sure you follow our [ChatGPT authorization guide](https://www.shipyardapp.com/docs/blueprint-library/chatgpt/chatgpt-authorization/)**.

This Blueprint takes in a CSV file and creates a data dictionary.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| API Key | CHATGPT_API_KEY  | Password |:white_check_mark: | - | - | API Key from OpenAI |
| File Name | CHATGPT_FILE  | Alphanumeric |:white_check_mark: | - | - | The data that you would like a data dictionary created from in CSV form. |
| Data Dictionary File Name | CHATGPT_DESTINATION_FILE_NAME  | Alphanumeric |:white_check_mark: | - | - | The file where the data dictionary will be stored. |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
    blueprint: ChatGPT - Create Data Dictionary
    inputs:
        CHATGPT_API_KEY: null  ## REQUIRED
        CHATGPT_FILE: null ## REQUIRED
        CHATGPT_DESTINATION_FILE_NAME: null ## REQUIRED
    type: BLUEPRINT
guardrails:
    retry_count: 1
    retry_wait: 0h0m0s
    runtime_cutoff: 1h0m0s
    exclude_exit_code_ranges:
    -   '0'

```
