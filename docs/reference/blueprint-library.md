---
id: blueprint-library
title: Blueprint Library
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

The Blueprint Library is a location for pre-made Custom Blueprints developed by Shipyard staff. These Blueprints provide an easy way to avoid monotonous development work associated with integrations. We designed these Blueprints to:

- Accomplish a single common action with a single vendor
- Require no coding
- Require minimal details and credentials
- Allow moving credentials from a user-facing entry to an always-set environment variable
- Be editable for your organization's custom needs

Adding a Blueprint to your organization creates a copy of the original Blueprint in your organization. At that point, you can manipulate the code and environment variables as you see fit.

In an effort to be transparent about how our Blueprints work, we open-source the code and make it available on our [Github](https://github.com/shipyardapp). The repositories are broken up by vendor and all end in `-blueprints`. If some functionality isn't working appropriately, you can open an issue in Github or submit a pull request with the proposed changes.

As Blueprints get updated, we will create new release tags and send out a notification to all users that actively use the Blueprint. In most cases, you can simply update the version tag on the requirements tab.

### Categories and Actions

Blueprints are broken down into a few categories with core functionality that should be achieved.

**Databases**

- Execute SQL Queries
- Store Query Results as a CSV
- Upload a CSV to a Table

**Cloud Storage**

- Upload Files
- Download Files

**Spreadsheets**

- Download Sheet to a CSV
- Upload CSV to a Sheet

**Messaging**

- Send Message
- Send Message w/ Attachment

**File Manipulation**

- Compress Files
- Decompress Files
- Convert Files

**Data Manipulation**

- Run SQL against a CSV

**Data Package**

- Run package

## Screenshots

![Over 50+ Blueprints to take action on modern data platforms](../.gitbook/assets/image_80.png)

## Learn More

[Explore the Blueprints in the Blueprint Library](https://www.shipyardapp.com/blueprint-library)
