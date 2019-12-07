---
id: version-2.3.0-admin_config
title: Pype Configuration
sidebar_label: Configuration
original_id: admin_config
---

All of the studio specific configurations are stored as simple JSON files in the **pype-config** repository.

Config is split into multiple sections described below.

## Anatomy

Defines how folders and files are created for all the project data.

We have a few required anatomy templates for Pype to work properly, however we can keep adding more when needed.

required templates:

```yaml
work:
  folder: "{root}/{project[name]}/{hierarchy}/{asset}/work/{task}"
  file: "{project[code]}_{asset}_{task}_v{version:0>3}<_{comment}>.{ext}"
  path: "{root}/{project[name]}/{hierarchy}/{asset}/work/{task}/{project[code]}_{asset}_{task}_v{version:0>3}<_{comment}>.{ext}"

publish:
  path: "{root}/{project[name]}/{hierarchy}/{asset}/publish/{family}/{subset}/v{version:0>3}/{project[code]}_{asset}_{subset}_v{version:0>3}<.{frame}>.{representation}"
```

Folder holds path template for the directory where the files are stored, File only holds the filename and path combines the two together for quicker access.

## Environments

Here is where all the environment variables are set up. Each software has it's own environment file where we set all variables needed for it to function correctly. This is also a place where any extra in-house variables should be added. All of these individual configs and then loaded additively as needed based on current context.

For example when launching Pype Tray, Global and Avalon envs are loaded first. If the studio uses also *Deadline* and *Ftrack*, both of those environments get added at the same time. This set the base environment for the rest of the pipeline that will be inherited by all the applications launched from this point on.

When user launches an application for a task, it's general and versioned env files get added to the base before the software launches. When launching *Maya 2019*, both `maya.json` and maya_2019.json will be added.

If the project or task also has extra tools configured, say *Arnold Mtoa 3.1.1*, a config JSON with the same name will be added too.

This way the environment is completely dynamic with possibility of overrides on a granular level, from project all the way to task overrides.

## Launchers

Considering that different studios use different ways of deploying software to their workstations, we need to tell Pype how to launch all the individual applications available in the studio.

Each software need multiple files prepare for it to function correctly.

```text
application_name.toml
```

This file tell Pype how to work with the application across the board. Icons, Label in GUI, *Ftrack* settings but most importantly it defines what executable to run. These executable are store in the windows and linux subfolder in the launchers folder. If `application_name.toml` defines that executable to run is `application_name`, Pype assumes that a `.bat` and `.sh` files under that name exist in the linux and windows folders in launchers. Correct version is picked automatically based on the platform Pype is running on.

These `.bat` and `.sh` scripts have only one job then. They have to point to the exact executable path on the system, or to a command that will launch the app we want. Version granularity is up to the studio to decide. We can show artists Nuke 11.3, while specifying the particular version 11.3v4 only in the .bat file, so the artist doesn't need to deal with it, or we can present him with 11.3v4 directly. the choice is mostly between artist control vs more configuration files on the system.

## Presets

This is where most of the functions configuration of the pipeline happens. Colorspace, data types, burnin setting, geometry naming conventions, ftrack attributes, playblast settings, types of exports and lot's of other settings.

Presets are categorized in folders based on what they control or what host (DCC application) they are for. We're slowly working on documenting them all, but new ones are being created regularly as well. Hopefully the categories and names and sufficiently self-explanatory.

### colorspace

defines all available color spaces in the studio. These configs not only tell the system what OCIO to use, but also how exactly it needs to be applied in the give application. From loading the data, trough previewing it all the way to rendered

### Dataflow

Defines allowed file types and data formats across the pipeline including their particular coded and compression settings.

### Plugins

All the creator, loader and publisher configurations are stored here. We can override any properties of the default plugin values and more.

#### How does it work

Overriding plugin properties is as simple as adding what needs to be changed to
JSON file along with plugin name.

Say you have name validating plugin:

```python
import pyblish.api


class ValidateModelName(pyblish.api.InstancePlugin):

    order = pype.api.ValidateContentsOrder
    hosts = ['maya']
    families = ['model']
    label = 'Validate Mesh Name'

    # check for: 'foo_001_bar_GEO`
    regex = r'.*_\d*_.*_GEO'

    def process(self, instance):
      # pseudocode to get nodes
      models = get_models(instance.data.get("setMembers", None))
      r = re.compile(self.regex)
      for model in models:
            m = r.match(obj)
            if m is None:
              raise RuntimeError("invalid name on {}".format(model))

