---
id: admin_presets_standalonepublisher
title: Presets > Standalone Publisher
sidebar_label: Standalone Publisher
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

path: `pype-config/presets\plugins\standalonepublisher\publish.json`

For general standalone publisher usage see [standalone publisher](artist_tools#standalone-publisher)

## Editorial

This family accepts EDL files in the stack. Either one or multiple `.edl` files can be loaded at the same time, if your edit contains multiple video tracks.

There are two possible workflows for publishing EDL:

-   `SOV` single offline video
-   `MP` multiple plates pre-exported into a folders relative to the EDL

### `CollectEditorial`

#### Attributes:

-   **extensions**: list of extensions which are accepted for `SOV`.
-   **source_dir**: path to directory with plates when using `MP` workflow. Searching patterns for expected subset names and alternatives are defined in `CollectInstances`.

#### Example of use:

##### Path (source_dir):

to define the path to plates you can use:

-   relative path from EDL file: `./pathToDir` and `../pathToDir`
-   absolute path: `C:/path/to/dir/with/inputs`
-   pype anatomy template path: `{project[name]}/pathToDir`

##### Naming convention:

To correctly match the clips in `.edl`, to their respective plates, they should be correspond to either directory name in `./source_dir/[clipName]/` or a file name `./source_dir/[clipName]_[subsetName].[ext]`. So if name of clip in EDL is **clip01** then folder name should start with `clip01` or in case of file `clip01_plateReference.jpg`

```json
{
  "CollectEditorial": {
    "extensions": [".mov", ".mp4"],
    "source_dir": "./inputs"
  }
}
```

### `CollectInstances`

#### Attributes:

-   **subsets**: Dictionary with a subset profiles used within SOV and MP workflows. By default SOV workflow is used

#### Subset Attributes:

-   **subsetName**: key which is defining subset name as it will apparel in database
-   **subsetName.family**: main family. This will be shown in Loader
-   **subsetName.families**: list of additional families
-   **subsetName.extensions**: list of extension (with dot)
-   **subsetName.[attrName]**: any attribute we want to add to instance.data

#### Example of use:

The two workflows have their own way of approaching subset creation. SOV is a simpler case as it directly applies the defined set of attributes to a new instance created by trimming only part of the input video file with FFMPEG. On the other hand the MP workflow tries to find any available alternatives of subset names within folders, files or collection of files placed inside the `source_dir`.

&lt;Tabs
  defaultValue="SOV"
  values={[
    {label: 'Single Offline Video', value: 'SOV'},
    {label: 'Multiple Plates', value: 'MP'},
  ]}>

<TabItem value="SOV">

This is example of a simple preset for publishing from a single offline video and is a default unless overriden by presets.

```json
{
  "subsets": {
    "referenceMain": {
        "family": "review",
        "families": ["clip", "ftrack"],
        "extensions": [".mp4"]
    },
    "audioMain": {
      "family": "audio",
      "families": ["clip", "ftrack"],
      "extensions": [".wav"],
    },
    "shotMain": {
        "family": "shot",
        "families": []
    }
  }
}
```

</TabItem>
<TabItem value="MP">

MP workflow is a lot more universal as it is using the key and its set of attributes as searching patterns for finding matching folder, file or collection of files.

If `["ftrack", "review"]` is added to **subsetName.families** the subset will be then added to ftrack with preview video. Video could be generated with FFMPEG from any supported image sequence or video file. If a MP4 is in **subsetName.extensions** then it is used directly with no need for FFMPEG conversion.

If `.jpg` is added to **subsetName.extensions** and any variant of word with `thumb` is found in the name of single file then this will be used as thumbnail for the new version of subset.

```json
{
  "subsets": {
    "plateMain": {
      "family": "plate",
      "families": ["clip"],
      "extensions": [".exr", ".dpx", ".mp4", ".jpg"]
    },
    "plateOffline": {
      "family": "plate",
      "families": ["clip", "review", "ftrack"],
      "extensions": [".jpg", ".mp4", ".mov"]
    },
    "artReference": {
      "family": "image",
      "families": [],
      "extensions": [".jpg", ".psd"]
    },
    "shotMain": {
      "family": "shot",
      "families": []
    }
  }
}
```

</TabItem>
</Tabs>

### `CollectHierarchyInstance`

#### Attributes:

-   **`shot_rename_template`**: Anatomy template string formatted with contextual data of selected parents and keys defined in `shot_rename_search_patterns`
-   **`shot_rename_search_patterns`**: formatting pairs key and value as regex search patterns
-   **`shot_add_hierarchy.parents_path`**: template string formatted by `shot_add_hierarchy.parents` keys. Order of parts divided by '/' is used for forming hierarchy.
-   **`shot_add_hierarchy.parents`**: formatting pairs where key is used for formating of parents_path and its values are Anatomy template formattable strings which are formatted by contextual data of selected parents and keys defined in `shot_rename_search_patterns`
-   **`shot_add_tasks`**: dictionary of task names and allowed task types.

#### Example of use:

```json
{
  "shot_rename_template": "{project[code]}_{_sequence_}_{_shot_}",
  "shot_rename_search_patterns": {
    "_sequence_": "(\\d{4})(?=_\\d{4})",
    "_shot_": "(\\d{4})(?!_\\d{4})"
  },
  "shot_add_hierarchy": {
        "parents_path": "{project}/{folder}/{sequence}",
        "parents": {
            "project": "{project[name]}",
            "sequence": "{_sequence_}",
            "folder": "shots"
        }
  },
  "shot_add_tasks": {
    "animation_char": {
      "type": "Animation"},
    "comp_environ": {
      "type": "Compositing"},
    "matte_paint": {
      "type": "Art"}
  }
}
```
