---
id: shortcut-create-story
title: Shortcut Template - Create Story
hide_title: true
sidebar_label: Create Story
description: Information about Shipyard's low-code Shortcut Create Story blueprint. Creates a new story in shortcut 
keywords:
    - shortcut
    - blueprint
    - template
---

# Shortcut - Create Story

## Overview
Use this blueprint to create a new story in Shortcut. The script requires an access token, story name, workflow state ID, and story type to create the new story. Optional arguments like description, labels, deadline, and tasks can also be provided to add additional details to the story.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Access Token | SHORTCUT_ACCESS_TOKEN  | Password |:white_check_mark: | - | - | In order to generate a Workspace specific API token, navigate to Settings > Your Account > API Tokens. |
| Story Name | SHORTCUT_STORY_NAME  | Alphanumeric |:white_check_mark: | - | - | The name/title of the new story. |
| Workflow State ID | SHORTCUT_WORKFLOW_STATE_ID  | Integer |:white_check_mark: | - | - | The ID of the workflow state for the new story. |
| Description | SHORTCUT_DESCRIPTION  | Alphanumeric |:heavy_minus_sign: | - | - | The description of the new story. |
| Story Type | SHORTCUT_STORY_TYPE  | Select |:white_check_mark: | - | Feature: `feature`<br></br><br></br>Bug: `bug`<br></br><br></br>Chore: `chore`<br></br><br></br> | The type of the new story (feature, bug, or chore). |
| Labels | SHORTCUT_LABELS  | Alphanumeric |:heavy_minus_sign: | - | - | Comma-separated labels to be added to the new story. |
| Deadline | SHORTCUT_DEADLINE  | Alphanumeric |:heavy_minus_sign: | - | - | The deadline for the new story. |
| Tasks | SHORTCUT_TASKS  | Alphanumeric |:heavy_minus_sign: | - | - | Comma-separated tasks to be added to the new story. |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
    blueprint: Shortcut - Create Story
    inputs:
        SHORTCUT_ACCESS_TOKEN: null  ## REQUIRED
        SHORTCUT_STORY_NAME: null ## REQUIRED
        SHORTCUT_WORKFLOW_STATE_ID: null ## REQUIRED
        SHORTCUT_DESCRIPTION: null
        SHORTCUT_STORY_TYPE: null ## REQUIRED
        SHORTCUT_LABELS: null
        SHORTCUT_DEADLINE: null
        SHORTCUT_TASKS: null
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
