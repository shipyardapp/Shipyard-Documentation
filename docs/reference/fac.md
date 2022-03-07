---
id: fac
title: FAC
hide_title: true
description: Information about how to work with and write FAC files.
keywords:
  - workflow
  - fac
  - dag
  - flow
  - dataflow
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# FAC

## Definition

"Fleets As Code" ("FAC") is a YAML-based definition of a Shipyard [Fleet](fleets.md). This system allows for users to take a more code-based approach to constructing their workflow definitions. Additionally, it makes it easier for users to share their configured workflows with teammates and other developers.

Below is a breakdown of a typical FAC YAML file and some guidance for working with these resources.

## Anatomy

Below are the top-level fields that make up a FAC YAML file. Sub-objects are defined beneath these as needed.

---

#### `name`

`name` is the string name of the Fleet. It is a **required** field.

If both a `name` and `_id` field are provided at the top-level of the file, Shipyard will attempt to update a Fleet with that `_id` value with the `name` field.

---

#### `_id`

`_id` is an optional top-level value representing the ID of an existing Fleet. If provivded, Shipyard will attempt to look it up and apply the FAC YAML as an update to the Fleet.

If the ID value does _not_ exist, Shipyard will attempt to create a new Fleet with the information provided.

---

#### `vessels`

`vessels` represents the [Vessels](vessels.md) that constitute the Fleet. Keys represent the name of the Vessel and must be unique within the Fleet object. Values are the Vessel definition represented as a YAML object which may be code-based, Blueprint-based, or Git-based.

Vessels may have a `_id` top-level field.

```yaml
long_vessel_name:
  _id: example_uuid
```

If `_id` is provided, Shipyard will attempt to find and update the Vessel with the provided values.

Below are examples of the three types with accompanying notes on the various fields that go under the `source` field.

<Tabs
groupId="sourceCodeTypes"
defaultValue="code"
values={[
{label: 'Code', value: 'code'},
{label: 'Blueprint', value: 'blueprint'},
{label: 'Git', value: 'git'},
]}>
<TabItem value="code">

```yaml
source:
  type: CODE
  language: PYTHON
  file:
    name: script.py
    content: |
      for i in range(10):
        print(i)
  file_to_run: script.py
```

- `language` may be one of `PYTHON`, `BASH`, or `NODE`
- `name` is a string represented the file name containing the code
- `content` is a string or multiline string containing the code
- `file_to_run` indicates the file to run that contains the Vessel code - for a `CODE` Vessel type, this is likely the same as `name` above

</TabItem>
<TabItem value="blueprint">

```yaml
source:
  type: BLUEPRINT
  blueprint: "Email - Send Message"
  inputs:
    EMAIL_SENDER_ADDRESS: example@email.com
...
```

