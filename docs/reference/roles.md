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

Users on our **Business** and **Enterprise** plans that have **Role Access Permissions** have the unique ability to create and define their own **Custom Roles**. To do so, simply navigate to the **Roles** admin tab, and select *Add Role*.

There, you will be presented with a modal with all permissions listed with empty checkboxes. Simply name your new custome role, select all the permissions you would like associated with that role, and then click the **Create** button. 

![Role](../.gitbook/assets/add_role_modal.png)
