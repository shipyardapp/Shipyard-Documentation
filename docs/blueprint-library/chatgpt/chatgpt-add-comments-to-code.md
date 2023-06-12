---
id: chatgpt-add-comments-to-code
title: OpenAI ChatGPT Template - Add Comments to Code
hide_title: true
sidebar_label: Add Comments to Code
description: Information about Shipyard's low-code OpenAI ChatGPT Add Comments to Code blueprint. Adds comments to code scripts. 
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
## Paste this code under 'vessels' and then connect it to other vessels under 'connections'
    'unsinkable_commander':
        source:
            type: BLUEPRINT
            blueprint: 'ChatGPT - Add Comments to Code '
            inputs: 
                ## CHATGPT_API_KEY: API Key from OpenAI
                ## CHATGPT_SCRIPT: Original code script that needs commenting
                ## CHATGPT_SCRIPT_TYPED: Typed out code script
                ## CHATGPT_EXPORTED_FILE_NAME: Script name of commented code
                ## For more detailed setup information, visit https://www.shipyardapp.com/docs/blueprint-library/chatgpt#add-comments-to-code-blueprint
                'CHATGPT_API_KEY': ## REQUIRED
                'CHATGPT_SCRIPT': ## ie. code.py
                'CHATGPT_SCRIPT_TYPED': ## ie. import pandas  print('hello sailor!')
                'CHATGPT_EXPORTED_FILE_NAME': ## REQUIRED ## ie. code_with_script.py
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
