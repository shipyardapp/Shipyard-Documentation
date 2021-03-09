---
id: information
title: Information
hide_title: true
description: Information about the information section of the settings tab.
keywords:
  - input
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Information Card

## Definition

The information card lives within the settings tab for almost every element in Shipyard. It usually contains IDs and descriptors for the current element.

## Stored Data

<Tabs
groupId="elements"
defaultValue="project"
values={[
{label: 'Projects', value: 'project'},
{label: 'Vessels', value: 'vessel'},
{label: 'Blueprint', value: 'blueprint'},
{label: 'Fleets', value: 'fleet'},
]}>
<TabItem value="project">

A Project's information card contains the following details:

| Name             | Definition                                                                                       |
| :--------------- | :----------------------------------------------------------------------------------------------- |
| **Project Name** | An editable field for determining the project's name.                                            |
| **Project ID**   | A disabled field showing the Project's automatically generated UUIDv4 ID                         |
| **Timezone**     | An editable field for determining the time zone that every Vessel in the Project will be run in. |

</TabItem>
<TabItem value='vessel'>

A Vessel's information card contains the following details:

| Name               | Definition                                                                  |
| :----------------- | :-------------------------------------------------------------------------- |
| **Vessel Name**    | An editable field for determining the Vessel's name.                        |
| **Vessel ID**      | A disabled field showing the Vessel's automatically generated UUIDv4 ID.    |
| **Blueprint Name** | A disabled field showing the name of the Custom or Code Blueprint used.     |
| **Blueprint ID**   | A disabled field showing the Blueprint's automatically generated UUIDv4 ID. |
| **Project Name**   | A disabled field showing the Project that a Vessel belongs to.              |
| **Project ID**     | A disabled field showing the Project's automatically generated UUIDv4 ID.   |

</TabItem>
<TabItem value='blueprint'>

A Blueprint's information card contains the following details:

| Name               | Definition                                                                                                                                                                         |
| :----------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Blueprint Name** | An editable field for determining the name of a Blueprint. Be descriptive and avoid the use of jargon, as this will be what users search for and see while setting up new Vessels. |
| **Blueprint ID**   | A disabled field showing the Blueprint's automatically generated UUIDv4 ID.                                                                                                        |
| **Synopsis**       | An editable field containing a short description of the Blueprint, shown when selecting a Blueprint while building a new Vessel.                                                   |

</TabItem>
<TabItem value='fleet'>

A Fleet's information card contains the following details:

| Name           | Definition                                             |
| :------------- | :----------------------------------------------------- |
| **Fleet Name** | An editable field for determining the name of a Fleet. |

</TabItem>
</Tabs>

## Screenshots

<Tabs
groupId="elements"
defaultValue="project"
values={[
{label: 'Projects', value: 'project'},
{label: 'Vessels', value: 'vessel'},
{label: 'Blueprint', value: 'blueprint'},
{label: 'Fleets', value: 'fleet'},
]}>
<TabItem value="project">

![](../../.gitbook/assets/image_44.png)
</TabItem>
<TabItem value='vessel'>

![](../../.gitbook/assets/image_59_1.png)
</TabItem>
<TabItem value='blueprint'>

![](../../.gitbook/assets/image_24.png)
</TabItem>
<TabItem value='fleet'>

![](../../.gitbook/assets/image_6.png)
</TabItem>
</Tabs>
