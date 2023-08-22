# Sanity Loader

This CLI is designed to perform create and update operations on blueprints using the Shipyard and Sanity APIs.

## Installation

1. Install the package by running the following:

```bash
python3 -m pip install git+https://github.com/shipyardapp/sanity-loader
```

## Usage

Within the environment that the package is installed, run the following

```bash
sanship [command] [option]
```

### Commands

The `sanship` CLI supports the following commands:

 `create`: Creates a new blueprint in the Shipyard Application from a document in Santiy
 
 #### Options
 - `--shipyard-token`: The Shipyard token to use for authentication. If left blank will look for environment variable `SHIPYARD_API_TOKEN` or `STAGING_API_TOKEN`
 - `--sanity-token`: The Sanity token to use for authentication. If left blank will look for environment variable `SANITY_API_TOKEN`
 - `--dataset`: The Sanity dataset to create the blueprint from. Choices are `dev` and `production`, with `dev` being the default
 - `--env`: The Shipyard environment to create the blueprint in. Choices are `staging` and `prod` with `staging` being the default
 - `--org-id`: The Shipyard organization to perform the operation in. Default is `5b547184-2ea8-49a5-9ffa-033a5db1b42d`, the Shipyard Blueprint Library org
 - `--blueprint`: The name of the blueprint to create in the format of "Vendor - Blueprint Action". Recommended for single use. 
 - `--query`: The GROQ query of the Sanity documents to create blueprints. Recommended for bulk use. 

**NOTE** Either a GROQ query or a blueprint must be provided in order to create

<br>
`update`: Updates a blueprint in the Shipyard Application from a document in Sanity

#### Options
 - `--shipyard-token`: The Shipyard token to use for authentication. If left blank will look for environment variable `SHIPYARD_API_TOKEN` or `STAGING_API_TOKEN`
 - `--sanity-token`: The Sanity token to use for authentication. If left blank will look for environment variable `SANITY_API_TOKEN`
 - `--dataset`: The Sanity dataset to update the blueprint from. Choices are `dev` and `production`, with `dev` being the default
 - `--env`: The Shipyard environment to update the blueprint in. Choices are `staging` and `prod` with `staging` being the default
 - `--org-id`: The Shipyard organization to perform the operation in. Default is `5b547184-2ea8-49a5-9ffa-033a5db1b42d`, the Shipyard Blueprint Library org
 - `--blueprint`: The name of the blueprint to update in the format of "Vendor - Blueprint Action". Recommended for single use. 
 - `--query`: The GROQ query of the Sanity documents to update blueprints. Recommended for bulk use.
 - `--blueprint-id`: The Shipyard ID of the blueprint to update. Recommended for single use. 

 **NOTE** Either a GROQ Query, Blueprint, or Blueprint ID must be provided in order to udpate

<br>

`copy`: Copies a Sanity document from one Sanity dataset to another. If the document title exists, it will simply overwrite the existing one. If it does not exist, then it will create a new one. 
#### Options
 - `--sanity-token`: The Sanity token to use for authentication. If left blank will look for environment variable `SANITY_API_TOKEN`
 - `--source`: The Sanity dataset to copy the document(s) from
 - `--destination`: The Sanity dataset to copy the document(s) to
 - `--blueprint`: The name of the blueprint document to copy
 - `--query`: The GROQ query of the blueprint documents to copy over

## Examples

#### Create a Blueprint

```python3
sanship create --shipyard-token <my_token> --sanity-token <sanity_token> --env prod --dataset production --blueprint "Jira - Create Ticket"
```

The same can be performed by omitting the tokens (assuming you have set environment variables accordingly)

```python3
sanship create --env prod --dataset production --blueprint "Jira - Create Ticket"
```


#### Update a Blueprint

```python3
# by omitting --env and --dataset, we will be using the staging environment and the dev dataset
sanship update --query "*[_type == blueprints && name match('Trello')]" 
```


### Copy a blueprint

```python3
sanship copy --blueprint "Airbyte - Trigger Sync" --source dev --destination production
```


### Generate YAML for a blueprint
```
sanship yaml --dataset dev --query "*[_type == 'blueprints' && name match('Amazon')]"
```

### Generate Solutions

```
sanship solution --dataset dev 
```












