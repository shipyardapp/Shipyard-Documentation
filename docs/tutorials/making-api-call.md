---
id: making-api-call
title: Calling an API
hide_title: true
description: In-depth tutorial to walk you through the steps needed to call an API.
keywords:
  - API
  - advanced
  - tutorial
  - GitHub
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Calling an API

## Overview

In this tutorial, we will walk through the steps needed to make an API call in Shipyard. This guide will accomplish that using Shipyard's native [HTTP](../blueprint-library/http/http-requests.md) Blueprint. If you'd rather use your own Python script, the steps are provided to do that as well.

We will be calling GitHub's API to create an issue in a repository. 

By the end of this tutorial, you'll be able to: 

- Call an API using the Request native Blueprint
- Call an API using a Python code Vessel

## Steps

### Step 1: Generating API Key

1. Head [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) and follow GitHub's guide to create an API Key.
2. Under **Repository Permissions**, change the access for Issues to have read and write access and Metadata to have read-only access.

![](../.gitbook/assets/shipyard_2022_12_12_13_32_39.png)

### Step 2: Calling GitHub's API

1. In Shipyard, click **New Fleet** in the top left corner.
2. Select a Project for this Fleet to be placed in and click **Select Project**. This will take you to the Fleet Builder.

<Tabs
groupId="vessel-type"
defaultValue="native"
values={[
{label: 'Native Blueprint', value: 'native'},
{label: 'Code', value: 'code'},
]}>
<TabItem value="native">

3. Under **HTTP**, select **Requests**. This will create a Vessel for you in the Fleet Builder.
4. Under **Vessel Name**, enter `Create GitHub Issue`.
5. Under **Method**, select **POST**.
6. Under **URL**, enter `https://api.github.com/repos/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME/issues` and insert your username and repository name in the marked spots.
7. Under **Content Type**, select **application/x-www-form-urlencoded**.
8. Under **Authorization Header**, enter `token YOUR_API_CREDENTIAL` and insert your api credential from GitHub.
9. Under **Message**, enter `{"title":"YOUR_REPOSITORY_NAME","body":"Test Issue"}` and insert your repository name.

![](../.gitbook/assets/shipyard_2022_12_13_09_51_19.png)

:::info
You can connect a Vessel to the Request Vessel to receive the API response by sending response.txt with Slack or Email or storing it in a Cloud Storage Container. 
:::

10. Click **Save & Finish** on the bottom right of your screen. This will take you to a page letting you know that your Fleet has been created successfully. 
11. Click **Run Now**. This will take you to the [Fleet Log](../reference/logs/fleet-logs.md) page for your Fleet run.

</TabItem>

<TabItem value="code">

3. Under **Code Vessels**, select **Python**. This will create a Vessel for you in the Fleet Builder.
4. Under **Vessel Name**, enter `Create GitHub Issue`.
5. Under **File to Run**, enter `create_github_issue.py`.
6. Under **Code**, enter:

```python
import requests
import os

token = os.environ.get('api_token')

headers = {
    'Authorization': f'token {token}',
    'Content-Type': 'application/x-www-form-urlencoded',
    
}

data = '{"title":"YOUR_REPOSITORY_NAME","body":"Test Issue"}'

response = requests.post('https://api.github.com/repos/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME/issues', headers=headers, data=data)

print(response.text)
```
![](../.gitbook/assets/shipyard_2022_12_12_14_50_12.png)

7. In the code, you will need to replace the title of the data field with your specific repository name.
8. Also in the code, you will need to place your GitHub username and repository name into the API URL in the request.
9. Click **Environment Variables**.
10. Click **Add Enivronment Variable**.
11. In the **name** field, enter `api_token`

:::info
The environment variable that we just created is accessed in the code using the line os.environ.get('api_token').
:::

12. In the **hidden** field, enter the API Token that you generated earlier from GitHub.
13. Click **Python Packages**.
14. Click **Add Python Package**
15. In the **name** field, enter requests.
    
![](../.gitbook/assets/shipyard_2022_12_12_14_57_51.png)

16. Click **Save & Finish** on the bottom right of your screen. This will take you to a page letting you know that your Fleet has been created successfully. 
17. Click **Run Now**. This will take you to the [Fleet Log](../reference/logs/fleet-logs.md) page for your Fleet run.

</TabItem>
</Tabs>

### Step 3: Verify that the Issue was Created

<Tabs
groupId="vessel-type"
defaultValue="native"
values={[
{label: 'Native Blueprint', value: 'native'},
{label: 'Code', value: 'code'},
]}>
<TabItem value="native">
1. Once the Fleet has finished running successfully, click the green rectangle from the gantt chart to view the Vessel log.
2. The Vessel log confirms that the request was successfully sent to the API.

![](../.gitbook/assets/shipyard_2022_12_13_09_56_48.png)

3. Over in Github, navigate to the repository where you created the issue.
4. Select **Issues**.

![](../.gitbook/assets/shipyard_2022_12_12_15_18_09.png)

5. You can see the Issue that we created using the API listed.

![](../.gitbook/assets/shipyard_2022_12_12_15_19_00.png)

:::tip success
You've successfully used Shipyard to create an issue in GitHub using an API call.
:::
</TabItem>

<TabItem value="code">

1. Once the Fleet has finished running successfully, click the green rectangle from the gantt chart to view the Vessel log.
2. The Vessel log has the response from the API printed. You should be able to see the url of the Issue created.

![](../.gitbook/assets/shipyard_2022_12_12_15_16_09.png)

3. Over in Github, navigate to the repository where you created the issue. 
4. Select **Issues**.

![](../.gitbook/assets/shipyard_2022_12_12_15_18_09.png)

5. You can see the Issue that we created using the API listed.

![](../.gitbook/assets/shipyard_2022_12_12_15_19_00.png)

:::tip success
You've successfully used Shipyard to create an issue in GitHub using an API call.
:::
</TabItem>
</Tabs>

