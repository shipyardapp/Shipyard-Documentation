---
id: dall-e-generate-images
title: OpenAI DALL-E 2 Template - Generate Images
hide_title: true
sidebar_label: Generate Images
description: Information about Shipyard's low-code OpenAI DALL-E 2 Generate Images blueprint. This Blueprint takes a prompt and creates an image from it. 
keywords:
    - openai dall-e 2
    - blueprint
    - template
---

# Dall-E - Generate Images

## Overview
This Blueprint takes a prompt and creates an image from it.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Image Prompt | photo_prompt  | Alphanumeric |:white_check_mark: | `-` | - | Text sent to OpenAI to generate photos |
| File Prefix | photo_topic  | Alphanumeric |:white_check_mark: | `-` | - | Word used to prefix each of the image files |
| Number of Images | number_of_photos  | Integer |:white_check_mark: | `1` | - | Number of images for DALL-E to create |
| API Credentials | api_credentials  | Password |:white_check_mark: | `-` | - | Your OpenAI API credentials |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
## Paste this code under 'vessels' and then connect it to other vessels under 'connections'
    'steadfast_tackle':
        source:
            type: BLUEPRINT
            blueprint: 'Dall-E - Generate Images'
            inputs: 
                ## photo_prompt: Text sent to OpenAI to generate photos
                ## photo_topic: Word used to prefix each of the image files
                ## number_of_photos: Number of images for DALL-E to create
                ## api_credentials: Your OpenAI API credentials
                ## For more detailed setup information, visit https://www.shipyardapp.com/docs/blueprint-library/
                'photo_prompt': ## REQUIRED ## ie. A ship crashing on the ocean in an abstract style.
                'photo_topic': ## REQUIRED ## ie. ship
                'number_of_photos': 1 ## REQUIRED
                'api_credentials': ## REQUIRED
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
