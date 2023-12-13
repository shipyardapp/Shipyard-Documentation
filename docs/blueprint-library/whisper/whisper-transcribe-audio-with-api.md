---
id: whisper-transcribe-audio-with-api
title: OpenAI Whisper Template - Transcribe Audio with API
hide_title: true
sidebar_label: Transcribe Audio with API
description: Information about Shipyard's low-code OpenAI Whisper Transcribe Audio with API blueprint. This Blueprint takes in a audio file and transcribes it to a text file.  
keywords:
    - openai whisper
    - blueprint
    - template
---

# Whisper - Transcribe Audio with API

## Overview
This Blueprint takes in a audio file and transcribes it to a text file. 

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| API Key | WHISPER_API_KEY  | Password |:white_check_mark: | - | - | API Key from OpenAI |
| File to Transcribe | WHISPER_FILE  | Alphanumeric |:white_check_mark: | - | - | The filename you wish to transcribe |
| Transcription File Name | WHISPER_DESTINATION_FILE_NAME  | Alphanumeric |:white_check_mark: | `transcription.txt` | - | File name of transcription |
| Language | WHISPER_LANGUAGE  | Alphanumeric |:white_check_mark: | `en` | - | Language of the audio file. Should be in ISO-639-1 format.  |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
  blueprint: Whisper - Transcribe Audio with API
  inputs:
    WHISPER_API_KEY: null  ## REQUIRED
    WHISPER_FILE: null ## REQUIRED
    WHISPER_DESTINATION_FILE_NAME: transcription.txt ## REQUIRED
    WHISPER_LANGUAGE: en ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '0'

```
