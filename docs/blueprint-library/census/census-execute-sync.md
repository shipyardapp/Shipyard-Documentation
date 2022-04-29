---
id: census-execute-sync
title: Census Template - Execute Sync
hide_title: true
sidebar_label: Execute Sync
description: Information about Shipyard's low-code Census Execute Sync blueprint. Execute a Census sync without waiting for the results.
keywords:
    - census
    - blueprint
    - template
---

# Census - Execute Sync

## Overview

Execute a single sync on Census, creating a new run.

This Blueprint will only kick off the sync and will always return a status of success. It will not wait around to verify if the created run was successfully completed, but it will create and store the generated run ID to `shipyard-artifacts/census-blueprints/variables/sync_run_id.pickle`

The response for this request will always be stored at `shipyard-artifacts/census-blueprints/responses/sync_SYNCID_response.json`



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| API Trigger URL | URL | Password | :white_check_mark: | - | - | - |


