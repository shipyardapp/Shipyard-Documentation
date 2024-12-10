---
id: azure-data-factory-authorization
sidebar_position: 1
title: Azure Data Factory Blueprint Authorization
hide_title: true
sidebar_label: Authorization
description: Instructions on how to authorize Azure Data Factory to work with Platform's low-code Azure Data Factory templates.
keywords:
  - azure data factory
  - blueprint
  - template
  - authorization
---

#  Authorization

To use the Azure Data Factory blueprints you will need the following values:
* Client ID
* Client Secret
* Tenant ID
* Subscription ID

See below on instructions on how to retrieve these values

### Register App

1. **Login to [Azure Portal](https://portal.azure.com/)**
2. **Search for "App Registration"**

![](https://cdn.sanity.io/images/2xyydva6/dev/f10967a85311f8605e0fe654eb043c7dae13c91a-1050x176.png)
3. **Click "New App Registration"**
4. **Fill out the form on the next page:**
   - **Name**: Enter your app name.
   - **Supported account types**: Select "Single Tenant".
   - Click **Register**.

![](https://cdn.sanity.io/images/2xyydva6/dev/c4659e27af9de487d8576bc569a92d434849cb83-906x691.png)
5. **Note the following information:**
   - **Application (client) ID**: For Client ID.
   - **Directory (tenant) ID**: For Tenant ID.
6. **Set API Permissions:**
   - Click **API Permissions** on the left pane.
   - Click **Add a Permission** > **Microsoft Graph**.
   - In the next window, click **Application Permission**.
   - Add the `Application.ReadWrite.All` permission.
   - Click **Add Permission**.
   
![](https://cdn.sanity.io/images/2xyydva6/dev/bb7d12a277b5cee734a497bb90e56dbba2b34139-1481x706.png)
7. **Grant Admin Consent:**
   - Click **Grant Admin Consent**.
   - If you are not an admin, your admin will need to grant the permission.
8. **Add a Client Secret:**
   - Click **Certificates and Secrets** on the left pane.
   - Click **New Client Secret**.
   - Provide a description and select an expiration period.
   - Copy the generated value for **Client Secret**.
   
     ![](https://cdn.sanity.io/images/2xyydva6/dev/88943cdf2498b49296d2cc2c748ce78e3b770c88-1026x109.png)

### Configure Subscription Access

1. **Go to the Azure portal homepage**.
2. **Search for "Subscriptions"**.

![](https://cdn.sanity.io/images/2xyydva6/dev/f4b36d2149bd9043bd78c63dd352f6c50e3e913c-1052x177.png)
3. **Note the Subscription ID** for the Subscription ID field.
4. **Select the subscription you want the app to have access to**.
5. **Set Role Assignment:**
   - Go to **Access Control (IAM)**.
   - Click **Add** > **Add Role Assignment**.
  
![](https://cdn.sanity.io/images/2xyydva6/dev/90395bb48bd77232d16ea1ccc2b038274349ba74-1004x287.png)
   - Search for **Data Factory Contributor**.
   - Click **Next**.
   - Click **Add Member**.
   - Search for the app name.
   - Click **Select**.
   - Click **Next**.
![](https://cdn.sanity.io/images/2xyydva6/dev/e8d02ba0f214744f6ebba7a5de68330613dddd4a-1504x731.png)
