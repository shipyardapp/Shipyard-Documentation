---
id: openai-transcribe-audio-with-whisper
title: OpenAI Template - Transcribe Audio with Whisper
hide_title: true
sidebar_label: Transcribe Audio with Whisper
description: Information about Shipyard's low-code OpenAI Transcribe Audio with Whisper blueprint. Transcribe a single audio file and store the transcription as a file.
keywords:
    - openai
    - blueprint
    - template
---

# OpenAI - Transcribe Audio with Whisper

## Overview



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| File to Transcribe | WHISPER_FILE | Alphanumeric | :white_check_mark: | - | - | - |
| Transcription File Name | WHISPER_DESTINATION_FILE_NAME | Alphanumeric | :heavy_minus_sign: | transcription.txt | - | - |


## YAML

Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: OpenAI - Transcribe Audio with Whisper
  inputs:
    WHISPER_FILE: null ## REQUIRED
    WHISPER_DESTINATION_FILE_NAME: transcription.txt 
  type: BLUEPRINT
guardrails:
  retry_count: 0
  retry_wait: 0s
  runtime_cutoff: 4h0m0s
  exclude_exit_code_ranges:
```
