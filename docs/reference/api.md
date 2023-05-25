---
id: api
title: API
hide_title: true
description: Information about how to interact with the Shipyard API.
keywords:
  - api
  - organizations
  - fleets
  - logs
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# API

## Overview

The **API** allows for programmatic access to a subset of Shipyard's features. This allows users to write scripts and programs to directly interact with the Shipyard platform instead of through the UI interface.

:::info
Shipyard's API is currently only available to customers on paid plans.

**Please Note**
1. The API is subject to change. The API is tightly coupled with the front end of the application, which is subject to change between releases. While endpoints usually won’t change that much, if you write code to use the API, you might have to update it in the future.
2. The API isn’t versioned. This means that functionality can change version to version, so don’t expect to stay on a particular version of Shipyard in order to use a “stable” API.
:::

## Authorization

In order to interact with the API, an **API key** is required.

1. Navigate to your user's [**Settings**](https://app.shipyardapp.com/user/settings) page

![Settings page API keys](../.gitbook/assets/settings-page-api-keys.png)

2. On the right side of the page, enter a name in the **API key name** text field
3. Click the **Create API Key** button

![API keys add new key](../.gitbook/assets/api-keys-add-new-key.png)

4. Copy the generated API key value - _this is the **only time** the value will be available_

![API keys generated API key value](../.gitbook/assets/shipyard_2022_11_14_21_38_45.png)


:::caution

Treat all API keys like passwords and do not commit them to code or share them with unauthorized parties

:::

Access for an API key can be revoked by clicking the **Delete** button next to its name in the list.

## Endpoints

These are the currently available endpoints as well as example requests and responses. Note that the ID values would be substituted for the actual UUID values in a real-world request. The API key is the example one generated in the **Authorization** section above.

The response code snippets have been truncated for brevity.

### List Organizations

#### Request

<Tabs
groupId="languages"
defaultValue="bash"
values={[
{label: 'Bash', value: 'bash'},
{label: 'Python', value: 'python'},
]}>
<TabItem value="bash">

```bash
curl https://api.app.shipyardapp.com/orgs --header "X-Shipyard-API-Key: <api_key>"
```

</TabItem>
<TabItem value="python">

```python
import requests

headers = {
    'X-Shipyard-API-Key': '<api_key>',
}

response = requests.get('https://api.app.shipyardapp.com/orgs', headers=headers)
```

</TabItem>
</Tabs>



#### Response

```json
{
	"data_kind": "organizations",
	"data": [
		{
			"id": "<org_id>",
			"name": "example organization",
			"created_at": "2019-08-22T21:53:30.095954Z",
			...
		}
	]
}
```

### List Organization Fleets

#### Request

<Tabs
groupId="languages"
defaultValue="bash"
values={[
{label: 'Bash', value: 'bash'},
{label: 'Python', value: 'python'},
]}>
<TabItem value="bash">

```bash
curl https://api.app.shipyardapp.com/orgs/<org_id>/fleets --header "X-Shipyard-API-Key: <api_key>"
```

</TabItem>
<TabItem value="python">

```python
import requests

headers = {
    'X-Shipyard-API-Key': '<api_key>',
}

response = requests.get('https://api.app.shipyardapp.com/orgs/<org_id>/fleets', headers=headers)
```

</TabItem>
</Tabs>


#### Response

```json
{
	"data_kind": "fleets",
	"data": [
		{
			"org_id": "<org_id>",
			"id": "<fleet_id>",
			"name": "confident_oyster",
			"pallet_ids": [
				"<vessel_id>"
			],
			"created_at": "2022-07-21T21:37:30.623386Z",
			"vessel_dag": {
				"vertices": [
					"<vessel_id>"
				],
				"versions": [
					1
				],
				"edges": []
			},
			...
		}
	]
}
```
### Get Fleet

#### Request

<Tabs
groupId="languages"
defaultValue="bash"
values={[
{label: 'Bash', value: 'bash'},
{label: 'Python', value: 'python'},
]}>
<TabItem value="bash">

