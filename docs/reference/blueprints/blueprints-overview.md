---
id: blueprints-overview
title: Blueprints Overview
hide_title: true
description: All you need to know about Blueprints.
keywords:
  - blueprint
  - template
---

# Blueprints Overview

## Definition

Blueprints are the foundation for most Vessels. They contain the design specifications needed to start building solutions for your organization. As such, they live at the organization level and can be used in any Project. They can either be built by Platform staff (as part of the [Blueprint Library](blueprint-library/blueprint-library-overview.md)) or by users in your organization (as an Org Blueprint).

Blueprints provide a way for technical users to create a reusable piece of code with organization-specific logic. When using a Blueprint, users are only required to provide key inputs needed for the Vessel to work correctly. All [code](../code/code-overview.md), [package dependencies](../packages/external-package-dependencies.md), and [environment variables](../environment-variables/environment-variables-overview.md) are abstracted away from the end user.

All Blueprints are built using Code. You must select a supported language and provide the necessary code, arguments, environment variables, and packages necessary to make the Blueprint usable. Additionally, you can create [Blueprint Variables](org-blueprints/blueprint-variables.md) that users fill out on the [Inputs](../inputs.md) panel when they are setting up a new Vessel.

When a Vessel is built with a Blueprint, it is considered to be a Dependent Vessel for that Blueprint because it depends on the underlying structure and code. All dependent Vessels for a Blueprint, across all projects, can be viewed on the Dependent Vessels tab, giving a high level of visibility into status and usage of reusable solutions.

As a Blueprint author or editor, you are in charge of writing the code that runs for the users of your Blueprint. You can update and manage the underlying code, making updates in bulk that will affect hundreds of dependent Vessels.

## Components

### Creating a Blueprint

When creating a Blueprint, you must **always** provide the following elements:

- Blueprint Name
- Blueprint Synopsis
- [Code](../code/code-overview.md)


You may also _optionally_ provide these elements:

- [Blueprint Variables](org-blueprints/blueprint-variables.md)
- [Blueprint Description](org-blueprints/blueprint-description.md)
- [External Code Package Dependencies](../packages/external-package-dependencies.md)
- [External System Package Dependencies](../packages/system-package-dependencies.md)
- [Environment Variables](../environment-variables/environment-variables-overview.md)
- [Guardrails](../guardrails.md)
- Blueprint Image URL

### Building a Vessel

When creating a Vessel with a Blueprint, you must always provide the following elements:

1. [Inputs](../inputs.md) \(if any are required\)
2. Vessel Name

You may also _optionally_ provide these elements:

1. [Notifications](../notifications.md)
2. [Guardrails](../guardrails.md)

## Additional Notes

1. Code for a Blueprint must have an adequate level of error handling and validation because it relies on user input.

## Learn More

- [How to Search for Blueprints](../../how-tos/blueprints/search-for-blueprint.md)
- [How to Create a New Blueprint](../../how-tos/blueprints/create-blueprint.md)
- [How to Edit a Blueprint](../../how-tos/blueprints/edit-blueprint.md)
- [How to Delete a Blueprint](../../how-tos/blueprints/delete-blueprint.md)
- [How to Duplicate a Blueprint](../../how-tos/blueprints/duplicate-blueprint.md)
- [How to Create Blueprint Variables](../../how-tos/blueprints/create-blueprint-variables.md)
- [How to Reference a Blueprint Variable](../../how-tos/blueprints/reference-blueprint-variables.md)
- [How to Reorder Blueprint Variables](../../how-tos/blueprints/reorder-blueprint-variables.md)
