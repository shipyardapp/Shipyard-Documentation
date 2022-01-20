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

For Python and Node Vessels, in addition to the language packages that are available in each, you may also install additional low level "system packages" packages for use in the system. These packages are installed using `apt-get` and are typically a dependency for some language package you've also installed on the Vessel.

In the Fleet Builder sidebar, for both Python and Node Vessels, an additional panel named "System Packages" is available. This panel allows you to specify the system packages that you want to install on the Vessel. Below is an example of a Python Vessel with Python language package dependencies as well as system package dependency installation panels.

![System Packages](../../.gitbook/assets/python-and-system-packages.png)
