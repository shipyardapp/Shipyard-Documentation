---
id: email-authorization
sidebar_position: 1
title: Email Blueprint Authorization
hide_title: true
sidebar_label: Authorization
description: Instructions on how to authorize Email to work with Shipyard's low-code Email templates.
keywords:
- email
- blueprint
- template
- authorization
---

# Email Authorization
## Google
In order to send an email from a Google account, you'll need to use an [application specific password](https://support.google.com/accounts/answer/185833?hl=en).

### Create an Application Specific Password
1. Go to your [Google Account](https://myaccount.google.com/).

![](https://cdn.sanity.io/images/2xyydva6/production/c9e337f6dae7f0ed139c9a56d27b1f6694b183a9-1156x296.png?w=450)

2. Select Security under the side bar. Under "Signing in to Google," select App Passwords. You may be asked to log in again.

![](https://cdn.sanity.io/images/2xyydva6/production/a1d166d7c8d411d5378da1551f37b5516d354d99-1291x869.png?w=450)

If you don’t have this option, it might be because:
- 2-Step Verification is not set up for your account.
- 2-Step Verification is only set up for security keys.
- Your account is through work, school, or other organization.
- You turned on Advanced Protection.
3. At the bottom, click **Select app** and Custom. Name the app `Shipyard` or something easy to remember. Click **Generate**.

![](https://cdn.sanity.io/images/2xyydva6/production/9f44decec4d9d483dff85065c83dc5b77da4b71d-716x523.png?w=450)

4. On the following screen, copy the app password, shown with a yellow background, to a secure location. This is the password that you'll need to use when sending emails from your Google account via Shipyard.

![](https://cdn.sanity.io/images/2xyydva6/production/fe52e64c999c4f950b98ee964a575ede3111aa5d-671x488.png?w=450)

5. Click **Done** once you've saved the password. You'll never be able to see this password again.

### Provide Inputs on Shipyard
We recommend the following settings for successfully sending an email with Google.

|Variable|Value|
|:--|:--|
|Send Method|TLS|
|SMTP Host|smtp.gmail.com|
|SMTP Port|587|
|Username|Your Google Account Email|
|Password|Your Application Specific Password|

## SendGrid

In order to send an email from SendGrid, you'll need to use a Sender Identity and an API Key.

### Create a Sender Identity
1. Navigate to the [Sender Authentication](https://app.sendgrid.com/settings/sender_auth) page of your SendGrid account. 

![](https://cdn.sanity.io/images/2xyydva6/production/6c08a1b1f216e1286e44041f407f52bd2d3726e4-2410x1350.png?w=450)

2. Follow the on-page instructions to either authenticate your domain, or verify a single sender address.

### Create an API Key
1. Navigate to the [API Key](https://app.sendgrid.com/settings/api_keys) page of your SendGrid account.

![](https://cdn.sanity.io/images/2xyydva6/production/f23e56487a6e9974d5f6ad479042f7deb1687d0b-2410x746.png?w=450)

2. Click **Create API Key**.

3. Name your API Key and select the level of access. At minimum, you will need Full Access to Mail Send. Click **Create & View** once finished.

![](https://cdn.sanity.io/images/2xyydva6/production/6cc5cb5184587de23ef78db97053e933f5c5c557-1816x1256.png?w=450)

4. On the following screen, copy the API Key to a secure location. This is the password that you'll need to use when sending emails from your SendGrid account via Shipyard.

### Provide Inputs on Shipyard
We recommend the following settings for successfully sending an email with Google.

|Variable|Value|
|:--|:--|
|Send Method|TLS|
|SMTP Host|smtp.sendgrid.net|
|SMTP Port|587|
|Username|apikey|
|Password|`<your-api-key>`|

**_NOTE:_**
The sender address should be the literal text `apikey`. The Password should be your actual api key (`SG.value`) NOT base64 encoded.


## Outlook (Personal)

### Provide Inputs on Shipyard

We recommend the following settings for successfully sending an email with Outlook.

|Variable|Value|
|:--|:--|
|Send Method|TLS|
|SMTP Host|smtp.office365.com|
|SMTP Port|587|
|Username|Your Microsoft Account Email|
|Password|Your Microsoft Account Password|

**_NOTE:_**
It's possible that you will run into authentication issues because Microsoft sees the attempted login as suspicious. You'll need to let Microsoft know to allow the login attempt.


## Outlook (Office365 Business)

### Enable SMTP Authentication
Follow [this guide](https://docs.microsoft.com/en-us/exchange/clients-and-mobile-in-exchange-online/authenticated-client-smtp-submission) to effectively allow for sending emails via SMTP.

### Provide Inputs on Shipyard

We recommend the following settings for successfully sending an email with Outlook.

|Variable|Value|
|:--|:--|
|Send Method|TLS|
|SMTP Host|smtp.office365.com|
|SMTP Port|587|
|Username|Your Microsoft Account Email|
|Password|Your Microsoft Account Password|

**_NOTE:_**
It's possible that you will run into authentication issues because Microsoft sees the attempted login as suspicious. You'll need to let Microsoft know to allow the login attempt.


## Amazon SES

### Create an Identity
1. Navigate to the SES console within your AWS account.

![](https://cdn.sanity.io/images/2xyydva6/production/1f2cce5703fc59f011ad9d1c19bbb655498cefe0-1640x567.png?w=450)

2. Click **Create Identity**

![](https://cdn.sanity.io/images/2xyydva6/production/8e62e165c946233db3c8c9868c825ef8f4f6f1fb-830x817.png?w=450)

3. Create an identity by verifying a specific email address. You can also verify a domain if that suits your setup better.

![](https://cdn.sanity.io/images/2xyydva6/production/ceef9c4ddad886ed779da397ff634d5f9eca6d3f-837x822.png?w=450)

4. Navigate to your email and click the confirmation link to confirm that you have access to the right email.

![](https://cdn.sanity.io/images/2xyydva6/production/32212457d4b8073591994a4db0164710b32ae326-1321x523.png?w=450)

### Create SMTP Credentials
1. Navigate to your Amazon SES Account dashboard and scroll to the bottom where it says Simple Mail Transfer Protocol (SMTP) settings.

![](https://cdn.sanity.io/images/2xyydva6/production/25ce09d997ebcc893dc4067278c01edd4156baed-1592x864.png?w=450)

2. Click **Create SMTP credentials**.
3. Customize the IAM Username and click **Create** at the bottom.

![](https://cdn.sanity.io/images/2xyydva6/production/abdf72b23c2c74d2ca207c94331b5f2fc9a99368-1623x860.png?w=450)

4. Store the SMTP credentials somewhere secure.

![](https://cdn.sanity.io/images/2xyydva6/production/2a190811452279a93296d61c9ce199bcab1ad724-571x213.png?w=450)

### Provide Inputs on Shipyard

We recommend the following settings for successfully sending an email with Amazon SES.

|Variable|Value|
|:--|:--|
|Send Method|TLS|
|SMTP Host|email-smtp.us-west-2.amazonaws.com|
|SMTP Port|587|
|Username|SMTP Username|
|Password|SMTP Password|

**_NOTE:_**
If your SES instance is running in a region other than `us-west-2`, you'll want to use that region in the SMTP Host.

