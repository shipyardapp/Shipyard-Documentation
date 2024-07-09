---
id: visual-editor
title: Visual Editor
hide_title: true
description: Information about how to build Fleets with the Visual Editor.
keywords:
  - workflow
  - fleets
  - dag
  - flow
  - dataflow
  - visual
  - editor
---
# Visual Editor

## Definition

The Visual editor for Fleets, located on the Fleet Builder tab, allows you to add, edit, and remove Vessels and Paths. This editor was designed to be an intuitive drag-and-drop mechanism to visualize and create complex solutions all in the same location.

For information about how to use the visual editor, click the the question mark icon on the left sidebar.

### Usage Instructions

- **Click** on the plus icon then select a language or Blueprint option to add a Vessel to the canvas.
- **Click** on a Vessel name to change the underlying Vessel.
- **Click & Drag** on a Vessel to move it.
- **Hover** over a Vessel to reveal the delete button and the new path button.
- **Click & Drag** from the new path button to another Vessel to create a path.
- **Hover** over a path to reveal the delete button.
- **Click** on a path to change the condition to Success, Errored, or Completed.
- **Click & Drag** on the Canvas to re-position your view of Vessels.
- **Ctrl & Scroll** on the Canvas to zoom in and out.
- **Click** on a Vessel shape to edit.
- **Click** on the cog icon to edit Fleet settings.

### Adding Vessels

When you click on the canvas, or on the sidebar with the `+` icon, the left pane will update to show Blueprints and Languages that you can add/create Vessels with.

This section is split into 4 parts:
- [Code Vessels](../code/code-overview.md)

- [Library Blueprints](../blueprints/blueprint-library/blueprint-library-overview.md)

- [Org Blueprints](../blueprints/blueprints-overview.md)
  
Clicking the Blueprint/Language you want to use will result in a new Vessel being added to the canvas. Hovering over a Blueprint/Language will give you more information about how it can be used.

You can always search for a specific Blueprint using the search bar at the top. This will pre-filter the list to what you're looking for.

You can also duplicate Vessels by hovering over the Vessel and clicking the copy icon in the top right corner.

### Editing Vessels

When you click on a Vessel, the left pane will update to show the contents of that Vessel. 

If your Vessel is built with a Blueprint, you will see the following panels:

- Information
- [Inputs](../inputs.md)
- [Notifications](../notifications.md)
- [Guardrails](../guardrails.md)

If your Vessel is built with Code, you will see the following panels:

- Information
- [Code](../code/code-overview.md)
- [Arguments](../arguments.md)
- [Environment Variables](../environment-variables/environment-variables-overview.md)
- [{Language} Packages](../packages/external-package-dependencies.md)
- [System Packages](../packages/system-package-dependencies.md)
- [Notifications](../notifications.md)
- [Guardrails](../guardrails.md)

Clicking on a panel will either expand or collapse its contents. Each panel can be edited independently, and you can switch between multiple panels or multiple Vessels.

During the process of making edits, if any panel's contents are invalid, the number of invalid inputs will be shown directly on the panel. You will also see an error message specifying which inputs need to be updated. 

Any unresolved errors will be shown in the Error Bank. This feature shows you all of the fields that need to be updated across all of your Vessels before you will be able to save your Fleet. Each Vessel name in the Error Bank can be expanded for more details, and the Vessel name itself can be clicked to navigate directly to that Vessel.

All changes are "soft-saved" as you work in the Fleet Builder. You can make as many edits as you'd like and these changes will be continue to be shown in the UI as long as you don't leave the Fleet Builder tab or refresh the page. Once you're finished making all of your edits, you **must** click the Save button at the bottom to officially save all of your changes.

## Learn More

- [Video Guide](https://youtu.be/sTQid-R5dcs)