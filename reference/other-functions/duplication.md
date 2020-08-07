# Duplication

## Definition

Shipyard allows users to easily duplicate their Vessels or their Blueprints. This is commonly used to create slight variations or in lieu of built-in versioning.

{% tabs %}
{% tab title="Vessels" %}
When a Vessel is duplicated, the following things occur:

1. A new Vessel is immediately created, with the name of `{Old Vessel Name} (Copy) {New Vessel ID}` .
2. The [Code](../vessels/code.md), [Command](../vessels/command.md), [Environment Variables](../vessels/environment-variables/), and [Packages ](../vessels/external-package-dependencies.md)from the old Vessel are transferred to the new Vessel.
3. The Vessels [Triggers](../triggers/), [Guardrails](../vessels/guardrails.md), and [Notifications ](../vessels/notifications.md)are all reset.
4. The new Vessel is set to Inactive.
5. The new Vessel starts with 0 logs.
{% endtab %}

{% tab title="Blueprints" %}
When a Blueprint is duplicated, the following things occur:

1. A new Blueprint is immediately created, with the name of `{Old Blueprint Name} (Copy) {New Blueprint ID}` .
2. The [Blueprint Variables](../blueprints/blueprint-variables.md), [Code](../vessels/code.md), [Command](../vessels/command.md), [Environment Variables](../vessels/environment-variables/), and [Packages ](../vessels/external-package-dependencies.md)from the old Vessel are transferred to the new Vessel.
3. The Vessel's [Guardrails ](../vessels/guardrails.md)are reset.
4. The new Blueprint is set to the Test state.
{% endtab %}
{% endtabs %}

{% hint style="warning" %}
**Note:** Pressing duplicate will immediately create a duplicate without you needing to save anything. You will, however, likely want to change a few settings or create a more readable name.
{% endhint %}

## Limitations

1. You can't duplicate an instance of a Vessel or a Blueprint that has been changed since the last save. You must first save.

