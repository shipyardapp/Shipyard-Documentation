---
id: clickup-add-comment
title: Clickup Template - Add Comment
hide_title: true
sidebar_label: Add Comment
description: Information about Shipyard's low-code Clickup Add Comment blueprint. Adds a comment to an existing Clickup task 
keywords:
    - clickup
    - blueprint
    - template
---

# Clickup - Add Comment

## Overview
Use this blueprint to add a comment to an existing task with the option to notify all users who are following the task.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Access Token | ACCESS_TOKEN  | Password |:white_check_mark: | - | - | None |
| Task ID | CLICKUP_TASK_ID  | Alphanumeric |:white_check_mark: | - | - | None |
| Comment | CLICKUP_COMMENT  | Alphanumeric |:white_check_mark: | - | - | None |
| Notify All | CLICKUP_NOTIFY_ALL  | Boolean |:heavy_minus_sign: | - | - | Check true if you wish to notify everyone including the creator of the task re: the comment |


