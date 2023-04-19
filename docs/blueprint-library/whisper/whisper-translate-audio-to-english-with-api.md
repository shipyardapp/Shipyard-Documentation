---
id: whisper-translate-audio-to-english-with-api
title: Whisper Template - Translate Audio to English with API
hide_title: true
sidebar_label: Translate Audio to English with API
description: Information about Shipyard's low-code Whisper Translate Audio to English with API blueprint. Uses Whisper's API to translate an audio file to english and exports a text file with the transcription
keywords:
    - whisper
    - blueprint
    - template
---

# Whisper - Translate Audio to English with API

## Overview

> ## **First time using this Blueprint? Make sure you follow our [Whisper authorization guide](https://www.shipyardapp.com/docs/blueprint-library/whisper/whisper-authorization/)**.

This Blueprint takes in an audio file and translate it to English.

## Variables

| Name                    | Reference                     | Type         | Required           | Default | Options | Description                                                |
|:------------------------|:------------------------------|:-------------|:-------------------|:--------|:--------|:-----------------------------------------------------------|
| API Key                 | WHISPER_API_KEY               | Password     | :white_check_mark: | -       | -       | API Key from OpenAI                                        |
| Audio File              | WHISPER_FILE                  | Alphanumeric | :white_check_mark: | -       | -       | The audio file that you would like to translate to English |
| Transcription File Name | WHISPER_DESTINATION_FILE_NAME | Alphanumeric | :white_check_mark: | -       | -       | The name of the text file where the transcription will go  |


## YAML

Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: Whisper - Translate Audio to English with API
  inputs:
    WHISPER_API_KEY: null ## REQUIRED
    WHISPER_FILE: null ## REQUIRED
    WHISPER_DESTINATION_FILE_NAME: null ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 0
  retry_wait: 0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
```
