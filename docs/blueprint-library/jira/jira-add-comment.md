---
id: jira-add-comment
title: Jira Template - Add Comment
hide_title: true
sidebar_label: Add Comment
description: Information about Shipyard's low-code Jira Add Comment blueprint. This code performs the action of adding a comment to a specific ticket in Jira 
keywords:
    - jira
    - blueprint
    - template
---

# Jira - Add Comment

## Overview
Adds a comment to a Jira ticket

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Ticket Key | JIRA_TICKET_KEY  | Alphanumeric |:white_check_mark: | `-` | - | You can usually find the ticket key in the ticket's URL or in the ticket's title. It typically consists of uppercase letters, followed by a hyphen, and then a numerical value. For example, in the ticket URL "https://jira.example.com/browse/PROJ-123", the ticket key is "PROJ-123". |
| Comment | JIRA_COMMENT  | Alphanumeric |:white_check_mark: | `-` | - | None |
| Access Token | JIRA_ACCESS_TOKEN  | Password |:white_check_mark: | `-` | - | To generate a access token go to https://id.atlassian.com/manage-profile/security/api-tokens |
| Email Address | JIRA_EMAIL_ADDRESS  | Alphanumeric |:white_check_mark: | `-` | - | The email address associated with the Access Token |
| Domain | JIRA_DOMAIN  | Alphanumeric |:white_check_mark: | `-` | - | The subdomain of the jira instance for example it would be shipyard if the url is https://shipyard.atlassian.net/jira/software |


