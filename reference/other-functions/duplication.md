# Duplication

## Definition

Shipyard allows users to easily duplicate their Vessels or their Blueprints. This is commonly used to create slight variations or in lieu of built-in versioning.

{% tabs %}
{% tab title="Vessels" %}
When a Vessel is duplicated, the following things occur:

1. A new Vessel is immediately created, with the name of `{Old Vessel Name} (Copy) {New Vessel ID}` .
2. The Code, Command, Environment Variables, and Packages from the old Vessel are transferred to the new Vessel.
3. The Vessels Triggers, Guardrails, and Notifications are all reset.
4. The new Vessel is set to "Inactive".
5. The new Vessel starts with 0 logs.
{% endtab %}

{% tab title="Blueprints" %}
When a Blueprint is duplicated, the following things occur:

1. A new Blueprint is immediately created, with the name of {Old Blueprint Name} \(Copy\) {New Blueprint ID} .
2. The Blueprint Variables, Code, Command, Environment Variables, and Packages from the old Vessel are transferred to the new Vessel.
3. The Vessels Guardrails are reset.
4. The new Blueprint is set to the "Test" state.
5. The new Vessel starts with 0 dependent Vessels.
{% endtab %}
{% endtabs %}

## Limitations

1. You can't duplicate a Vessel or a Blueprint that has been changed since the last save.

