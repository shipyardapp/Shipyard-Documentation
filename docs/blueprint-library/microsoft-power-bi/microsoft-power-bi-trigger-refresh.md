---
id: microsoft-power-bi-trigger-refresh
title: Microsoft Power BI Template - Trigger Refresh
hide_title: true
sidebar_label: Trigger Refresh
description: Information about Shipyard's low-code Microsoft Power BI Trigger Refresh blueprint. Refresh a dataset or a dataflow on a Microsoft Power BI workspace 
keywords:
    - microsoft power bi
    - blueprint
    - template
---

# Microsoft Power BI - Trigger Refresh

## Overview
Placeholder usage description

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Client ID | MICROSOFT_POWER_BI_CLIENT_ID  | Alphanumeric |:white_check_mark: | - | - | The Client ID of the service principal account |
| Client Secret | MICROSOFT_POWER_BI_CLIENT_SECRET  | Password |:white_check_mark: | - | - | The client secret value for the service principal account |
| Tenant ID | MICROSOFT_POWER_BI_TENANT_ID  | Alphanumeric |:white_check_mark: | - | - | The tenant ID that can be retrieved from Azure directory when creating the service principal account. |
| Workspace ID | MICROSOFT_POWER_BI_GROUP_ID  | Alphanumeric |:white_check_mark: | - | - | The workspace/group ID where the dataset/dataflow is located |
| Refresh Object Type | MICROSOFT_POWER_BI_OBJECT_TYPE  | Select |:white_check_mark: | `dataset` | Dataset: `dataset`<br></br><br></br>Dataflow: `dataflow`<br></br><br></br> | The object type you wish to be refreshed |
| Object ID | MICROSOFT_POWER_BI_OBJECT_ID  | Alphanumeric |:white_check_mark: | - | - | The dataset ID or dataflow ID you wish to refresh. |
| Wait For Completion | MICROSOFT_POWER_BI_WAIT_FOR_COMPLETION  | Boolean |:white_check_mark: | `TRUE` | - | Whether the blueprint should wait for the refresh to finish. It is recommended to set this to TRUE. |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
    blueprint: Microsoft Power BI - Trigger Refresh
    inputs:
        MICROSOFT_POWER_BI_CLIENT_ID: null  ## REQUIRED
        MICROSOFT_POWER_BI_CLIENT_SECRET: null ## REQUIRED
        MICROSOFT_POWER_BI_TENANT_ID: null ## REQUIRED
        MICROSOFT_POWER_BI_GROUP_ID: null ## REQUIRED
        MICROSOFT_POWER_BI_OBJECT_TYPE: dataset ## REQUIRED
        MICROSOFT_POWER_BI_OBJECT_ID: null ## REQUIRED
        MICROSOFT_POWER_BI_WAIT_FOR_COMPLETION: 'TRUE' ## REQUIRED
    type: BLUEPRINT
guardrails:
    retry_count: 1
    retry_wait: 0h0m0s
    runtime_cutoff: 1h0m0s
    exclude_exit_code_ranges:
    -   101
    -   201
    -   202
    -   206

```