```bash
curl https://api.app.shipyardapp.com/orgs/<org_id>/projects/<project_id>/fleets/<fleet_id> --header "X-Shipyard-API-Key: <api key>"
```

</TabItem>
<TabItem value="python">

```python
import requests

headers = {
    'X-Shipyard-API-Key': '<api key>',
}

response = requests.get(
    'https://api.app.shipyardapp.com/orgs/<org_id>/projects/<project_id>/fleets/<fleet_id>',
    headers=headers,
)
```

</TabItem>
</Tabs>


#### Response

The Fleet is returned in [FAC YAML](fleets/yaml-editor.md) format.

```yaml
name: example fleet
vessels:
    first_vessel:
	...
```

### Upsert Fleet

#### Request

<Tabs
groupId="languages"
defaultValue="bash"
values={[
{label: 'Bash', value: 'bash'},
{label: 'Python', value: 'python'},
]}>
<TabItem value="bash">

```bash
curl -X PUT https://api.app.shipyardapp.com/orgs/<org_id>/projects/<project_id>/fleets --data-binary @fleet.yaml --header "Content-type: application/yaml" --header "X-Shipyard-API-Key: <api_key>"
```

</TabItem>
<TabItem value="python">

```python
import requests

headers = {
    'Content-type': 'application/yaml',
    'X-Shipyard-API-Key': '<api_key>',
}

with open('fleet.yaml', 'rb') as f:
    data = f.read()

response = requests.put(
    'https://api.app.shipyardapp.com/orgs/<org_id>/projects/<project_id>/fleets',
    headers=headers,
    data=data,
)
```

</TabItem>
</Tabs>


The contents of `fleet.yaml` would be in the required [FAC format](fleets/yaml-editor.md).

#### Response

The Fleet is returned in [FAC YAML](fleets/yaml-editor.md) format.

```yaml
name: example fleet
vessels:
    first_vessel:
	...
```



### List Fleet Runs

#### Request

<Tabs
groupId="languages"
defaultValue="bash"
values={[
{label: 'Bash', value: 'bash'},
{label: 'Python', value: 'python'},
]}>
<TabItem value="bash">

```bash
curl https://api.app.shipyardapp.com/orgs/<org_id>/projects/<project_id>/fleets/<fleet_id>/runs --header "X-Shipyard-API-Key: <api_key>"
```

</TabItem>
<TabItem value="python">

```python
import requests

headers = {
    'X-Shipyard-API-Key': '<api_key>',
}

response = requests.get(
    'https://api.app.shipyardapp.com/orgs/<org_id>/projects/<project_id>/fleets/<fleet_id>/runs',
    headers=headers,
)
```

</TabItem>
</Tabs>


#### Response

The Fleet Runs are returned in CSV format.

```csv
Fleet ID,Fleet Name,Fleet Version,...
fleet_id,example fleet,1,...
```

Below is a reference table for the Fleet Runs CSV.

| Column | Description |
|---|---|
| Fleet ID | The UUID of the associated Fleet |
| Fleet Name | The name of the associated Fleet |
| Fleet Version | The version number of the associated Fleet |
| Fleet Log ID | The UUID of the Fleet Run log |
| Status | The status the Fleet Run completed in |
| Start Time | The time the Fleet Run started |
| End Time | The time the Fleet Run ended |
| Duration | The length of time the Fleet Run ran for |
| Billable Runtime | The length of time the Fleet Run ran the customer will be billed for |
| Vessels Count | The number of Vessels in the associated Fleet |
| Trigger | The method the Fleet Run was started by |

### Trigger Fleet Runs

#### Request

This request triggers a fleet to run with the option to override environment variables. 
It will always trigger the latest version of the fleet.

<Tabs
groupId="languages"
defaultValue="bash"
values={[
{label: 'Bash', value: 'bash'},
{label: 'Python', value: 'python'},
]}>
<TabItem value="bash">

