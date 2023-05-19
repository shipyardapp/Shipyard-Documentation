---
id: jira-authorization
sidebar_position: 1
title: Jira Blueprint Authorization
hide_title: true
sidebar_label: Authorization
description: Instructions on how to authorize Jira to work with Shipyard's low-code Jira templates.
keywords:
- jira
- blueprint
- template
- authorization
---

# Jira Authorization
To get started with the Jira Blueprints, you will need an API token and your Jira subdomain.

## Create an API token
Create an API token from your Atlassian account:

**STEP 1.** Log in to https://id.atlassian.com/manage-profile/security/api-tokens.

**STEP 2.** Click Create API token.

![](https://cdn.sanity.io/images/2xyydva6/production/1c7a78426b8cc200dd6b83693e6cff6ed044b221-635x348.png?w=450)

**STEP 3.** From the dialog that appears, enter a memorable and concise Label for your token and click Create.

![](https://cdn.sanity.io/images/2xyydva6/production/bd2102af5bd1a894268f6905df1909a4a55b4137-421x335.png?w=450)

**STEP 4.** Click Copy to clipboard, then paste the token to your script, or elsewhere to save:

![](https://cdn.sanity.io/images/2xyydva6/production/a2dcb06c6de39914f5ad84ff5d07021e7e7c4506-418x299.png?w=450)

_NOTE:_

For security reasons it isn't possible to view the token after closing the creation dialog; if necessary, create a new token.
You should store the token securely, just as for any password.

## Find Jira Subdomain
Your Jira subdomain is the first part of your Jira URL. For example, if your Jira URL is https://shipyard.atlassian.net, your Jira subdomain is shipyard.
![](https://cdn.sanity.io/images/2xyydva6/production/9c5cad9dbc8f6d5e9aa2198fd830d69366c8b953-431x47.png?w=450)
