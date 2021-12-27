import styled from 'styled-components/native';
import { Wrapped, Text } from '~/components';

export default {
  Container: styled(Wrapped).attrs({
    flex: 1,
    bg: 'white',
  })``,
  Card: styled(Wrapped).attrs({
    flex: 1,
    px: 2,
    py: 1,
    bg: 'white',
    shadow: 'cell',
    flexDirection: 'row',
  })``,
  Title: styled(Text).attrs({
    size: 'xsmall',
    numberOfLines: 1,
  })``,
  InfosText: styled(Text).attrs({
    size: 'tiny',
  })``,
  InfosRow: styled(Wrapped).attrs({
    flexDirection: 'row',
    justifyContent: 'space-between',
  })``,
  Infos: styled(Wrapped).attrs({
    flex: 2,
    bg: 'white',
    justifyContent: 'center',
  })``,
};
