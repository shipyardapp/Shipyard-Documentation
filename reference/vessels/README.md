# Vessels

## Definition

A Vessel is the "unit of work" in Shipyard, or an individual script that has been designed and built to accomplish a very specific job. Just like the real world equivalent, Vessels can be built for any purpose and come in any size, shape, or speed. 

Every Vessel is built with a Blueprint that contains the design specifications that determine what that Vessel will do. Building a new Vessel will walk you through a multi-step setup wizard. The steps required for creating a New Vessel differ based on the type of Blueprint that you select:

{% tabs %}
{% tab title="Code Blueprint Steps" %}
1. Select your [**Blueprint**](../blueprints/code-blueprints.md)\*\*\*\*
2. Provide [**Code**](code.md)\*\*\*\*
3. Define **Requirements** \([Environment Variables ](environment-variables.md)and [Package Dependencies](external-package-dependencies.md)\)
4. Set [**Triggers**](triggers/)\*\*\*\*
5. Save **Settings** \([Information](information-card.md), [Notifications](notifications.md), and [Guardrails](guardrails.md)\)

![](../../.gitbook/assets/image%20%2821%29.png)
{% endtab %}

{% tab title="Custom Blueprint Steps" %}
1. Select your [**Blueprint**](../blueprints/custom-blueprints.md)\*\*\*\*
2. Provide [**Inputs**](form-input.md)\*\*\*\*
3. Set [**Triggers**](triggers/)
4. Save **Settings** \([Information](information-card.md), [Notifications](notifications.md), and [Guardrails](guardrails.md)\)

![](../../.gitbook/assets/image.png)
{% endtab %}
{% endtabs %}

## Limitations

1. A Vessel can only be tied to one Blueprint, one Project, and one Organization.
2. A Vessel's Blueprint cannot be changed once it is built.
3. A Vessel's Project cannot be changed once it is built.
4. A Vessel is not version controlled. Any changes made directly in the Vessel creation pages cannot be visualized or restored.

## Learn More

* [How to Build a New Vessel using a Code Blueprint](../../how-tos/vessels/how-to-build-a-new-vessel-using-a-code-blueprint.md)
* [How to Build a New Vessel using a Custom Blueprint](../../how-tos/vessels/how-to-create-a-new-vessel-using-a-custom-blueprint.md)
* [How to Duplicate a Vessel](../../how-tos/vessels/how-to-duplicate-a-vessel.md)
* [How to Search for Vessels](../../how-tos/vessels/how-to-search-for-vessels.md)
* [How to Delete a Vessel](../../how-tos/vessels/how-to-delete-a-vessel.md)
* [How to Edit a Vessel](../../how-tos/vessels/how-to-edit-a-vessel.md)
* [How to Assess Vessel Performance](../../how-tos/vessels/how-to-assess-vessel-performance.md)



