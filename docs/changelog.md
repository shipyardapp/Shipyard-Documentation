---
id: changelog
title: Changelog
hide_title: true
description: Running list of all the changes that have been made to the Shipyard application, alongside a brief overview of features being planned.
keywords:
  - changelog
  - updates
---

# Changelog

Below is an ordered list of changes that we have made to Shipyard. Changes include but are not limited to: new features, feature enhancements, bug fixes, or other usability updates. Some changes may be omitted, such as changes that do not affect the user-facing experience.

The purpose of this changelog is to publicly document the updates we are continuously making to improve the [Shipyard](https://www.shipyardapp.com) platform. We hope this is useful to our users to know exactly what parts of the product are being actively worked on.

:::info
Have a feature request, a bug report, a suggestion or an interesting use case? We'd love to hear it! Let us know at support@shipyardapp.com!
:::

## Features On Deck

- User Flow Improvements

## 7/6/2021

### Enhancements

- Updated the Markdown styling for Blueprint previews.

### Bug Fixes

- Fix issue where users could not navigate away from "Something went wrong." page.

## 6/23/2021

### Enhancements

- Updated the Blueprint cards grids to be more responsive.
- Updated the historical runtime charts for Fleets and Vessels.

## 6/15/2021

### Enhancements

- Add all newly invited users to a "Shipyard Demos" Organziation with read only
access.

### Bug Fixes

- Fixed issue where you could not remove Vessels that were a part of prior Fleet Runs
and the Vessel is no longer part of the Fleet.

- Fixed issue where creating a new Project would not allow for Project access
for the requesting user.

## 6/9/2021

### Enhancements

- The admin permission panel has been updated to include new permissions.
The application throughout has been updated to more correctly reflect a User's permissions. 

### Bug Fixes

- Fixed bug where the Fleet's Last Statuses were not the most recent runs.

## 6/1/2021

### Enhancements

- Update the Fleet Builder to use a new library to enable new enhancements coming
soon.

- Update Trigger permissions with access for each of On Demand (run now), Schedules,
and webhooks.

## 5/11/2021

### New Feature

- Added Userflow widget for feature walkthroughs in the app.

## 5/5/2021

### New Feature

- Update the Fleet Log Gantt chart to be interactive.

### Enhancements

- Updated the Save and Next Step button bars to be sticky.
- Update Projects dropdown on sider to be just a single Projects link.
- Update Blueprint Library card names from truncating.
- Rename "Vessels" tab on Fleets to "Fleet Builder".
- Switched order of tabs on the Blueprints page.

### Bug Fixes

- Fixed Edit Vessel button not showing up on log page.

## 4/28/2021

### Enhancements

- Added the ability to add image URLs to Blueprints that will render during the selection stage when building a Vessel.
- Added a restriction where a user cannot create a Fleet unless there are at least two (minimum required) Vessels in a Project.

## 4/14/2021

### Enhancements

- Updated the Logs table to show explicit "Scheduled" indicators.

### Bug Fixes

- Fixed issue where update Select variable default option would not save.
- Fixed issue where Blueprint Library Blueprints were not available to use when
building a custom Vessel.

## 4/13/2021

### Enhancements

- Added the most recent eight status on the Vessels and Fleet Runs tables.
- Moved the Fleet Run Voyages under the Fleet Run in routing.
- Removed Shipyard support users from billing in the Usage Dashboard and in Stripe.

## 4/8/2021

### Enhancements

- Added in Blueprint Library usage read only ability to all Organizations.
- Blueprint Password input values are no longer sent to the frontend.

## 3/30/2021

### Enhancements

- Added auto refreshing to the Fleet Run page.
- Added Timezone information to the Triggers tab for Vessels and Fleets.

## 3/29/2021

### Bug Fixes

- Fixed bug where writing to subdirectories of a Git clone would fail with invalid permissions.

## 3/16/2021

### New Features

- Added `gpg` binary available to all Voyages.

## 3/10/2021

### Enhancements

- A new simplified pricing structure with a pricing calculator.

## 3/3/2021

### New Features

- Native Node Vessels. You can now run Node Vessel with dependencies isntalled for you.

### Enhancements

- Added six environment variables available to your Voyage at runtime:

  - `SHIPYARD_VESSEL_START_TIME` indicates the time at which the Vessel started running.
  - `SHIPYARD_FLEET_START_TIME` indicates the time at which the Fleet started running. It will be empty if the Voyage is not part of a Fleet.
  - `SHIPYARD_VESSEL_SCHEDULED_TIME` indicates the time at which the Vessel was scheduled to run.
  - `SHIPYARD_FLEET_SCHEDULED_TIME` indicates the time at which the Fleet was scheduled to run. It will be empty if the Voyage is not part of a Fleet.
  - `SHIPYARD_BLUEPRINT_ID` indicates the ID of the Blueprint of the Vessel. It will reflect the Code type if the Vessel is not build from a Blueprint.
  - `SHIPYARD_BLUEPRINT_NAME` indicates the name of the Blueprint of the Vessel. It will reflect the Code type if the Vessel is not build from a Blueprint.

- Updated the maximum number of allowed retries to 24.

## 2/23/2021

### New Features

- Added new Webhook triggers to Vessels and Fleets.

  In addition to Schedules, you can now trigger a Voyage or Fleet Run by POSTing

  to a webhook URL generated from the UI.

  Read more about this update [here](https://www.shipyardapp.com/blog/webhook-triggers-event-driven-automation/).

## 2/4/2021

### New Features

- Added a new [Usage Dashboard](reference/admin/usage-dashboard.md) that shows progress within a billing period and

  estimated cost for paying customers.

  You can access this dashboard from the Admin section of the Org, if available.

### Enhancements

- Removed Triggers steps from the Vessel create flows.

  You can now add Triggers once the Vessel has been created.

  This is in preparation for adding Webhook Triggers.

- When creating a custom Vessel, you will be shown directions to the Blueprint

  Library if your Org does not have any Blueprints to choose from.

- When your Org's trial or subscription has lapsed, you are shown a splash screen

  indicating such instead of just error message notifications.

### Bug Fixes

- Fixed a backend bug concerning improper error handling of a billing error.

## 1/27/2021

### Enhancements

- Updated the Vessels DAG view for a Fleet to have a better initial layout.

### Bug Fixes

- Fixed styling issue on the Blueprint Library discover page.
- Fixed bug surrounding correct form data on Code steps.
- Fixed bug where and Organization after their trial period could not sign up

  for a subscription.

## 1/13/2021

### Bug Fixes

- Fixed broken link for "Manage Git Integrations".

### Enhancements

- Added functionality to know what Vessel you are editing in the dropdown

  for a Vessel node on the Fleet edit DAG page.

- Updated error messages for non-unique entity names.
- Updated the messages in empty tables due to filtering.
- Updated Project name in breadcrumbs where it was showing a generic 'Project' text.
- Updated backend formatting of notification emails.
- Added two environment variables when the Vessel is built using a Git connection:

  - SHIPYARD_REPO_NAME indicates the name of the Git repository defined in the Code section.
  - SHIPYARD_CLONE_LOCATION indicates the local directory of where the root of

    the Git repository was cloned to.

- Make consistent wording around "Use this Blueprint".

## 1/12/2021

### New Features

- Fleets now have conditional paths between Vessels.

  There are three options for a path to be followed:

  - Success - The upstream Voyage was successful.
  - Errored - The upstream Voyage was not successful.
  - Completed - Either Success or Errored.

    For a downstream Voyage to run, all upstream Voyages and the path conditions

    must be met.

## 12/16/2020

### Bug Fixes

- Fixed bug that allowed for invalid Blueprint Variable reference names.
- Fixed backend issue where Fleet run infrastructure was not being correctly cleaned up.
- Fixed idempotency issues with an external backend service.

## 12/8/2020

### New Features

- Add the ability for self service password resets.
- For Git connected Voyages, the git commit hash is now printed to output.

### Enhancements

- Update Blueprint Variable previewing mechanics.
- Update Schedules forms to be explicit about empty Schedules.

### Bug Fixes

- Fixed bug to throw "unsaved changes" dialog when clicking Logs or Vessels tab.
- Fixed bug where removed Blueprint Variables would error in a Voyage.

## 12/3/2020

### New Features

- Added the ability to use GitHub repositories as the source of your code in Blueprints

  and Vessels.

  You can find the option to use this under the Git radio button on the Code tabs.

### Enhancements

- Updated our backend to better log web based errors.
- Add a new error boundary and error page to our frontend.

### Bug Fixes

- Fixed Organization billing Uploaded Data values.
- Fixed non active Organizations from scheduling Voyages.

## 11/4/2020

### Enhancements

We overhauled the creation and edit flow for both Vessels and Blueprints to make the process quicker and more seamless. Noticeable improvements are:

- The "Write" tab is now the default tab for providing code.
- The "Script Name" and "File to Run" fields now mirror each other when you're on the write tab.
- If you have unsaved changes, you'll receive a warning when navigating away.
- You can't click "Save" if you don't have any changes - making it easier to identify when you've made updates.
- You can only click "Run Now" or "Duplicate" after first saving your changes.
- The "Inputs" step for Blueprints has a clearer preview section to show you what your Blueprint will look like.
- Clicking back out of a creation flow will now take you to the last page you came from.

## 11/2/2020

### Enhancements

- We added `python3-dev` as a default package that is installed in the container

  that runs your code.

## 10/26/2020

### New Features

- Add a Playground project to every new Organization upon sign up.

  Note the the project will default to the US/Pacific timezone.

## 9/30/2020

### New Features

- Implement new pricing tiers: Freelance, Startup, and Business.
- Add a panel to the sign up page to let users know what they are getting.

## 9/29/2020

### New Features

- Redirect user to a new confirmation URL on successful sign up request.
- Allow building a Vessel from a Blueprint from the Blueprint's page.
- Update password strength requirements and their display to the user.
- Redirect users to the Projects page if they are a member of just one Organization.

### Bug Fixes

- Fix errors with a blank default value on the Select Blueprint variable type.

## 9/22/2020

### New Features

- Added a distinct action arrow on empty collection pages to help the user figure

  out what to do.

### Bug Fixes

- Fix configuration handling across the application.

### Other

- Removed deprecated queueing infrastructure.

## 9/15/2020

### New Features

- New banner in the header indicating how many days left you have in your trial.

  There are no changes if you are already a paying, subscribed customer.

### Enhancements

- The entire cards in the New Vessel flow are clickable to select Code or Custom

  Blueprint.

- The Active and Inactive Vessels tables have been merged into one.

  The notion of an Acitve or Inactive Vessel no longer exists.

  A Vessel will always run on all of its Triggers.

- The Active, Test, and Inactive Blueprints tables have been merged.

  The meaning of an Active, Test, or Inactive Blueprint has been updated to mean

  visibility for the Users in your Org.

  The translation is as follows:

  - Active &gt; Visible to Everyone. Every User can create Vessels from these Blueprints.
  - Test &gt; Editors. Users with Blueprint Create and Update permissions can create

    Vessels from these Blueprints.

  - Inactive &gt; Hidden. No User can create Vessels from these Blueprints.

## 9/8/2020

### New Features

- Connection to Stripe Customer Portal in the Sider once you have a subscription.
- New User permission for restricting access to the Billing section of Orgs.
- Add ReCAPTCHA v3 to Sign Up page.

### Enhancements

- Improvements to backing infrastructure that your code runs on.

### Bug Fixes

- Minor bug fix with backing queue connectivity.

## 8/19/2020

### New Features

- Self Sign up and new Organization creation.
- Allow for manually stopping a running Voyage.
- Backend automated Org billing.

### Enhancements

- Improvements to backend queueing technology.
- Improvements to internal APM technologies.

## 8/6/2020

We've been hard at work over the past few months to deliver a new system for Fleets that's modular and flexible enough to meet the needs of the modern data team.

🎉 **New Features:**

**Fleet Overhaul**

Fleets have been redesigned from the ground up to tackle more complex problems with a greater level of flexibility and visibility.

- Edit your Fleets visually. Drag and drop Vessels and paths to make a workflow that's as complex or simple as you need.

![](.gitbook/assets/screen-cast-2020-08-07-at-2.08.56-pm.gif)

- Fleets can now run on converging, branching, and sequential paths.

![](.gitbook/assets/image_78.png)

- Vessels in a Fleet all share the same local file storage while continuing to run in independent containers. This allows upstream Vessels to pass data to downstream Vessels without the need for external storage and without the risk of package and language conflicts.
- Fleets now have their own logs, allowing you to assess historical status and performance.

![](.gitbook/assets/image_82.png)

- Fleets now have their own notifications. Receive alerts whenever a Fleet runs into errors preventing it from running in its entirety.
- Vessels can now run independently AND as a part of a Fleet, allowing you to maintain overlapping triggers without having to duplicate Vessels.

**Blueprint Library**

- Browse through over 40 pre-made Blueprints that integrate with more than 15 external services, databases, and cloud storage vendors.

![](.gitbook/assets/image_80.png)

- Add a Blueprint to your organization so you can quickly create Vessels and Fleets that download, upload, and manipulate data across your tech stack.

![](.gitbook/assets/image_77.png)

![](.gitbook/assets/image_79.png)

🌟 **Enhancements:**

- Vessels no longer have the option for "Internal Triggers" to create a Fleet.
- The "Build Vessel" button has been exchanged with a "+ New" button that allows you to make a New Vessel or a New Fleet.
- The sidebar navigation has been updated to include:
  - A link for the Blueprint Library
  - A divider to split options for the Organization or for the Platform.

## 6/2/2020

🎉 **New Features:**

You can now follow along with actively running Vessels - LIVE!

- Clicking the "Run Vessel" button will automatically redirect you to the newly created log.
- If a Vessel is scheduled to run soon, or is currently running, the log page will now automatically refresh to show you live details. Details include:

  - Current Vessel Status ![](.gitbook/assets/status_updates.gif)
  - Live Updating Duration ![](.gitbook/assets/ticker.gif)
  - Live Output Indicator

    ![](.gitbook/assets/live_loader.gif)

When you put all of these changes together, it looks like this:

![](.gitbook/assets/shipyard_live_loading.gif)

This new feature will provide better visibility into the progress of Vessels without requiring users to constantly refresh the page.

🌟 **Enhancements:**

- The output section of the Log page has been refreshed to allow for:
  - Word highlighting
  - Line counting
  - Lines without wraparound

![](.gitbook/assets/image_29.png)

- All of our automated email notifications have slick new look! These will provide greater clarity and insight to help you get started tracking down and resolving issues with your Vessels.
  - Welcome Email
  - Success Email
  - Error Email

![](.gitbook/assets/shipyard_emails.png)

- Blueprint descriptions now support Markdown to help you write more in-depth guides for users. Use all of the traditional features of Markdown like headers, bullets, and code snippets to get your point across.

![](.gitbook/assets/image_30.png)

🔧 **Bug Fixes:**

- Fixed an issue where the error message for unnamed Vessels would shift the spacing of all the fields on the Information Tab.
- Timestamps on the Log page no longer overlap on smaller screens.

## 4/14/2020

🌟 **Enhancements:**

- Retries have an updated look! We've refined the design to give you better visibility into:
  - When the next retry is going to occur
  - What retry number Shipyard is currently on
  - Visibly see when something is currently retrying
- If your Vessel uses a Custom Blueprint, you'll now see a link to go directly to that Blueprint. This will make navigation throughout the application a bit easier.

🔧 **Bug Fixes:**

- Trying to access an organization that you don't have permissions for will result in an explicit error message and be redirected to their list of organizations. Previously, this landed you on a broken page.
- When you refresh the page, projects on the sidebar will no longer disappear.
- Fixed an error where the Blueprint field would just say "Blueprint".

## 4/2/2020

🔧 **Bug Fixes:**

- Fixed an issue where Blueprint names couldn't be duplicated across the application.

## 3/31/2020

🎉 **New Features:**

You can now create a new organization directly through the UI!

![](.gitbook/assets/image_75.png)

While we still don't support multi-organization users, let us know if this use case would be helpful for you.

🌟 **Enhancements:**

- Selecting your Timezone when creating a project is now easier, with more common Timezones listed at the top.

![](.gitbook/assets/image.png)

🔧 **Bug Fixes:**

- Guardrail values now correctly display the saved values.
- Guardrails from Blueprints now transfer to Vessels set up with that Blueprint.
- Removed the ability to add the current Vessel as an Internal Trigger.

## 3/24/2020

🎉 **New Features:**

- [User Management](reference/admin/user-management.md) page for viewing, managing, and deleting users
- User Invite System for growing your organization and collaborating with outside parties.
- [User Permissions Panel](reference/admin/user-permissions.md) to set granular access settings per user.

\_\*\*\_For more information about these features, see [our blog post](https://www.shipyardapp.com/blog/increasing-collaboration-for-organizations).

🔧 **Bug Fixes:**

- Fixed Google SSO issue that some users were having.
- Prevented code from disappearing when you moved back during the Wizard setup.

## 2/18/2020

🔧 **Bug Fixes:**

- Fixed issue where a Log's output would sometimes not refresh correctly.
- Fixed issue where project name had to be unique across all organizations. Project names still have to be unique _within_ your organization.

🌟 **Enhancements:**

- Added a page to make it more clear when Blueprints have no dependent Vessels.

![](.gitbook/assets/image_7.png)

## 2/3/2020

🔧 **Bug Fixes:**

- Fixed issue where Intercom button was occasionally overlapping buttons.

🌟 **Enhancements:**

- Updated Python from 3.5.3 to 3.7.3
