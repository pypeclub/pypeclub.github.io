---
id: admin_presets_ftrack
title: Presets > Ftrack
sidebar_label: Ftrack
---

## PROJECT_DEFAULTS.json

path: `pype-config/presets/ftrack/project_defauls.json`

A list of all project defaults to be set when you run "Ftrack Prepare Project"

```json
{
    "fps": 25,
    "frameStart": 1001,
    "frameEnd": 1100,
    "clipIn": 1001,
    "clipOut": 1100,
    "handleStart": 10,
    "handleEnd": 10,

    "resolutionHeight": 1080,
    "resolutionWidth": 1920,
    "pixelAspect": 1.0,
    "applications": [
        "maya_2019", "nuke_11.3", "nukex_11.3", "nukestudio_11.3", "deadline"
    ],
    "tools_env": [],
    "avalon_auto_sync": true
}
```

## FTRACK_CONFIG.json

path: `pype-config/presets/ftrack/ftrack_config.json`

### `sync_to_avalon` [dict]

list of statuses that allow moving, deleting and changing of names on ftrack entities. Once any child of and entity is set to a status different than those listed in this list, it is considered to have been worked on and will not allow any major changes to hierarchy any more.

`statuses_name_change [list]`:

```json
{
    "sync_to_avalon": {
        "statuses_name_change": ["not ready", "ready"]
    }
}
```

### `status_update` [dict]

mapping of status for automatic updates.
Key specifies the resulting status and value is a list of statuses from which we allow changing to the target status.

`_ignore_` [list]: source statuses to ignore

`target_status` [list]: target  

```json
{
    "status_update": {
        "_ignore_": ["in progress", "ommited", "on hold"],
        "Ready": ["not ready"],
        "In Progress" : ["_any_"]
    }
}
```

### `status_version_to_task` [dict]

mapping of status that propagate automatically from published version to it's task. By default we search for identical status, however this preset let's you remap between different statuses on versions and tasks.

`status_version_to_task` [dict]:

```json
{
    "status_version_to_task": {
        "__description__": "Status `from` (key) must be lowered!",
        "in progress": "in progress",
        "approved": "approved"
    }
}
```

### FirstVersionStatus [event]

This event handler set status to first created Asset Version.
Status is set by task name or task type's name assigned to Asset Version.

Example of one item.
```json
{
    "status": "In Progress",
    "name": "compositing",
    "key": "task"
}
```
- __status__ status to set if `key` and `name` match.
- __name__ name of task or task's type.
- __key__ specify where to look for name. There are two variants where to look:
  1.) "task" - task's name
  2.) "task_type" - task type's name
  - `key` is optional. Default is "task"

It doesn't matter if values are lowered, capitalized.

Where to set: `~/pype-config/presets/ftrack/server.json`
```json
{
    "...": "{...}",

    "FirstVersionStatus": {
        "task_status_map": [{
            "key": "task",
            "name": "compositing",
            "status": "Blocking"
        }, {
            "MORE ITEMS...": "MORE VALUES..."
        }]
    },
    "...": "{...}"
}
```
