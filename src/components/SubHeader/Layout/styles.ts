import styled from 'styled-components/native';
import { Wrapped } from '~/components/Basics';

export default {
  Container: styled(Wrapped).attrs({
    px: 1,
    bg: 'white',
    height: 56,
    borderColor: 'LINE',
    borderBottomWidth: 1 / 4,
  })``,
  Content: styled(Wrapped).attrs({
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  })``,
  IconsArea: styled(Wrapped).attrs({
    flexDirection: 'row',
    center: true,
  })``,
  IconWrapped: styled(Wrapped).attrs({
    width: 32,
    center: true,
  })``,
};
