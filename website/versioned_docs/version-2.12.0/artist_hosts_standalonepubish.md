---
id: version-2.12.0-artist_hosts_standalonepubish
title: Standalone Publish
sidebar_label: Standalone Publish
original_id: artist_hosts_standalonepubish
---

## Available Tools

-   [Publish](artist_tools.md#publisher)

## Usage

1.  Create Episode in Ftrack with full name ex. `ep01_longername`

![Create Episode](assets/artist_host_standalonepublisher_image11.png)

</br>

2.  Add `confrom` task (edit type). Do this in case you wish edl files to be published to correct task folder (<project>/<episode>/publish/editorial)

![Create Episode](assets/artist_host_standalonepublisher_image7.png)
![create task](assets/artist_host_standalonepublisher_image15.png)

</br>

3.  Sync to Avalon on episode (in case project is not set on `Avalon auto-sync`)

![Create Episode](assets/artist_host_standalonepublisher_image4.png)

</br>

4.  Open SP from Systray Pype menu

![Create Episode](assets/artist_host_standalonepublisher_image12.png)

</br>

5.  Set correct episode context in SP (project, episode, task)

![Create Episode](assets/artist_host_standalonepublisher_image8.png)

</br>

6.  Set correct Family in SP

![Create Episode](assets/artist_host_standalonepublisher_image1.png)

</br>

7.  Hit “Browse” button and select EDL file(s) or drag and drop files to the indicated area.

![Create Episode](assets/artist_host_standalonepublisher_image3.png)
![Create Episode](assets/artist_host_standalonepublisher_image13.png)

</br>

8.  How to prepare those edl files?

    a. Ask your editor to export you edl for each individual layer with either text clip layers or imported clips > we need to get to the following name convention within those clips `sc###sh###` for ex. `sc010sh010`

    ![Create Episode](assets/artist_host_standalonepublisher_image17.png)

    Premiere EDL exporter

    b. No need to add audio layers as long as audio is present in the mp4 (mov) file with conforming reference (offline) video.

    ![Create Episode](assets/artist_host_standalonepublisher_image5.png)

    Notice the name convention pattern is the same except for the suffixes for each video layer (V1, V2)

    c. The mp2 (mov) file should be in the same folder as edl files and need to share the name root as it is shown in the picture

9.  Hit “Publish” and wait for instances to be loaded

![Create Episode](assets/artist_host_standalonepublisher_image14.png)

10. Click to middle Tab of Publisher to have better overview of instances

    ![Create Episode](assets/artist_host_standalonepublisher_image2.png)

    a. You can click on collapse button to close all group

    ![Create Episode](assets/artist_host_standalonepublisher_image10.png)
    ![Create Episode](assets/artist_host_standalonepublisher_image9.png)

    b. You can click on head of whole group to disable all instances inside for publishing (Click this in case you want to publish audio only)

    ![Create Episode](assets/artist_host_standalonepublisher_image6.png)

11. Once all instances are collected and defined you can hit Publish play button

![Create Episode](assets/artist_host_standalonepublisher_image16.png)

Procedure will take about 1hour for 150 shots with 3 instances each (shot metadata, video reference, audio reference)
