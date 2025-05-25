import { rem, theme } from '@coderplace/style';
import { style } from '@vanilla-extract/css';

export const header = style({
  ...theme.layout.rowBetween,
  height: rem(40),
  width: '100%',
  maxWidth: theme.spacing.app,
});

export const list = style({
  ...theme.layout.centerY,
  gap: rem(56),
  listStyle: 'none',
});

export const item = style({
  color: theme.color.text,
  fontSize: theme.fontSize.md,
  fontWeight: 400,
});
