---
id: shortcut-add-comment
title: Shortcut Template - Add Comment to Story
hide_title: true
sidebar_label: Add Comment to Story
description: Information about Platform's low-code Shortcut Add Comment to Story blueprint. Add a comment to an existing shortcut story 
keywords:
    - shortcut
    - blueprint
    - template
---

# Shortcut - Add Comment to Story

## Overview
Add a comment to an existing shortcut story

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Access Token | SHORTCUT_ACCESS_TOKEN  | Password |:white_check_mark: | - | - | In order to generate a Workspace specific API token, navigate to Settings > Your Account > API Tokens. |
| Story ID | SHORTCUT_STORY_ID  | Integer |:white_check_mark: | - | - | The ID of the story to which the comment will be added. |
| Comment | SHORTCUT_COMMENT  | Alphanumeric |:white_check_mark: | - | - | The comment to be added to the story. |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
    blueprint: Shortcut - Add Comment to Story
    inputs:
        SHORTCUT_ACCESS_TOKEN: null  ## REQUIRED
        SHORTCUT_STORY_ID: null ## REQUIRED
        SHORTCUT_COMMENT: null ## REQUIRED
    type: BLUEPRINT
guardrails:
    retry_count: 1
    retry_wait: 0h0m0s
    runtime_cutoff: 1h0m0s
    exclude_exit_code_ranges:
    -   200
    -   201
    -   202
    -   203

```
