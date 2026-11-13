---
title: "IRIV EdgeAI Studio Accounts, Roles and Sessions"
sidebar_label: "Accounts, Roles and Sessions"
sidebar_position: 1
description: "Manage IRIV EdgeAI Studio user accounts, roles, systems access and active sign-in sessions."
---

# Accounts, Roles and Sessions

Device settings apply to the whole IRIV, not one system. Open **Settings** from the main sidebar. Only the master account can change most of them.

## Accounts

Go to **Settings > Accounts** to manage who can sign in and what they can open.

![Accounts page](/img/products/iriv-edgeai-cm5/edgeai-studio/image44.webp)

The Accounts page consists of several sections that you should be familiar with.

1. **Settings Menu** - Open the device settings from the main sidebar.

2. **Accounts Tab** - The first of the Settings tabs.

3. **Sub-tabs** - Accounts, Roles, Sessions and All Activities.

4. **Account List**

    - **Search accounts** - find an account by name.

    - **+ New account** - click to add a user.

    - **master** - the administrator; it opens every system and cannot be frozen or deleted.

5. **Account Buttons**

    - **Change username** - rename the account.
    - **Change password** - the master can change any account's password.
    - **Change email** - set a new email address.
    - **Remove email** - remove the email (Set email if it has none).

    ![Account buttons](/img/products/iriv-edgeai-cm5/edgeai-studio/image191.webp)

6. **Systems Access and Activity**

    - **Systems access** - only the master ticks which systems each account can view or edit.

    - **Activity** - a record of what the selected account has done.

## Roles

![Roles tab](/img/products/iriv-edgeai-cm5/edgeai-studio/image86.webp)

1. **Roles Sub-tab** - Assign a role to describe each account.

2. **Add role** - Create your own role.

3. **Built-in Roles** - engineer, operator and viewer are always available; each shows how many accounts use it.

:::note

A role is only a label. Which accounts can open is determined by their Systems access list. Admin is a tier, set on the account itself.

:::

## Sessions

![Sessions tab](/img/products/iriv-edgeai-cm5/edgeai-studio/image127.webp)

1. **Sessions Sub-tab** - Lists every live sign-in on the device.

2. **Sign out other sessions** - Ends all sessions except your own.

3. **Session List** - Account, browser, operating system, IP address and when it was last active.

4. **Revoke** - Click to sign out that session everywhere it is open.

:::note

A sign-in stays signed in until it is revoked, unless auto logout is turned on under [Settings > System](./system-and-data-retention.md).

:::

---

**Source:** IRIV EdgeAI Studio User Manual, Rev 1.0 (Draft), Cytron.
