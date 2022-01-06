---
id: email-troubleshooting
title: Email Blueprint Troubleshooting
hide_title: true
sidebar_label: Troubleshooting
description: Information about how to troubleshoot Shipyard's low-code Email templates.
keywords:
  - email
  - blueprint
  - template
  - troubleshooting
---

# Email Troubleshooting

When running Email Blueprints, you may run into any of the following errors. These guides are designed to help you resolve the issue on your own. If you're stuck with an error or don't see it here, reach out to [support@shipyardapp.com](mailto:support@shipyardapp.com)

## Authentication Error

`smtplib.SMTPAuthenticationError`

 When this error occurs, the combination of username and password that you provided could not be verified by the SMTP Server. There are a few reasons why this error might occur:
1. You have a typo in your username.
2. You have a typo in your password.
3. You aren't using the correct SMTP Server.
4. The credentials you've provided don't have the right level of access to send an email via SMTP.