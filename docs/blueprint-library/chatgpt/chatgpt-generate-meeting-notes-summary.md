---
id: chatgpt-generate-meeting-notes-summary
title: ChatGPT Template - Generate Meeting Notes Summary
hide_title: true
sidebar_label: Generate Meeting Notes Summary
description: Information about Shipyard's low-code ChatGPT Generate Meeting Notes Summary blueprint. This Blueprint takes in raw meeting notes and provides a cleaned-up summary of the notes in a text file.
keywords:
    - chatgpt
    - blueprint
    - template
---

# ChatGPT - Generate Meeting Notes Summary

## Overview



## Variables

| Name                     | Reference                     | Type         | Required           | Default | Options | Description                           |
|:-------------------------|:------------------------------|:-------------|:-------------------|:--------|:--------|:--------------------------------------|
| API Key                  | CHATGPT_API_KEY               | Password     | :white_check_mark: | -       | -       | API Key from OpenAI                   |
| Meeting Notes            | CHATGPT_TEXT_FILE             | Alphanumeric | :white_check_mark: | -       | -       | Meeting notes as a text file          |
| Summarized Meeting Notes | CHATGPT_DESTINATION_FILE_NAME | Alphanumeric | :white_check_mark: | -       | -       | File name of summarized meeting notes |


## YAML

Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: ChatGPT - Generate Meeting Notes Summary
  inputs:
    CHATGPT_API_KEY: null ## REQUIRED
    CHATGPT_TEXT_FILE: null ## REQUIRED
    CHATGPT_DESTINATION_FILE_NAME: null ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 0
  retry_wait: 0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
```
