import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { IInputLayout } from '~/components/Basics/Input/data';
import { color, space, border, boxShadow } from 'styled-system';
import { fonts, fontSizes, colors } from '~/styles';

export default {
  Input: styled(TextInput)<IInputLayout>`
    ${space};
    ${color};
    ${border};
    ${boxShadow};

    font-size: ${({ size }) => fontSizes[size || 'default']};
    font-family: ${({ font }) => fonts[font as string] || 'Regular'};
    color: ${({ color }) => colors[color as string]};
  `,
};
