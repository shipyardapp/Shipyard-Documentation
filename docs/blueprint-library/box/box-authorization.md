---
id: box-authorization
sidebar_position: 1
title: Box Blueprint Authorization
hide_title: true
sidebar_label: Authorization
description: Instructions on how to authorize Box to work with Shipyard's low-code Box templates.
keywords:
  - box
  - blueprint
  - template
  - authorization
---

# Box Authorization
Box requires multiple steps for authentication.

1. You must first set up a Developer account.
2. With the new Developer account, you need to set up an Application with credentials.
3. Once the app is created, you'll need an admin to approve the application.
4. Once the application is approved, you'll need it to be invited to the relevant folders.

## Setting up Your Box Developer Account
1. Register your Box Account for a [Developer Account](https://developer.box.com/).
2. Navigate to your [Developer Account settings](https://app.box.com/account/developer).
![](../../.gitbook/assets/shipyard_2021_09_21_20_02_16.png)
3. Scroll down to the 2-Step Verification section. Click **Set up**
4. Select your preferred method for 2FA. We recommend using an authenticator app. Click **Next**.
![](../../.gitbook/assets/shipyard_2021_09_21_20_04_10.png)
5. Set up 2FA in your app of choice. Provide the Authentication code, then click **Submit**.
![](../../.gitbook/assets/shipyard_2021_09_21_20_05_40.png)

:::note
Setting up 2-Step Verification is key to creating a Service Account for your application. Don't skip this step!
:::


## Creating a Box Developer App + Credentials
1. Go to the [Developer console](https://app.box.com/developers/console).
1. Click "**Create New App**"
![](../../.gitbook/assets/shipyard_2021_09_21_12_56_28.png)
4. Click "**Custom App**"
![](../../.gitbook/assets/shipyard_2021_09_21_12_57_15.png)
5. Select **Server Authentication (with JWT)**, name your app, and click **Create App**
![](../../.gitbook/assets/shipyard_2021_09_21_19_56_22.png)
6. Check to verify that you're on the Configuration tab for your new app. If not, navigate there.
![](../../.gitbook/assets/shipyard_2021_09_21_20_08_03.png)
6. Scroll down to the section called Application Scopes. Make sure **Write all files and folders stored in Box** is selected.
![](../../.gitbook/assets/shipyard_2021_09_21_21_52_01.png)
11. Click **Save Changes** at the top of the page.

<!-- 6. Scroll down to the section called OAuth 2.0 Credentials. Copy the **Client ID** and store this for later.
![](../../.gitbook/assets/shipyard_2021_09_21_19_57_35.png)
7. Scroll down to the section called Advanced Features. Make sure both of these items are checked.
![](../../.gitbook/assets/shipyard_2021_09_21_20_00_06.png) -->
8. Scroll down slightly and select **Generate a Public/Private Keypair**.


![](../../.gitbook/assets/shipyard_2021_09_21_20_01_05.png)
:::note
You may first be prompted for your 2FA code. If so, enter the code and try generating a Public/Private Keypair again.
:::
1. A file should be downloaded to your computer that contains your app credentials in JSON format. This will be used for every Box Blueprint on Shipyard, so store this somewhere safe.
2.  Click **OK**.

If this step was successful, the screen should update to look something like this.
![](../../.gitbook/assets/shipyard_2021_09_21_20_09_12.png)


## Giving Your Box Developer App Access to the Enterprise

### Submitting the Box Developer App for Approval
1. Go to the [Developer console](https://app.box.com/developers/console) and select your app.
2. Switch to the **Authorization** Tab
![](../../.gitbook/assets/shipyard_2021_09_21_21_47_48.png)
3. Click the **Review and Submit** button.
![](../../.gitbook/assets/shipyard_2021_09_21_21_55_56.png)

4. Fill out an App Description and click **Submit**.
![](../../.gitbook/assets/shipyard_2021_09_21_21_49_01.png)
5. The screen should now update to look something like this.
![](../../.gitbook/assets/shipyard_2021_09_21_21_57_13.png)

### Approving the Box Developer App in the Admin Tab
At this point, an Admin for your Enterprise will need to take the following steps.  

1. Navigate to the [Admin panel](https://app.box.com/master) for Box.
2. Click **Apps** on the sidebar.  
![](../../.gitbook/assets/shipyard_2021_09_21_20_12_26.png)
3. Click on the **Custom Apps** tab.
![](../../.gitbook/assets/shipyard_2021_09_21_20_13_41.png)
4. Highlight the application name that was submitted.
a. Click the 3 dots icon to access more menu options.
b. Click **Authorize App**.
![](../../.gitbook/assets/shipyard_2021_09_21_21_59_36.png)
6. Click **Authorize**.
![](../../.gitbook/assets/shipyard_2021_09_21_20_15_16.png)
7. You should now see your application shown in the table below.
![](../../.gitbook/assets/shipyard_2021_09_21_20_15_46.png)

## Inviting your Box App to your Folders
1. Navigate to the [Developer Console](https://app.box.com/developers/console)
2. Select your app.
3. Scroll down to the Service Account Info section. Copy the email listed as a Service Account ID. It will be formatted as `AutomationUser_AppServiceID_RandomString@boxdevedition.com`
![](../../.gitbook/assets/shipyard_2021_09_21_21_18_27.png)
4. Go to the main [Box application](https://app.box.com/folder/0).
5. Move your mouse over the folder you want to share. Click the **Share** button on the right.
![](../../.gitbook/assets/shipyard_2021_09_21_21_21_42.png)
6. Paste your Service Account ID email into the Invite People section. Ensure that you are inviting the email as an Editor. Click **Send**. 
![](../../.gitbook/assets/shipyard_2021_09_21_21_22_55.png)
7. The folder will now show as Blue to indicate it is shared!
![](../../.gitbook/assets/shipyard_2021_09_21_21_23_16.png)