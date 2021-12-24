import { withChildren } from '~/utils';

import {
  SpaceProps,
  ColorProps,
  BorderProps,
  BoxShadowProps,
  FontSizeProps,
  FontStyleProps,
  TypographyProps,
  FontFamilyProps,
  FontWeightProps,
} from 'styled-system';

export interface IInput
  extends withChildren,
    BorderProps,
    ColorProps,
    FontSizeProps,
    FontFamilyProps,
    FontWeightProps,
    BoxShadowProps,
    FontStyleProps,
    SpaceProps,
    TypographyProps {
  testID?: string;
  forwardRef: any;
  onChange: any;
  handleValue: any;
  handleChange: any;
  disabled: boolean;
  mask: string;
  type: string;
  value: string;
}

export interface IInputLayout extends IInput {
  forwardRef: any;
}
