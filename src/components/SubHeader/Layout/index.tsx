import * as React from 'react';

import { Input, Icon, Wrapped } from '~/components/Basics';

import { ISubHeaderLayout } from '~/components/SubHeader/data';

import C from './styles';

export const SubHeader = ({
  search,
  onChange,
  listType,
  setListType,
}: ISubHeaderLayout) => (
  <C.Container testID={`SubHeader`}>
    <C.Content>
      <Input
        flex={1}
        mr={2}
        height={40}
        placeholder="Search"
        size="xsmall"
        font="regular"
        value={search}
        onChange={onChange}
      />
      <C.IconsArea>
        <Wrapped onPress={() => setListType('grid')}>
          <C.IconWrapped>
            <Icon name="grid" lib="Feather" size={24} />
          </C.IconWrapped>
        </Wrapped>
        <Wrapped onPress={() => setListType('list')}>
          <C.IconWrapped>
            <Icon name="list" lib="Feather" size={24} />
          </C.IconWrapped>
        </Wrapped>
      </C.IconsArea>
    </C.Content>
  </C.Container>
);
