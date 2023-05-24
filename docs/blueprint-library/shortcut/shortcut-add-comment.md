---
id: shortcut-add-comment
title: Shortcut Template - Add Comment
hide_title: true
sidebar_label: Add Comment
description: Information about Shipyard's low-code Shortcut Add Comment blueprint. Add a comment to an existing shortcut story 
keywords:
    - shortcut
    - blueprint
    - template
---

# Shortcut - Add Comment

## Overview
Add a comment to an existing shortcut story

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Access Token | SHORTCUT_ACCESS_TOKEN  | Password |:white_check_mark: | - | - | In order to generate a Workspace specific API token, navigate to Settings > Your Account > API Tokens. |
| Story ID | SHORTCUT_STORY_ID  | Integer |:white_check_mark: | - | - | The ID of the story to which the comment will be added. |
| Comment | SHORTCUT_COMMENT  | Alphanumeric |:white_check_mark: | - | - | The comment to be added to the story. |
| Verbose | SHORTCUT_VERBOSE  | Boolean |:heavy_minus_sign: | `False` | - | Enable verbose mode for detailed output logging during the comment addition process. |


