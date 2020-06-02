# Changelog

Below is an ordered list of changes that we have made to Shipyard. Changes include but are not limited to: new features, feature enhancements, bug fixes, or other usability updates. Some changes may be omitted, such as changes that do not affect the user-facing experience.

The purpose of this changelog is to publicly document the updates we are continuously making to improve the [Shipyard](www.shipyardapp.com) platform. We hope this is useful to our users to know that the product is being actively worked on.

{% hint style="info" %}
Have a feature request, a bug report, a suggestion or an interesting use case? We'd love to hear it! Let us know at support@shipyardapp.com! 
{% endhint %}

## Features On Deck

* Share Data and Files Across Vessels in a Fleet
* Overhauling Fleet UI Editor
* Converging Paths for Fleets
* Conditional Triggers based on Vessel Status

## 6/2/2020

🎉 **New Features:** 

You can now follow along with actively running Vessels - LIVE!

* Clicking the "Run Vessel" button will automatically redirect you to the newly created log.
* If a Vessel is scheduled to run soon, or is currently running, the log page will now automatically refresh to show you live details.

**Current Vessel Status**

![](.gitbook/assets/status_updates.gif)

**Live Updating Duration**

![](.gitbook/assets/ticker.gif)

**Live Output Indicator**

![](.gitbook/assets/live_loader.gif)

When you put all of these changes together, it looks like this:

![](.gitbook/assets/shipyard_live_loading.gif)

This new feature will provide better visibility into the progress of Vessels without requiring users to constantly refresh the page.

🌟 **Enhancements:**

* The output section of the Log page has been refreshed to allow for:
  * Word highlighting
  * Line counting
  * Lines without wraparound

![](.gitbook/assets/image%20%2829%29.png)

* All of our automated email notifications have slick new look! These will provide greater clarity and insight to help you get started tracking down and resolving issues with your Vessels.
  * Welcome Email
  * Success Email
  * Error Email

![](.gitbook/assets/shipyard_emails.png)

* Blueprint descriptions now support Markdown to help you write more in-depth guides for users. Use all of the traditional features of Markdown like headers, bullets, and code snippets to get your point across.

![](.gitbook/assets/image%20%2830%29.png)



🔧 **Bug Fixes:**

* Fixed an issue where the error message for unnamed Vessels would shift the spacing of all the fields on the Information Tab.
* Timestamps on the Log page no longer overlap on smaller screens.

## 4/14/2020

🌟 **Enhancements:**

* Retries have an updated look! We've refined the design to give you better visibility into:
  * When the next retry is going to occur
  * What retry number Shipyard is currently on
  * Visibly see when something is currently retrying
* If your Vessel uses a Custom Blueprint, you'll now see a link to go directly to that Blueprint. This will make navigation throughout the application a bit easier.

🔧 **Bug Fixes:**

* Trying to access an organization that you don't have permissions for will result in an explicit error message and be redirected to their list of organizations. Previously, this landed you on a broken page.
* When you refresh the page, projects on the sidebar will no longer disappear.
* Fixed an error where the Blueprint field would just say "Blueprint".

## 4/2/2020

🔧 **Bug Fixes:**

* Fixed an issue where Blueprint names couldn't be duplicated across the application.

## 3/31/2020

🎉 **New Features:**

You can now create a new organization directly through the UI! 

![](.gitbook/assets/image%20%2875%29.png)

While we still don't support multi-organization users, let us know if this use case would be helpful for you.

🌟 **Enhancements:**

* Selecting your Timezone when creating a project is now easier, with more common Timezones listed at the top.

![](.gitbook/assets/image.png)

🔧 **Bug Fixes:**

* Guardrail values now correctly display the saved values.
* Guardrails from Blueprints now transfer to Vessels set up with that Blueprint.
* Removed the ability to add the current Vessel as an Internal Trigger.

## 3/24/2020

🎉 **New Features:**

* [User Management](reference/admin/user-management.md) page for viewing, managing, and deleting users
* User Invite System for growing your organization and collaborating with outside parties.
* [User Permissions Panel](reference/admin/user-permissions.md) to set granular access settings per user.

  
  ****For more information about these features, see [our blog post](https://www.shipyardapp.com/blog/increasing-collaboration-for-organizations).

🔧 **Bug Fixes:**

* Fixed Google SSO issue that some users were having.
* Prevented code from disappearing when you moved back during the Wizard setup.

## 2/18/2020

🔧 **Bug Fixes:**

* Fixed issue where a Log's output would sometimes not refresh correctly.
* Fixed issue where project name had to be unique across all organizations. Project names still have to be unique _within_ your organization.

🌟 **Enhancements:**

* Added a page to make it more clear when Blueprints have no dependent Vessels.

![](.gitbook/assets/image%20%287%29.png)

## 2/3/2020

🔧 **Bug Fixes:**

* Fixed issue where Intercom button was occasionally overlapping buttons.

🌟 **Enhancements:**

* Updated Python from 3.5.3 to 3.7.3

