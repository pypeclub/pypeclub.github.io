---
id: version-2.3.0-admin_presets_nukestudio
title: Presets > NukeStudio
sidebar_label: Nukestudio
original_id: admin_presets_nukestudio
---

## Tags

Each tag has defines defaults in `.json` file. You can follow below paths to find `tags.json`. Inside of the file focus on changes in values as shown in example (`>>>"10001"<<<`). Please be careful and do not alter the `family` value.

:::note Basic file properties

| property        | value                          |
| --------------- | ------------------------------ |
| repository path | `pype-setup/repos/pype-config` |
| file path       | `presets/nukestudio/tags.json` |

:::

```python
"Frame start": {
    "editable": "1",
    "note": "Starting frame for comps",
    "icon": {
        "path": "icons:TagBackground.png"
    },
    "metadata": {
        "family": "frameStart",
        "number": >>>"10001"<<<
    }
}
```
