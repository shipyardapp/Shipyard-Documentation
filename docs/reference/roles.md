---
id: roles
title: Roles
hide_title: true
description: Information about predefined roles
keywords:
 - roles
 - predefined
---

# Roles

## Predefined Roles

Roles are our new way of assigning and assessing permissions. While organizations on our Business and Enterprise plans have
the ability to create their own custom roles and control each permission, organizations on our Team plan only have access to our
predefined roles. Below are in-depth definitions of each predefined role and the permissions associated with them.

### Admin

The **Admin** role is just that - **all access to everything**. That includes **View**, **Invite**, **Update**, and **Delete** permissions for:
- **Users**

As well as **Create**, **Read**, **Update**, and **Delete** permissions for:
- **Projects**
- **Blueprints**
- **Credentials**
- **Integrations**
- **Fleets**

Trigger Actions for:
- **On Demand**
- **Schedule**
- **Webhook**
- **API**

And access to:
- **User Page** 
- **Billing Page**
- **Usage Page**
- **Roles Page** *(If Organization is on Business or Enterprise plan)*

### Creator

The **Creator** role is a bit more limited. This **does not include** access to our **User**, **Billing**, or **Usage** page,
but does provide Create, Read, and Update permissions for:
- **Projects**
- **Blueprints**
- **Credentials**
- **Integrations**
- **Fleets**

And Trigger Actions for:
- **On Demand**
- **Webhook**
- **API**

### Viewer

The **Viewer** role is the most limiting of our roles. This **does not include** access to our **User**, **Billing**, or **Usage**, 
and only provides **Read** permissions for:
- **Projects**
- **Blueprints**
- **Credentials**
- **Integrations**
- **Fleets**

### Billing

The **Billing** Role has the same permissions as our **Viewer** role, plus acess to **Billing** and **Usage** information.

## Custom Roles

### Creating New Custom Roles

Users on our **Business** and **Enterprise** plans that have **Role Access Permissions** have access to our new Admin **Roles** tab and possess the unique ability to create and define their own **Custom Roles**. To do so, simply navigate to the **Roles** admin tab, and select *Add Role*.

There, you will be presented with a modal with all permissions listed with empty checkboxes. Simply name your new custome role, select all the permissions you would like associated with that role, and then click the **Create** button. 

![Role](../.gitbook/assets/add_role_modal.png)

### Editing Custom Roles

Along with creating new **Custom Roles** users with **Role Access Permissions** also have the ability to edit exiting **Custom Roles** that have been created. Clicking the **Edit** button in the action column next to the role will bring up a similar modal as the **Add Role**, but with the exisiting permissions on that role checked. Here you can remove or add permissions. Saving your new edits will update that role. 

### Deleting Custom Roles

With creating and editing **Custom Roles**, users may also delete roles. However, if you attempt to delete a role that is currently assigned to a user in your organization, you must first **assign that user a new role**. 