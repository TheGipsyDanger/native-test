import * as React from 'react';

import { Input, Icon } from '~/components/Basics';

import { ISubHeaderLayout } from '~/components/SubHeader/data';

import C from './styles';

export const SubHeader = ({ data }: ISubHeaderLayout) => (
  <C.Container testID={`SubHeader`}>
    <C.Content>
      <Input placeholder="Search" />
      <C.IconsArea>
        <C.IconWrapped>
          <Icon name="grid" lib="Feather" size={24} />
        </C.IconWrapped>
        <C.IconWrapped>
          <Icon name="list" lib="Feather" size={24} />
        </C.IconWrapped>
      </C.IconsArea>
    </C.Content>
  </C.Container>
);
