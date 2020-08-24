---
id: admin_presets_nukestudio
title: "Presets > NukeStudio"
sidebar_label: Nukestudio
original_id: admin_presets_nukestudio
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
