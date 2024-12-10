---
id: version-control
title: Version Control
hide_title: true
description: Information about the version control tab when viewing a Fleet.
keywords:
  - workflow
  - fleet
  - versioning
---

# Version Control

## Definition

The Version Control tab is available when viewing or editing a Fleet. A version is created each time you save a Fleet. On this tab you can view versions, compare a version to the most recent version, revert the Fleet to a previous version, or create a new Fleet from a version.

## Version Cards

Each version is represented by a card. On a version card, you will see a version number, the email address of who created the version, and when it was created. When you click on a card, the [YAML](yaml-editor.md) for that version of the Fleet will appear in the code window on the right. In addition, each card has a menu of actions that can be taken on each version. 

### Card Actions
- **Compare to latest**: This will compare the selected version to the latest version. In the code window, you will see the selected version on the left and the latest on the right. Any differences between the two will be highlighted. Red highlighting means something was removed and green means that something was added.

:::note
The YAML-based definition of a Platform Fleet is generated rather than stored as a file. When it is generated, Vessel definitions are sorted by the Vessel name. For this reason, if you rename a Vessel, the entire Vessel definition will appear highlighted even if only the name was changed. *Please see the page for more information about how edits are dealt with when made in the [YAML editor](yaml-editor.md).*
:::

- **Revert to this version**: This will revert the Fleet's configuration to the selected version. A new version will be generated and will appear at the top of the list as the **latest** version. This will be the version the Fleet Builder will display if you navigate to that tab.
- **Create a new fleet from version**: This will use the selected version to create a new Fleet (without the schedules associated with the version). You will be redirected to the Fleet Builder in the newly created Fleet. This will not make any changes to the current Fleet.

## Screenshots
![Version Control Overview](./../../.gitbook/assets/version-control-overview-1.png)

![Version Card Actions](./../../.gitbook/assets/version-control-version-card-1.png)

![Version Card - Compare versions](./../../.gitbook/assets/version-control-version-card-2.png)
