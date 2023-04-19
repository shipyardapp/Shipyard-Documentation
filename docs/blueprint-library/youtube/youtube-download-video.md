---
id: youtube-download-video
title: Youtube Template - Download Video
hide_title: true
sidebar_label: Download Video
description: Information about Shipyard's low-code Youtube Download Video blueprint. Download a single video from YouTube
keywords:
    - youtube
    - blueprint
    - template
---

# Youtube - Download Video

## Overview



## Variables

| Name          | Reference             | Type         | Required           | Default      | Options                                                     | Description |
|:--------------|:----------------------|:-------------|:-------------------|:-------------|:------------------------------------------------------------|:------------|
| Video ID      | YOUTUBE_VIDEO_ID      | Alphanumeric | :white_check_mark: | -            | -                                                           | -           |
| Download Type | YOUTUBE_DOWNLOAD_TYPE | Select       | :white_check_mark: | `audio`      | Video (mp4): `video`<br></br><br></br>Audio (webm): `audio` | -           |
| File Name     | YOUTUBE_FILE_NAME     | Alphanumeric | :heavy_minus_sign: | youtube.webm | -                                                           | -           |


## YAML

Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: Youtube - Download Video
  inputs:
    YOUTUBE_VIDEO_ID: null ## REQUIRED
    YOUTUBE_DOWNLOAD_TYPE: audio ## REQUIRED
    YOUTUBE_FILE_NAME: youtube.webm 
  type: BLUEPRINT
guardrails:
  retry_count: 0
  retry_wait: 0s
  runtime_cutoff: 4h0m0s
  exclude_exit_code_ranges:
```
