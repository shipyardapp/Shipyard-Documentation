---
id: create-fleet-with-api
title: Create a Fleet using the API
hide_title: true
description: In-depth tutorial to walk you through the steps needed to create a Fleet with the API
keywords:
  - api
  - fleet
---

# Create a Fleet using the API

## Overview

In this tutorial, we will walk through the steps needed to create a Fleet using an API call. The tutorial will provide an example YAML for the Fleet, however the steps will work with any YAML. 

By the end of this tutorial, you'll be able to: 

- Call the Shipyard API to create a Fleet

## Setup


First, download the [YAML configuration file](https://drive.google.com/file/d/1HKUaep0Jeh-RXVLkhtU-ewd6SKzUIDoq/view?usp=sharing) named `tutorial.yaml`. This configuration file contains all of the details for a Fleet in Shipyard.

Feel free to peruse this YAML beforehand so you understand everything that it's doing. The YAML creates three Vessels in a Fleet:
1. Execute Fivetran Sync
2. Execute dbt Cloud Job
3. Trigger Tableau Datasource Refresh

:::tip
The YAML as created does not have any inputs filled out. If you have inputs for the three services in the example, feel free to replace `<your_value>` with actual values for the Blueprints.
:::

The API call that we will use in this tutorial requires that you have the following: 
- [Shipyard API Key](../blueprint-library/shipyard-api/shipyard-api-authorization.md)
- [Org ID](org-id-with-api.md)

Once we have those two values, we are ready to get started.

## Steps

1. Copy and paste the following code into your development environment: 

```python
import requests

headers = {
    'X-Shipyard-API-Key': '<Your-API-Key>',
    'Content-Type': 'application/x-www-form-urlencoded',
}

with open('tutorial.yaml', 'rb') as f:
    data = f.read()

response = requests.put(
    'https://api.app.shipyardapp.com/orgs/<Your-Org-ID>/projects/<Your-Project-ID>/fleets',
    headers=headers,
    data=data,
)

print(response.text)
```
2. Ensure that the `requests` package is installed by running `pip install requests` or `pip3 install requests`.  

3. Insert your Shipyard API Key, Organization ID, and Project ID into the code that you pasted. You can find your Project ID in the URL in Shipyard: app.shipyardapp.com/Shipyard%20Tutorials/projects/`d93de112-5d5a-40a9-b1cd-f329d504ab82`/fleets


4. Run the script. If the API call is successful, you will receive the YAML printed back to you with the print statement at the end of the script.

![](../.gitbook/assets/shipyard_2023_02_13_10_29_49.png)

4. Head into Shipyard and the specific Project whose ID you added into the Python script earlier. You should see the Fleet listed in the Project now.

![](../.gitbook/assets/shipyard_2023_02_13_10_34_28.png)

5. Click the Fleet name to open the Fleet Builder where you can enter any inputs that you left blank from the initial YAML.

:::tip Success
You've successfully created a Fleet using a Shipyard API call.
:::