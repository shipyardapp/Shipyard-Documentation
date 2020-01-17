# Code Blueprints

## Definition

Code Blueprints allow you to write and run code from scratch with no changes to your existing code or additional configuration files.  The code is executed on Shipyard's cloud infrastructure in isolation.

When building a Vessel using a Code Blueprint, your script should return an exit code of 0 to indicate a successful run. Any other exit code indicates failure.

Additionally, your script should stop its work if it receives a SIGTERM \(15\) signal.

## Components

When creating a Vessel from a Code Blueprint, you must **always** provide the following elements:

* [Code](../vessels/code.md)
* [Command ](../vessels/command.md)to execute the code
* [Vessel Information](../vessels/information-card.md)

You may also _optionally_ provide these elements:

* [External Package Dependencies](../vessels/external-package-dependencies.md)
* [Environment Variables](../vessels/environment-variables/)
* [Triggers](../vessels/triggers/)
* [Notifications](../vessels/notifications.md)
* [Guardrails](../vessels/guardrails.md)

## Screenshots

![](../../.gitbook/assets/image%20%2837%29.png)

## Limitations

{% tabs %}
{% tab title="Python" %}
1. There is currently only support for a single version of the Python language, 3.7.6.
2. You cannot access a private repo in github as part of your package requirements. We are actively working on ways to better support CI/CD through git connections.
{% endtab %}

{% tab title="Bash" %}
1. Only whitelisted packages can be installed. This is to prevent malicious activity. If you have a specific package that you need installed, reach out to support.
{% endtab %}
{% endtabs %}

