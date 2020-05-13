---
id: admin_presets_nukestudio
title: Presets > NukeStudio
sidebar_label: Nukestudio
---

## TAGS.json

path: `pype-config/presets/nukestudio/tags.json`

Each tag has defines defaults in `.json` file. You can follow below paths to find `tags.json`. Inside of the file focus on changes in values as shown in example (`>>>"1001"<<<`). Please be careful and do not alter the `family` value.

```python
"Frame start": {
    "editable": "1",
    "note": "Starting frame for comps",
    "icon": {
        "path": "icons:TagBackground.png"
    },
    "metadata": {
        "family": "frameStart",
        "number": >>>"1001"<<<
    }
}
```

## CollectInstanceVersion

path: `pype-config/presets/plugins/nukestudio/publish.json`

This plugin is by default set to `true` so it will sinchronize version of published instances to actutal version of workfile. Set `enabled` into `false` if you wish to let publishing process auto-generate next available version.

```python
{
    "CollectInstanceVersion": {
        "enabled": false
    }
}
```

## ExtractReviewCutUpVideo

path: `pype-config/presets/plugins/nukestudio/publish.json`

Plugin is responsible for cuting shorter or longer source material for review. Here you can add any aditional tags you wish to be added into extract review process.

Here `no-handles` are added as the plugin is by default generating reedited intermediate video material with handless even it has to add empty black frames. Some productions prefer to use review material without handless and this way it is possible.

```python
{
    "ExtractReviewCutUpVideo": {
        "tags_addition": ["no-handles"]
      }
}
```
