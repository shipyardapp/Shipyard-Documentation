---
id: coalesce-determine-job-status
title: Coalesce Template - Determine Job Status
hide_title: true
sidebar_label: Determine Job Status
description: Information about Shipyard's low-code Coalesce Determine Job Status blueprint. Quickly determine the status of Coalesce job 
keywords:
    - coalesce
    - blueprint
    - template
---

# Coalesce - Determine Job Status

## Overview
Check the status of a specific Coalesce job and return with the final status. Best used if run immediately after the Coalesce - Start Job blueprint.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Access Token | COALESCE_ACCESS_TOKEN  | Password |:white_check_mark: | `-` | - | The Coalesce API token |
| Run ID | COALESCE_RUN_ID  | Integer |:heavy_minus_sign: | `-` | - | The ID of the specific run to query |


