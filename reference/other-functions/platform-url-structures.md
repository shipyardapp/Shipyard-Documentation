# Platform URL Structures

## Definition

All URLs within Shipyard follow a consistent format that's built on internal IDs and names. When used in combination with the [Platform Environment Variables](../vessels/environment-variables/platform-environment-variables.md), this can be a useful way to link a user directly to an area of the platform that you want them to view, edit, or run manually.

Below is a list of the most common URL structures that may be needed.

| Purpose | URL Structure |
| :--- | :--- |
| **View All Projects** | https://app.shipyardapp.com/{org\_name}/projects |
| **View all Blueprints** | https://app.shipyardapp.com/{org\_name}/blueprints |
| **View a Single Blueprint** | https://app.shipyardapp.com/{org\_name}/blueprints/{blueprint\_id} |
| **View Vessels in Single Project** | https://app.shipyardapp.com/{org\_name}/projects/{project\_id}/vessels |
| **View Fleets for a Single Project** | https://app.shipyardapp.com/{org\_name}/projects/{project\_id}/fleets |
| **View Logs for a Single Fleet** | https://app.shipyardapp.com/{org\_name}/projects/{project\_id}/fleets/{fleet\_id}/logs |
| **View Individual Log for a Fleet** | https://app.shipyardapp.com/{org\_name}/projects/{project\_id}/fleets/{fleet\_id}/logs/{log\_id} |
| **View Logs for a Single Vessel** | https://app.shipyardapp.com/{org\_name}/projects/{project\_id}/vessels/{vessel\_id}/logs |
| **View Individual Log for a Vessel** | https://app.shipyardapp.com/{org\_name}/projects/{project\_id}/vessels/{vessel\_id}/logs/{log\_id} |

## Limitations

1. Shipyard first checks to verify that the user visiting the page has access to the underlying content. If not, they will be redirected to the login screen.

