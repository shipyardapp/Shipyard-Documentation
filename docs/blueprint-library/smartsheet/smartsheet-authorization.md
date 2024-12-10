---
id: smartsheet-authorization
sidebar_position: 1
title: Smartsheet Blueprint Authorization
hide_title: true
sidebar_label: Authorization
description: Instructions on how to authorize Smartsheet to work with Platform's low-code Smartsheet templates.
keywords:
- smartsheet
- blueprint
- template
- authorization
---

# Smartsheet Authorization
In order to allow Platform access to your Smartsheet instance, you will need a an API access token. 

## Creating an Access Token for existing account

1. If you have an existing Smartsheet account, then go to the *App & Integrations* option in the bottom left corner

![](https://cdn.sanity.io/images/2xyydva6/production/3522cfd60b8b6dc92be3d86ef476fcea416fa493-408x508.png?w=450)

2. Select *API Access* and *Generate new access token*:
![](https://cdn.sanity.io/images/2xyydva6/production/a24f5af118f2a2549e1fa4bdb52d59941bae7d93-945x387.png?w=450)

3. Save the access token somewhere secure

__NOTE__ : You must be enrolled in the business or enterprise level plan for API access within Smartsheet.

## Creating an Access Token within the Developer Sandbox

Smartsheet has a sandbox enviornment in which you can test out their API, though you won't be able to use your email associated with your existing Smartsheet account. To setup a developer account, visit [this link](https://developers.smartsheet.com/register/) and save the token that it generates.


## Obtaining the Sheet ID

The sheet ID can be found by accessing the Sheet in the Smartsheet UI, then grabbing the identifier found in the URL strucutre after the *app.smartsheet.com/sheets/* :

![](https://cdn.sanity.io/images/2xyydva6/production/a16cae2dddddc18a3cef3f37ff3747c4e1cb905e-797x95.png?w=450)
