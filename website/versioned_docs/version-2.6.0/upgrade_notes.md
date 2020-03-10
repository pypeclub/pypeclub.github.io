---
id: version-2.6.0-upgrade_notes
title: Upgrade Notes
sidebar_label: Upgrade Notes
original_id: upgrade_notes
---

<a name="update_to_2.6.0"></a>
## Updating to 2.6.0 ##

### Dev vs Prod

If you want to differentiate between dev and prod deployments of pype, you need to add `config.ini` file to `pype-setup/pypeapp` folder with content.

```
[Default]
dev=true
```

### Ftrack

You will have to log in to ftrack in pype after the update. You should be automatically prompted with the ftrack login window when you launch 2.6 release for the first time.

Event server has to be restarted after the update to enable the ability to control it via action.


### Presets

There is a major change in the way how burnin presets are being stored. We simplified the preset format, however that means the currently running production configs need to be tweaked to match the new format.

:::neutral Example of converting burnin preset from 2.5 to 2.6
<!--DOCUSAURUS_CODE_TABS-->

<!--2.5 burnin preset-->

```
"burnins":{
      "TOP_LEFT": {
        "function": "text",
        "text": "{dd}/{mm}/{yyyy}"
      },
      "TOP_CENTERED": {
          "function": "text",
          "text": ""
      },
      "TOP_RIGHT": {
          "function": "text",
          "text": "v{version:0>3}"
      },
      "BOTTOM_LEFT": {
          "function": "text",
          "text": "{frame_start}-{current_frame}-{frame_end}"
      },
      "BOTTOM_CENTERED": {
          "function": "text",
          "text": "{asset}"
      },
      "BOTTOM_RIGHT": {
          "function": "frame_numbers",
          "text": "{username}"
      }
```

<!--2.6 burnin preset-->
```
"burnins":{
    "TOP_LEFT": "{dd}/{mm}/{yyyy}",
    "TOP_CENTER": "",
    "TOP_RIGHT": "v{version:0>3}"
    "BOTTOM_LEFT": "{frame_start}-{current_frame}-{frame_end}",
    "BOTTOM_CENTERED": "{asset}",
    "BOTTOM_RIGHT": "{username}"
}
```

<!--END_DOCUSAURUS_CODE_TABS-->
