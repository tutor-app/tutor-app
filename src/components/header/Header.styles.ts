import styled, { css } from 'styled-components';
import { Col, Collapse, Menu } from 'antd';
import { BurgerIcon } from '@app/components/common/Burger/BurgerIcon';
import { BORDER_RADIUS, LAYOUT, media } from '@app/styles/themes/constants';
import { BellOutlined } from '@ant-design/icons';

export const DropdownMenu = styled(Menu)`
  line-height: 1.5715;

  border-radius: ${BORDER_RADIUS};

  &.ant-dropdown-menu {
    box-shadow: var(--box-shadow);
  }
`;

export const HeaderActionWrapper = styled.div`
  cursor: pointer;

  & > .ant-btn > span[role='img'],
  .ant-badge {
    font-size: 1.25rem;

    @media only screen and ${media.md} {
      font-size: 1.625rem;
    }
  }

  & .ant-badge {
    display: inline-block;
  }
`;

export const DropdownCollapse = styled(Collapse)`
  & > .ant-collapse-item > .ant-collapse-header {
    font-weight: 600;
    font-size: 0.875rem;

    color: var(--primary-color);

    @media only screen and ${media.md} {
      font-size: 1rem;
    }
  }

  & > .ant-collapse-item-disabled > .ant-collapse-header {
    cursor: default;

    & > span[role='img'] {
      display: none;
    }
  }
`;

export const MobileBurger = styled(BurgerIcon)`
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 1rem;
  margin-top: 0.75rem;
  color: var(--text-main-color);

  ${(props) =>
    props.isCross &&
    css`
      color: var(--text-secondary-color);
    `};
`;

export const MobileBell = styled(BellOutlined)`
  width: 1.5rem;
  fontsize: 1.5rem;
  margin-right: 1rem;
  margin-top: 0.75rem;
  color: var(--text-main-color);
  font-size: 1.5rem;
`;

export const SearchColumn = styled(Col)`
  padding: ${LAYOUT.desktop.paddingVertical} ${LAYOUT.desktop.paddingHorizontal};
`;

interface ProfileColumn {
  $isTwoColumnsLayout: boolean;
}

export const ProfileColumn = styled(Col)<ProfileColumn>`
  @media only screen and ${media.md} {
    ${(props) =>
      props?.$isTwoColumnsLayout &&
      css`
        background-color: var(--sider-background-color);
        padding: ${LAYOUT.desktop.paddingVertical} ${LAYOUT.desktop.paddingHorizontal};
      `}
  }
`;
