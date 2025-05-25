import './reset.css';

import { globalStyle } from '@vanilla-extract/css';

import { theme } from './theme.css';

globalStyle('body', {
  paddingBottom: 'env(safe-area-inset-bottom)',
  fontFamily: theme.fontFamily.sans,
  textRendering: 'optimizeLegibility',
  WebkitFontSmoothing: 'antialiased',
  WebkitTextSizeAdjust: '100%',
  MozOsxFontSmoothing: 'grayscale',
  overflowX: 'hidden',
  overflowY: 'scroll',
  scrollbarGutter: 'stable',
  backgroundColor: theme.color.background,
});

globalStyle('::selection, ::-moz-selection, ::-webkit-selection', {
  color: theme.color.white,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
});
