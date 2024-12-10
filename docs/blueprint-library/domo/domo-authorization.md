---
id: domo-authorization
sidebar_position: 1
title: Domo Blueprint Authorization
hide_title: true
sidebar_label: Authorization
description: Instructions on how to authorize Domo to work with Platform's low-code Domo templates.
keywords:
  - domo
  - blueprint
  - template
  - authorization
---

#  Authorization

Domo Blueprints rely on users to:

- Provide their username and password or an access token
- Provide a Client ID and Secret from a Domo App
- Provide the Domo Instance
- Provide the id of the relevant element (Dataset, Card)

Below are the steps of how to accomplish each of these individually.

## Create a Domo Access Token
1. Log in to your Domo Instance (typically `domo-instance.domo.com`)
2. Click the **More** icon at the top.
3. Click the **Admin** icon.

![](https://cdn.sanity.io/images/2xyydva6/production/0824b018c087e1e75590abb856cebe8f56b4317f-1594x1194.png?w=450)

4. Click **Access Tokens**

![](https://cdn.sanity.io/images/2xyydva6/production/06e65051020d1e9c7bd18747253baae899de6221-722x816.png?w=450)

5. Click **+ Generate access token** in the top right.

![](https://cdn.sanity.io/images/2xyydva6/production/39a610acb32037697c5f08fab8040ed8a62e18ec-2796x510.png?w=450)

6. Provide a descriptive name for the access token.
7. Assign the token to a specific user.
8. Set the access token to expire after 10 years.
**_CAUTION:_**
While best practice is typically to have expiring access tokens that rotate, we recommend letting Platform tokens run as long as possible to prevent interruption to your Fleets.

9. Click **Generate**.

![](https://cdn.sanity.io/images/2xyydva6/production/b04e6814cf900247205d6d1fc16f0a1943504810-1360x274.png?w=450)

10. Copy the Access Token and store it somewhere safe. This value will be used for every Domo Blueprint.

![](https://cdn.sanity.io/images/2xyydva6/production/04ea0732ad492a78192da86a20d440ebc450c447-1116x224.png?w=450)

## Create a Domo App for a Client ID and Secret

1. Navigate to the [Domo Developer Portal](https://developer.domo.com/)
2. Click **Log In** at the top.

![](https://cdn.sanity.io/images/2xyydva6/production/2c2179c7c519195bb0d9925d3ccb71b834eaca7e-2860x752.png?w=450)

3. Enter the Domo Domain that you use. 

![](https://cdn.sanity.io/images/2xyydva6/production/885040f05fc5dc08fdbba9d906f397fd5deb6ef1-1346x904.png?w=450)

4. Sign into your personal Domo account.

![](https://cdn.sanity.io/images/2xyydva6/production/596c118d96e83d213af2e7d5425e31f22067a477-1012x1030.png?w=450)

5. At the top, hover over **My Account** and click **New Client**.  

![](https://cdn.sanity.io/images/2xyydva6/production/bbd86e70d02f27043546b109bc2a3337f5156c44-414x596.png?w=450)

6. On the next screen, fill out the following details:
- Name as `Platform`
- Description as `Used for Platform's Blueprints`
- Select `Data` and `Dashboard` scopes.

![](https://cdn.sanity.io/images/2xyydva6/production/5f93f7af80cd0857e08e85a7ed8173a87d140fe0-1848x1212.png?w=450)

7. Once complete, click **Create**. You'll be redirected to a new screen.
8. Store the **Client ID** and **Secret** found on this page.

![](https://cdn.sanity.io/images/2xyydva6/production/c058f52389e734882e99b0c6965c1fd19996eec4-2860x1328.png?w=450)
## Finding the Domo Instance

Every URL on Domo is structured as `https://DOMOINSTANCE.domo.com/`

For example, if the full URL was `https://shipyard-dev-123456.domo.com/explore`, your Domo Instance would be `shipyard-dev-123456`.

## Finding the Card ID

When viewing a dashboard on Domo, hover over the card and click the **Card Options** button.

![](https://cdn.sanity.io/images/2xyydva6/production/89309078653a49adc2a2b4c073315fe05b0ba9d6-552x682.png?w=450)
- If you select **Edit in Analyzer** you'll be taken to the Analyzer URL.
- If you select **Details** you'll be taken the the Card URL.

### In the Card URL

When viewing a card on Domo, the URL is structured as `https://DOMOINSTANCE.domo.com/page/PAGEID/kpis/details/CARDID`

For example, if the full URL was `https://shipyard-dev-123456.domo.com/page/1381574491/kpis/details/1559003314`, then your card ID would be `1559003314`

### In the Analyzer URL

When analyzing data on Domo, the URL can be structured as `https://DOMOINSTANCE.domo.com/analyzer?pageId=PAGEID&cardid=CARDID`

For example, if the full URL was `https://shipyard-dev-123456.domo.com/analyzer?pageId=1381574491&cardid=1559003314`, then your card ID would be `1559003314`

## Finding the Dataset ID

1. Go to the Datasets home page by clicking **Data** at the top and **DataSets** on the sidebar.

![](https://cdn.sanity.io/images/2xyydva6/production/987a9a13b7bc81e1f84ce396a0b27b85dc399e08-1352x900.png?w=450)

2. Click into one of the datasets.

### In the Dataset URL
When viewing a dataset on Domo, the URL can be structured as `https://DOMOINSTANCE.domo.com/datasources/DATASETID/details/overview`

For example, if the full URL was `https://shipyard-dev-123456.domo.com/datasources/5cfaf249-0450-441e-8838-5b0949fcd8a6/details/overview` then your dataset ID would be `5cfaf249-0450-441e-8838-5b0949fcd8a6`.
