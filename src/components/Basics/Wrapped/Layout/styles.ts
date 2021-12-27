import styled, { css } from 'styled-components/native';
import { IWrappedLayout } from '../data';
import { theme } from '../../../../styles/theme';

import {
  border,
  boxShadow,
  color,
  flexbox,
  space,
  typography,
  backgroundColor,
} from 'styled-system';

export default {
  Wrapped: styled.View<IWrappedLayout>`
    ${space};
    ${color};
    ${typography};
    ${border};
    ${flexbox};
    ${boxShadow};
    ${backgroundColor};

    ${({ shadow }) =>
      shadow &&
      css`
        box-shadow: ${theme.shadows[shadow as string]};
        elevation: 3;
      `}

    ${({ borderRadius }) =>
      borderRadius &&
      css`
        border-radius: ${theme.radii[borderRadius as string] || 'Light'}px;
      `}

      ${({ bg }) =>
      bg &&
      css`
        background-color: ${theme.colors[bg as string] || 'white'};
      `}


    ${({ borderColor }) =>
      borderColor &&
      css`
        border-color: ${theme.colors[borderColor as string]};
      `}


    ${({ borderRadius }) =>
      borderRadius &&
      css`
        border-radius: ${theme.radii[borderRadius as string]}px;
      `}

    ${({ center }) =>
      center &&
      css`
        align-items: center;
        justify-content: center;
      `}
  `,
};
