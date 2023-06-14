---
id: asana-edit-task
title: Asana Template - Edit Task
hide_title: true
sidebar_label: Edit Task
description: Information about Shipyard's low-code Asana Edit Task blueprint. Quickly edit a task within Asana 
keywords:
    - asana
    - blueprint
    - template
---

# Asana - Edit Task

## Overview
This allows for users to edit/update existing fields within an Asana task

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Access Token | ASANA_ACCESS_TOKEN  | Password |:white_check_mark: | - | - | The access token generated by Asana |
| Ticket ID | ASANA_TICKET_ID  | Alphanumeric |:white_check_mark: | - | - | The ID for the task to update |
| Name | ASANA_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | The optional updated name |
| Resource Subtype | ASANA_RESOURCE_SUBTYPE  | Select |:heavy_minus_sign: | `default_task` | Default Task: `default_task`<br></br><br></br>Milestone: `milestone`<br></br><br></br>Section: `section`<br></br><br></br>Approval: `approval`<br></br><br></br> | The optional resource sub-type to update to |
| Approval Status | ASANA_APPROVAL_STATUS  | Select |:heavy_minus_sign: | `pending` | Pending: `pending`<br></br><br></br>Approved: `approved`<br></br><br></br>Rejected: `rejected`<br></br><br></br>Changes Requested: `changes_requested`<br></br><br></br> | The optional status to be updated |
| Assignee | ASANA_ASSIGNEE  | Alphanumeric |:heavy_minus_sign: | - | - | The optional task assignee to be updated |
| Due On | ASANA_DUE_ON  | Alphanumeric |:heavy_minus_sign: | - | - | The optional due date to be updated |
| Notes | ASANA_NOTES  | Alphanumeric |:heavy_minus_sign: | - | - | The optional description to be updated |

