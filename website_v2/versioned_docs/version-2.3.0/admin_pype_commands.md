---
id: admin_pype_commands
title: Pype commands
sidebar_label: Pype commands overview
original_id: admin_pype_commands
---

## Pype Commands Overview

### Help

To get all available commands:
```sh
pype help
```

To get help on particular command:
```sh
pype <command> --help
```

--------------------

### Install

To install Pype:
```sh
pype install
```

To reinstall Pype:
```sh
pype install --force
```

To install Pype in offline mode:
```sh
pype install --offline
```

To reinstall Pype in offline mode:
```sh
pype install --offline --force
```

--------------------

### Deploy

To deploy Pype:
```sh
pype deploy
```

To force re-deploy:
```sh
pype deploy --force
```

To validate deployment:
```sh
pype validate
```

--------------------

### Pype Tray

To launch Tray:
```sh
pype tray
```

To launch Tray with debugging information:
```sh
pype tray --debug
```

--------------------

### Download dependencies

To download required dependencies:
```sh
pype download
```

--------------------

### Testing mongodb

To run testing mongodb database:
```sh
pype mongodb
```

--------------------

### Ftrack event server

This command launches ftrack event server.

This should be ideally used by system service (such us systemd or upstart
on linux and window service).

You have to set either proper environment variables to provide URL and
credentials or use option to specify them. If you use `--store_credentials`
provided credentials will be stored for later use.

To run ftrack event server:
```sh
pype eventserver --ftrack-url=<url> --ftrack-user=<user> --ftrack-api-key=<key> --ftrack-events-path=<path> --no-stored-credentials --store-credentials
```

- `--debug` - print debug info
- `--ftrack-url` - URL to ftrack server
- `--ftrack-user` - user name to log in to ftrack
- `--ftrack-api-key` - ftrack api key
- `--ftrack-events-path` - path to event server plugins
- `--no-stored-credentials` - will use credential specified with options above
- `--store-credentials` - will store credentials to file for later use

--------------------

### Publish from CLI

Pype takes JSON from provided path and use it to publish data in it.
```sh
pype publish <PATH_TO_JSON>
```

- `--gui` - run Pyblish GUI
- `--debug` - print more verbose infomation

--------------------

### Texture copy

Copy specified textures to provided asset path.

It validates if project and asset exists. Then it will
copy all textures found in all directories under `--path` to destination
folder, determined by template texture in **anatomy**. I will use source
filename and automatically rise version number on directory.

Result will be copied without directory structure so it will be flat then.
Nothing is written to database.
```sh
pype texturecopy --project <PROJECT_NAME> --asset <ASSET_NAME> --path <PATH_TO_JSON>
```

--------------------

### Tests

Run test suite on Pype:
```sh
pype test --pype
```

`--pype` - without this option, tests are run on *pype-setup* only.

--------------------

### Coverage

Generate code coverage report. If `--pype` is not specified, tests are run against *pype-setup*.
```sh
pype coverage --pype
```

--------------------

### Make API documentation

Generate API documentation into `docs/build`
```sh
pype make_docs
```

--------------------

### Add dependencies to requirements.txt

Synchronize dependecies in your virtual environment with requirement.txt file.
Equivalent of running `pip freeze > pypeapp/requirements.txt` from your virtual
environmnet. This is useful for development purposes.

```sh
pype update-requirements
```
