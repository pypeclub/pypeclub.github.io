---
id: version-2.4.0-admin_hosts
title: Hosts Setup
sidebar_label: Hosts Setup
original_id: admin_hosts
---

## Autodesk Maya

[Autodesk Maya](https://www.autodesk.com/products/maya/overview) is supported out of the box and doesn't require any special setup. Even though everything should be ready to go from the start, here is the checklist to get pype running in Maya

1. Correct executable in launchers as explained in [here](admin_config#launchers)
2. Pype environment variable added to `PYTHONPATH` key in `maya.json` environment preset.
```json
{
  "PYTHONPATH": [
  "{PYPE_ROOT}/repos/avalon-core/setup/maya",
  "{PYPE_ROOT}/repos/maya-look-assigner"
  ]
}
```


## Foundry Nuke

[Foundry Nuke](https://www.foundry.com/products/nuke) is supported out of the box and doesn't require any special setup. Even though everything should be ready to go from the start, here is the checklist to get pype running in Nuke

1. Correct executable in launchers as explained in [here](admin_config#launchers)
2. Following environment variables in `nuke.json` environment file. (PYTHONPATH might need to be changed in different studio setups)

```json
{
  "NUKE_PATH": [
      "{PYPE_ROOT}/repos/avalon-core/setup/nuke/nuke_path",
      "{PYPE_MODULE_ROOT}/setup/nuke/nuke_path",
      "{PYPE_STUDIO_PLUGINS}/nuke"
  ],
  "PYPE_LOG_NO_COLORS": "True",
  "PYTHONPATH": {
      "windows": "{VIRTUAL_ENV}/Lib/site-packages",
      "linux": "{VIRTUAL_ENV}/lib/python3.6/site-packages"
  }
}
```



## AWS Thinkbox Deadline

To support [AWS Thinkbox Deadline](https://www.awsthinkbox.com/deadline) you just need to:

1. enable it in **init_env** key of your `deploy.json` file:

```json
{
  "PYPE_CONFIG": "{PYPE_ROOT}/repos/pype-config",
  "init_env": ["global", "avalon", "ftrack", "deadline"]
}
```

2. Edit `repos/pype-config/environments/deadline.json` and change `DEADLINE_REST_URL` to point to your Deadline Web API service.

3. Set up *Deadline Web API service*. For more details on how to do it, see [here](https://docs.thinkboxsoftware.com/products/deadline/10.0/1_User%20Manual/manual/web-service.html).

## Virtual Vertex Muster

Pype supports rendering with [Muster](https://www.vvertex.com/). To enable it:
1. Add `muster` to **init_env** to your `deploy.json`
 file:

```json
{
  "PYPE_CONFIG": "{PYPE_ROOT}/repos/pype-config",
  "init_env": ["global", "avalon", "ftrack", "muster"]
}
```

2. Configure URL to Muster Web API - in `repos/pype-config/environments/muster.json`. There you need to set `MUSTER_REST_URL` to correct value.

3. Enabled muster in [tray presets](admin_presets_tools##item_usage-dict)

#### Template mapping

For setting up muster templates have a look at [Muster Template preset](admin_presets_tools#muster-templates)

:::note
User will be asked for it's Muster login credentials during Pype startup or any time later if its authentication token expires.
:::


## Clockify

[Clockify](https://clockify.me/) integration allows pype users to seamlessly log their time into clockify in the background. This in turn allow project managers to have better overview of all logged times with clockify dashboards and analytics.

1. Enable clockify, add `clockify` to **init_env** in your `deploy.json`
 file:

```json
{
  "PYPE_CONFIG": "{PYPE_ROOT}/repos/pype-config",
  "init_env": ["global", "avalon", "ftrack", "clockify"]
}
```

2. Configure your clockify workspace. In `repos/pype-config/environments/clockify.json`, you need to change `CLOCKIFY_WORKSPACE` to the correct value

```json
{
    "CLOCKIFY_WORKSPACE": "test_workspace"
}
```

3. Enabled Clockify in [tray presets](admin_presets_tools##item_usage-dict)


:::note
User will be asked for it's Clockify login credentials during Pype startup.
:::
