---
id: coalesce-authorization
sidebar_position: 1
title: Coalesce Blueprint Authorization
hide_title: true
sidebar_label: Authorization
description: Instructions on how to authorize Coalesce to work with Platform's low-code Coalesce templates.
keywords:
  - coalesce
  - blueprint
  - template
  - authorization
---

#  Authorization

An access token is required for Platform to interact with Coalesce. In order to acquire an access token, navigate to the **Deploy** tab and select **Generate Access Token**. Be sure to copy the value and save it for future runs. 

![](https://cdn.sanity.io/images/2xyydva6/production/67e2eefa1966fd9f334716f39be1d5fc4f3f1ba4-1909x346.png?w=450)

### Region
The region for most users within the US will be `US Primary`. If you are unaware of the region, use the `US Primary`. The available regions are listed below:


| Coalesce Region       | Display Name      | Reference Name            |
|-----------------------|-------------------|---------------------------|
| US Central 1          | US Primary        | gcp-us-central-1          |
| Europe West 3         | Europe Primary    | gcp-eu-west-3             |
| Australia Southeast 1 | Australia Primary | gcp-australia-southeast-1 |
| US East 1             | US AWS East       | aws-us-east-1             |
| US West 2             | US AWS West       | aws-us-west-2             |
| US West 2             | US West 2 Azure   | az-us-west-2              |
| US East 2             | US East 2 Azure   | az-us-east-2              |


**NOTE**: For the credential group, enter the `Reference Name` listed above in the `Region` input.

### Environment ID 
In order to grab the Environment ID, navigate to the **Build Settings** and then select **Development Workspace**. 
![](https://cdn.sanity.io/images/2xyydva6/production/58949d56b63e3a8728227731e01d2e4f97e5168e-1532x353.png?w=450)
