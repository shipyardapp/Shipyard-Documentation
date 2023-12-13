---
id: chatgpt-generate-response
title: OpenAI ChatGPT Template - Generate Response
hide_title: true
sidebar_label: Generate Response
description: Information about Shipyard's low-code OpenAI ChatGPT Generate Response blueprint. Sends a prompt to ChatGPT and returns the message. The results will be printed in the console and saved in a text file. 
keywords:
    - openai chatgpt
    - blueprint
    - template
---

# ChatGPT - Generate Response

## Overview
> ## **First time using this Blueprint? Make sure you follow our [ChatGPT authorization guide](https://www.shipyardapp.com/docs/blueprint-library/chatgpt/chatgpt-authorization/)**.

Sends a prompt to ChatGPT and returns the message. The results will be printed in the console and saved in a text file. If you generate multiple responses, the file name will have an added suffix. 

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| API Key | CHATGPT_API_KEY  | Password |:white_check_mark: | - | - | API Key form OpenAI |
| Number of Responses | CHATGPT_RESPONSES  | Integer |:white_check_mark: | `1` | - | The number of chat completion choices to generate for each input message. Defaults to 1 |
| Randomness | CHATGPT_RANDOMNESS  | Floating_Point |:heavy_minus_sign: | `1` | - | What sampling temperature to use, between 0 and 2. Higher values like 1.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. |
| Prompt | CHATGPT_PROMPT  | Alphanumeric |:white_check_mark: | - | - | Prompt that will be sent to ChatGPT |
| Local File Name | CHATGPT_DESTINATION_FILE_NAME  | Alphanumeric |:white_check_mark: | - | - | The name for the txt file once it is generated. If more than one response is generated, the files will have counted suffixes (file.txt, file_1.txt,...) |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
  blueprint: ChatGPT - Generate Response
  inputs:
    CHATGPT_API_KEY: null  ## REQUIRED
    CHATGPT_RESPONSES: '1' ## REQUIRED
    CHATGPT_RANDOMNESS: '1'
    CHATGPT_PROMPT: null ## REQUIRED
    CHATGPT_DESTINATION_FILE_NAME: null ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '0'

```
