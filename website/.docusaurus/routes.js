
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','d7d'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','d12'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','9b9'),
  exact: true,
},
{
  path: '/blog/2016/03/11/blog-post',
  component: ComponentCreator('/blog/2016/03/11/blog-post','0d8'),
  exact: true,
},
{
  path: '/features',
  component: ComponentCreator('/features','a00'),
  exact: true,
},
{
  path: '/search',
  component: ComponentCreator('/search','557'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','18b'),
  
  routes: [
{
  path: '/docs/admin_anatomy',
  component: ComponentCreator('/docs/admin_anatomy','b70'),
  exact: true,
},
{
  path: '/docs/admin_config',
  component: ComponentCreator('/docs/admin_config','07d'),
  exact: true,
},
{
  path: '/docs/admin_docsexamples',
  component: ComponentCreator('/docs/admin_docsexamples','1f3'),
  exact: true,
},
{
  path: '/docs/admin_ftrack',
  component: ComponentCreator('/docs/admin_ftrack','63c'),
  exact: true,
},
{
  path: '/docs/admin_getting_started',
  component: ComponentCreator('/docs/admin_getting_started','9b4'),
  exact: true,
},
{
  path: '/docs/admin_hosts',
  component: ComponentCreator('/docs/admin_hosts','2cf'),
  exact: true,
},
{
  path: '/docs/admin_install',
  component: ComponentCreator('/docs/admin_install','928'),
  exact: true,
},
{
  path: '/docs/admin_presets_ftrack',
  component: ComponentCreator('/docs/admin_presets_ftrack','deb'),
  exact: true,
},
{
  path: '/docs/admin_presets_maya',
  component: ComponentCreator('/docs/admin_presets_maya','590'),
  exact: true,
},
{
  path: '/docs/admin_presets_nukestudio',
  component: ComponentCreator('/docs/admin_presets_nukestudio','1d7'),
  exact: true,
},
{
  path: '/docs/admin_presets_plugins',
  component: ComponentCreator('/docs/admin_presets_plugins','f7e'),
  exact: true,
},
{
  path: '/docs/admin_presets_tools',
  component: ComponentCreator('/docs/admin_presets_tools','908'),
  exact: true,
},
{
  path: '/docs/admin_pype_commands',
  component: ComponentCreator('/docs/admin_pype_commands','4b0'),
  exact: true,
},
{
  path: '/docs/admin_setup_troubleshooting',
  component: ComponentCreator('/docs/admin_setup_troubleshooting','e3a'),
  exact: true,
},
{
  path: '/docs/api',
  component: ComponentCreator('/docs/api','fad'),
  exact: true,
},
{
  path: '/docs/artist_concepts',
  component: ComponentCreator('/docs/artist_concepts','712'),
  exact: true,
},
{
  path: '/docs/artist_ftrack',
  component: ComponentCreator('/docs/artist_ftrack','4a0'),
  exact: true,
},
{
  path: '/docs/artist_getting_started',
  component: ComponentCreator('/docs/artist_getting_started','9bb'),
  exact: true,
},
{
  path: '/docs/artist_hosts',
  component: ComponentCreator('/docs/artist_hosts','605'),
  exact: true,
},
{
  path: '/docs/artist_hosts_harmony',
  component: ComponentCreator('/docs/artist_hosts_harmony','052'),
  exact: true,
},
{
  path: '/docs/artist_hosts_maya',
  component: ComponentCreator('/docs/artist_hosts_maya','d84'),
  exact: true,
},
{
  path: '/docs/artist_hosts_nuke',
  component: ComponentCreator('/docs/artist_hosts_nuke','cbe'),
  exact: true,
},
{
  path: '/docs/artist_hosts_nukestudio',
  component: ComponentCreator('/docs/artist_hosts_nukestudio','901'),
  exact: true,
},
{
  path: '/docs/artist_hosts_photoshop',
  component: ComponentCreator('/docs/artist_hosts_photoshop','a99'),
  exact: true,
},
{
  path: '/docs/artist_hosts_unreal',
  component: ComponentCreator('/docs/artist_hosts_unreal','3f6'),
  exact: true,
},
{
  path: '/docs/artist_publish',
  component: ComponentCreator('/docs/artist_publish','fee'),
  exact: true,
},
{
  path: '/docs/artist_tools',
  component: ComponentCreator('/docs/artist_tools','cac'),
  exact: true,
},
{
  path: '/docs/artist_work',
  component: ComponentCreator('/docs/artist_work','f54'),
  exact: true,
},
{
  path: '/docs/changelog',
  component: ComponentCreator('/docs/changelog','df4'),
  exact: true,
},
{
  path: '/docs/features',
  component: ComponentCreator('/docs/features','a2f'),
  exact: true,
},
{
  path: '/docs/hosts-maya',
  component: ComponentCreator('/docs/hosts-maya','fd9'),
  exact: true,
},
{
  path: '/docs/manager_ftrack',
  component: ComponentCreator('/docs/manager_ftrack','7df'),
  exact: true,
},
{
  path: '/docs/manager_ftrack_actions',
  component: ComponentCreator('/docs/manager_ftrack_actions','59f'),
  exact: true,
},
{
  path: '/docs/manager_naming',
  component: ComponentCreator('/docs/manager_naming','3dd'),
  exact: true,
},
{
  path: '/docs/update_notes',
  component: ComponentCreator('/docs/update_notes','bd8'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
