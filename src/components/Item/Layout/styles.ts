import styled from 'styled-components/native';
import { Wrapped, Text } from '~/components/Basics';

export default {
  Container: styled(Wrapped).attrs({
    p: 1,
  })``,
  Card: styled(Wrapped).attrs({
    flex: 1,
    bg: 'white',
    shadow: 'cell',
  })``,
  Title: styled(Text).attrs({
    size: 'tiny',
    mb: 0,
  })``,
};