```bash
curl -X POST https://api.app.shipyardapp.com/orgs/<org_id>/projects/<project_id>/fleets/<fleet_id>/fleetruns --header "X-Shipyard-API-KEY: <api_key>" -data '{json_data}'
```
</TabItem>
<TabItem value="python">

```python
import requests

headers = {
    'Accept': 'application/json',
    'X-Shipyard-API-Key': '<api_key>',
    'Content-Type': 'application/json',
}

json_data = {{json_data}}

response = requests.post(
    'https://api.app.shipyardapp.com/orgs/<org_id>/projects/<project_id>/fleets/<fleet_id>/fleetruns',
    headers=headers,
    json=json_data,
)
```

</TabItem>
</Tabs>

As an example, the contents of `json_data` are:

<Tabs
groupId="languages"
defaultValue="json"
values={[
{label: 'JSON', value: 'json'},
{label: 'Python', value: 'python'},
]}>

<TabItem value="json">

```json
{
  "vessel_overrides": [
    {
      "name": "Vessel A",
      "environment_variable_overrides": {
        "ENV_VAR_1": "One",
        "ENV_VAR_2": "Two",
        "ENV_VAR_3": "Three",
        "explicit_empty": "",
        "explicit_do_not_set": null
      }
    },
    {
      "name": "Vessel B",
      "environment_variable_overrides": {
        "ENV_VAR_A": "Apple",
        "ENV_VAR_B": "Blossom",
        "ENV_VAR_C": "Chai"
      }
    }
  ]
}
```
</TabItem>
<TabItem value="python">

```python
{
  "vessel_overrides": [
    {
      "name": "Vessel A",
      "environment_variable_overrides": {
        "ENV_VAR_1": "One",
        "ENV_VAR_2": "Two",
        "ENV_VAR_3": "Three",
        "explicit_empty": "",
        "explicit_do_not_set": none
      }
    },
    {
      "name": "Vessel B",
      "environment_variable_overrides": {
        "ENV_VAR_A": "Apple",
        "ENV_VAR_B": "Blossom",
        "ENV_VAR_C": "Chai"
      }
    }
  ]
}
```

</TabItem>
</Tabs>

There are several things to note regarding the `json` payload.

1. The `name` value is the name of the Vessel that you'd like to override.
2. `environment_variable_overrides` are the environment variables you'd like to override.
3. Replace the left-hand side with the name of the environment variable you'd like to override and the 
   right-hand side with the new value.
   
   *Note:* This is case sensitive.
4. If the environment variable override value is an empty string `""`, the variable will be overridden and 
   set to empty.
5. If the environment variable override value is `null` or `none`, that value will be ignored and not set.
6. If the environment variable override is not provided, the value set in the UI will be used.

#### Response

The response is returned in JSON format.

```json
{
   "request" : {
      "id" : "955939cc-2b90-4b8e-bf23-7375cd87822b"
   },
   "data" : {
      "fleet_id" : "cc3737df-06ee-431a-8f87-1e79f1eed6d6",
      "project_id" : "d1680f76-3b3c-420e-bbf3-9d62c6a2b450",
      "org_id" : "2d52c575-989e-4642-bc63-c63408ee3fd8",
      "fleet_run_id" : "ad4d4655-91fd-4499-9a1a-06d6e8a433d4"
   },
   "log": "https://api.app.shipyardapp.com/<org_name>/projects/<project_id>/fleets/<fleet_id>/logs/<fleet_run_id>"
}
```

After a successful Fleet run trigger, the Fleet will run with the environment variables defined in the payload being overridden. 

### List Voyages

#### Request

This request returns all of the Voyages in the requested Organization.

<Tabs
groupId="languages"
defaultValue="bash"
values={[
{label: 'Bash', value: 'bash'},
{label: 'Python', value: 'python'},
]}>
<TabItem value="bash">

```bash
curl https://api.app.shipyardapp.com/orgs/<org_id>/voyages --header "X-Shipyard-API-Key: <api_key>"
```

