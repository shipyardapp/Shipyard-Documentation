---
id: asana-authorization
sidebar_position: 1
title: Asana Blueprint Authorization
hide_title: true
sidebar_label: Authorization
description: Instructions on how to authorize Asana to work with Platform's low-code Asana templates.
keywords:
- asana
- blueprint
- template
- authorization
---

# Asana Authorization
In order to get started with the Asana blueprints, you need to provide Platform with an `Access Token`, a `Workspace ID`, and optionally a `Project ID`. 

## Access Token

To retreive an Access Token from Asana, go to the **Settings** page in your profile:

![](https://cdn.sanity.io/images/2xyydva6/production/d7b2e1543dfa283def9cbf7cc7f52fe2fbc6b052-426x372.png?w=450)

From the settings view, select the **apps** tab and then select **Manage Developer Apps**:

![](https://cdn.sanity.io/images/2xyydva6/production/f6ae476f20ecb617853df2ccf5a8e9b6ec2b1f9c-761x303.png?w=450)

You will then be able to generate an access token. Keep in mind to copy and save it.

![](https://cdn.sanity.io/images/2xyydva6/production/2787c70e4a96f9740aaddf84af1047e370e4f4e1-1112x323.png?w=450)


## Workspace ID
In order to retrieve the Workspace ID for the `Create Task` blueprint, ensure you are logged in to Asana and then click [this link](https://app.asana.com/api/1.0/workspaces). You will be directed to a page that looks something like this:

![](https://cdn.sanity.io/images/2xyydva6/production/7d9cba66e50cbc13999ed9732c5c12de68ca5db6-818x91.png?w=450)
. Copy the appropriate value from the `guid` field.

## Project ID
The project ID can be accessed via the url. For instance, given the link `https://app.asana.com/0/1204763328054774/board`, the `Project ID` would be 1204763328054774. 
