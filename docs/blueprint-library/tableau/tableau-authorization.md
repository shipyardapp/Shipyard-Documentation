---
id: tableau-authorization
sidebar_position: 1
title: Tableau Blueprint Authorization
hide_title: true
sidebar_label: Authorization
description: Instructions on how to authorize Tableau to work with Shipyard's low-code Tableau templates.
keywords:
  - tableau
  - blueprint
  - template
  - authorization
---

#  Authorization

Tableau Blueprints rely on users to:
- Provide their username and password or a Personal Access Token.
- Provide the Site ID and Server URL
- Provide the name of the relevant element (Workbook, Datasource, View)

Below are the steps of how to accomplish each of these individually.

## Creating a Personal Access Token
1. Sign into your instance of Tableau.
2. Click your user icon in the top-right corner and select **My Account Settings**

![](https://cdn.sanity.io/images/2xyydva6/production/ec9436f8d25d6215ac9bbd41716bfdbc3e47bdbf-540x175.png?w=450)

3. Scroll halfway down the page and stop at the section titled Personal Access Tokens.

![](https://cdn.sanity.io/images/2xyydva6/production/684577ea2554f682e9968ea5f552d683cce821d4-1029x509.png?w=450)

4. Provide a descriptive name for the token (we suggest `Shipyard`) and click **Create New Token**.
5. Click **Copy to Clipboard** and store your Token Secret in a safe location. You will need both the Token Name and the Token Secret for authentication.

## Finding the Site ID
As a part of every URL on Tableau, you should see a section that says `/site/YOURSITEID/`.

For example, if the full URL was `https://10ax.online.tableau.com/#/site/shipyarddevelopmentdev123456/explore`, your Site ID would be `shipyarddevelopmentdev123456`.

## Finding the Server URL

The Server URL is the beginning part of the URL, including the subdomain, domain, and TLD.

For example, if the full URL was `https://10ax.online.tableau.com/#/site/shipyarddevelopmentdev123456/explore`, your Site ID would be `https://10ax.online.tableau.com`.

## Finding the Workbook Name

Workbook names can be found in multiple locations.

#### In the Explore Section

![](https://cdn.sanity.io/images/2xyydva6/production/ccc30ac8364b45871085a79db18a1060e7dd339b-1065x436.png?w=450)

#### While Viewing Workbook Details

![](https://cdn.sanity.io/images/2xyydva6/production/b457cea01d318b9f5f0ed92082ce0ce5e0e9f93b-1063x550.png?w=450)

#### While Editing a Workbook

![](https://cdn.sanity.io/images/2xyydva6/production/ce55104a86bd7dc7c5760700e27d710351bfe1f7-1142x427.png?w=450)

## Finding the Datasource Name

#### In the Explore Section

![](https://cdn.sanity.io/images/2xyydva6/production/2c944b6070ad3f4f871bb396622b0516f68b2e4b-1066x486.png?w=450)

#### While viewing Datasource Details

![](https://cdn.sanity.io/images/2xyydva6/production/c1fc713298289da9c93d49d5c644837d0d15eb5d-1059x344.png?w=450)

#### While Editing the Datasource

![](https://cdn.sanity.io/images/2xyydva6/production/34d8dc6bd7a0db5ba66d3291a4c82ecc4bab26f8-1135x334.png?w=450)

**_NOTE:_** Currently, we only support refreshing Datasources that have been published.


## Finding the View Name

Views can be individual charts or a Dashboard that combines multiple charts. The names for these views can be found in multiple locations.

#### While Viewing Workbook Details

![](https://cdn.sanity.io/images/2xyydva6/production/aedaf959333c12b80269517226190ca64cdc49a9-1062x559.png?w=450)

#### While Editing a Workbook

![](https://cdn.sanity.io/images/2xyydva6/production/7b0650fc0ccbcb9202736c65f752ba647ce14338-1136x301.png?w=450)

**_NOTE:_** Currently, we only support pulling data from views that have been published as part of the workbook. Anything in a draft state cannot be accessed.