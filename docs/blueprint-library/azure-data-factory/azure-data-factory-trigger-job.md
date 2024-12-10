---
id: azure-data-factory-trigger-job
title: Azure Data Factory Template - Trigger Job
hide_title: true
sidebar_label: Trigger Job
description: Information about Platform's low-code Azure Data Factory Trigger Job blueprint. Triggers an Azure Data Factory pipeline run with and waiting for completion if needed.
keywords:
  - azure data factory
  - blueprint
  - template
---

# Azure Data Factory - Trigger Job


:::info
This Blueprint is classified as "Free" and does not incur billable runtime. [Learn more](../../reference/blueprints/blueprint-library/blueprint-library-overview.md#free-blueprints).
:::


## Overview

To get started using this Blueprint, you need the following in inputs:
* Resource Group Name
* Data Factory Name
* Pipeline Name.

Which can easily found by clicking on Switch Data Factory Icon on the top right pane of your Azure Data Factory portal

![](https://cdn.sanity.io/images/2xyydva6/dev/853c69a473d0fdd45d6f22aec25e54cab1687a67-324x154.png?w=450)

Additionally, you can configure the Blueprint to wait for the pipeline to finish running. Setting "Wait for Completion" to True ensures the Blueprint waits until the pipeline run completes, logging any potential errors and confirming the entire process is finished. Setting it to False marks the Blueprint as successful immediately after the pipeline is triggered, without waiting for completion.

## Variables

| Name | Reference | Type | Required | Default | Options | Description             |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------------------|
| Client ID | AZURE_DATAFACTORY_CLIENT_ID | Alphanumeric | :white_check_mark: | - | - | None |
| Client Secret | AZURE_DATAFACTORY_CLIENT_SECRET | Password | :white_check_mark: | - | - | None |
| Tenant ID | AZURE_DATAFACTORY_TENANT_ID | Alphanumeric | :white_check_mark: | - | - | None |
| Subscription ID | AZURE_DATAFACTORY_SUBSCRIPTION_ID | Alphanumeric | :white_check_mark: | - | - | None |
| Resource Group Name | AZURE_DATAFACTORY_RESOURCE_GROUP | Alphanumeric | :white_check_mark: | - | - | Can be found by clicking on Switch Data Factory Icon on the top right of your Azure Data Factory portal |
| Data Factory Name | AZURE_DATAFACTORY_FACTORY_NAME | Alphanumeric | :white_check_mark: | - | - | Can be found by clicking on Switch Data Factory Icon on the top right of your Azure Data Factory portal |
| Pipeline Name | AZURE_DATAFACTORY_PIPELINE | Alphanumeric | :white_check_mark: | - | - | Can be found by clicking on Switch Data Factory Icon on the top right of your Azure Data Factory portal |
| Wait For Completion | AZURE_DATAFACTORY_WAIT | Boolean | :white_check_mark: | `TRUE` | - | Whether the Blueprint should wait for the Azure Data Factory pipeline run to finish before proceeding |




## YAML

Below is the YAML template for this Blueprint and can be used in the
Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: Azure Data Factory - Trigger Job
  inputs:
    AZURE_DATAFACTORY_CLIENT_ID: null  ## REQUIRED
    AZURE_DATAFACTORY_CLIENT_SECRET: null ## REQUIRED
    AZURE_DATAFACTORY_TENANT_ID: null ## REQUIRED
    AZURE_DATAFACTORY_SUBSCRIPTION_ID: null ## REQUIRED
    AZURE_DATAFACTORY_RESOURCE_GROUP: null ## REQUIRED
    AZURE_DATAFACTORY_FACTORY_NAME: null ## REQUIRED
    AZURE_DATAFACTORY_PIPELINE: null ## REQUIRED
    AZURE_DATAFACTORY_WAIT: 'TRUE' ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '200'
 ```


