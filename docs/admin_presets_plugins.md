---
id: admin_presets_plugins
title: Presets > Plugins
sidebar_label: Plugins
---

## Global

### publish.json

Each plugin in the json should be added as name of the class. There are some default attributes recommended to use in case you wish a plugin to be switched off for some projects in `project overwrites` like `enabled: false`. So for example if you wish to switch off plugin class name `PluginName(pyblish.api.contextPlugin)` if file `name_of_plugin_file.py`, it could be done only by adding following text into root level of publish.json file:

```json
{
    "PluginName": {
        "enabled": false
    }
}
```

### `ProcessSubmittedJobOnFarm` ###

```python
"ProcessSubmittedJobOnFarm": {
    "aov_filter": {
        "host": ["aov_name"],
        "maya": ["beauty"]
    }
    "deadline_pool": ""
}
```

Plugin responsible for auto FFMPEG conversion to variety of formats.

#### Plugin attributes [required]&#x3A;

-   **ext_filter** - list of strings where each of the string is refering to extension of used file. It can be used either for single file video format or multiple sequence named image files. Example:

        "ext_filter": ["exr", "jpg", "jpeg", "mov", "png", "dpx", "mp4"]

-   **to_width** - output width resolution if tag `reformat` is used.

-   **to_height** - output height resolution if tag `reformat` is used.

-   **outputs** - dictionary of presets where key is name of preset and value is dictionary with preset attributes.

<br>

#### Preset attributes

Each preset is completed from following attributes:

-   **families** [required] - instance families which should be the preset active on. Example: my instance is part of `model` family, so I add `model` to preset and any time publishing with `review` is executed this preset will be active of processed representations, if they also satisfy other required properties.
-   **input** - ffmpeg input arguments. Example: `-gamma 2.2`
-   **codec** [required] - ffmpeg codec arguments. Example: `-vcodec dnxhd`
-   **output** - ffmpeg ouput arguments. Example: video filters, drawn boxes, text
-   **letter_box** - value is float
-   **tags**:
    -   **burnin** - will add metadata info to image
    -   **preview** -  will be used as preview in ftrack
    -   **reformat** - rescale up to 1920x1080
    -   **bake-lut** - bake LUT into pixels (available path in data)
    -   **slate-frame** - adding slate frame at beggining of video
    -   **no-handles** - generate output format with no handles
    -   **sequence** - let ffmpeg create sequence of png or jpg (ext needs to be set to png or jpg/jpeg)
-   **ext** [required]

<br>

#### Preset examples:

All following examples are contest of `outputs` plugin attribute.

<br>

##### Ftrack review preview:

Preset name is `h264` and this will be used in file name. This video is dedicated to be uploded to ftrack as version preview. In tags can be seen `burnin`, `preview`, `reformat`, `bake-lut`, it means the video will be reformated into HDTV format with burnin information and uploaded to ftrack. `bake-lut` for screenspace baked colorspace.

This preset will be active only if `render` family is present in instance and `ftrack` along with `preview` tag is enabling Ftrack preview upload.

Codec is defined as yuv420p and input conversion to gamma 2.2 is pushing video gamma curve as original baked video space is in linear.

```json
{
    "h264": {
        "ext": "mov",
        "families": ["render", "ftrack"],
        "tags": ["burnin", "preview", "reformat", "bake-lut"],
        "input": [
            "-gamma 2.2"
        ],
        "codec": [
            "-pix_fmt yuv420p",
            "-crf 18",
            "-intra"
        ]
    }
}
```

<br>

##### Avid Editor's video file:

This video is usualy used in Avid editing software but could be also used in other favorite editing or colorgrading software. It is data level 10bit 444 mxf video.

This will be active only for 2D rendering such as Nuke compositing job. Also as we could se there is `slate-frame` so -1 frame before first frame of render will be placed image with printed task and shot metadata. This is only possible with SLATE node above write node of Nuke workfile at the moment.

The resolution of this file is the original shot definition as seen in Nuke workfile.

```json
{
    "edit": {
        "ext": "mxf",
        "families": ["render2d"],
        "tags": ["slate-frame"],
        "codec": [
            "-vcodec dnxhd",
            "-profile:v dnxhr_444",
            "-pix_fmt yuv444p10le",
            "-b:v 185M",
            "-ar 48000",
            "-ac 2",
            "-qmax 51"
        ]
    }
}
```

```json
{
    "wipmov": {
        "ext": "mov",
        "families": ["render2d"],
        "tags": ["burnin", "reformat", "bake-lut", "slate-frame"],
        "codec": [
            "-c:v prores_ks",
            "-profile:v 3"
        ]
    }
}
```

```json
{
    "png": {
        "ext": "png",
        "families": ["render3d"],
        "tags": ["burnin", "reformat", "bake-lut", "sequence"],
        "input": [
            "-gamma 2.2"
        ],
        "codec": [
            "-vcodec png"
        ]
    }
}
```

## Maya

### load.json

### `colors`

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

### publish.json

### `ValidateModelName`

```python
"ValidateModelName": {
    "enabled": false,
    "material_file": "/path/to/shader_name_definition.txt",
    "regex": "(.*)_(\\d)*_(?P<shader>.*)_(GEO)"
},
```

### `ValidateShaderName` ###

```python
"ValidateShaderName": {
    "enabled": false,
    "regex": "(?P<asset>.*)_(.*)_SHD"
}
```

## Nuke

### create.json

### `CreateWriteRender`

```python
"CreateWriteRender": {
    "fpath_template": "{work}/renders/nuke/{subset}/{subset}.{frame}.{ext}"
}
```

### publish.json

### `ExtractReviewData`

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

## NukeStudio

### Publish.json

### `CollectInstanceVersion`

Activate this plugin if you want your published plates to always have the same version as the hiero project they were published from. If this plugin is off, plate versioning automatically finds the next available version in the database.

Alter following code in `presets/plugins/nukestudio/publish.json`.

```python
"CollectInstanceVersion": {
    "enabled": true
}
```

## Standalone Publisher
