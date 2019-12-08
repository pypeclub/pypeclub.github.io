---
id: artist_publish
title: Publishing
sidebar_label: Publishing
---

## What is publishing?

Publishing is the process of exporting particular data from your work scene to be shared with others.

Think of publishing as a checkpoint between two people, making sure that we catch mistakes as soon as possible and don’t let them pass through pipeline step that would eventually need to be repeated if these mistakes are not caught.

Every time you want to share a piece of work with others (be it camera, model, textures, animation or whatever), you need to publish this data. The main reason is to save time down the line and make it very clear what can and cannot be used in production.
This process should mostly be handled by publishing scripts but in certain cases might have to be done manually.

Published assets should comply to these rules:

- Clearly named, based on internal naming conventions.
- Versioned (with master version created for certain types of assets).
- Immediately usable, without any dependencies to unpublished assets or work files.
- Immutable

All of these go into the publish folder for the given entity (shot, asset, sequence)

:::note
Keep in mind that while publishing the data might take you some extra time, it will save much more time in the long run when your colleagues don’t need to dig through your work files trying to understand them and find that model you saved by hand.
:::

### Families:

The Instances are categorized into ‘families’ based on what type of data they contain. Some instances might have multiple families if needed. A shot camera will for example have families 'camera' and  'review' to indicate that it's going to be used for review quicktime, but also exported into a file on disk.

Here's a list of supported families

| Family         | Comment                                          | Example Subsets           |
| -------------- | ------------------------------------------------ | ------------------------- |
| Model          | Cleaned geo without materials                    | main, proxy, broken       |
| Look           | Package of shaders, assignments and textures     | main, wet, dirty          |
| Rig            | Characters or props with animation controls      | main, deform, sim         |
| Setdress       | Environment containing only referenced assets    | main,                     |
| Camera         | May contain trackers or proxy geo                | main, tracked, anim       |
| Cache          | Animated Alembic cache                           | rest, ROM , pose01        |
| MayaAscii      | Publish subsets that don't fit other categories  |                           |
| Groom          | Hair and fur setups                              | hair, bear, bodyfur       |
| Render         | Rendered frames from CG or Comp                  |                           |
| Plate          | Ingested, transcode, conformed footage           | raw, graded, imageplane   |
| Write          | Nuke write nodes for rendering                   |                           |
| Image          | Any non-plate image to be used by artists        | Reference, ConceptArt     |
| Matchmove      | Matchmoved camera, potentially with geometry     | main                      |
| Workfile       | Backup of the workfile with all it's content     | uses the task name        |
| Nukenodes      | Any collection of nuke nodes                     | maskSetup, usefulBackdrop |
| Yeticache      | Cached out yeti fur setup                        |                           |
| YetiRig        | Yeti groom ready to be applied to geometry cache | main, destroyed           |
| VrayProxy      | Vray proxy geometry for rendering                |                           |
| VrayScene      | Vray full scene export                           |                           |
| ArnodldStandin | All arnold .ass archives for rendering           | main, wet, dirty          |
