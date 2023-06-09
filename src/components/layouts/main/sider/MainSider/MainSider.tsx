import React, { useMemo } from 'react';
import Overlay from '../../../../common/Overlay';
import { useResponsive } from 'hooks/useResponsive';
import * as S from './MainSider.styles';
import { SiderLogo } from '../SiderLogo';
import SiderMenu from '../SiderMenu/SiderMenu';

interface MainSiderProps {
  isCollapsed: boolean;
  setCollapsed: (isCollapsed: boolean) => void;
}

const MainSider: React.FC<MainSiderProps> = ({ isCollapsed, setCollapsed, ...props }) => {
  const toggleSider = () => setCollapsed(!isCollapsed);
  const { isDesktop } = useResponsive();

  return (
    <>
      <S.Sider
        trigger={null}
        collapsed={isCollapsed}
        collapsedWidth={0}
        collapsible={true}
        width={isDesktop ? '30%' : '80%'}
        {...props}
      >
        <SiderLogo isSiderCollapsed={isCollapsed} toggleSider={toggleSider} />
        <S.SiderContent>
          <SiderMenu setCollapsed={setCollapsed} />
        </S.SiderContent>
      </S.Sider>
      <Overlay onClick={toggleSider} show={!isCollapsed} />
    </>
  );
};

export default MainSider;
