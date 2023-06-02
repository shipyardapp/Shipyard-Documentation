---
id: openai-download-photos-from-dall-e
title: OpenAI Template - Download Photos from Dall-E
hide_title: true
sidebar_label: Download Photos from Dall-E
description: Information about Shipyard's low-code OpenAI Download Photos from Dall-E blueprint. Takes a prompt and images photos from DALL-E. The images are saved as PNGs.
keywords:
    - openai
    - blueprint
    - template
---

# OpenAI - Download Photos from Dall-E

## Overview



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Image Prompt | photo_prompt | Alphanumeric | :white_check_mark: | - | - | Text sent to OpenAI to generate photos |
| File Prefix | photo_topic | Alphanumeric | :white_check_mark: | - | - | Word used to prefix each of the image files |
| Number of Images | number_of_photos | Integer | :white_check_mark: | 1 | - | Number of images for DALL-E to create |
| API Credentials | api_credentials | Password | :white_check_mark: | - | - | Your OpenAI API credentials |


## YAML

Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: OpenAI - Download Photos from Dall-E
  inputs:
    photo_prompt: null ## REQUIRED
    photo_topic: null ## REQUIRED
    number_of_photos: 1 ## REQUIRED
    api_credentials: null ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 0
  retry_wait: 0s
  runtime_cutoff: 4h0m0s
  exclude_exit_code_ranges:
```