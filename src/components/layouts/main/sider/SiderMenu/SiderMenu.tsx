import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import * as S from './SiderMenu.styles';
import {
  adminSidebarNavigation,
  tutorSidebarNavigation,
  clientSidebarNavigation,
  SidebarNavigationItem,
} from '../sidebarNavigation';
import { Divider, Menu } from 'antd';
import { MessageOutlined, RollbackOutlined, SettingOutlined, TagsOutlined } from '@ant-design/icons';
import { useQuery } from '@tanstack/react-query';
import { checkUserExistance as checkUserExistanceAction } from '@app/api/auth.api';

interface SiderContentProps {
  setCollapsed: (isCollapsed: boolean) => void;
}

const SiderMenu: React.FC<SiderContentProps> = ({ setCollapsed }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const [sidebarNavigation, setSidebarNavigation] = React.useState<SidebarNavigationItem[]>([]);

  const { data: userType, isLoading } = useQuery(['userType'], checkUserExistanceAction, {
    onSuccess: (data: any) => {
      switch (data) {
        case 'user':
          setSidebarNavigation(clientSidebarNavigation);
          break;
        case 'tutor':
          setSidebarNavigation(tutorSidebarNavigation);
          break;
        case 'admin':
          setSidebarNavigation(adminSidebarNavigation);
          break;
        default:
          setSidebarNavigation([]);
          break;
      }
    },
    refetchOnWindowFocus: false,
  });

  const sidebarNavFlat = sidebarNavigation.reduce(
    (result: SidebarNavigationItem[], current) =>
      result.concat(current.children && current.children.length > 0 ? current.children : current),
    [],
  );

  const currentMenuItem = sidebarNavFlat.find(({ url }) => url === location.pathname);
  const defaultSelectedKeys = currentMenuItem ? [currentMenuItem.key] : [];

  const openedSubmenu = sidebarNavigation.find(({ children }) =>
    children?.some(({ url }) => url === location.pathname),
  );
  const defaultOpenKeys = openedSubmenu ? [openedSubmenu.key] : [];

  if (isLoading) {
    return null;
  }

  const handleClick = (e: any) => {
    setCollapsed(true);
  };

  return (
    <S.Menu
      mode="inline"
      defaultSelectedKeys={defaultSelectedKeys}
      defaultOpenKeys={defaultOpenKeys}
      onClick={(e) => handleClick(e)}
    >
      {sidebarNavigation.map((nav) =>
        nav.children && nav.children.length > 0 ? (
          <Menu.SubMenu
            key={nav.key}
            title={t(nav.title)}
            icon={nav.icon}
            onTitleClick={() => setCollapsed(false)}
            popupClassName="d-none"
          >
            {nav.children.map((childNav) => (
              <Menu.Item key={childNav.key} title="">
                <Link to={childNav.url || ''}>{t(childNav.title)}</Link>
              </Menu.Item>
            ))}
          </Menu.SubMenu>
        ) : (
          <Menu.Item key={nav.key} title="" icon={nav.icon}>
            <Link to={nav.url || ''}>{t(nav.title)}</Link>
          </Menu.Item>
        ),
      )}
      <Divider />
      {userType !== 'admin' && (
        <>
          <Menu.Item key={'aboutUs'} title="" icon={<TagsOutlined />}>
            <Link to="/aboutUs">{t('common.aboutUs')}</Link>
          </Menu.Item>
          <Menu.Item key={'contact'} title="" icon={<MessageOutlined />}>
            <Link to="/contact">{t('common.contact')}</Link>
          </Menu.Item>
        </>
      )}
      <Menu.Item key={'settings'} title="" icon={<SettingOutlined />}>
        <Link to={'/settings'}>{t('common.settings')}</Link>
      </Menu.Item>
      <Divider />
      <Menu.Item key={'logout'} title="" icon={<RollbackOutlined />}>
        <Link to="/auth/logout">{t('login.logout')}</Link>
      </Menu.Item>
    </S.Menu>
  );
};

export default SiderMenu;
