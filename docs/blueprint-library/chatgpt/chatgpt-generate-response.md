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
| API Key | CHATGPT_API_KEY  | Password |:white_check_mark: | `-` | - | API Key form OpenAI |
| Number of Responses | CHATGPT_RESPONSES  | Integer |:white_check_mark: | `1` | - | The number of chat completion choices to generate for each input message. Defaults to 1 |
| Randomness | CHATGPT_RANDOMNESS  | Floating_Point |:heavy_minus_sign: | `1` | - | What sampling temperature to use, between 0 and 2. Higher values like 1.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. |
| Prompt | CHATGPT_PROMPT  | Alphanumeric |:white_check_mark: | `-` | - | Prompt that will be sent to ChatGPT |
| Local File Name | CHATGPT_DESTINATION_FILE_NAME  | Alphanumeric |:white_check_mark: | `-` | - | The name for the txt file once it is generated. If more than one response is generated, the files will have counted suffixes (file.txt, file_1.txt,...) |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
## Paste this code under 'vessels' and then connect it to other vessels under 'connections'
    'brave_rowboat':
        source:
            type: BLUEPRINT
            blueprint: 'ChatGPT - Generate Response'
            inputs: 
                ## api_key: API Key from OpenAI
                ## number_of_responses: The number of chat completion choices to generate for each input message. Defaults to 1
                ## randomness: What sampling temperature to use, between 0 and 2. Higher values like 1.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
                ## prompt: Prompt that will be sent to ChatGPT
                ## file_name: The name for the txt file once it is generated. If more than one response is generated, the files will have counted suffixes (file.txt, file_1.txt,...)
                ## For more detailed setup information, visit https://www.shipyardapp.com/docs/blueprint-library/chatgpt#generate-response-blueprint
                'api_key': ## REQUIRED
                'number_of_responses': 1
                'randomness': 1
                'prompt': ## REQUIRED
                'file_name': ## REQUIRED ## ie. chatgpt.txt
        guardrails:
        ## Set how your Vessel should handle errors and retries.
            retry_count: 0
            retry_wait: 0h0m0s
            runtime_cutoff: 1h0m0s
            exclude_exit_code_ranges: ## Exit code values(s) that will not be retried if encountered during a Voyage.
                # - 0-255
        notifications: 
        ## Set emails to be alerted when specific conditions are met.
            emails:
                - steven.johnson@shipyardapp.com
            after_error: true
            after_on_demand: false
```
