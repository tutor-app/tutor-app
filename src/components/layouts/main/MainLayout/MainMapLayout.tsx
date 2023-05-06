import React, { useEffect, useState } from 'react';
import { Header } from '../../../header/Header';
import MainSider from '../sider/MainSider/MainSider';
import MainMapContent from '../MainMapContent/MainMapContent';
import { MainHeader } from '../MainHeader/MainHeader';
import * as S from './MainLayout.styles';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useResponsive } from '@app/hooks/useResponsive';
import FilterSider from '../filterSider/FilterSider';
import { Button } from 'antd';
import { CloseOutlined, SearchOutlined } from '@ant-design/icons';
import NotificationDrawer from '../notificationDrawer/NotificationDrawer';

const MainMapLayout: React.FC = () => {
  const [isTwoColumnsLayout, setIsTwoColumnsLayout] = useState(true);
  const [siderCollapsed, setSiderCollapsed] = useState(true);
  const [filterSiderCollapsed, setFilterSiderCollapsed] = useState(true);
  const [notificationDrawerOpen, setNotificationDrawerOpen] = useState(false);
  const { isDesktop } = useResponsive();
  const location = useLocation();
  const [showFilterButton, setShowFilterButton] = useState(true);

  const toggleSider = () => setSiderCollapsed(!siderCollapsed);
  const toggleNotificationDrawer = () => setNotificationDrawerOpen(!notificationDrawerOpen);

  useEffect(() => {
    setIsTwoColumnsLayout(isDesktop);
  }, [isDesktop]);

  useEffect(() => {
    if (location.pathname === '/home') {
      setShowFilterButton(true);
    } else {
      setShowFilterButton(false);
    }
  }, [location.pathname]);

  return (
    <S.LayoutMaster>
      <MainSider isCollapsed={siderCollapsed} setCollapsed={setSiderCollapsed} />
      <FilterSider isCollapsed={filterSiderCollapsed} setCollapsed={setFilterSiderCollapsed} />
      <NotificationDrawer isOpen={notificationDrawerOpen} setOpen={setNotificationDrawerOpen} />
      <S.LayoutMain>
        <MainMapContent id="main-content" $isTwoColumnsLayout={isTwoColumnsLayout}>
          <div>
            <Outlet />
          </div>
        </MainMapContent>
        <Button
          className="filter-icon"
          style={{ display: showFilterButton && !notificationDrawerOpen ? 'block' : 'none' }}
          onClick={() => setFilterSiderCollapsed(!filterSiderCollapsed)}
          icon={filterSiderCollapsed ? <SearchOutlined /> : <CloseOutlined />}
        />

        <MainHeader>
          <Header toggleNotificationSider={toggleNotificationDrawer} toggleSider={toggleSider} isSiderOpened={false} />
        </MainHeader>
      </S.LayoutMain>
    </S.LayoutMaster>
  );
};

export default MainMapLayout;
