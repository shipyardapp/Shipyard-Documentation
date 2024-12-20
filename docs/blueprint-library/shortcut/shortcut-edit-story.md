---
id: shortcut-edit-story
title: Shortcut Template - Edit Story
hide_title: true
sidebar_label: Edit Story
description: Information about Platform's low-code Shortcut Edit Story blueprint. Trigger the execution to edit some commonly used fields on an existing Shortcut story 
keywords:
    - shortcut
    - blueprint
    - template
---

# Shortcut - Edit Story

## Overview
Use this function to easily update different fields of an existing story in a project management system. It empowers you to modify essential details such as the story's name, workflow state, description, story type, labels, deadline, and tasks.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Access Token | SHORTCUT_ACCESS_TOKEN  | Password |:white_check_mark: | - | - | n order to generate a Workspace specific API token, navigate to Settings > Your Account > API Tokens. |
| Story ID | SHORTCUT_STORY_ID  | Integer |:white_check_mark: | - | - | The ID of the story to be updated. |
| Story Name | SHORTCUT_STORY_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | The name you wish to update the story to |
| Workflow State ID | SHORTCUT_WORKFLOW_STATE_ID  | Integer |:heavy_minus_sign: | - | - |  ID of the workflow state you wish to move the story to |
| Description | SHORTCUT_DESCRIPTION  | Alphanumeric |:heavy_minus_sign: | - | - | The updated description for the story. |
| Story Type | SHORTCUT_STORY_TYPE  | Select |:heavy_minus_sign: | - | Feature: `feature`<br></br><br></br>Bug: `bug`<br></br><br></br>Chore: `chore`<br></br><br></br> | The new type of the story (feature, bug, or chore). |
| Labels | SHORTCUT_LABELS  | Alphanumeric |:heavy_minus_sign: | - | - | Comma-separated labels to be added to the story. |
| Deadline | SHORTCUT_DEADLINE  | Alphanumeric |:heavy_minus_sign: | - | - | The new deadline for the story. |
| Tasks | SHORTCUT_TASKS  | Alphanumeric |:heavy_minus_sign: | - | - | Comma-separated tasks to be added to the story. |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
    blueprint: Shortcut - Edit Story
    inputs:
        SHORTCUT_ACCESS_TOKEN: null  ## REQUIRED
        SHORTCUT_STORY_ID: null ## REQUIRED
        SHORTCUT_STORY_NAME: null
        SHORTCUT_WORKFLOW_STATE_ID: null
        SHORTCUT_DESCRIPTION: null
        SHORTCUT_STORY_TYPE: null
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
    -   201

```
