---
id: chatgpt-create-data-dictionary
title: ChatGPT Template - Create Data Dictionary
hide_title: true
sidebar_label: Create Data Dictionary
description: Information about Shipyard's low-code ChatGPT Create Data Dictionary blueprint. This Blueprint takes in a CSV file and creates a data dictionary. 
keywords:
    - chatgpt
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
| API Key | CHATGPT_API_KEY  | Password |:white_check_mark: | `-` | - | API Key from OpenAI |
| File Name | CHATGPT_FILE  | Alphanumeric |:white_check_mark: | `-` | - | The data that you would like a data dictionary created from in CSV form. |
| Data Dictionary File Name | CHATGPT_DESTINATION_FILE_NAME  | Alphanumeric |:white_check_mark: | `-` | - | The file where the data dictionary will be stored. |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
## Paste this code under 'vessels' and then connect it to other vessels under 'connections'
    'dry_speedboat':
        source:
            type: BLUEPRINT
            blueprint: 'ChatGPT - Create Data Dictionary'
            inputs: 
                ## CHATGPT_API_KEY: API Key from OpenAI
                ## CHATGPT_FILE: The data that you would like a data dictionary created from in CSV form.
                ## CHATGPT_DESTINATION_FILE_NAME: The file where the data dictionary will be stored.
                ## For more detailed setup information, visit https://www.shipyardapp.com/docs/blueprint-library/chatgpt#create-data-dictionary-blueprint
                'CHATGPT_API_KEY': ## REQUIRED
                'CHATGPT_FILE': ## REQUIRED ## ie. data.csv
                'CHATGPT_DESTINATION_FILE_NAME': ## REQUIRED ## ie. data_dictionary.txt
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
