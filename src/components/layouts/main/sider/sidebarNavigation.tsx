import React from 'react';
import {
  CarryOutOutlined,
  DashboardOutlined,
  EnvironmentOutlined,
  FieldTimeOutlined,
  LineChartOutlined,
  ScheduleOutlined,
  UserOutlined,
} from '@ant-design/icons';

export interface SidebarNavigationItem {
  title: string;
  key: string;
  url?: string;
  children?: SidebarNavigationItem[];
  icon?: React.ReactNode;
}

export const adminSidebarNavigation: SidebarNavigationItem[] = [
  {
    title: 'common.dashboard',
    key: 'dashboard',
    icon: <DashboardOutlined />,
    url: '/',
  },
  {
    title: 'common.users',
    key: 'users',
    icon: <UserOutlined />,
    children: [
      {
        title: 'common.list',
        key: 'users',
        url: '/admin/users',
      },
    ],
  },
];

export const tutorSidebarNavigation: SidebarNavigationItem[] = [
  {
    title: 'common.addresses',
    key: 'addresses-menu',
    icon: <EnvironmentOutlined />,
    children: [
      {
        title: 'common.addAddress',
        key: 'addresses/new',
        url: '/addresses/new',
      },
      {
        title: 'common.list',
        key: 'addresses',
        url: '/addresses',
      },
    ],
  },
  {
    title: 'common.services',
    key: 'services',
    icon: <ScheduleOutlined />,
    children: [
      {
        title: 'common.addService',
        key: 'tutor/services/new',
        url: '/tutor/services/new',
      },
      {
        title: 'common.list',
        key: 'tutor/services',
        url: '/tutor/services',
      },
    ],
  },
  {
    title: 'common.requests',
    key: 'tutor/requests',
    icon: <CarryOutOutlined />,
    url: '/tutor/requests',
  },
  {
    title: 'common.appointments',
    key: 'appointments',
    icon: <FieldTimeOutlined />,
    children: [
      {
        title: 'common.list',
        key: 'appointments',
        url: '/appointments',
      },
      {
        title: 'common.appointmentDashboard',
        key: 'appointments/dashboard',
        url: '/appointments/dashboard',
      },
    ],
  },
];

export const clientSidebarNavigation: SidebarNavigationItem[] = [
  {
    title: 'common.addresses',
    key: 'addresses-menu',
    icon: <EnvironmentOutlined />,
    children: [
      {
        title: 'common.addAddress',
        key: 'addresses/new',
        url: '/addresses/new',
      },
      {
        title: 'common.list',
        key: 'addresses',
        url: '/addresses',
      },
    ],
  },
  {
    title: 'common.appointments',
    key: 'appointments',
    icon: <FieldTimeOutlined />,
    children: [
      {
        title: 'common.list',
        key: 'appointments',
        url: '/appointments',
      },
      {
        title: 'common.appointmentDashboard',
        key: 'appointments/dashboard',
        url: '/appointments/dashboard',
      },
    ],
  },
];
