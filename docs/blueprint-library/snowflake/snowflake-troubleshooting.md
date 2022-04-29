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

## IP Not Allowed Access
`IP ____ is not allowed to access Snowflake.`

If your Vessel runs into this issue, you need to [whitelist Shipyard's IP addresses](snowflake-authorization.md#whitelisting-shipyard-ip-addresses]. This will ensure that our platform has permission to access your database.

## Failed to Connect
If your Vessel runs into this issue, there's a few likely scenarios:

1. Your account name contains `snowflakecomputing.com` or `snowflakecomputing.com/` in it. You should only use the subdomain of the URL found _before_ this.

- If your URL shows `xy12345.snowflakecomputing.com`, your account name would be `xy12345`
- If your URL shows `xy12345.us-east-2.aws.snowflakecomputing.com`, your account name would be `xy12345.us-east-2.aws`

See [this guide](https://docs.snowflake.com/en/user-guide/admin-account-identifier.html) from Snowflake for more details.
2. Your account name, username, or password contain typos. Double check your spelling to make sure everything is correct.