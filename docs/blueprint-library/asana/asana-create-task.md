---
id: asana-create-task
title: Asana Template - Create Task
hide_title: true
sidebar_label: Create Task
description: Information about Shipyard's low-code Asana Create Task blueprint. Quickly create a new task in Asana 
keywords:
    - asana
    - blueprint
    - template
---

# Asana - Create Task

## Overview
Creates a new task within an Asana workspace. Can be created within or outside of a specific project

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Access Token | ASANA_ACCESS_TOKEN  | Password |:white_check_mark: | - | - | The access token generated by Asana for programatic use |
| Workspace ID | ASANA_WORKSPACE_ID  | Alphanumeric |:white_check_mark: | - | - | The ID of the Asana Workspace |
| Project ID | ASANA_PROJECT_ID  | Alphanumeric |:heavy_minus_sign: | - | - | The optional ID of the project to create the task in |
| Name | ASANA_NAME  | Alphanumeric |:white_check_mark: | - | - | The name of the Asana Task to be created |
| Resource Subtype | ASANA_RESOURCE_SUBTYPE  | Select |:white_check_mark: | `default_task` | Default Task: `default_task`<br></br><br></br>Milestone: `milestone`<br></br><br></br>Section: `section`<br></br><br></br>Approval: `approval`<br></br><br></br> | The resource sub-type of the task (defaults to Default Task) |
| Approval Status | ASANA_APPROVAL_STATUS  | Select |:white_check_mark: | `pending` | Pending: `pending`<br></br><br></br>Approved: `approved`<br></br><br></br>Rejected: `rejected`<br></br><br></br>Changes Requested: `changes_requested`<br></br><br></br> | The approval status (defaults to Pending) |
| Assignee | ASANA_ASSIGNEE  | Alphanumeric |:heavy_minus_sign: | - | - | The optional assignee of the task |
| Due On | ASANA_DUE_ON  | Alphanumeric |:heavy_minus_sign: | - | - | The optional due date for the task |
| Notes | ASANA_NOTES  | Alphanumeric |:heavy_minus_sign: | - | - | The optional description for the task |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
  blueprint: Asana - Create Task
  inputs:
    ASANA_ACCESS_TOKEN: null  ## REQUIRED
    ASANA_WORKSPACE_ID: null ## REQUIRED
    ASANA_PROJECT_ID: null
    ASANA_NAME: null ## REQUIRED
    ASANA_RESOURCE_SUBTYPE: default_task ## REQUIRED
    ASANA_APPROVAL_STATUS: pending ## REQUIRED
    ASANA_ASSIGNEE: null
    ASANA_DUE_ON: null
    ASANA_NOTES: null
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '201'
    - '202'

```