---
id: admin_install
title: Pype Setup
sidebar_label: Pype Setup
original_id: admin_install
---

## Advanced installation methods

### Introduction
Basic installation process is described in [Getting started](artist_getting_started). More about
installation and deployment can be found documented here.

:::note
If Pype is not installed on computer and Pype command is run, it will try to automatically install it's environment by itself. This will not work in offline scenarios.
:::

### Requirements

#### Python 3.6+

Pype requires Python 3.6 and late to be installed on each workstation running Pype. Windows version can be
easily grabbed at [python.org](https://www.python.org/downloads/). Install location doesn't matter but
python executable should be in `PATH` environment variable.

On linux it is somehow different and all depends on linux distribution in use.

:::important Linux
Some linux variants (for example *Ubuntu*) need **python-dev** variant of python package that includes python headers and developer tools. This is needed because some of **Pype** requirements need to compile themselves against python during their installation. Please, refer to your distribution community to find out how to install that package.

On *Ubuntu* just run:
```sh
sudo apt install build-essential
```

On *Centos*:
```sh
sudo yum group install "Development Tools"
```
:::

:::tip CentOS 7
Python 3.6 is not part of official distribution. Easiest way is to add it with the help of *SCL* - Software Collection project.
This has advantage that it won't replace system version of python.

```sh
sudo yum update
sudo yum install centos-release-scl
```
Now you can install python itself:
```sh
sudo yum install rh-python36
```

To be able to use installed version of python, you must enable it in shell:
```sh
scl enable rh-python36 bash
```

This will enable python 3.6 in currently running bash only!

Check it with:
```sh
python --version
```

You'll also need developer tools installed for some of the dependencies so:
```sh
sudo yum groupinstall "Development Tools"
```
:::

:::tip Ubuntu
Some versions of Ubuntu already has python 3.6 installed, check it with:
```sh
python3 --version
```
If python shows lower version then required, use:
```
sudo apt-get update
sudo apt-get install python3-dev
```
Please be aware that even if your system already has python 3.6, than if that
didn't come from **python3-dev** package, Pype will most likely fail to install
it's dependencies.
:::

#### MongoDB

Pype needs site-wide installation of **MongoDB**. It should be installed on
reliable server all workstations (and possibly render nodes) can connect. This
server holds **Avalon** database that is at the core of everything, containing
very important data, so it should be backed up often and if high-availability is
needed, *replication* feature of **MongoDB** should be considered. This is beyond the
scope of this documentation, please refer to [MongoDB Documentation](https://docs.mongodb.com/manual/replication/).

Pype can run it's own instance of **mongodb**, mostly for testing and development purposes.
For that is uses locally installed **MongoDB**.

Download it from [mognoDB website](https://www.mongodb.com/download-center/community), install it and
add to the `PATH`. On Windows, Pype tries to find it in standard installation destination or using `PATH`.

To run **mongoDB** on server, use your server distribution tools to set it up (on Linux).

#### Git

To be able to deploy Pype, **git** is need. It will clone all required repositories and
control versions so future updates are easier. Git is however only requirent on admin workstation for global studio updates.

See [how to install git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

To access private repositories, you'll need other optional stuff like ssh key agents, etc.

#### PowerShell (on Windows only)

PowerShell is now included in recent versions of Windows. **Pype** requires at least
version 5.0, included in Windows 10 from beginning and available for Windows 7 SP1,
Windows 8.1 and Windows Server 2012.

If you want to know what version of PowerShell are you running, execute in PowerShell prompt:
```powershell
$PSVersionTable
```
 If you need to install PowerShell or update it, please refer to:
 [Installing powershell on windows](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell?view=powershell-6)

#### Other
:::warning Linux headless server
If you need to run Pype's **ftrack event server** on headless linux server, be aware that due Qt dependencies, you'll need to install OpenGL support there even if server doesn't have any real use for it.
:::

## Studio Setup

### Pype location

Before you install Pype, first clone **pype-setup** repository to place you want Pype to be. In studio setting
you probably want that destination to be on shared network drive so all users can access it.

:::tip production and development branch
We recommend to maintain two *versions* of Pype. First is **production** branch - one you use everyday for your work. Second one is **development** version you should use for testing new features and as testing playground. That branch should point to different Avalon database and use its own **ftrack event server**. More on that in [Pype Configuration](admin_config)

```text
Shared Network Drive
├─── pype
      ├─── prod
      └─── dev
```

so it should be like:
```sh
cd /shared_drive/pype
git clone --branch 2.2.0 https://github.com/pypeclub/pype-setup.git prod
git clone --branch 2.2.0 https://github.com/pypeclub/pype-setup.git dev
```
:::

Specify your version after `--branch` option.

:::note
You should always use tags to checkout to get specific release, otherwise you end up with *develop* branch that can be unstable.
:::

:::warning
By default, both branches will use the same virtual environment. Be careful when modifying your requirements in **dev** version because then it will influence **prod** version as well. Too be safe, modify `PYPE_ENV` environment variable before using **dev** Pype commands.
:::

### Installation

To install pype you first need get to it's root directory in shell or powershell.

```sh
cd /location/of/pype
```

Pype commands are the same on both Windows and Linux, only Pype invocation  differs slightly. On Windows, Pype is run using `.\pype.bat` and on Linux using `. pype`. From now on
just substitute `pype` for whatever is relevant for your platform.

**Pype** can be installed with following command:

```sh
pype install
```

What it basically does:
1) Create python virtual environment on path: `C:\Users\Public\pype_env2` on Windows or `/opt/pype/pype_env2` on Linux.
This can be overridden by setting `PYPE_ENV` to different path. Logic behind this is that this directory on Windows can be shared
between users on one machine - it only stores Pype dependencies, not personal setting or credentials.

2) Then it will install all python dependencies defined in `pypeapp\requirements.txt` into this virtual environment.

:::warning Linux Pype environment directory
On linux it is necessary to adjust user permissions to `/opt/pype/pype_env2` or whatever you set in `PYPE_ENV` and for that you need to be **root**.
:::

This will use your internet connection to download all necessary requirements.

#### Offline installation

You can install Pype in offline scenarios:

```sh
pype install --offline
```

This will use dependencies downloaded into `pype-setup/vendor/packages` rather than pulling directly from pypi. Those packages must first be
downloaded on a machine connected to the internet using:

```sh
pype download
```

:::warning multiple platforms
`pype download` will download packages only for current running platform. So if you run it on Windows machine, only windows packages get downloaded (along with many universal ones). If you run `pype install --offline` on Linux machine then, it will probably fail as Linux specific packages will be missing. In multiplatform environments we recommend to run `pype download` on all used platform to combine all necessary packages into `vendor/packages`.
:::

:::caution multiplatform caveat
There can be problem when using multiplatform environments with libraries compatibility. For example if using **PyQt 5.12**, there seems to be no problem on Windows, but using it on **Centos Linux 7** will cause problems because Centos ships with some older dependent libraries that will not work with aforementioned PyQt version.
:::

#### Forcing Installation

Sometime it is necessary to force re-install Pype environment. To do this:

```sh
pype install --force
```

or

```sh
pype install --force --offline
```
in offline scenarios.

This is useful if Pype is misbehaving as first line of debugging. You can of course just manually delete `PYPE_ENV` directory and run `pype install` again.

### Deployment

After Pype is cloned and installed, it is necessary to *deploy* all repositories used by Pype. This must be done on a computer with
Interent access.

```sh
pype deploy
```

This command will process all repositories specified in `deploy/deploy.json` and clone them into `repos/` directory.

```sh
pype deploy --force
```

will deploy repositories, overwriting existing ones if they exists, setting them to state specified in *deploy.json*.

:::note customizing deployment
You can customize your deployment by your needs. Everything specified in `deploy/deploy.json` is considered as default and can be overridden by creating your own *deploy.json* in sub directory.
```text
pype
 ├─── pypeapp
 ├─── deploy
 │       ├─── deploy.json
 │       ├─── deploy_schema-1.0.json
 │       ├─── my_studio_override
 │       │                  ├─── deploy.json
 │       │                  └─── deploy_schema-1.0.json
 │      ...      
...
```
In such configuration, `deploy/my_studio_override/deploy.json` will take precedence over the default one.
:::

To validate if Pype deployment is ok use:

```sh
pype validate
```

#### Structure of `deploy.json`

There are a few features in `deploy.json` that needs to be explained in further detail.

This is list of keys used and their function:

- `PYPE_CONFIG` - path to Pype configuration repository.
- `init_env` - these are environment file in Pype configuration repository that
  are loaded immediately after Pype starts. These contains basic functionality.
  ```js
  "init_env": ["global", "avalon", "ftrack", "deadline"]
  ```
  For example, if you don't use *Deadline* but you need *Muster* support, change `deadline` -> `muster`.
  Pype will then load `{PYPE_CONFIG}/environments/muster.json` and set environment variables there.
- `repositories`: this is list of repositories that will be deployed to `repos/`. There are few options
  for each repository:

  - `name`: name of repository will be used as directory name
  - `url`: url of git repository
  - `branch` or `tag`: this specify either branch - it's *HEAD* will be checked out, or
    `tag` - commit tagged with specified tag will be checked out.

- `pip`: these are additional dependencies to be installed by *pip* to virtual environment.
- `archive_files`: archive files to be unpacked to somewhere. For example ffmpeg installation or
  anything else we need to extract during deployment to some place.

    - `extract_path`: path to where this archive should be extracted
    - `url` or `vendor`: this is url of source to be downloaded or name in `vendor/packages` to be Used
    - `md5_url` optional url for md5 file to validate checkum of downloaded file
    - `skip_first_subfolder` will move everything inside first directory in archive to `extract_path`.

#### Offline Deployment

In offline scenarios it is up to you to replicate what `pype deploy` do. Easiest way
to go is to run `pype deploy` on machine, get everything in `repos/` and move it you
your studio install location:

```sh
cd pype-setup
tar cvzf pype_repos.tgz repos/
```

do the same for those things deployed to *vendor*.
