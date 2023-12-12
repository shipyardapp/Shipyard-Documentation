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
| Image Prompt | photo_prompt  | Alphanumeric |:white_check_mark: | - | - | Text sent to OpenAI to generate photos |
| File Prefix | photo_topic  | Alphanumeric |:white_check_mark: | - | - | Word used to prefix each of the image files |
| Number of Images | number_of_photos  | Integer |:white_check_mark: | `1` | - | Number of images for DALL-E to create |
| API Credentials | api_credentials  | Password |:white_check_mark: | - | - | Your OpenAI API credentials |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
    blueprint: Dall-E - Generate Images
    inputs:
        photo_prompt: null  ## REQUIRED
        photo_topic: null ## REQUIRED
        number_of_photos: '1' ## REQUIRED
        api_credentials: null ## REQUIRED
    type: BLUEPRINT
guardrails:
    retry_count: 1
    retry_wait: 0h0m0s
    runtime_cutoff: 1h0m0s
    exclude_exit_code_ranges:
    -   '0'

```
