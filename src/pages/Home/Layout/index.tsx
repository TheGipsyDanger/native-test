import * as React from 'react';
import { FlatList } from 'react-native';

import { Wrapped, Item, SubHeader } from '~/components';

import { IHomeLayout } from '../data';

export const Home: React.FC<IHomeLayout> = ({ products, listType }) => (
  <Wrapped flex={1} bg="WHITE">
    <SubHeader />
    <FlatList
      data={products}
      extraData={products}
      numColumns={listType === 'grid' ? 2 : 1}
      showsVerticalScrollIndicator={false}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => <Item {...item} type="grid" />}
    />
  </Wrapped>
);
