---
id: fivetran-authorization
sidebar_position: 1
title: Fivetran Blueprint Authorization
hide_title: true
sidebar_label: Authorization
description: Instructions on how to authorize Fivetran to work with Shipyard's low-code Fivetran templates.
keywords:
- fivetran
- blueprint
- template
- authorization
---

# Fivetran Authorization
To get started with any Fivetran Blueprints, you will need to generate an API Key and know how to find a connector ID. The API Key is a secure way for Shipyard to access Fivetran. The Connector ID is a unique generated ID attached to each connector. These two pieces of information will be required for **every** Fivetran Blueprint.

## Generate an API Key

1. Navigate to the [Settings Tab](https://fivetran.com/account/settings) of your Account.
2. Scroll down to the API Config Section. Select an option to generate a Key. If you already have a key, skip to the next step.

![](https://cdn.sanity.io/images/2xyydva6/production/061d04fe934fc030da1dfd12af9879d62ca882bd-1578x636.png?w=450)

3. Copy both the API Key and the API Secret somewhere safe.

## Get the Connector ID
1. Navigate to the [Connectors page](https://fivetran.com/dashboard/connectors) of your dashboard.
2. Click on the connector you want to get the ID of.

![](https://cdn.sanity.io/images/2xyydva6/production/6658431e21fb085e15e97998f98ba8d63e2d5934-2880x1400.png?w=450)

3. Click the setup tab at the top.

![](https://cdn.sanity.io/images/2xyydva6/production/d96560f059f3ffc0c435808e2df67659ec7aa60e-692x216.png?w=450)

4. Copy down the value under Fivetran Connector ID. This will typically be two words separated by an underscore. e.x. (`lively_planted`)

![](https://cdn.sanity.io/images/2xyydva6/production/efb05e63fe19722becb5bd60c416df4a3822633b-1556x414.png?w=450)
