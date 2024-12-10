---
id: shipyard-url-structures
title: Platform URL Structures
hide_title: true
description: Information about how URLs in the Platform platform are automatically generated with IDs.
keywords:
  - urls
  - structure
---

# Platform URL Structures

## Definition

All URLs within Platform follow a consistent format that's built on internal IDs and names. When used in combination with the [Platform Environment Variables](environment-variables/environment-variables-overview.md), this can be a useful way to link a user directly to an area of the platform that you want them to view, edit, or run manually.

Below is a list of the most common URL structures that may be needed.

| Purpose                              | URL Structure                                                                                      |
| :----------------------------------- | :------------------------------------------------------------------------------------------------- |
| **View All Projects**                | https://app.shipyardapp.com/{org_name}/projects                                                   |
| **View all Blueprints**              | https://app.shipyardapp.com/{org_name}/blueprints                                                 |
| **View a Single Blueprint**          | https://app.shipyardapp.com/{org_name}/blueprints/{blueprint_id}                                 |
| **View Fleets for a Single Project** | https://app.shipyardapp.com/{org_name}/projects/{project_id}/fleets                              |
| **View Logs for a Single Fleet**     | https://app.shipyardapp.com/{org_name}/projects/{project_id}/fleets/{fleet_id}/logs             |
| **View Individual Log for a Fleet**  | https://app.shipyardapp.com/{org_name}/projects/{project_id}/fleets/{fleet_id}/logs/{fleet_log_id}   |
| **View Individual Log for a Vessel** | https://app.shipyardapp.com/{org_name}/projects/{project_id}/fleets/{fleet_id}/logs/{fleet_log_id}/{vessel_log_id} |

## Additional Notes

1. Platform first checks to verify that the user visiting the page has access to the underlying content. If not, they will be redirected to the projects page.
