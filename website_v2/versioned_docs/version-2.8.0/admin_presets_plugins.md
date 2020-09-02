---
id: admin_presets_plugins
title: "Presets > Plugins"
sidebar_label: Plugins
original_id: admin_presets_plugins
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

<br />
<br />

### `ExtractReview`

Plugin responsible for automatic FFMPEG conversion to variety of formats.

#### Plugin attributes [required]&#x3A;

-   **ext_filter** - list of extension that can be processed.

        "ext_filter": ["exr", "jpg", "jpeg", "mov", "png", "dpx", "mp4"]

-   **to_width** - output width resolution if tag `reformat` is used.

-   **to_height** - output height resolution if tag `reformat` is used.

-   **outputs** - dictionary of presets where, each defining a new review output that will be generated.

**full preset example**

```json
{
"ExtractReview": {
    "ext_filter": ["exr", "jpg", "jpeg", "mov", "png", "dpx", "mp4"],
    "to_width": 1280,
    "to_height": 720,
    "outputs": {
      "h264": {
        "families": ["render", "ftrack"],
        "input": [
          "-gamma 2.2"
        ],
        "codec": [
          "-pix_fmt yuv420p",
          "-crf 18"
        ],
        "output": [],
        "tags": ["burnin", "preview", "reformat"],
        "ext": "mov"
      }
    }
  }
}
```

#### Preset attributes

Each preset consists of the following attributes:

-   **families** [required] - subset families this preset will work on.
-   **input** - ffmpeg input arguments. Example: `-gamma 2.2`
-   **codec** [required] - ffmpeg codec arguments. Example: `-vcodec dnxhd`
-   **output** - ffmpeg ouput arguments. Example: video filters, drawn boxes, text
-   **letter_box** - float value describing the ratio of the letterbox, if required
-   **tags**: Tags alter the review process behaviour and can be combined
    -   **burnin** - add metadata info into the image
    -   **preview** -  will be used as preview in ftrack
    -   **reformat** - rescale to format based on `to_height` and `to_width` attributes
    -   **bake-lut** - bake LUT into the image (available path in data)
    -   **slate-frame** - addi slate frame at the beggining of video
    -   **no-handles** - remove the shot handles from the output
    -   **sequence** - generate a sequence of png or jpg instead of a video (ext needs to be set to png or jpg/jpeg)
-   **ext** [required]

<br />

#### Review Output Preset examples:

All following examples are content of `outputs` plugin attribute.

<br />

##### h264 for online preview:

This preset will crate a simple `h264` video which will also be uploded to ftrack for online review. YOu can see `burnin`, `preview`, `reformat` in tags, which means that the output will be reformated into HD format with burnin baked in and uploaded to ftrack. `bake-lut` will apply screenspace baked colorspace.

This preset will be active only if `render` or `ftrack` family is present on the instance being processed. `preview` tag is enabling Ftrack preview upload.

Codec is defined as yuv420p and input conversion to gamma 2.2 applies the gamma curve to convert from linear colour space.

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

<br />

##### Editorial video file:

This output is generated for the use in the final edit. It is data level 10bit 444 mxf video.

It is will be active only for 2D rendering such as Nuke compositing job. Also there is `slate-frame` which will be add the slate with metadata before the rendered range and attach it to the video. This is only possible with SLATE node above write node of Nuke workfile at the moment.

The resolution of this file is the original shot definition as seen in Nuke workfile because it has no `reformat` tag.

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

<br />

##### ProRes 422:

This output will be in Prores 422 format, will include slate frame, screen space LUT will be applied, it will be reformatted to resolution defined by `to_height` and `to_width` attributes and will have metadata burned into the image.

```json
{
    "prores": {
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

<br />

### `ProcessSubmittedJobOnFarm`

```json
{
    "ProcessSubmittedJobOnFarm": {
        "aov_filter": {
            "host": ["aov_name"],
            "maya": ["beauty"]
        },
        "deadline_pool": ""
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

### `ValidateShaderName`

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

### `ExtractThumbnail`

Plugin responsible for generating thumbnails with colorspace controlled by Nuke. Reformat node will secure proper framing within the default workfile screen space.

```json
{
"nodes": {
    "Reformat": [
        ["type", "to format"],
        ["format", "HD_1080"],
        ["filter", "Lanczos6"],
        ["black_outside", true],
        ["pbb", false]
    ]
}
}
```

### `ExtractReviewDataMov`

`viewer_lut_raw` **true** will publish the baked mov file without any colorspace conversion. It will be baked with the workfile workspace. This can happen in case the Viewer input process uses baked screen space luts.

#### baking with controlled colorspace

Some productions might be using custom OCIO config files either for whole project, sequence or even individual shots. In that case we can use **display roles** to let compositors use their preferred viewer space, but also make sure baking of outputs is happening in a defined space for clients reviews.


`bake_colorspace_fallback` this will be used if for some reason no space defined in `shot_grade_rec709` is found on shot's _config.ocio_

> be aware this will only work if `viewer_lut_raw` is on _false_

```json
{
"viewer_lut_raw": false,
"bake_colorspace_fallback": "show_lut_rec709",
"bake_colorspace_main": "shot_grade_rec709"
}
```

## NukeStudio

### Publish.json

Destination of the following example codes:

[`presets/plugins/nukestudio/publish.json`](https://github.com/pypeclub/pype-config/blob/develop/presets/plugins/nukestudio/publish.json)

### `CollectInstanceVersion`

Activate this plugin if you want your published plates to always have the same version as the hiero project they were published from. If this plugin is off, plate versioning automatically finds the next available version in the database.

```json
{
    "CollectInstanceVersion": {
        "enabled": true
    }
}
```

### `ExtractReviewCutUpVideo`

Example of tag which could be added into the plugin preset.
In this case because we might have 4K plates but we would like to publish all review files reformated to 2K.

[details of available tags](#preset-attributes)

```json
{
    "ExtractReviewCutUpVideo": {
        "tags_addition": ["reformat"]
    }
}
```

## Standalone Publisher
