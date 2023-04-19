---
id: whisper-transcribe-audio
title: Whisper Template - Transcribe Audio
hide_title: true
sidebar_label: Transcribe Audio
description: Information about Shipyard's low-code Whisper Transcribe Audio blueprint. Transcribe audio with a local instance of Whisper
keywords:
    - whisper
    - blueprint
    - template
---

# Whisper - Transcribe Audio

## Overview

> ## **First time using this Blueprint? Make sure you follow our [Whisper authorization guide](https://www.shipyardapp.com/docs/blueprint-library/whisper/whisper-authorization/)**.

This Blueprint takes in an audio file and transcribes it to a text file.

## Variables

| Name                    | Reference                     | Type         | Required           | Default | Options | Description                                        |
|:------------------------|:------------------------------|:-------------|:-------------------|:--------|:--------|:---------------------------------------------------|
| Audio File              | WHISPER_FILE                  | Alphanumeric | :white_check_mark: | -       | -       | Name of audio file that you would like transcribed |
| Transcription File Name | WHISPER_DESTINATION_FILE_NAME | Alphanumeric | :white_check_mark: | -       | -       | Name of text file that will have transcription     |


## YAML

Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: Whisper - Transcribe Audio
  inputs:
    WHISPER_FILE: null ## REQUIRED
    WHISPER_DESTINATION_FILE_NAME: null ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 0
  retry_wait: 0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
```