</TabItem>
<TabItem value="python">

```python
import requests

headers = {
    'X-Shipyard-API-Key': '<api_key>',
}

response = requests.get('https://api.app.shipyardapp.com/orgs/<org_id>/voyages', headers=headers)
```

</TabItem>
</Tabs>


#### Response

The Voyages are returned in CSV format.

```csv
Fleet ID,Fleet Name,Fleet Version,...
fleet_id,example fleet,1,...
```

Below is a reference table for the Fleet Runs CSV.

| Column | Description |
|---|---|
| Fleet ID | The UUID of the Fleet |
| Fleet Name | The name of the Fleet |
| Fleet Version | The version number of the Fleet |
| Fleet Log ID | The UUID of the Fleet log |
| Fleet Log Trigger | The method the Fleet was started by |
| Fleet Log Status | The status the Fleet completed in |
| Vessel Log ID | The UUID of the Vessel log |
| Vessel Status | The status the Vessel completed in |
| Vessel Name | The name of the Vessel |
| Vessel Trigger | The method the Vessel was started by |
| Retries | The number of times the Vessel attempted to run |
| Exit Code | The final exit code for the Vessel final run |
| Vessel Start Time | The time the Vessel started |
| Vessel End Time | The time the Vessel ended |
| Duration | The length of time the Fleet ran for |
| Billable Runtime | The length of time the Fleet ran the customer will be billed for |

### Create External File

#### Request

This request is used to upload a file containing the code to be executed as part of a Vessel. Note that it is a prerequisite for **Create Blueprint** and optionally **Updated Blueprint** endpoints below.

<Tabs
groupId="languages"
defaultValue="bash"
values={[
{label: 'Bash', value: 'bash'},
{label: 'Python', value: 'python'},
]}>
<TabItem value="bash">

```bash
curl -X POST https://api.app.shipyardapp.com/orgs/<org_id>/temporary_external_files --header "X-Shipyard-API-Key: <api_key>" -F file=@script.py
```

</TabItem>
<TabItem value="python">

```python
import requests

headers = {
    'X-Shipyard-API-Key': '<api_key>',
}

files = {
    'file': open('script.py', 'rb'),
}

response = requests.post(
    'https://api.app.shipyardapp.com/orgs/<org_id>/temporary_external_files',
    headers=headers,
    files=files,
)
```

</TabItem>
</Tabs>


As an example, the contents of `script.py` are:

```python
print('hello, world!')
```

#### Response

The response is returned in JSON format.

```json
{
	"data":{
		"RequestID":"<request_id>",
		"ExternalFile":"s3://production-shipyard-uploads-tmp/tmp/organizations/<org_id>/requests/<request_id>.sefv2_<file_id>"
	}
}
```

The request ID and external file URL will both be used in subsequent requests to the API.

### Create Blueprint

#### Request

The request creates a new [Organization Blueprint](reference/blueprints/blueprints-overview.md) under the specified Organization. 

<Tabs
groupId="languages"
defaultValue="bash"
values={[
{label: 'Bash', value: 'bash'},
{label: 'Python', value: 'python'},
]}>
<TabItem value="bash">

```bash
curl -X POST https://api.app.shipyardapp.com/orgs/<org_id>/blueprints --header "X-Shipyard-API-Key: <api_key>" -d @blueprint.json
```

</TabItem>
<TabItem value="python">

```python
import requests

headers = {
    'X-Shipyard-API-Key': '<api_key>',
    'Content-Type': 'application/x-www-form-urlencoded',
}

blueprint_file = open('blueprint.json')
blueprint_data = blueprint_file.read().replace('\n', '').replace('\r', '').encode()

response = requests.post(
    'https://api.app.shipyardapp.com/orgs/<org_id>/blueprints',
    headers=headers,
    data=blueprint_data,
)
```

</TabItem>
</Tabs>

As an example, the contents of `blueprint.json` are:

