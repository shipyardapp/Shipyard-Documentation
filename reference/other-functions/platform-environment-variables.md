# Platform Environment Variables

## Definition

By default, every Vessel that runs in Shipyard generates a series of environment variables. These variables are _invisible_ in the sense that you'll never see them in the platform but they can always be accessed by your scripts.

| Name | Example | Definition |
| :--- | :--- | :--- |
| `SHIPYARD_ORG_ID` | `5c35c2da-a9a5-472a-a215-29b616ebc2c9` | Set to the UUIDv4 of the Organization that the Vessel belongs to. |
| `SHIPYARD_ORG_NAME` | `Shipyard` | Set to the name of the Organization that the Vessel belongs to. |
| `SHIPYARD_PROJECT_ID` | `03cf3d8b-95c0-4b6c-8d57-be58c252c4be` | Set to the UUIDv4 of the Project that the Vessel belongs to. |
| `SHIPYARD_PROJECT_NAME` | `Shipyard Tutorials` | Set to the name of the Project that the Vessel belongs to. |
| `SHIPYARD_BLUEPRINT_ID` | `d07f3355-ab62-479b-8756-27c7cbf48907` | Set to the UUIDv4 of the Blueprint that the Vessel is built from. In the case of a Code Vessel, the ID will not be UUIDv4. |
| `SHIPYARD_BLUEPRINT_NAME` | `Print Text` | Set to the name of the Blueprint that the Vessel is built from. |
| `SHIPYARD_VESSEL_ID` | `20e347ff-fe74-43dc-8f38-6a31910c0533` | Set to the UUIDv4 of the Vessel that the Log belongs to. |
| `SHIPYARD_VESSEL_NAME` | `Hello, World` | Set to the name of the Vessel that the Log belongs to. |
| `SHIPYARD_LOG_ID` | `c81a050c-5caf-445c-90d0-dc3b761979b0` | Set to the UUIDv4 of the current Log that is running. |
| `SHIPYARD_LOG_WORKDIR` | ``/home/shipyard/c81a050c-5caf-445c-90d0-dc3b761979b0``` | Set to the working directory that your Vessel is set to do its work in. |

