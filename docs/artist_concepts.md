---
id: artist_concepts
title: Key concepts
sidebar_label: Key Concepts
---

### Asset

In our pipeline all the main entities the project is made from are internally considered *'Assets'*. Episode, sequence, shot, character, prop, etc. All of these behave identically in the pipeline. Asset names need to be absolutely unique within the project because they are their key identifier.

### Subset

Often an asset needs to be created in multiple *'flavours'*. A character might have multiple different looks, model needs to be published in different resolutions, a standard animation rig might not be useable in a crowd system and so on. 'Subsets' are here to accommodate all this variety that might be needed within a single asset. A model might have subset: *'main'*, *'proxy'*, *'sculpt'*, while data of *'look'* family could have subsets *'main'*, *'dirty'*, *'damaged'*. Subsets have some recommendations for their names, but ultimately it's up to the artist to use them for separation of publishes when needed.

### Version

A numbered iteration of a given subset. Each version contains at least one representation.

### Representation

Each published variant can come out of the software in multiple representations. All of them hold exactly the same data, but in different formats. A model might be saved as `.OBJ`, Alembic, Maya geometry or as all of them to be ready for pickup in any other applications supporting these formats.

### Family

Publisher plugin filtering keyword
