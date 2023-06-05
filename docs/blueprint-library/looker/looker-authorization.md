---
id: looker-authorization
sidebar_position: 1
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

![](https://cdn.sanity.io/images/2xyydva6/production/f1c19fd687c7429d7fc0e27372546923a1d1004f-312x503.png?w=450)

2. Navigate to the Users Tab

![](https://cdn.sanity.io/images/2xyydva6/production/85d252b122b70d80cf54dfc7e5c4119611d2be34-320x776.png?w=450)

3. Select the **Edit** box for the user needing the API credentials
![](https://cdn.sanity.io/images/2xyydva6/production/bd7e08a410986bbd1154b58dfa6081d772a72428-1639x255.png?w=450)

4. Select the **Edit Keys** box under the API3 Keys section

![](https://cdn.sanity.io/images/2xyydva6/production/87abb9ce29659336c8cd7f49c4406092ffc5f1e6-804x374.png?w=450)

5. Select the **new API3 Key**, which will generate a Client ID and Client Secret.

![](https://cdn.sanity.io/images/2xyydva6/production/a34c31395a20f09dee37c486a77aa0f61667c76e-828x244.png?w=450)



## Look Id
The `Look Id` can be obtained through the Looker UI by selecting a Look and extracting the Id from the URL:

![](https://cdn.sanity.io/images/2xyydva6/production/d35fa8e8cf4befb70c50ee2809c2d945e2a33a28-353x44.png?w=450)

## Dashboard Id
Similar to the `Look Id`, the `Dashboard Id` can be obtained through the Looker UI by selecting a Dashboard and extracting the Id from the URL:

![](https://cdn.sanity.io/images/2xyydva6/production/367f9869574fe29e5f8bbb6d38bc82bb3cb54ac7-381x45.png?w=450)
