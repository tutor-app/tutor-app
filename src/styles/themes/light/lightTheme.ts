import { shadeColor } from '@app/utils/utils';
import { graphic } from 'echarts';
import { BASE_COLORS } from '../constants';
import { ITheme } from '../types';

const chartColors = {
  chartTooltipLabel: '#6A7985',
  chartColor1: '#01509A',
  chartColor1Tint: '#2983D8',
  chartColor2: '#67C5FA',
  chartColor2Tint: '#67C5FA',
  chartColor3: '#FFB155',
  chartColor3Tint: '#FFA800',
  chartColor4: '#31A652',
  chartColor4Tint: '#89DCA0',
  chartColor5: '#FF5252',
  chartColor5Tint: '#FFC1C1',
  chartColor6: '#ff7188',
  chartColor6Tint: '#ff7188', // update
  chartColor7: '#aaccff',
  chartColor7Tint: '#aaccff', // update
  chartPrimaryGradient: new graphic.LinearGradient(0, 0, 0, 1, [
    {
      offset: 0,
      color: 'rgba(0, 110, 211, 0.5)',
    },
    {
      offset: 1,
      color: 'rgba(255, 225, 255, 0)',
    },
  ]),
  chartSecondaryGradient: new graphic.LinearGradient(0, 0, 0, 1, [
    {
      offset: 0,
      color: 'rgba(255, 82, 82, 0.5)',
    },
    {
      offset: 1,
      color: 'rgba(255, 255, 255, 0)',
    },
  ]),
  chartSecondaryGradientSpecular: new graphic.LinearGradient(0, 0, 0, 1, [
    {
      offset: 0,
      color: 'rgba(255, 255, 255, 0)',
    },
    {
      offset: 1,
      color: 'rgba(255, 82, 82, 0.5)',
    },
  ]),
};

export const lightColorsTheme: ITheme = {
  plain: BASE_COLORS.white,
  textPlain: BASE_COLORS.black,
  primary: '#008640',
  primary1: '#7568f666',
  primaryGradient: 'linear-gradient(211.49deg, #008640 15.89%, #008640 48.97%)',
  light: '#C5D3E0',
  secondary: '#0085FF',
  error: '#FF5252',
  warning: '#FFB155',
  success: '#30AF5B',
  background: BASE_COLORS.white,
  secondaryBackground: '#F8FBFF',
  secondaryBackgroundSelected: shadeColor('#F8FBFF', -5),
  additionalBackground: '#ffffff',
  collapseBackground: '#006CCF',
  timelineBackground: '#F8FBFF',
  siderBackground: '#ffffff',
  spinnerBase: '#f42f25',
  scroll: '#c5d3e0',
  border: '#cce1f4',
  borderNft: '#79819A',
  textMain: '#404040',
  textLight: '#9A9B9F',
  textSuperLight: '#BEC0C6',
  textSecondary: BASE_COLORS.white,
  textDark: '#404040',
  textNftLight: '#79819A',
  textSiderPrimary: '#ffc98f',
  textSiderSecondary: '#ffffff',
  subText: 'rgba(0, 0, 0, 0.45)',
  shadow: 'rgba(0, 0, 0, 0.07)',
  boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.07)',
  boxShadowHover: '0 4px 16px 0 rgba(0, 0, 0, 0.2)',
  boxShadowNft: '0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)',
  boxShadowNftSecondary:
    '0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)',
  dashboardMapBackground: '#EAF5FF',
  dashboardMapCircleColor: '#9BC2E7',
  dashboardMapControlDisabledBackground: '#c5d3e0',
  notificationSuccess: '#EFFFF4',
  notificationPrimary: '#D7EBFF',
  notificationWarning: '#FFF4E7',
  notificationError: '#FFE2E2',
  heading: '#00864099',
  borderBase: '#bec0c6',
  disable: 'rgba(0, 0, 0, 0.25)',
  disabledBg: '#c5d3e0',
  layoutBodyBg: '#f8fbff',
  layoutHeaderBg: 'transparent',
  layoutSiderBg: '#008640',
  inputPlaceholder: '#404040',
  itemHoverBg: '#f5f5f5',
  backgroundColorBase: '#F5F5F5',
  avatarBg: '#ccc',
  alertTextColor: BASE_COLORS.white,
  breadcrumb: 'rgba(0, 0, 0, 0.45)',
  icon: '#a9a9a9',
  iconHover: 'rgba(0, 0, 0, 0.75)',
  ...chartColors,
};
