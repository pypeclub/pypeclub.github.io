---
id: artist_hosts_nukestudio
title: Hiero
sidebar_label: Hiero
---

:::note
All the information applies also for _Hiero_. We are supporting only versions  `11.0` and above.
:::

:::tip Terminology
For mode details about the element click on its name.

[shot](artist_concepts.md#asset) - Shot object that will be created in the database or ftrack.

[subset](artist_concepts.md#subset) - a named clip on timeline tagged for publishing _foreground_, _main_, _background_, _reference_

[representation](artist_concepts.md#representation) - File type of a subset. A plate could for example be published as .exr sequence and .mov, these would be 2 representations

:::

## Hiero specific tools

### Create Default Tags

<div class="ImagePanel" data-image-align='right'>
<div class="ImagePanel.content">

This tool will recreate all necessary pype tags defined in [config file](admin_presets_nukestudio.md#tags). It is automatically run at start of the hiero. Use this tool to manually re-create all the tags if you accidentaly delete them, or you want to reset them to default values.

#### Result

-   Will create tags in Tags bin in case there were none
-   Will set all gats to default values if they are altered

</div>
<div class="ImagePanel.image Screenshot">

![Default Tags](assets/nukestudio_defaultTags.png)

</div>
</div>


## Publishing Shots

There are two ways to `Publish` data from hiero. Use either context menu on right clicking selected clips or go to top `menu > Pype > Publish`.

Keep in mind that the publishing currently works on selected shots

Currently we **do not support encoding** on the fly during publishing so
all clips have to be previously encoded and cut to correct length.

<div id="noHeadline" class="ImagePanel" data-image-align='left'>
<div class="ImagePanel.content">

Shot names for all the related plates that you want to publish (subsets) has to be the same to be correctly paired together (as it is shown in image).
Note the layer **review** which contains `plateMainReview`.
This media is just h264,1920x1080 video for tha will be used as preview of the actua `plateMain` subset and will be uploaded to Ftrack. We explain how to work with review tag in [**Reviewing**](#reviewing).

</div>
<div class="ImagePanel.image Screenshot">

![Clips naming](assets/nukestudio_basic_clipNaming.png)

</div>
</div>

:::important
To to successfuly publish a shot from hiero:
1. At least one clip of your shot must be tagged with `Hierarchy`, `subset` and `handleStart/End`.
2. Your source media must be pre-cut to correct length (including handles)
:::

### Tagging

<div class="ImagePanel" data-image-align='right'>
<div class="ImagePanel.content">

Pype's custom tags are used for defining shot parameters and to define which clips and how they are going to be published.

If you want to add any properties to your clips you'll need to adjust values on the given tag and then drag it onto the clip.

</div>
<div class="ImagePanel.image Screenshot">

<figure>

![Tags basic](assets/nukestudio_tagsToClips_basic.png)

<figcaption>

1.  double click on preferable tag and drag&drop it to selected clip(s)
2.  Basic set of tags on clip (usually subset: plateMain)
3.  Additionally select clip and edit its parameters
4.  Edit parameters here but Do not touch `family`

</figcaption>
</figure>
</div>
</div>

:::important
Only clips with `subset` will be directly processed for publishing.
:::

### Custom Tags Details

#### Asset related

| Icon                | Description                                                                        | Editable                              | Options                                                                                  |
| ------------------- | ---------------------------------------------------------------------------------- | ------------------------------------- | ---------------------------------------------------------------------------------------- |
| ![Hierarchy][hi]    | Definition of parents for the asset (shot). Usually combined with `plateMain` tag. | root, folder, sequence, episode, shot | example: {sequence} = name of hiero sequence or overwrite by any text without `-` or `_` |
| ![Frame Start][fst] | Defining asset (shot) start frame                                                  | number                                | positive int `number` or `"source"`                                                      |

#### Subsets

| Icon               | Description                                                        | Editable | Options                           |
| ------------------ | ------------------------------------------------------------------ | -------- | --------------------------------- |
| ![Review][rew]     | Reviewable subset identifier                                       | track    | `"review"` or other name of track |
| ![Plate Main][pmn] | Main plate subset identifier (usually combined with Hierarchy tag) | subset   | `"main"` or other                 |
| ![Plate FG][pfg]   | Foreground plate subset identifier                                 | subset   | `"Fg##"` or other                 |
| ![Plate BG][pbg]   | Foreground plate subset identifier                                 | subset   | `"Bg##"` or other                 |
| ![Plate Ref][ref]  | Reference plate subset identifier                                  | subset   | `"Ref"`  or other                 |

#### Subset's attributes

| Icon               | Description                                                                | Editable            | Options                       |
| ------------------ | -------------------------------------------------------------------------- | ------------------- | ----------------------------- |
| ![Resolution][rsl] | Pushing source resolution to subset metadata                               | none                |                               |
| ![Retiming][rtm]   | Pushing retiming into subset metadata if retime or time-warp found on clip | marginIn, marginOut | int `number` frame cushioning |
| ![Lense][lns]      | Lense metadata holder (work in progress)                                   | focalLengthMm       | int `number`                  |

#### Handles

| Icon                  | Description                                           | Editable | Options                    |
| --------------------- | ----------------------------------------------------- | -------- | -------------------------- |
| ![Handles Start][ahs] | Handles at a start of a clip [vers: 0, 5, 10, 15, 20] | value    | change to any int `number` |
| ![Handles End][ahe]   | Handles at an end of a clip [vers: 0, 5, 10, 15, 20]  | value    | change to any int `number` |

[hi]: assets/nks_icons/hierarchy.png

[ahs]: assets/nks_icons/3_add_handles_start.png

[ahe]: assets/nks_icons/1_add_handles_end.png

[rsl]: assets/nks_icons/resolution.png

[rtm]: assets/nks_icons/retiming.png

[rew]: assets/nks_icons/review.png

[pmn]: assets/nks_icons/z_layer_main.png

[pfg]: assets/nks_icons/z_layer_fg.png

[pbg]: assets/nks_icons/z_layer_bg.png

[lns]: assets/nks_icons/lense1.png

[fst]: assets/nks_icons/frame_start.png

[ref]: assets/nks_icons/reference.png

### Handles

the main idea is to add handles tags to the clip holding also Hierarchy tag.
This way we are defining the asset property. In case you wish to have different
handles on other subsets (example: bg) you have to add handles tags to it too.

If you wish to have handle 100 frames on the start then simply drop `start: add 10 frames` to your clip
and then go to clips tags and find the tag, then replace 10 for 100 in name and also change value to 100.
It is also explained in video tutorial [`Extending premade handles tags`](#extending-premade-handles-tags)

:::caution
In case you don't need any handles you have to add `start: add 0 frames` and `end: add 0 frames` tags to the clip with Hierarchy tag.
:::

### Retiming

The Pype is able to publish also retiming parameters into database.
Any clip with **editorial**/**retime** or **TimeWarp** soft effect has to be tagged with `Retiming` tag.

Any animation on **TimeWarp** is also preserved and reapplied in _Nuke_.

You can combine **retime** and only one **Timewarp**.

### Reviewing

<div class="ImagePanel" data-image-align='right'>
<div class="ImagePanel.content">

There are two ways to publish reviewing (preview-able) h264 mov into Pype.

Within the first way you just drop Review Tag at the clip you wish to bind the review file with. At the image we dropped it to **plateMain** clip. Then you have to rename to _"review"_ the layer which is going to hold reviewable file clip - in our case `plateMainReview`.  The name of both clips has to be the same.

</div>
<div class="ImagePanel.image Screenshot">

<figure>

![Reviewing](assets/nukestudio_reviewing.png)

<figcaption>

1.  `- review` suffix is added to publishing item label if any reviewable file is found
2.  `plateMain` clip is holding the Review tag
3.  layer name is `review` as it is used as default in _Review_ Tag in _track_
4.  name of clip is the same across all subsets

</figcaption>
</figure>

</div>
</div>

Second way would be to add the **h264 mov 1920x1080** into the same folder
as image sequence. The name of the file has to be the same as image sequence.
Publisher will pick this file up and add it to the files list during collecting.
This will also add `"- review"` to instance label in **Publish**.

Example:

-   img seq: `image_sequence_name.0001.exr`
-   mov: `image_sequence_name.mov`

### LUT Workflow

<div class="ImagePanel" data-image-align='right'>
<div class="ImagePanel.content">

Publishing soft effects from Pype has never been easyer. You can add the effect
to particular clip or to whole layer as it is show on the picture. All subsets
bellow the `Video 6` layer (green arrow) are published with the **lut** family  added to publishing items. Any clip above the `Video 6` layer will have no **lut** family and that is how it should be.  

Any used Lut files will be copied over to published subset folder `lutPlateMain` (in our example) into folder `resources`.

</div>
<div class="ImagePanel.image Screenshot">

![Reviewing](assets/nukestudio_softEffects.png)

</div>

</div>

:::note

<div class="ImagePanel" data-image-align='right'>
<div class="ImagePanel.content">

You will not be able to publish only soft effects because at the moment we can publish soft effects only as part of other subset's publishing. Image is demonstrating successful publishing.

</div>
<div class="ImagePanel.image Screenshot">

![Reviewing](assets/nukestudio_lutSucess.png)

</div>
</div>
:::

### Transformations

work in progress

## Tutorials

<div id="tutorials">
<div id="video">

### Basic publishing with soft effects

<iframe src="https://drive.google.com/file/d/1-BN6ia9ic9om69mq3T4jiwZnbrBGdyNi/preview"></iframe>
</div>

<div id="video">

### Extending premade handles tags

<iframe src="https://drive.google.com/file/d/1-BexenWWmSURA-QFgxkoZtyxMEhZHOLr/preview"></iframe>
</div>
</div>
