---
id: bitio-overview
title: bit.io Blueprints Overview
hide_title: true
sidebar_label: Overview
description: Information about Shipyard's low-code bit.io templates.
keywords:
  - bit.io
  - blueprint
  - template
  - overview
---

# bit.io Blueprints Overview

Shipyard's low-code bit.io blueprints allow users to connect their data in bit.io to the rest of their modern data stack. T

hese Blueprints are based on our [PostgreSQL Blueprints](../postgresql/postgresql-overview.md) with slight modifications to simplify the setup process required for bit.io.

These blueprints use modified approaches to connecting with bit.io found [here](https://docs.bit.io/docs/connecting-via-pandas). Modifications include chunking the files when downloading/uploading. While this can result in slightly slower speeds, it prevents users from running into potential memory issues for larger data sets.


## How to Use
For information on how to set up these Blueprints successfully, please read through the [bit.io Authorization guide](bitio-authorization.md).

## Available Blueprints
Shipyard currently has the following Blueprints readily available:
- [Execute Query](bitio-execute-query.md)
- [Store Query Results as CSV](bitio-store-query-results-as-csv.md)
- [Upload CSV to Table](bitio-upload-csv-to-table)

## Open Source Code
The code that powers these Blueprints is [available on our Github](https://github.com/shipyardapp/postgresql-blueprints), open sourced under the Apache License 2.0. We'd love to have you contribute to others using Shipyard Blueprints by creating issues or submitting PRs.

## Helpful bit.io Links
- [bit.io Documentation](https://docs.bit.io/docs/getting-started)  