---
id: artist_hosts_harmony
title: Harmony
sidebar_label: Harmony
---

## Pype global tools

-   [Work Files](artist_tools.md#workfiles)
-   [Create](artist_tools.md#creator)
-   [Load](artist_tools.md#loader)
-   [Publish](artist_tools.md#publisher)
-   [Manage](artist_tools.md#inventory)

## Usage

The integration creates an `Avalon` menu entry where all related tools are located.

:::note
Menu creation can be temperamental. Its best to start Harmony and do nothing else until the application is fully launched.
If you dont see the `Avalon` menu, then follow this to create it:
- Go to the Script Editor
- Find the script called `TB_sceneOpened.js` and run it.
- Choose the `start` method to run.
:::

### Workfiles

`Avalon > Workfiles`

Work files are temporarily stored locally, in `[user]/.avalon/harmony`, to reduce network bandwidth. When saving the Harmony scene, a background process ensures the network files are updated.

### Create

`Avalon > Create`

You can create `Composite` nodes for publishing any number of nodes. Only the nodes connected to the `Composite` node will be published.
