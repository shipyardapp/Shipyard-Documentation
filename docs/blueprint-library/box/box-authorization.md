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

![](https://cdn.sanity.io/images/2xyydva6/production/5af7a5f9626f809b9014b45fb64fd909e26fa599-2874x1454.png?w=450)

3. Scroll down to the 2-Step Verification section. Click **Set up**
4. Select your preferred method for 2FA. We recommend using an authenticator app. Click **Next**.

![](https://cdn.sanity.io/images/2xyydva6/production/01af9b33e1072fd2a8bff134f36564cdaaa34821-892x636.png?w=450)

5. Set up 2FA in your app of choice. Provide the Authentication code, then click **Submit**.

![](https://cdn.sanity.io/images/2xyydva6/production/e005d16efa724114269d44f6a394fcd0dde339c0-894x1286.png?w=450)

**_NOTE:_**
Setting up 2-Step Verification is key to creating a Service Account for your application. Don't skip this step!



## Creating a Box Developer App + Credentials
1. Go to the [Developer console](https://app.box.com/developers/console).
1. Click "**Create New App**"

![](https://cdn.sanity.io/images/2xyydva6/production/acf54c8191fc3d515c227b42a255b5c1394f6a0b-472x345.png?w=450)

4. Click "**Custom App**"

![](https://cdn.sanity.io/images/2xyydva6/production/eba5e1f3b197ac4fd0cc591e14a93f8ab77e7fc4-888x581.png?w=450)

5. Select **Server Authentication (with JWT)**, name your app, and click **Create App**

![](https://cdn.sanity.io/images/2xyydva6/production/a2fc830135872d8ecf089bc489081eb1c8228cd6-870x1288.png?w=450)

6. Check to verify that you're on the Configuration tab for your new app. If not, navigate there.

![](https://cdn.sanity.io/images/2xyydva6/production/d9a850f215a2d7d6dd50e00a2c3e84070d869c1a-1036x232.png?w=450)

6. Scroll down to the section called Application Scopes. Make sure **Write all files and folders stored in Box** is selected.

![](https://cdn.sanity.io/images/2xyydva6/production/a72e24c3e26c5a163be5553ef7e8be4361f27883-1140x348.png?w=450)

11. Click **Save Changes** at the top of the page.

6. Scroll down to the section called OAuth 2.0 Credentials. Copy the **Client ID** and store this for later.

![](https://cdn.sanity.io/images/2xyydva6/production/b1df548c9602f8d6cc8f0a37cbdee47cd7b48f7f-1432x506.png?w=450)

7. Scroll down to the section called Advanced Features. Make sure both of these items are checked.

![](../../.gitbook/assets/shipyard_2021_09_21_20_00_06.png)

8. Scroll down slightly and select **Generate a Public/Private Keypair**.

![](https://cdn.sanity.io/images/2xyydva6/production/b1df548c9602f8d6cc8f0a37cbdee47cd7b48f7f-1432x506.png?w=450)

**_NOTE:_**
You may first be prompted for your 2FA code. If so, enter the code and try generating a Public/Private Keypair again.

1. A file should be downloaded to your computer that contains your app credentials in JSON format. This will be used for every Box Blueprint on Shipyard, so store this somewhere safe.
2.  Click **OK**.

If this step was successful, the screen should update to look something like this.

![](https://cdn.sanity.io/images/2xyydva6/production/856a6df238abcca4a4da463bbbf384bd064ad0a2-1506x522.png?w=450)

## Giving Your Box Developer App Access to the Enterprise

### Submitting the Box Developer App for Approval
1. Go to the [Developer console](https://app.box.com/developers/console) and select your app.
2. Switch to the **Authorization** Tab

![](https://cdn.sanity.io/images/2xyydva6/production/1c20463d68105a2e3b9104b6bc243c6f8d920117-1108x118.png?w=450)

3. Click the **Review and Submit** button.

![](https://cdn.sanity.io/images/2xyydva6/production/de15e270644d73663e4a3340a5db960a01da4481-1466x418.png?w=450)

4. Fill out an App Description and click **Submit**.

![](https://cdn.sanity.io/images/2xyydva6/production/f9b41a3fb173328bc37f140674b568f0291d0ecc-886x768.png?w=450)

5. The screen should now update to look something like this.

![](https://cdn.sanity.io/images/2xyydva6/production/8dcb6eb833e534507f0c6fe81f739e7db6c77141-1666x248.png?w=450)

### Approving the Box Developer App in the Admin Tab
At this point, an Admin for your Enterprise will need to take the following steps.  

1. Navigate to the [Admin panel](https://app.box.com/master) for Box.
2. Click **Apps** on the sidebar.  

![](https://cdn.sanity.io/images/2xyydva6/production/f2a7be9ff0ba8ece56c5725020cf6ab7a5bc75a9-470x778.png?w=450)

3. Click on the **Custom Apps** tab.

![](https://cdn.sanity.io/images/2xyydva6/production/f361f0a4ff8d01294d6aed000e90b22b29902244-784x108.png?w=450)

4. Highlight the application name that was submitted.
a. Click the 3 dots icon to access more menu options.
b. Click **Authorize App**.

![](https://cdn.sanity.io/images/2xyydva6/production/eb847e5215f2ddb7351cccde8ab7a6dc55cf9a27-1940x462.png?w=450)

6. Click **Authorize**.

![](https://cdn.sanity.io/images/2xyydva6/production/50f5386f1ef300c1bfe3f94d3d712fb3c88992f4-864x948.png?w=450)

7. You should now see your application shown in the table below.

![](https://cdn.sanity.io/images/2xyydva6/production/f4d70ecdc6342d20677733ddbd188d8d9f2c178e-1976x248.png?w=450)

## Inviting your Box App to your Folders
1. Navigate to the [Developer Console](https://app.box.com/developers/console)
2. Select your app.
3. Scroll down to the Service Account Info section. Copy the email listed as a Service Account ID. It will be formatted as `AutomationUser_AppServiceID_RandomString@boxdevedition.com`

![](https://cdn.sanity.io/images/2xyydva6/production/a5ca82f9420f400ca88a9fe10df2923aeb02418a-1458x396.png?w=450)

4. Go to the main [Box application](https://app.box.com/folder/0).
5. Move your mouse over the folder you want to share. Click the **Share** button on the right.

![](https://cdn.sanity.io/images/2xyydva6/production/ccb8946fdd283bd5ae24de97f357bba8ad4fbdaa-1760x140.png?w=450)

6. Paste your Service Account ID email into the Invite People section. Ensure that you are inviting the email as an Editor. Click **Send**.

![](https://cdn.sanity.io/images/2xyydva6/production/58345158dfec8c3b6ee76448b95f218d40b53036-880x866.png?w=450)

7. The folder will now show as Blue to indicate it is shared!

![](https://cdn.sanity.io/images/2xyydva6/production/3e497ed83e9ce09d33f1111d69908a0749d50464-310x118.png?w=450)
