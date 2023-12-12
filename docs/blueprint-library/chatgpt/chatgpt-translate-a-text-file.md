---
id: chatgpt-translate-a-text-file
title: OpenAI ChatGPT Template - Translate a Text File
hide_title: true
sidebar_label: Translate a Text File
description: Information about Shipyard's low-code OpenAI ChatGPT Translate a Text File blueprint. This Blueprint takes in a text file and translate it to the language that is chosen. 
keywords:
    - openai chatgpt
    - blueprint
    - template
---

# ChatGPT - Translate a Text File

## Overview
> ## **First time using this Blueprint? Make sure you follow our [ChatGPT authorization guide](https://www.shipyardapp.com/docs/blueprint-library/chatgpt/chatgpt-authorization/)**.

This Blueprint takes in a text file and translate it to the language that is chosen.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| API Key | CHATGPT_API_KEY  | Password |:white_check_mark: | - | - | API Key from OpenAI |
| Text File to Translate | CHATGPT_TEXT_FILE  | Alphanumeric |:white_check_mark: | - | - | The file that you would like to translate |
| Language | CHATGPT_LANGUAGE  | Alphanumeric |:white_check_mark: | - | - | The language you would like the text translated to. It should be in ISO 639-1 format for best accuracy. |
| Translation File Name | CHATGPT_DESTINATION_FILE_NAME  | Alphanumeric |:white_check_mark: | - | - | File name of translated text |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
    blueprint: ChatGPT - Translate a Text File
    inputs:
        CHATGPT_API_KEY: null  ## REQUIRED
        CHATGPT_TEXT_FILE: null ## REQUIRED
        CHATGPT_LANGUAGE: null ## REQUIRED
        CHATGPT_DESTINATION_FILE_NAME: null ## REQUIRED
    type: BLUEPRINT
guardrails:
    retry_count: 1
    retry_wait: 0h0m0s
    runtime_cutoff: 1h0m0s
    exclude_exit_code_ranges:
    -   '0'

```
