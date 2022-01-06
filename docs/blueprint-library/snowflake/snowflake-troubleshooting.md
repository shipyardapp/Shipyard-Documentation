---
id: snowflake-troubleshooting
title: Snowflake Blueprint Troubleshooting
hide_title: true
sidebar_label: Troubleshooting
description: Information about how to troubleshoot Shipyard's low-code Snowlfkae templates.
keywords:
  - snowflake
  - blueprint
  - template
  - troubleshooting
---

# Snowflake Troubleshooting

When running Snowflake Blueprints, you may run into any of the following errors. These guides are designed to help you resolve the issue on your own. If you're stuck with an error or don't see it here, reach out to [support@shipyardapp.com](mailto:support@shipyardapp.com)

## Multiple SQL Statements
`snowflake.connector.errors.ProgrammingError: 000006 (0A000): Multiple SQL statements in a single API call are not supported; use one API call per statement instead.`

If your Vessel runs into this issue, you were likely trying to run a SQL query with multiple statements separated by `;`. This is not supported by the Snowflake Python connector that our Blueprint uses.

To solve this issue, split out the queries you're trying to run into multiple Vessels.