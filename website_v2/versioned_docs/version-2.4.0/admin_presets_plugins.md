---
id: admin_presets_plugins
title: "Presets > Plugins"
sidebar_label: Plugins
original_id: admin_presets_plugins
---

## Global ###

### publish.json ###

### `ExtractReview` ###

```python
"ExtractReview": {
    "ext_filter": ["exr", "jpg", "jpeg", "mov", "png", "dpx", "mp4"],
    "outputs": {
        "h264": {
            "families": ["write", "ftrack"],
            "input": [
                "-gamma 2.2"
            ],
            "letter_box": 2.35,
            "output": [
                "-pix_fmt yuv420p",
                "-crf 18"
            ],
            "tags": ["preview", "burnin"],
            "ext": "mov"
        },
        "edit": {
            "families": ["write"],
            "output": [
                "-vf scale=1920x1080",
                "-vcodec dnxhd",
                "-pix_fmt yuv422p",
                "-b:v 120M",
                "-ar 48000",
                "-ac 2",
                "-qmax 51"
            ],
            "ext": "mxf"
        },
        "wipmov": {
            "families": ["write"],
            "letter_box": 2.35,
            "output": [
                "-vf scale=1920x1080",
                "-c:v prores_ks",
                "-profile:v 3"
            ],
            "tags": ["burnin"],
            "ext": "mov"
        }
    }
}
```


## Maya ##

### load.json ###

### `colors` ###

maya outliner colours for various families

```python
"colors": {
  "model": [0.821, 0.518, 0.117],
  "rig": [0.144, 0.443, 0.463],
  "pointcache": [0.368, 0.821, 0.117],
  "animation": [0.368, 0.821, 0.117],
  "ass": [1.0, 0.332, 0.312],
  "camera": [0.447, 0.312, 1.0],
  "fbx": [1.0, 0.931, 0.312],
  "mayaAscii": [0.312, 1.0, 0.747],
  "setdress": [0.312, 1.0, 0.747],
  "layout": [0.312, 1.0, 0.747],
  "vdbcache": [0.312, 1.0, 0.428],
  "vrayproxy": [0.258, 0.95, 0.541],
  "yeticache": [0.2, 0.8, 0.3],
  "yetiRig": [0, 0.8, 0.5]
}
```

### publish.json ###

### `ValidateModelName` ###

```python
"ValidateModelName": {
    "enabled": false,
    "material_file": "/path/to/shader_name_definition.txt",
    "regex": "(.*)_(\\d)*_(?P<shader>.*)_(GEO)"
},
```

### `ValidateAssemblyName` ###

```python
"ValidateAssemblyName": {
    "enabled": false
},
```

### `ValidateShaderName` ###

```python
"ValidateShaderName": {
    "enabled": false,
    "regex": "(?P<asset>.*)_(.*)_SHD"
}
```

## Nuke ##

### create.json ###

### `CreateWriteRender` ###

```python
"CreateWriteRender": {
    "fpath_template": "{work}/renders/nuke/{subset}/{subset}.{frame}.{ext}"
}
```


### publish.json ###

### `ExtractReviewData` ###

```python
"ExtractReviewData": {
    "nodes": {
        "Reformat": [
            ["type", "to format"],
            ["filter", "Lanczos6"]
        ]
    }
}
```


## NukeStudio ##

### Create ###

### Load ###

### Publish ###

## Standalone Publisher ##
