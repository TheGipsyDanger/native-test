import { withChildren } from '~/utils';

import {
  BorderProps,
  ColorProps,
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  PositionProps,
  BoxShadowProps,
  TypographyProps,
  BackgroundImageProps,
  BackgroundColorProps,
} from 'styled-system';

export interface IImage
  extends withChildren,
    BorderProps,
    PositionProps,
    BoxShadowProps,
    ColorProps,
    FlexboxProps,
    SpaceProps,
    TypographyProps,
    BackgroundImageProps,
    BackgroundColorProps,
    LayoutProps {
  testID?: string;
  uri: string;
}

export interface IImageLayout extends IImage {}
