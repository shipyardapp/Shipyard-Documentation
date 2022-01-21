---
id: system-package-dependencies
title: System Package Dependencies
hide_title: true
description: Information about the optional system package dependencies section of the requirements tab.
keywords:
  - external packages
  - requirements
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# External Package Dependencies

## Definition

For Python and Node Vessels, in addition to the language packages that are available in each, you may also install additional low level "system packages" packages for use by your code. With Shipyard's current setup, these must be [Debian Packages](https://www.debian.org/distrib/packages). These packages are installed using `apt-get` and typically only need to be included if they are a dependency for some [language package](external-package-dependencies.md) you've also installed on the Vessel.

In the Fleet Builder sidebar, for both Python and Node Vessels, an additional panel named "System Packages" is available. In the Vessel wizard flow, for both Python and Node Vessels, an additional section named "System Packages" is available on the Requirements tab. This panel or section allows you to specify the system packages that you want to install on the Vessel. 

:::note
Because Vessels are containerized, the System packages you install will only be available for that Vessel.
:::

## Screenshots
Below is an example of a Python Vessel with Python language package dependencies as well as system package dependency installation panels.
![System Packages - Fleet Builder](../../.gitbook/assets/python-and-system-packages.png)

