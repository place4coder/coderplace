import { createGlobalTheme } from '@vanilla-extract/css';

import { rem } from './pxto';

const spacing = {
  app: rem(1280),
  appSpace: rem(24),
};

const fontFamily = {
  mono: `"Courier New", Courier, "Pretendard Variable", "Pretendard JP Variable", "Pretendard JP", "Pretendard", monospace`,
  sans: `"Pretendard Variable", "Pretendard JP Variable", "Pretendard JP", "Pretendard", -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`,
};

const fontSize = {
  xxxl: rem(28),
  xxl: rem(24),
  xl: rem(20),
  lg: rem(18),
  md: rem(16),
  base: rem(15),
  sm: rem(14),
  xs: rem(12),
  xxs: rem(10),
  xxxs: rem(8),
};

const layout = {
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerX: {
    display: 'flex',
    justifyContent: 'center',
  },
  centerY: {
    display: 'flex',
    alignItems: 'center',
  },
  rowBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  columnCenter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnCenterX: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  columnCenterY: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  columnBetween: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
};

const zIndex = {
  behind: '-1',
  overlay: '100',
  header: '150',
  modal: '200',
};

const color = {
  black: '#000000',
  white: '#FFFFFF',

  text: '#262626',
  background: '#FCFCFC',
};

export const theme = createGlobalTheme(':root', {
  spacing,
  fontFamily,
  fontSize,
  layout,
  zIndex,
  color,
});
