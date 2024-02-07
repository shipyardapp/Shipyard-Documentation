---
id: airtable-authorization
sidebar_position: 1
title: Airtable Blueprint Authorization
hide_title: true
sidebar_label: Authorization
description: Instructions on how to authorize Airtable to work with Shipyard's low-code  templates.
keywords:
  - airtable
  - blueprint
  - template
  - authorization
---

#  Authorization

In order to get started with the Airtable Blueprints, you will need a Personal Access Token. Additionally, you'll need the names/IDs of the Base, Table, and View you would like to access.

## Generating an Airtable Personal Access Token

Follow these steps to create a personal access token for Airtable, which you will need for various integrations, such as connecting Airtable to Shipyard.

### Step 1: Log in to Airtable

Start by logging into your Airtable account. You can do so by visiting the [Airtable login page](https://airtable.com/login).

### Step 2: Access the Developer Hub

Once logged in, navigate to the [Developer Hub](https://airtable.com/create/tokens). This is where you can manage your API tokens.

### Step 3: Personal Access Token Section

Ensure you are in the **Personal Access Token** section of the Developer Hub. This is crucial as tokens generated here are specific to your personal account and provide access to your bases.

![](https://cdn.sanity.io/images/2xyydva6/dev/4a3423007f48f75f8a4f06df9a66404ae290c229-643x238.png?w=450)

### Step 4: Create a New Token

Click on **Create Token** to start the process of generating a new access token.

![](https://cdn.sanity.io/images/2xyydva6/dev/9acc975d9dd6e58fcc148ebf241ff018782f0fe0-689x208.png?w=450)

> **Note:**  If you already have tokens created "Create a New Token can be found on the top right.

### Step 5: Name Your Token

Give your token a descriptive name that helps you identify its use case. For instance you might name it "Shipyard Integration".

![](https://cdn.sanity.io/images/2xyydva6/dev/d1fb612181c9a2d287ea8c66e3e70781e7f84b58-822x233.png?w=450)

### Step 6: Set Permissions

Assign the necessary permissions to your token. At a minimum, you will need:

- `data.records:read` - This allows the token to read your Airtable records.
- `data.records:write` - This allows the token to modify your Airtable records.

![](https://cdn.sanity.io/images/2xyydva6/dev/89812054085635e599b3fdb4b2f84db06c3af7da-383x193.png?w=450)

> **Note:** The `data.records:write` permission is only necessary if you intend to use functionalities that modify your data, such as the "Airtable - Upload File from Shipyard to Airtable" blueprint.

### Step 7: Specify Accessible Bases

Under the **Access** section, specify which base(s) you want the token to access. This ensures that your token is only used for its intended purpose and bases.

![](https://cdn.sanity.io/images/2xyydva6/dev/400fc7fca0d75c37479b614fe87f4f436723bdf8-772x172.png?w=450)

> **Note:**  It's best to add only the specific base(s) that the application will use, rather than allowing access to all future bases. This minimizes security risks and ensures tighter control over your data. You can always add more bases to the token's permissions later without needing to regenerate the token.

### Step 8: Secure Your Token

**Important:** Your token will be displayed only once upon creation. Make sure to copy it immediately and store it in a secure location. Treat your token like a password, as it provides direct access to your Airtable data.


## Getting Base, Table, and View IDs

Navigate to the Base/Table you would like to access with Shipyard. Once there, extract the IDs directly from the URL. Airtable builds all of it's URLs as `https://airtable.com/{base_id}/{table_id}/{view_id}`

For example, in the following URL https://airtable.com/apprAb54fnzSbGPqV/tbltgrZ2A5vbSOuDs/viwaqiREptRiFI5un

**Base ID**: apprAb54fnzSbGPqV
**Table ID**: tbltgrZ2A5vbSOuDs
**View ID**: viwaqiREptRiFI5un

Alternatively, you can use the Table Name and the View Name found in the UI, although it is less recommended since the name can change without warning.

![Table and View Names](https://cdn.sanity.io/images/2xyydva6/production/061e3835df52069273424529a41b663d48c07e55-980x242.png?w=450)