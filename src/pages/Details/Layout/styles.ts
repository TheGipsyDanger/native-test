import styled from 'styled-components/native';
import { Wrapped, Text } from '~/components';

export default {
  Container: styled(Wrapped).attrs({
    flex: 1,
    pt: 2,
    bg: 'white',
  })``,
  Infos: styled(Wrapped).attrs({
    flex: 1,
    px: 2,
  })``,
  Title: styled(Text).attrs({
    size: 'default',
    font: 'medium',
    my: 2,
  })``,
  Description: styled(Text).attrs({
    size: 'xsmall',
    numberOfLines: 4,
  })``,
  Price: styled(Text).attrs({
    size: 'small',
    font: 'bold',
    my: 2,
  })``,
};
