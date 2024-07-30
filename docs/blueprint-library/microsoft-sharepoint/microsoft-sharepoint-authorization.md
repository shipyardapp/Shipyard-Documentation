---
id: microsoft-sharepoint-authorization
sidebar_position: 1
title: Microsoft 365 SharePoint Blueprint Authorization
hide_title: true
sidebar_label: Authorization
description: Instructions on how to authorize Microsoft 365 SharePoint to work with Shipyard's low-code Microsoft 365 SharePoint templates.
keywords:
  - microsoft 365 sharepoint
  - blueprint
  - template
  - authorization
---

#  Authorization

In order to get started with the Microsoft 365 SharePoint blueprints, you will need to first register an App in Azure to be able to programatically interface with your SharePoint Site. 

## Register the App
1. In the Azure Portal landing page, navigate to the **App Registrations** section:

![](https://cdn.sanity.io/images/2xyydva6/dev/a36cab9abea70cfb7facd71e591aa6e330e7abc1-1192x609.png?w=450)

2. Select the **New registration** option:

![](https://cdn.sanity.io/images/2xyydva6/dev/1de36ebf5ffb8155ce16c60852b2f2756f466d60-854x192.png?w=450)

3. Provide a name for the App and select the Single Tenant access type:

![](https://cdn.sanity.io/images/2xyydva6/dev/bbaa3cc9c8f2d83938f7ba54e0d85100cadd3218-842x444.png?w=450)

4. Click `Register` at the bottom


## Client Credentials
Once the application is registered, you need to setup the credentials.

1. Once your application is registered, pull up the **Overview** tab. Select the **Add a certificate or secret**:

![](https://cdn.sanity.io/images/2xyydva6/dev/d8b0bc106e12955a7423c923e8238dbc823efad6-502x175.png?w=450)

2. Click the **New client secret** button and be sure to save the Secret Value (not the ID) that is generated. 

![](https://cdn.sanity.io/images/2xyydva6/dev/257f439b47e259509b4706a927463ebd85507fbf-1051x115.png?w=450)

The value generated here will be used as the `Client Secret` input for the blueprints. 

3. The Client ID and the Tenant ID needed for the blueprint can be found on the overview page of the application:

![](https://cdn.sanity.io/images/2xyydva6/dev/4b8a5f6cf2bb474df32a8c31ce111ce22b22af44-554x191.png?w=450)


## API Permissions
The last step is to grant the appropriate permissions to the App so that it can read/write files within SharePoint. It is important to note that some of these grants may require Admin approval. 

1. Navigate to the `API permissions` tab on the sidebar:

![](https://cdn.sanity.io/images/2xyydva6/dev/ce541e071e553f00d0ce747f7c311354356f7f24-270x563.png?w=450)

2. Select the **Add a permission** button. Within the **Request API permissions** window select the **Microsoft Graph**. You will then select the **Application Permissions**.

![](https://cdn.sanity.io/images/2xyydva6/dev/16eb41fdc02e03c3695f7df5746eb1c4bc626846-831x336.png?w=450)

![](https://cdn.sanity.io/images/2xyydva6/dev/d20cf24748e0a72bd9bf7bb34146f59fa4d287f3-845x269.png?w=450)

3. Grant the following permissions to the application:
- Files.ReadWrite.All
- Files.ReadWrite.AppFolder
- Sites.ReadWrite.All
- Sites.Manage.All
- User.Read.All

