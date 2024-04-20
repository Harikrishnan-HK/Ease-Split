// component
import Iconify from '../../components/Iconify';

import configData from '../../config.json'

// ----------------------------------------------------------------------

const getIcon = (name, color) => (
  <Iconify icon={name} width={22} height={22} color={color} />
);
const navConfig = [
  {
    title: 'Dashboard',
    path: configData.DASHBOARD_URL,
    icon: getIcon('eva:pie-chart-2-fill', '#FF5733'),
  },
  {
    title: 'Create Group',
    path: configData.CREATE_GROUP_URL,
    icon: getIcon('fa6-solid:users-gear', '#FF5733'),
  },
  {
    title: 'Groups',
    path: configData.USER_GROUPS_URL,
    icon: getIcon('mdi:account-multiple-outline', '#FF5733'),
  },
  {
    title: 'Members',
    path: configData.VIEW_MEMBERS_URL,
    icon: getIcon('fluent:people-community-20-filled', '#FF5733'),
  },

  {
    title: 'About',
    path: configData.ABOUT_URL,
    icon: getIcon('fluent:info-12-filled', '#FF5733'),
  },
];

export default navConfig;
