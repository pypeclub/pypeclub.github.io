---
id: artist_hosts_photoshop
title: Photoshop
sidebar_label: Photoshop
---

## Pype global tools

-   [Work Files](artist_tools.md#workfiles)
-   [Create](artist_tools.md#creator)
-   [Load](artist_tools.md#loader)
-   [Publish](artist_tools.md#publisher)
-   [Manage](artist_tools.md#inventory)

## Setup

To install the extension download [Extension Manager Command Line tool (ExManCmd)](https://github.com/Adobe-CEP/Getting-Started-guides/tree/master/Package%20Distribute%20Install#option-2---exmancmd).

```
ExManCmd /install {path to pype-setup}/repos/avalon-core/avalon/photoshop/extension.zxp
```

## Usage

When you launch Photoshop you will be met with the Workfiles app. If dont have any previous workfiles, you can just close this window.

In Photoshop you can find the tools in the `Avalon` extension:

![Extension](assets/photoshop_extension.PNG)

You can show the extension panel by going to `Window` > `Extensions` > `Avalon`.

### Create

When you have created an image you want to publish, you will need to create special groups or tag existing groups. To do this open the `Creator` through the extensions `Create` button.

![Extension](assets/photoshop_creator.PNG)

With the `Creator` you have a variety of options to create:

- Check `Use selection` (A dialog will ask whether you want to create multiple images or just one).
    - One image.
        - This will create a single group named after the `Subset` in the `Creator`.
    - Multiple images.
        - No selection.
            - This will create a single group named after the `Subset` in the `Creator`.
        - Single selected layer.
            - This will create a single group named after the selected layer.
        - Single selected group.
            - This will tag the selected group.
        - Multiple selected items.
            - Each group will be tagged and each layer will be grouped.
- Uncheck `Use selection`.
    - This will create a single group named after the `Subset` in the `Creator`.
