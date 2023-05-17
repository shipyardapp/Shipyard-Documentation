---
id: deepgram-transcribe-audio
title: Deepgram Template - Transcribe Audio
hide_title: true
sidebar_label: Transcribe Audio
description: Information about Shipyard's low-code Deepgram Transcribe Audio blueprint. This Blueprint uses Deepgram to transcribe an audio file
keywords:
    - deepgram
    - blueprint
    - template
---

# Deepgram - Transcribe Audio

## Overview

> ## **First time using this Blueprint? Make sure you follow our [Deepgram authorization guide](https://www.shipyardapp.com/docs/blueprint-library/deepgram/deepgram-authorization/)**.

Transcribe an audio file using Deepgram.


## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Deepgram API Key | DG_API_KEY | Password | :white_check_mark: | - | - | - |
| Mimetype | DG_MIMETYPE | Select | :white_check_mark: | `mp3` | MP3: `mp3`<br></br><br></br>WEBM: `webm`<br></br><br></br>WAV: `wav`<br></br><br></br>FLAC: `flac`<br></br><br></br>AAC: `aac` | The file type of the audio file that you are transcribing |
| File to Transcribe | DG_AUDIO_FILE | Alphanumeric | :white_check_mark: | - | - | The file name of the audio file that you would like to transcribe |
| Transcription File Name | DG_TEXT_FILE | Alphanumeric | :white_check_mark: | - | - | - |


## YAML

Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: Deepgram - Transcribe Audio
  inputs:
    DG_API_KEY: null ## REQUIRED
    DG_MIMETYPE: mp3 ## REQUIRED
    DG_AUDIO_FILE: null ## REQUIRED
    DG_TEXT_FILE: null ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 0
  retry_wait: 0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
```
