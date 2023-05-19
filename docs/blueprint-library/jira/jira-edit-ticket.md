---
id: jira-edit-ticket
title: Jira Template - Edit Ticket
hide_title: true
sidebar_label: Edit Ticket
description: Information about Shipyard's low-code Jira Edit Ticket blueprint. Trigger the execution to edit some commonly used fields on an existing Jira ticket 
keywords:
    - jira
    - blueprint
    - template
---

# Jira - Edit Ticket

## Overview
Trigger the execution to edit some commonly used fields on an existing Jira ticket

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Access Token | JIRA_ACCESS_TOKEN  | Password |:white_check_mark: | `-` | - | https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/ |
| Email | JIRA_EMAIL  | Alphanumeric |:white_check_mark: | `-` | - | Email address associated with the api token |
| Ticket Key | JIRA_TICKET_KEY  | Alphanumeric |:white_check_mark: | `-` | - | None |
| Summary | JIRA_SUMMARY  | Alphanumeric |:heavy_minus_sign: | `-` | - |  A short summary or title describing the issue or task of the ticket. |
| Description | JIRA_DESCRIPTION  | Alphanumeric |:heavy_minus_sign: | `-` | - | A detailed description of the ticket, providing additional context or information. |
| Assignee | JIRA_ASSIGNEE  | Alphanumeric |:heavy_minus_sign: | `-` | - | Email address of the assignee. If you like to use the project's default assignee pass in -1 |
| Labels | JIRA_LABELS  | Alphanumeric |:heavy_minus_sign: | `-` | - | Labels to tag and categorize the ticket. Multiple labels can be assigned by separating them with commas. |
| Components | JIRA_COMPONENTS  | Alphanumeric |:heavy_minus_sign: | `-` | - |  Components of the Jira project to associate with the ticket. |
| Due Date | JIRA_DUE_DATE  | Alphanumeric |:heavy_minus_sign: | `-` | - | None |
| Priority | JIRA_PRIORITY  | Alphanumeric |:heavy_minus_sign: | `-` | - | The priority level of the ticket, indicating its importance or urgency. |


