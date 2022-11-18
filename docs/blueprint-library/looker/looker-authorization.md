---
id: looker-authorization
title: Looker Blueprint Authorization
hide_title: true
sidebar_label: Authorization
description: Instructions on how to authorize Looker to work with Shipyard's low-code Looker templates.
keywords:
  - looker
  - blueprint
  - template
  - authorization
---

# Looker Authorization

## API Credentials

In order to make use of the Looker API, you will need a Client Id and an associated Client Secret. Follow these steps as a demonstration on how to create those.
1. Once logged in, on the Looker home page navigate to the Admin section. If you are not an admin, have your Looker do this section for you.
![](../../.gitbook/assets/shipyard_2022_11_18_11_23_25.png)

2. Navigate to the Users Tab

![](../../.gitbook/assets/shipyard_2022_11_18_11_24_57.png)

3. Select the **Edit** box for the user needing the API credentials
![](../../.gitbook/assets/shipyard_2022_11_18_11_28_12.png)

4. Select the **Edit Keys** box under the API3 Keys section

![](../../.gitbook/assets/shipyard_2022_11_18_11_29_21.png)

5. Select the **new API3 Key**, which will generate a Client ID and Client Secret.

![](../../.gitbook/assets/shipyard_2022_11_18_11_31_11.png)



## Look Id
The `Look Id` can be obtained through the Looker UI by selecting a Look and extracting the Id from the URL:

![](../../.gitbook/assets/shipyard_2022_11_18_13_16_39.png)

## Dashboard Id
Similar to the `Look Id`, the `Dashboard Id` can be obtained through the Looker UI by selecting a Dashboard and extracting the Id from the URL:

![](../../.gitbook/assets/shipyard_2022_11_18_13_18_09.png)