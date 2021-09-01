---
id: google-bigquery
title: Google Bigquery Blueprints
hide_title: true
sidebar_label: Google Bigquery
description: Information about the Blueprint Library connections with Google Bigquery.
keywords:
  - bigquery
  - bq
  - template
  - blueprint
---

# Google BigQuery Blueprints

:::caution
This section is a work in progress and may be missing key details. If you need help using Google BigQuery Blueprints, reach out to support@shipyardapp.com
:::

## Authorization

- google api requires service accounts + keys
	- https://cloud.google.com/iam/docs/creating-managing-service-accounts
	- https://cloud.google.com/iam/docs/creating-managing-service-account-keys
- create key
	- https://cloud.google.com/iam/docs/creating-managing-service-account-keys#creating_service_account_keys
- steps
	- iam & admin in sidebar
	- click "service accounts" in sidebar
	- click "+ create service account" header
	- add "service account name" value
		- id generated (don't change)
	- optionally add description
	- click "create and continue"
	- "select a role" dropdown
	- find "bigquery"
	- select "bigquery user"
	- click "+ add another role"
	- find "cloud storage"
	- select "storage object creator"
	- click "continue"
	- skip "grant users access to this service account"
	- click "done"
	- find new service account in table
	- under "actions" column select "manage keys"
	- under "add key" dropdown
	- click "create new key"
	- for "key type" select "json"
	- click "create"
	- copy downloaded json file contents
	- add to "service account" inputs field on all bigquery blueprints

### Overview

### Steps

## Execute Query Blueprint

### Overview

### Variables

### Screenshots

## Store Query Results as CSV Blueprint

### Overview

### Variables

### Screenshots

## Store Query Results in Google Cloud Storage Blueprint

### Overview

### Variables

### Screenshots

## Upload CSV to Table Blueprint

### Overview

### Variables

### Screenshots

## Helpful Links

[Google Bigquery Python Library Documentation](https://cloud.google.com/bigquery/docs/reference/libraries) [Pandas to_sql Method](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.to_sql.html)
