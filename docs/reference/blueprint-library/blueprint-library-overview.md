---
id: blueprint-library-overview
title: Blueprint Library Overview
hide_title: true
description: Information about the Blueprint Library.
keywords:
  - pre-made
  - no code
  - low code
  - library
  - blueprints
---

# Blueprint Library

## Definition

The Blueprint Library is a location for pre-made [Blueprints](../blueprints.md) developed by Shipyard staff. These Blueprints provide an easy way to avoid monotonous development work associated with integrations.

Library Blueprints are designed to:

- Accomplish a single common action with a single vendor
- Require minimal details and credentials to get started
- Require no coding

Library Blueprints are immediately available to every user in an organization. These Blueprints are constantly updated and monitored by our team. If you run into connection issues or general errors, contact [support@shipyardapp.com](mailto:support@shipyardapp.com)

In an effort to be transparent about how our Blueprints work, we open-source the code and make it available on our [GitHub](https://github.com/shipyardapp). The repositories are broken up by vendor and all end in `-blueprints`. If some functionality isn't working appropriately, you can open an issue in GitHub or submit a pull request with the proposed changes.

## Types of Blueprints

Blueprints are broken down into a few categories with core functionality that should be achieved. The following is a list of the integrations currently built out and the possible actions related to each category.

### Databases
 
#### Integrations
- [Amazon Athena](../../blueprint-library/amazon-athena/amazon-athena-overview.md)
- [Amazon Redshift](../../blueprint-library/amazon-redshift/amazon-redshift-overview.md)
- [bit.io](../../blueprint-library/bitio/bitio-overview.md)
- [Google BigQuery](../../blueprint-library/google-bigquery/google-bigquery-overview.md)
- [Microsoft SQL Server](../../blueprint-library/microsoft-sql-server/microsoft-sql-server-overview.md)
- [MySQL](../../blueprint-library/mysql/mysql-overview.md)
- [PostgreSQL](../../blueprint-library/postgresql/postgresql-overview.md)
- [Snowflake](../../blueprint-library/snowflake/snowflake-overview.md)

#### Actions
- Execute SQL Queries
- Store Query Results as a CSV
- Upload a CSV to a Table

### Cloud Storage

#### Integrations
- [Amazon S3](../../blueprint-library/amazon-s3/amazon-s3-overview.md)
- [Azure Blob Storage](../../blueprint-library/azure-blob-storage/azure-blob-storage-overview.md)
- [Box](../../blueprint-library/box/box-overview.md)
- [Dropbox](../../blueprint-library/dropbox/dropbox-overview.md)
- [FTP](../../blueprint-library/ftp/ftp-overview.md)
- [Google Cloud Storage](../../blueprint-library/google-cloud-storage/google-cloud-storage-overview.md)
- [Google Drive](../../blueprint-library/google-drive/google-drive-overview.md)
- [SFTP](../../blueprint-library/sftp/sftp-overview.md)

#### Actions
- Upload Files
- Download Files

### Spreadsheets

#### Integrations
- [Airtable](../../blueprint-library/airtable/airtable-overview.md)
- [Google Sheets](../../blueprint-library/google-sheets/google-sheets-overview.md)

#### Actions
- Download Sheet to a CSV
- Upload CSV to a Sheet
- Clear Sheet Contents

### Messaging

#### Integrations
- [Email](../../blueprint-library/email/email-overview.md)
- [Slack](../../blueprint-library/email/email-overview.md)

#### Actions
- Send Message
- Send Message Conditionally
- Send Message w/ Attachment

### File or Data Manipulation

#### Integrations
- [Data Manipulation](../../blueprint-library/data-manipulation/data-manipulation-overview.md)
- [File Manipulation](../../blueprint-library/file-manipulation/file-manipulation-overview.md)

#### Actions
- Compress Files
- Decompress Files
- Convert Files
- Compare File Contents

### Data Ingestion, Transformation, and Syncing

#### Integrations
- [Fivetran](../../blueprint-library/fivetran/fivetran-overview.md)
- [dbt Cloud](../../blueprint-library/dbt-cloud/dbt-cloud-overview.md)

#### Actions
- Execute Job
- Check Status of Job
- Download Results from Job
- Execute Job, Check Status, and Download Results (All-in-one)

### 3rd-Party APIs

#### Integrations
- [HTTP](../../blueprint-library/http/http-overview.md)

#### Actions
- HTTP Request
- Download File from URL

## Screenshots

![Over 50+ Blueprints to take action on modern data platforms](../../.gitbook/assets/image_80.png)

## Learn More

- [Explore the Blueprints in the Blueprint Library](https://www.shipyardapp.com/blueprint-library)
