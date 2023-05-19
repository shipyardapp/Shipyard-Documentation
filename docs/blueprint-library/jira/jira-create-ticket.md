---
id: jira-create-ticket
title: Jira Template - Create Ticket
hide_title: true
sidebar_label: Create Ticket
description: Information about Shipyard's low-code Jira Create Ticket blueprint. Creates a jira ticket 
keywords:
    - jira
    - blueprint
    - template
---

# Jira - Create Ticket

## Overview
Triggers the execution to create a ticket in Jira.


## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Access Token | JIRA_ACCESS_TOKEN  | Password |:white_check_mark: | `-` | - | https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/ |
| Email | JIRA_EMAIL  | Alphanumeric |:white_check_mark: | `-` | - | Email that is associated with the api token |
| Domain | JIRA_DOMAIN  | Alphanumeric |:white_check_mark: | `-` | - | The sub-domain of your Jira instance. For example if your jira instance url is https://shipyard.atlassian.net/ this value would be shipyard |
| Project Key | JIRA_PROJECT_KEY  | Alphanumeric |:white_check_mark: | `-` | - | The unique identifier for the Jira project where the ticket will be created.Normally 3-4 letters long |
| Parent Ticket Key | JIRA_PARENT_TICKET_KEY  | Alphanumeric |:heavy_minus_sign: | `-` | - | The key of the parent ticket if you want to create a subtask under an existing ticket. |
| Summary | JIRA_SUMMARY  | Alphanumeric |:white_check_mark: | `-` | - | A short summary or title describing the issue or task of the ticket. |
| Description | JIRA_DESCRIPTION  | Alphanumeric |:heavy_minus_sign: | `-` | - | A detailed description of the ticket, providing additional context or information. |
| Issue Type | JIRA_ISSUE_TYPE  | Alphanumeric |:white_check_mark: | `Task` | - | The type of the ticket, such as bug, task, improvement, or story |
| Assignee | JIRA_ASSIGNEE  | Alphanumeric |:heavy_minus_sign: | `-` | - | Email address of the User you want to assign the ticket to. If you would like for this to be the default assignee for the project use -1 |
| Labels | JIRA_LABELS  | Alphanumeric |:heavy_minus_sign: | `-` | - | Labels to tag and categorize the ticket. Multiple labels can be assigned by separating them with commas. |
| Components | JIRA_COMPONENTS  | Alphanumeric |:heavy_minus_sign: | `-` | - | Components of the Jira project to associate with the ticket. |
| Due Date | JIRA_DUE_DATE  | Alphanumeric |:heavy_minus_sign: | `-` | - | None |
| Priority | JIRA_PRIORITY  | Alphanumeric |:heavy_minus_sign: | `-` | - | The priority level of the ticket, indicating its importance or urgency. |


