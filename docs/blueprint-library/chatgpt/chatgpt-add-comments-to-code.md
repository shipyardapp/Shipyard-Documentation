---
id: chatgpt-add-comments-to-code
title: OpenAI ChatGPT Template - Add Comments to Code
hide_title: true
sidebar_label: Add Comments to Code
description: Information about Platform's low-code OpenAI ChatGPT Add Comments to Code blueprint. Adds comments to code scripts. 
keywords:
    - openai chatgpt
    - blueprint
    - template
---

# ChatGPT - Add Comments to Code

## Overview
> ## **First time using this Blueprint? Make sure you follow our [ChatGPT authorization guide](https://www.shipyardapp.com/docs/blueprint-library/chatgpt/chatgpt-authorization/)**.


Takes in a script as a file or typed out and returns a script as a file with comments in the code to help with readability. 

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| API Key | CHATGPT_API_KEY  | Password |:white_check_mark: | - | - | API Key from OpenAI |
| Initial Code Script | CHATGPT_SCRIPT  | Alphanumeric |:heavy_minus_sign: | - | - | Original code script that needs commenting |
| Initial Code Script Typed Out | CHATGPT_SCRIPT_TYPED  | Alphanumeric |:heavy_minus_sign: | - | - | Typed out code script |
| Exported Code Script Name | CHATGPT_EXPORTED_FILE_NAME  | Alphanumeric |:white_check_mark: | - | - | Script name of commented code |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
  blueprint: ChatGPT - Add Comments to Code
  inputs:
    CHATGPT_API_KEY: null  ## REQUIRED
    CHATGPT_SCRIPT: null
    CHATGPT_SCRIPT_TYPED: null
    CHATGPT_EXPORTED_FILE_NAME: null ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '0'

```
