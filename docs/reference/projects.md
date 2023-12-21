---
id: projects
title: Projects
hide_title: true
description: Information what projects are and where they live.
keywords:
  - projects
---

# Projects

## Definition

A project is a flexible way to categorize everything that your organization is actively working on. You can use this to separate work for individual clients, vendors, or internal teams.

## Screenshots

![View every project in your organization with highlighted data around Fleet count and job status.](../.gitbook/assets/image_15.png)

## Additional Notes

1. Fleets cannot be moved between projects in the UI, so you'll want to make sure that you internally agree on the setup as a team. If you need to move a Fleet to a new project, use the [YAML editor](fleets/yaml-editor.md) to copy the configuration and build it in a new project.
2. Fleets cannot be scheduled to run in a timezone other than the project's selected [timezone](other-functions/timestamps-and-timezones.md). It is currently not possible to mix timezones within a single project.
3. A project cannot be shared between two organizations. If you would like to give an external member access to Vessels within a project, you'll need to add them to your organization and give them access to that specific project.
4. A project name must be unique within your organization.

## Learn More

- [How to Create a New Project](../how-tos/projects/create-project.md)
- [How to Edit an Existing Project](../how-tos/projects/edit-project.md)
- [How to Delete an Existing Project](../how-tos/projects/delete-project.md)
