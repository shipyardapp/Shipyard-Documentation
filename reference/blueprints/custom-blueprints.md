# Custom Blueprints

## Definition

A Custom Blueprint is another name for the Blueprints created by users in your organization or by Shipyard staff. These Blueprints provide a way for technical users to create a reusable piece of code with organization specific logic that other business users can use to create a Vessel. These business users are only required to provide key variables needed for the the Vessel to work correctly. All code and requirements are abstracted away from the end user.

All Custom Blueprints are built upon Code Blueprints. You must select a supported language and provide the necessary code, requirements, and packages necessary to make the Blueprint usable. However, unlike Code Blueprints, you can create Blueprint Variables that users fill out whenever they are setting up a new Vessel. 

As a Custom Blueprint author or editor, you are in charge of writing the code that runs for the users of your Blueprint. You can update and manage the underlying code, making updates in bulk that can affect 100s of scripts.

## Components

When creating a Vessel from a Custom Blueprint, you must always provide the following elements:

1. Form Inputs

You may also optionally provide these elements:

1. External Package Dependencies
2. Environment Variables
3. Triggers
4. Notifications

## Limitations

1. Code for a Custom Blueprint must have an adequate level of error handling and validation because it relies on user input.
2. Notifications cannot be set for all Vessels that are built from a Custom Blueprint.

