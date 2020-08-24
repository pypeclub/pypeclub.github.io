---
id: artist_hosts_harmony
title: Harmony
sidebar_label: Harmony
original_id: artist_hosts_harmony
---

## Pype global tools

-   [Set Context](artist_tools.md#set-context)
-   [Work Files](artist_tools.md#workfiles)
-   [Create](artist_tools.md#creator)
-   [Load](artist_tools.md#loader)
-   [Manage (Inventory)](artist_tools.md#inventory)
-   [Publish](artist_tools.md#publisher)
-   [Library Loader](artist_tools.md#library-loader)

## Usage

The integration creates an `Avalon` menu entry where all related tools are located.

:::note
Menu creation can be temperamental. Its best to start Harmony and do nothing else until the application is fully launched.
:::

### Workfiles

`Avalon > Workfiles`

Work files are temporarily stored locally, in `[user]/.avalon/harmony`, to reduce network bandwidth. When saving the Harmony scene, a background process ensures the network files are updated.

### Create

`Avalon > Create`

You can create `Composite` nodes for publishing any number of nodes. Only the nodes connected to the `Composite` node will be published.
