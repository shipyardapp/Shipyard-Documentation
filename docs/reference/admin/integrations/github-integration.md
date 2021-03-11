---
id: github-integration
title: Github Integration
hide_title: true
description: Connect your Shipyard organization to your Github organization.
keywords:
  - github
  - integration
  - git
---

# Github Integration

## Definition

The Github integration allows you to set up [Github Code Sync](../../code/github-code-sync.md) for any of your Vessels or Blueprints.

Shipyard supports an unlimited number of Github connections to multiple different organizations. Every repository that is synced with Shipyard will be available to any user in the Organization with _Create_ or _Edit_ [permissions](../user-permissions) for Vessels or Blueprints.

### Setup

By clicking **Add Connection** you can choose to sync Shipyard to any Github organization that your Github account has access to. This setup flow allows you to specify whether to give Shipyard access to all repositories \(including newly created ones\) or only specific repositories. By default, Shipyard will have read-only access to the contents of the repositories you select.

Once a connection has been set up, you can always change the level of access after the fact. The **edit** button will redirect you to the Github application page where you can change repository access or delete the connection altogether.

## Screenshots

![Github Connection Overview](../../../.gitbook/assets/image_107.png)

![Selecting a Github Organization to connect to](../../../.gitbook/assets/image_104.png)

![Selecting repositories to connect to](../../../.gitbook/assets/image_113.png)

## Additional Notes

1. Shipyard has a 1:1 relationship when connecting to Github organizations. You cannot sync your personal organization in Github with two different organizations in Shipyard.

## Learn More

- [Github Code Sync Announcement](https://www.shipyardapp.com/blog/automating-github-code-sync/)
- [Getting Started with Github Code Sync](https://www.shipyardapp.com/blog/automate-deployment-github-code/)
