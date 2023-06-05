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
> ## **First time using this Blueprint? Make sure you follow our [Whisper authorization guide](https://www.shipyardapp.com/docs/blueprint-library/whisper/whisper-authorization/)**.

This Blueprint takes in a audio file and transcribes it to a text file. 

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| API Key | WHISPER_API_KEY  | Password |:white_check_mark: | - | - | API Key from OpenAI |
| File to Transcribe | WHISPER_FILE  | Alphanumeric |:white_check_mark: | - | - | None |
| Transcription File Name | WHISPER_DESTINATION_FILE_NAME  | Alphanumeric |:white_check_mark: | `transcription.txt` | - | File name of transcription |
| Language | WHISPER_LANGUAGE  | Alphanumeric |:white_check_mark: | `en` | - | Language of the audio file. Should be in ISO-639-1 format.  |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
## Paste this code under 'vessels' and then connect it to other vessels under 'connections'
    'swift_poopdeck':
        source:
            type: BLUEPRINT
            blueprint: 'Whisper - Transcribe Audio with API'
            inputs: 
                ## WHISPER_API_KEY: API Key from OpenAI
                ## WHISPER_DESTINATION_FILE_NAME: File name of transcription
                ## WHISPER_LANGUAGE: Language of the audio file. Should be in ISO-639-1 format. 
                ## For more detailed setup information, visit https://www.shipyardapp.com/docs/blueprint-library/whisper#transcribe-audio-with-api-blueprint
                'WHISPER_API_KEY': ## REQUIRED
                'WHISPER_FILE': ## REQUIRED
                'WHISPER_DESTINATION_FILE_NAME': 'transcription.txt' ## REQUIRED
                'WHISPER_LANGUAGE': 'en' ## REQUIRED
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
