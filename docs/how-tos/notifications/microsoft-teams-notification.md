---
id: microsoft-teams-notification
title: How to Send Microsoft Teams Notifications
hide_title: true
description: Quick how-to guide to send Microsoft Teams notifications based on a Fleet or Vessel's status.
keywords:
  - notify
  - notification
  - error
  - slack
---

# How to Send Microsoft Teams Notifications

## Overview
[Notifications](../../reference/notifications.md) allow you to send messages via email to alert team members when your Fleet or Vessel is successful, errors out, or is run manually. Sometimes, you may want your notifications to go to Microsoft Teams instead of email.

:::warning
We only recommend this setup if you want to be notified in Microsoft Teams when the *entire* Fleet errors, regardless at which step the failure occurred. If you want to have logic to send customizable messages based on specific Vessels erroring out or running successfully, we recommend using our [built-in Microsoft Teams Blueprints](../../blueprint-library/microsoft-teams/microsoft-teams-overview.md)).
:::

## Steps

1. [Follow Microsoft Team's guide](https://support.microsoft.com/en-us/office/send-an-email-to-a-channel-in-microsoft-teams-d91db004-d9d7-4a47-82e6-fb1b16dfd51e) to create an email address that sends messages to a specific Teams channel.
2. Add the email created in the previous step to the notifications field.
3. Save your Fleet.

:::tip success
You've now successfully created a Teams notification!
:::

Now, based on the options you chose, you will receive a message directly in the Teams channel associated with the email.