```
_This is just non-functional example_

Instead of creating new plugin with different regex, you can put:

```javascript
"ValidateModelName": {
  "regex": ".*\\d*_.*_geometry"
}
```
and put it into `repos/pype-config/presets/plugins/maya/publish.json`. There can be more entries
like that for how many plugins you need.

That will effectively replace regex defined in plugin during runtime with the one you've just
defined in JSON file. This way you can change any properties defined in plugin.

:::tip loader and creators
Similar way exist for *Loaders* and *Creators*. Use files `create.json` for Creators, `load.json`
for Loaders and `publish.json` for **Pyblish** plugins like extractors, validators, etc.

Preset resolution works by getting host name (for example *Maya*) and then looking inside
 `repos/pype-config/presets/plugins/<host>/publish.json` path. If plugin is not found, then
 `repos/pype-config/presets/plugins/global/publish.json` is tried.
:::

:::tip Per project plugin override
You can override plugins per project. See [Per-project configuration](#per-project-configuration)
:::

### AWS Thinkbox Deadline

To support [AWS Thinkbox Deadline](https://www.awsthinkbox.com/deadline) you just need to enable it in
**init_env** key of your `deploy.json` file:

```javascript
{
  "PYPE_CONFIG": "{PYPE_ROOT}/repos/pype-config",
  "init_env": ["global", "avalon", "ftrack", "deadline"],
  ...
}
```

Then edit `repos/pype-config/environments/deadline.json` and change `DEADLINE_REST_URL` to point to
your Deadline Web API service.

See [here](https://docs.thinkboxsoftware.com/products/deadline/10.0/1_User%20Manual/manual/web-service.html) for
more details how to setup *Deadline Web API service*


### Muster

There is support for [Muster](https://www.vvertex.com/). To enable it, add `muster` to **init_env** to your `deploy.json`
 file:

```javascript
{
  "PYPE_CONFIG": "{PYPE_ROOT}/repos/pype-config",
  "init_env": ["global", "avalon", "ftrack", "muster"],
  ...
}
```
You need to configure URL to Muster Web API - in `repos/pype-config/environments/muster.json`. There you need to set
`MUSTER_REST_URL` to correct value.

User will be asked for it's Muster login credentials during Pype startup or any time later
if its authentication token expires.

#### Template mapping

Muster template mapping maps Muster template ID to name of renderer. Initially it is set Muster defaults.
About templates and Muster se [Muster Documentation](https://www.vvertex.com/wiki900/doku.php?id=muster:9.0).
Mapping is defined in:

`repos/pype-config/muster/templates_mapping.json`

Keys are renderer names and values are templates IDs.


## Schema

Holds all database schemas for *mongoDB*, that we use. In practice these are never changed on a per studio basis, however we included them in the config for cases where a particular project might need a very individual treatment.

## System

In system configuration we set up all the storages in the studio. All entries are organized hierarchically and when PYPE launches they get parsed for correct platform and saved in to environment variable that can be used in any paths down the line.

Most importantly they are used in anatomy templates for project folders.

For example following config would create these environment variables when Pype runs on windows computer.

```sh
    PYPE_STUDIO_PROJECT_PATH = "//UNC_shared_path/projects"
    PYPE_STUDIO_PROJECT_MOUNT = "P:/projects"
    PYPE_STUDIO_CORE_PATH = "//192.168.1.10/share/core"
    PYPE_STUDIO_CORE_MOUNT = "K:/core"
```

```json
{
  "studio": {
    "projects": {
      "path": {
        "windows": "//UNC_shared_path/projects",
        "darwin": "",
        "linux": "//UNC_shared_path/projects"
      },
      "mount": {
        "windows": "P:/projects",
        "darwin": "",
        "linux": "/mnt/share/core"
      }
    },
    "core": {
      "path": {
        "windows": "//192.168.1.10/share/core",
        "darwin": "",
        "linux": "//192.168.1.10/share/core"
      },
      "mount": {
        "windows": "K:/core",
        "darwin": "",
        "linux": "/mnt/share/core"
      }
    }
  }
}
```

<br>

**There are 2 storages that are required for PYPE to be functional**

### Projects storages

This should point to the shared storage where projects are saved. A folder per project will be created in here.

### Core storage

A shared storage where pipeline, shared scripts and tools are stored. This is where Pype should be installed and all the users must have at least "read" permissions here.

## Per-project configuration

You can have per-project configuration with Pype. This allows you to have for example different
validation requirements, file naming, etc.

This is very easy to set up - point `PYPE_PROJECT_CONFIGS` environment variable to place
where you want those per-project configurations. Then just create directory with project name and
that's almost it. Inside, you can follow hierarchy of **pype-config** presets. Everything put there
will override stuff in **pype-config**.

### Example

You have project where you need to disable some validators - let's say overlapping
UVs validator in Maya.

Project name is *FooProject*.
Your `PYPE_PROJECT_CONFIGS` points to `/studio/pype/projects`.

Create projects settings directory:
```sh
mkdir $PYPE_PROJECT_CONFIGS/FooProject
```
Now you can use plugin overrides to disable validator:

Put:
```javascript
{
  "ValidateMeshHasOverlappingUVs": {
    "enabled": false
  }
}
```
into:

```sh
$PYPE_PROJECT_CONFIGS/FooPoject/presets/plugins/maya/publish.json
```

And its done. **ValidateMeshHasOverlappingUVs** is a class name of validator - you can
find that name by looking into python file containing validator code, or in Pyblish GUI.

That way you can make it optional or set whatever properties you want on plugins and those
settings will take precedence over the default site-wide settings.
