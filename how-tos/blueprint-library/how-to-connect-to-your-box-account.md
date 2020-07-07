# How to Connect to your Box Account

## Overview

In order to access your Box account programmatically, you'll need to go through a series of steps to create an app, authorize that account for your organization, and generate a public/private key.

Once these steps are complete, you'll only ever need to provide the JSON file generated in the process.

## Steps

### 1. Enable 2FA on your Box Account

1. Log into your Box account [here](https://app.box.com). 
2. Click your user icon or initials in the upper-right corner and select **Account Settings.**

![](../../.gitbook/assets/image%20%2842%29.png)

3. Scroll down to the Authentication section and click **Require 2-step verification for unrecognized logins.**

![](../../.gitbook/assets/image%20%2850%29.png)

4. You'll see a pop-up to enter in a phone number for 2FA. Fill out the information and click **Continue.** You'll be sent a verification code to the phone number you provided.

![](../../.gitbook/assets/image%20%2846%29.png)

**5.** Enter in the confirmation code you received and click **Continue.**

![](../../.gitbook/assets/image%20%2840%29.png)

{% hint style="success" %}
You've successfully set up 2-Factor Authentication on your Box account.
{% endhint %}

### **2. Create a Box App**

1. Go to the [Box Developer Console](https://app.box.com/developers/console).
2. Click the button to **Create New App.**
3. On the next screen, select to make a **Custom App** and click Next.

![](../../.gitbook/assets/image%20%2853%29.png)

4. On the next screen, you'll be asked what type of authentication method you want to use. Select **OAuth 2.0 with JWT \(Server Authentication\)** and click Next.  


![](../../.gitbook/assets/image%20%2847%29.png)

5. Give your app a good, memorable name and click **Create App.**

![](../../.gitbook/assets/image%20%2843%29.png)

6. On the next screen, you can ignore the text and click **View My App.** This will redirect you to your app's configuration page.

7. Scroll down to the section for **OAuth 2.0 Credentials.** Click **copy** on the **Client ID** field. 

![](../../.gitbook/assets/image%20%2869%29.png)

{% hint style="warning" %}
**Note:** You'll need this Client ID for later! Keep it somewhere safe.
{% endhint %}

8. Scroll down to the **Application Access** section and select **Enterprise.**

![](../../.gitbook/assets/image%20%2855%29.png)

9. Scroll down to the **Advanced Features** section and turn on the two switches for **Perform Actions as Users** and **Generate User Access Tokens.**

![](../../.gitbook/assets/image%20%2858%29.png)

10. Scroll to the **Add and Manage Public Keys** section. Click **Generate a Public/Private Keypair.** This will open a prompt to save a JSON file. 

![](../../.gitbook/assets/image%20%2845%29.png)

{% hint style="warning" %}
**Note:** You will need the contents of this JSON file for later. Save it somewhere safe!
{% endhint %}

11. Click **OK** on the next prompt and then click the **Save Changes** button in the top-right corner of the screen.

### 3. Authorize your Box App

1. Go to the [Admin Console](https://app.box.com/master/) of your Box Organization.
2. Click Apps on the left-hand side navigation.

![](../../.gitbook/assets/image%20%2861%29.png)

3. Click the Tab for **Custom Apps** and click **Authorize New App.**

![](../../.gitbook/assets/image%20%2868%29.png)

4. Paste the Client ID for your application that you copied in Step 2 and click **Next**.

![](../../.gitbook/assets/image%20%2856%29.png)

5. On the next screen, click **Authorize.** 

![](../../.gitbook/assets/image%20%2836%29.png)

6. Verify that under User Access, your application says **All Users.** 

![](../../.gitbook/assets/image%20%2851%29.png)

1. If it doesn't, go back to the [Box Developer Console](https://app.box.com/developers/console), select your application, select **Configuration** on the side navigation, then scroll down to **Advanced Features**. You'll need to make sure both of these options are turned on \(blue\).
2. Go back to the authorization page, hover over your application name, click the 3 dots next to your application name and click **Reauthorize App.**

{% hint style="success" %}
You've successfully set up your Box to work correctly with scripts running on Shipyard and your local computer! 
{% endhint %}

### 4. Providing your Credentials on Shipyard

If you've gone through all of the above steps, the JSON file with your credentials is the only thing you'll need to authenticate your Box account with Shipyard.

For any Blueprint that connects with Box, you can provide your credentials in one of two ways:

1. Upload the file as part of the Blueprint and reference the JSON file name in the `Service Account` field. 
2. Paste the contents of the JSON file into the `Service Account` field.