- `blueprint` is the name of the Blueprint created separately from the Fleet - it must match the name exactly and may either be a [Library Blueprint](blueprint-library/blueprint-library-overview.md) or an [Organization Blueprint](blueprints.md)
- `inputs` are a key-value pair representing the [input variable](inputs/blueprint-variables.md) name and value
	- the "key" maps to the [Reference Name](inputs/blueprint-variables.md/#reference-name) for any Blueprint Input
	- if the Blueprint is configured so that the input is a "password" type, when this FAC is fetched back to the user it will show `SHIPYARD_HIDDEN` to obfuscate the value

</TabItem>
<TabItem value="git">

```yaml
source:
  type: CODE
  language: PYTHON
  git:
    repository: owner/repo
    checkout_point: master
    clone_location: REPO_NAME
  file_to_run: script.py
```

- `repository` is a string representing the GitHub repository owner and name
- `checkout_point` is a string representing the branch or tag to checkout
- `clone_location` indicates where to download the repo to and may either be `REPO_NAME` or `CWD`
- `file_to_run` is a string representing the file to for any Vessel type that requires it
- see [Git connections](code/git-connection.md) for more information

</TabItem>
</Tabs>

In addition to these code source-specific objects, there the standard requirements configurations common to all Vessels are also available within the `source` field. _These are all optional_. See examples below.

<Tabs
groupId="sourceRequirementTypes"
defaultValue="arguments"
values={[
{label: 'Arguments', value: 'arguments'},
{label: 'Environment Variables', value: 'environmentVariables'},
{label: 'Packages', value: 'packages'},
{label: 'System Packages', value: 'systemPackages'},
]}>
<TabItem value="arguments">

```yaml
source:
  ...
  arguments:
    - key: example_key_1
      value: example_value_1
	- { key: example_key_2, value: example_value_2 }
```

</TabItem>
<TabItem value="environmentVariables">

```yaml
source:
  ...
  environment:
    - name: variable_name_1
      value: variable_value_1
	- { name: variable_name_2, value: variable_value_2 }
```

See [Environment Variables](requirements/environment-variables.md) for more information

</TabItem>
<TabItem value="packages">

```yaml
source:
  ...
  packages:
    - name: example_package
	  version: '==1.0.0'
```

- `version` is an optional string value

See [Packages](requirements/external-package-dependencies.md) for more information.

</TabItem>
<TabItem value="systemPackages">

```yaml
source:
  ...
  system_packages:
    - name: example_package
```

These are the same structure as `packages` above and are available for `PYTHON` and `NODE` Vessel types only. See [System Packages](requirements/system-package-dependencies.md) for more information

</TabItem>
</Tabs>

Additionally, there are optional [Guardrail](settings/guardrails.md) and [Notification](settings/notifications.md) settings available for Vessel objects. See below for examples.

**Guardrails**

```yaml
vessel_name:
  ...
  guardrails:
    retry_count: 3
    retry_wait: 5m0s
    runtime_cutoff: 15m0s
    exclude_exit_code_ranges:
      - 2
	  - '3-5'
```

- `retry_count` is an integer representing the number of times to retry a Vessel if it fails (max of 24)
- `retry_wait` is a string representing the amount of time to wait between retries (max of 1h) - the example above indicates a retry wait of 5 minutes
- `runtime_cutoff` is a string representing the amount of time to wait before killing a Vessel (max of 4h) - the example above indicates a runtime cutoff of 15 minutes
- `exclude_exit_code_ranges` is an array of values (integers or strings formated at "N-N") representing the exit codes to exclude from the Vessel's exit code range - the example above indicates that exit codes `2`, `3`, `4`, and `5` should be excluded

Formatting for `retry_wait` and `runtime_cutoff` follow a "#h#m#s" format for hours, minutes, and seconds. These values must be divisible by 5 minute increments.

**Notifications**

```yaml
vessel_name:
  ...
  notifications:
    emails:
      - example@email.com
	  - another@email.com
    after_error: true
    after_on_demand: false
```

- `emails` is an array of email addresses to send notifications to
- `after_error` is a boolean indicating whether to send a notification after a Vessel after a Vessel completes with a [status](other-functions/status.md) of Errored
- `after_on_demand` is a boolean indicating whether to send a notification after a Vessel is run on demand

---

#### `connections`

`connections` is a top-level field that defines the graph of how the Vessels defined in the `vessels` section are connected.

Each key in the object is a Vessel name value (if provided) representing the "from" Vessel and the value is an object that contains the "to" Vessel(s) and the connection type. See below for an example.

```yaml
connections:
  vessel_one:
    vessel_two: SUCCESS
  vessel_two:
    vessel_three: SUCCESS
    vessel_four: ERRORED
```

This example indicates that if `vessel_one` succeeds, it will invoke `vessel_two` and if `vessel_two` succeeds, it will invoke `vessel_three`. If `vessel_two` fails, it will invoke `vessel_four`.

Below is what the YAML configuration above would look like in the graph editor.

![FAC Fleet connections](../.gitbook/assets/fac-fleet-connections-example.png)

See [Fleets](fleets.md) documentation for more information on connections.

---

#### `triggers`

Currently, the triggers supported in FAC are [Schedules](triggers/schedule-triggers.md). These are defined as an array of objects under the `schedules` field. See below for an example.

```yaml
triggers:
  schedules:
    - how_often: HOURLY
      at: ':00'
    - how_often: DAILY
      at: '2:00'
    - how_often: WEEKLY
      at: '3:00'
      when: WEDNESDAY
    - how_often: MONTHLY
      at: '22:00'
      when: 1
```

In these examples there are four schedules set on the Fleet. Note that the times are represented in 24-hour format.

1. running hourly on the hour
2. running daily at 2:00 AM
3. running weekly on Wednesday at 3:00 AM
4. running monthly on the 1st at 10:00 PM

---

#### `notifications`

This is the same object available under the Vessels `notifications` field. If configured, this will emit notifications based on actions of the full Fleet.

```yaml
notifications:
emails:
	- example@email.com
	- another@email.com
after_error: true
after_on_demand: false
```

## Examples and Templates

Below is a full example FAC file.

```yaml
name: Example Fleet
vessels:
    FirstVessel:
        source:
            type: CODE
            language: PYTHON
            file:
                name: script.py
                content: "print('hello, world!')"
            file_to_run: script.py
            arguments:
                - '-example_arg': example_value
            environment:
                - name: example_name_a
                  value: example_value_a
                - { name: example_name_b, value: example_value_b }
        guardrails:
            retry_count: 1
            retry_wait: 5m
            runtime_cutoff: 10m
            exclude_exit_code_ranges:
                - 2
	            - '3-5'
    SecondVessel:
        source:
            type: BLUEPRINT
            blueprint: 'Example Blueprint'
            inputs:
                FIRST_INPUT: 'blueprint input value' 
connections:
    FirstVessel:
        SecondVessel: SUCCESS
triggers:
    schedules:
        - how_often: HOURLY
          at: ':25'
notifications:
    emails:
        - example@emailcom
    after_error: true
    after_on_demand: false
```
