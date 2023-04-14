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

# Tableau Authorization

Tableau Blueprints rely on users to:
- Provide their username and password or a Personal Access Token.
- Provide the Site ID and Server URL
- Provide the name of the relevant element (Workbook, Datasource, View)

Below are the steps of how to accomplish each of these individually.

## Creating a Personal Access Token
1. Sign into your instance of Tableau.
2. Click your user icon in the top-right corner and select **My Account Settings**
   ![Click My Account Settings](../../.gitbook/assets/shipyard_2022_05_19_15_49_36.png)
3. Scroll halfway down the page and stop at the section titled Personal Access Tokens.
![Tableau Personal Access Tokens](../../.gitbook/assets/shipyard_2022_05_19_15_51_35.png)
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
![Workbook Name in Explore Section](../../.gitbook/assets/shipyard_2022_05_19_16_03_48.png)

#### While Viewing Workbook Details
![Workbook Name in Overview](../../.gitbook/assets/shipyard_2022_05_19_16_04_27.png)

#### While Editing a Workbook
![Workbook Name while Editing](../../.gitbook/assets/shipyard_2022_05_19_16_05_31.png)

## Finding the Datasource Name

#### In the Explore Section
![Datasource Name in the Explore Section](../../.gitbook/assets/shipyard_2022_05_19_16_06_51.png)

#### While viewing Datasource Details
![Datasource Name in Dataousrce Details](../../.gitbook/assets/shipyard_2022_05_19_16_07_46.png)

#### While Editing the Datasource
![Datasource Name while Editing Datasource](../../.gitbook/assets/shipyard_2022_05_19_16_08_40.png)

:::note
Currently, we only support refreshing Datasources that have been published.
:::

## Finding the View Name

Views can be individual charts or a Dashboard that combines multiple charts. The names for these views can be found in multiple locations.

#### While Viewing Workbook Details
![View Name while viewing Workbook Details](../../.gitbook/assets/shipyard_2022_05_19_16_11_02.png)

#### While Editing a Workbook
![View Name while Editing a Workbook](../../.gitbook/assets/shipyard_2022_05_19_16_12_46.png)

:::note
Currently, we only support pulling data from views that have been published as part of the workbook. Anything in a draft state cannot be accessed.