```json
{
    "name": "test blueprint",
    "synopsis": "example synopsis",
    "description": "example description",
    "state": 3,
    "pallet_type": 2,
    "pallet_config": {
        "version": "3.7",
        "command": {
            "program": "python3",
            "file_to_run": "script.py"
        },
        "external_file": {
            "temp": {
                "file_name": "script.py",
                "id": "<request_id>",
                "url": "s3://production-shipyard-uploads-tmp/tmp/organizations/<org_id>/requests/<request_id>.sefv2_<file_id>"
            }
        }
    },
    "spec_list": [
		{
            "display_name": "First Input",
            "name": "FIRST_INPUT",
            "type": 1,
            "required": false,
            "placeholder": "Enter a first input",
            "description": "A first input",
            "default": "example_value",
            "type_spec": {
                "multiline": false
            }
        }
	],
    "retry_strategy": {
        "number_of_retries": 3,
        "ttr": 900
    },
    "runtime_timeout": 2700,
    "exclude_exit_code_ranges": [
		[1,1],
		[3,5]
	]
}
```

There are several things to note regarding the `blueprint.json` payload.

1. `state` value options are `1` (Disabled), `2` (Draft), and `3` (Enabled).
2. `pallet_type` value options are `2` (Python), `3` (Bash), and `7` (Node).
3. `program` value options are `python3`, `bash`, and `node` and should correspond with `pallet_type`.
4. `type` for a `spec_list` object value options are `1` (String), `2` (Integer), `3` (Floating), `4` (Boolean), `5` (Date), `6` (Select), `7` (Password), `8` (External file).
5. `number_of_retries` can be between `0` and `24`.
6. `ttr` can be between `0` and `3600` in increments of `300`.
7. `runtime_timeout` can be between `300` and `3600`.
8. `exclude_exit_code_ranges` may contain an array of arrays each with two integers between `1` and `255` - in the example above, the exit codes `1`, `3`, `4`, and `5` are ignored.
9. `external_file` holds a `temp` field with an object with `id` and `url` keys - these are populated using the `RequestID` and `ExternalFile` values from the **Create External File** response above in this example.

#### Response

The response is returned in JSON format.

```json
{
	"data":{
		"DependencyCount": 0,
		"CategoryIds": null
	}
}
```

After a successful create, the `DependencyCount` will be `0` since it has not been included in a Vessel yet.

### Update Blueprint

#### Request

This updates an existing Blueprint and has many similarities with the **Create Blueprint** endpoint above.

<Tabs
groupId="languages"
defaultValue="bash"
values={[
{label: 'Bash', value: 'bash'},
{label: 'Python', value: 'python'},
]}>
<TabItem value="bash">

```bash
curl -X POST https://api.app.shipyardapp.com/orgs/<org_id>/blueprints/<blueprint_id> --header "X-Shipyard-API-Key: <api_key>" -d @blueprint_updates.json
```

</TabItem>
<TabItem value="python">

```python
import requests

headers = {
    'X-Shipyard-API-Key': '<api_key>',
    'Content-Type': 'application/x-www-form-urlencoded',
}

blueprint_file = open('blueprint.json')
blueprint_data = blueprint_file.read().replace('\n', '').replace('\r', '').encode()

response = requests.post(
    'https://api.app.shipyardapp.com/orgs/<org_id>/blueprints/<blueprint_id>',
    headers=headers,
    data=blueprint_data,
)
```

</TabItem>
</Tabs>

The same `blueprint.json` payload options in **Create Blueprint** maybe be used in **Update Blueprint** however `pallet_type` cannot change and the `pallet_config` field `temp` may be updated with new `id` and `url` values if a new external file has been generated via **Create External File** above.

Any fields omitted from `blueprint_updates.json` will not be updated in the request. The exception is `spec_list` which is a _full replace_ of any existing values.

#### Response

The response is returned in JSON format.

```json
{
	"data":{
		"DependencyCount": 0,
		"CategoryIds": null
	}
}
```

After a successful update, the `DependencyCount` will be show a count of however many Vessels have been created using the Blueprint.