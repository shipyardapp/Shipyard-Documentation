---
id: slack-troubleshooting
title: Slack Blueprint Troubleshooting
hide_title: true
sidebar_label: Troubleshooting
description: Information about how to troubleshoot Shipyard's low-code Slack templates.
keywords:
  - slack
  - blueprint
  - template
  - troubleshooting
---

# Slack Troubleshooting

When running Slack Blueprints, you may run into any of the following errors. These guides are designed to help you resolve the issue on your own. If you're stuck with an error or don't see it here, reach out to [support@shipyardapp.com](mailto:support@shipyardapp.com)

## Channel Not Found

`The server responded with: {'ok': False, 'error': 'channel_not_found'}`

When this error occurs, Slack can't find the channel you're trying to send a message to. There are a few reasons why this error might occur:
1. You have a typo in your channel, as entered into Shipyard.
2. If the Destination Type is set to DM, you may have a typo in your Users to Notify field.
3. You have not invited your app to the channel, so it can't find it.
4. The channel legitimately doesn't exist in your workspace's Slack.

## User Does Not Exist

`The name of "xxxxx" does not exist in Slack.`

When this error occurs, users listed under Users to Notify will show up as `<@>` when sent to Slack. There are a few reasons why this error might occur:
1. You have a typo in your **Users to Notify** field.
2. Your User Lookup Method and Users to Notify fields don't match up. For example:
   1. You have provided an email but are looking up based on a Display name.
   2. You have provided the user's real name but are looking up their `@handle` Display Name.
3. If using Display Name or Real Name as the lookup method, the user may have recently changed these values in their profile.
4. The user you're looking for doesn't actually exist in your workspace's Slack.

## Invalid Authorization

`The server responded with: {'ok': False, 'error': 'invalid_auth'}`

The Slack Token that was provided is incorrect. Follow the [Authorization steps](./slack-authorization.md#accessing-the-slack-bot-token) to resolve.