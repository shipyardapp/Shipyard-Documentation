---
id: dbt-cloud-overview
title: dbt Cloud Blueprints Overview
hide_title: true
sidebar_label: Overview
description: Information about Shipyard's low-code dbt Cloud templates.
keywords:
  - dbt Cloud
  - blueprint
  - template
  - overview
---

# dbt Cloud Blueprints Overview

dbt Cloud Blueprints help data teams orchestrate their dbt Cloud jobs with tools in their data stack. Our dbt Cloud Blueprints make it easy to execute a job, check for the status of the job run, and download all generated log files and artifacts. We've included an all-in-one Blueprint, as well as each step in a modular fashion so you can flexibily determine how you would like to interact with dbt Cloud.

Every Blueprint listed on this page stores the JSON response of the API calls and other files under the following folder structure:
`shipyard-artifacts/dbtcloud-blueprints/`

Sub-folders can be any of the following:
- responses
- logs
- artifacts
- variables

If you would like to run **dbt Core** directly from Shipyard, rather than executing dbt on a separate platform, follow our [dbt Core Blueprint tutorial](../../tutorials/dbt-blueprint.md).

## How to Use
For information on how to set up these Blueprints successfully, please read through the [dbt Cloud Authorization guide](dbt-cloud-authorization.md).

## Available Blueprints
Shipyard currently has the following Blueprints readily available:
- [Execute Job](dbt-cloud-execute-job.md)
- [Check Run Status](dbt-cloud-check-run-status.md)
- [Download Logs and Artifacts](dbt-cloud-download-logs-and-artifacts.md)
- [Execute Job & Download Results](dbt-cloud-execute-job-and-download-results.md)

## Open Source Code
The code that powers these Blueprints is [available on our Github](https://github.com/shipyardapp/dbtcloud-blueprints), open sourced under the Apache License 2.0. We'd love to have you contribute to others using Shipyard Blueprints by creating issues or submitting PRs.

## Helpful dbt Cloud Links
- [dbt Cloud API Documentation](https://docs.getdbt.com/dbt-cloud/api)