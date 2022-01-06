---
id: slack-overview
title: Slack Blueprints Overview
hide_title: true
sidebar_label: Overview
description: Information about Shipyard's low-code Slack templates.
keywords:
  - slack
  - blueprint
  - template
  - overview
---

# Slack Blueprints Overview

Shipyard's low-code Slack blueprints allow users to connect their data to Slack. You can send messages to public channels, private channels, or DMs.  

## How to Use
For information on how to set up these Blueprints successfully, please read through the [Slack Authorization guide](slack-authorization.md).

## Available Blueprints
Shipyard currently has the following Blueprints readily available:
- [Send Message](slack-send-message.md)
- [Send Message Conditionally](slack-send-message-conditionally.md)
- [Send Message with File](slack-send-message-with-file.md)

## Troubleshooting and Debugging
Running into issues? Read our [Slack Troubleshooting guide](slack-troubleshooting.md).

## Open Source Code
The code that powers these Blueprints is [available on our Github](https://github.com/shipyardapp/slack-blueprints), open sourced under the Apache License 2.0. We'd love to have you contribute to others using Shipyard Blueprints by creating issues or submitting PRs.

## Helpful Slack Links
- [Slack Python Documentation](https://slack.dev/python-slackclient/)

## Additional Notes
1. The Slack Blueprints have not been tested to work with shared channels or guest user accounts in your Slack workspace.
2. The Slack Blueprints cannot send a message to a group chat of individuals. It can, however, DM multiple individuals simultaneously.