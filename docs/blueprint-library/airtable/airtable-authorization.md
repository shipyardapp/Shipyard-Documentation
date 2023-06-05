---
id: airtable-authorization
sidebar_position: 1
title: Airtable Blueprint Authorization
hide_title: true
sidebar_label: Authorization
description: Instructions on how to authorize Airtable to work with Shipyard's low-code Airtable templates.
keywords:
- airtable
- blueprint
- template
- authorization
---

# Airtable Authorization
In order to get started with the Airtable Blueprints, you will need an API Key with programmatic access. Additionally, you'll need the names/IDs of the Base, Table, and View you would like to access.

## Generating an Airtable API Key

1. Login to your [Airtable](https://airtable.com/login) 
2. Navigate to your [account overview](https://airtable.com/account) page.
3. Select Generate API Key

![Generate API Key](https://cdn.sanity.io/images/2xyydva6/production/1b548cb219eabae4da81cab8a78406775b3d71dd-1506x1068.png?w=450)

4. Click into the purple area to reveal your API Key. Copy this somewhere safe!

![Revealing your Airtable API Key](https://cdn.sanity.io/images/2xyydva6/production/6510c8c452f9487e9f1dbc0d1c4d969ba1802963-1698x478.png?w=450)

## Getting Base, Table, and View IDs

Navigate to the Base/Table you would like to access with Shipyard. Once there, extract the IDs directly from the URL. Airtable builds all of it's URLs as `https://airtable.com/{base_id}/{table_id}/{view_id}`

For example, in the following URL https://airtable.com/apprAb54fnzSbGPqV/tbltgrZ2A5vbSOuDs/viwaqiREptRiFI5un

**Base ID**: apprAb54fnzSbGPqV
**Table ID**: tbltgrZ2A5vbSOuDs
**View ID**: viwaqiREptRiFI5un

Alternatively, you can use the Table Name and the View Name found in the UI, although it is less recommended since the name can change without warning.

![Table and View Names](https://cdn.sanity.io/images/2xyydva6/production/061e3835df52069273424529a41b663d48c07e55-980x242.png?w=450)
