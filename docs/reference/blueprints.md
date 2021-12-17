---
id: blueprints
title: Blueprints
hide_title: true
description: All you need to know about Blueprints.
keywords:
  - blueprint
  - template
---

# Blueprints

## Definition

Blueprints are the foundation for most Vessels. They contain the design specifications needed to start building solutions for your organization. As such, they live at the organization level and can be used in any Project. They can either be built by Shipyard staff \(as part of the [Blueprint Library](blueprint-library/blueprint-library-overview)\) or created by users in your organization.

Blueprints provide a way for technical users to create a reusable piece of code with organization-specific logic. When using a Blueprint, users are only required to provide key inputs needed for the Vessel to work correctly. All code and requirements are abstracted away from the end user.

All Blueprints are built using Code. You must select a supported language and provide the necessary code, arguments, environment variables, and packages necessary to make the Blueprint usable. Additionally, you can create [Blueprint Variables](inputs/blueprint-variables.md) that users fill out on the [Inputs](inputs/inputs-overview.md) tab when they are setting up a new Vessel.

When a Vessel is built with a Blueprint, it is considered to be a Dependendent Vessel for that Blueprint because it depends on the underlying structure and code. All dependent Vessels for a Blueprint, across all projects, can be viewed on the Dependent Vessels tab, giving a high level of visibility into status and usage of reusable solutions.

As a Blueprint author or editor, you are in charge of writing the code that runs for the users of your Blueprint. You can update and manage the underlying code, making updates in bulk that will affect hundreds of dependent Vessels.

## Components

### Creating a Blueprint

When creating a Blueprint, you must **always** provide the following elements:

- [Code](code/code-overview)
- [Command ](code/command.md)to execute the code
- [Blueprint Information](settings/information.md)

You may also _optionally_ provide these elements:

- [Blueprint Variables](inputs/blueprint-variables.md)
- [Blueprint Description](inputs/blueprint-description.md)
- [External Package Dependencies](requirements/external-package-dependencies.md)
- [Environment Variables](requirements/environment-variables/)
- [Guardrails](settings/guardrails.md)

### Building a Vessel

When creating a Vessel with a Blueprint, you must always provide the following elements:

1. [Inputs](inputs/inputs-overview.md) \(if any are required\)
2. [Vessel Information](settings/information)

You may also _optionally_ provide these elements:

1. [Triggers](triggers/triggers-overview)
2. [Notifications](settings/notifications)
3. [Guardrails](settings/guardrails)

## Additional Notes

1. Code for a Blueprint must have an adequate level of error handling and validation because it relies on user input.
2. Notifications cannot currently be set for all Vessels that are built from a Blueprint.

## Learn More

- [How to Search for Blueprints](../how-tos/blueprints/search-for-blueprint)
- [How to Create a New Blueprint](../how-tos/blueprints/create-blueprint)
- [How to Edit a Blueprint](../how-tos/blueprints/edit-blueprint)
- [How to Delete a Blueprint](../how-tos/blueprints/delete-blueprint)
- [How to Duplicate a Blueprint](../how-tos/blueprints/duplicate-blueprint)
- [How to Create Blueprint Variables](../how-tos/blueprints/create-blueprint-variables)
- [How to Reference a Blueprint Variable](../how-tos/blueprints/reference-blueprint-variables)
- [How to Reorder Blueprint Variables](../how-tos/blueprints/reorder-blueprint-variables)
