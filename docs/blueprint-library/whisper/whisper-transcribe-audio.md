---
id: whisper-transcribe-audio
title: OpenAI Whisper Template - Transcribe Audio
hide_title: true
sidebar_label: Transcribe Audio
description: Information about Shipyard's low-code OpenAI Whisper Transcribe Audio blueprint. This Blueprint takes in an audio file and transcribes it to a text file. 
keywords:
    - openai whisper
    - blueprint
    - template
---

# Whisper - Transcribe Audio

## Overview
This Blueprint takes in an audio file and transcribes it to a text file.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Audio File | WHISPER_FILE  | Alphanumeric |:white_check_mark: | `-` | - | Name of audio file that you would like transcribed |
| Transcription File Name | WHISPER_DESTINATION_FILE_NAME  | Alphanumeric |:white_check_mark: | `-` | - | Name of text file that will have transcription |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
## Paste this code under 'vessels' and then connect it to other vessels under 'connections'
    'adept_catamaran':
        source:
            type: BLUEPRINT
            blueprint: 'Whisper - Transcribe Audio'
            inputs: 
                ## WHISPER_FILE: Name of audio file that you would like transcribed
                ## WHISPER_DESTINATION_FILE_NAME: Name of text file that will have transcription
                ## For more detailed setup information, visit https://www.shipyardapp.com/docs/blueprint-library/whisper#transcribe-audio-blueprint
                'WHISPER_FILE': ## REQUIRED
                'WHISPER_DESTINATION_FILE_NAME': ## REQUIRED
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
