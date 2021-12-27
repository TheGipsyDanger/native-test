import * as React from 'react';
import { FlatList } from 'react-native';

import { Wrapped, Item, SubHeader, Conditional } from '~/components';

import { IHomeLayout } from '../data';

export const Home: React.FC<IHomeLayout> = ({
  products,
  listType,
  openDetails,
  ...props
}) => (
  <Wrapped testID="Home" flex={1} bg="WHITE">
    <SubHeader />
    <Conditional render={listType === 'grid'}>
      <FlatList
        testID="List"
        data={products}
        extraData={products}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Wrapped testID="HomeItem" onPress={() => openDetails(item)}>
            <Item {...{ item, type: 'grid', ...props }} />
          </Wrapped>
        )}
      />
      <FlatList
        testID="List"
        data={products}
        extraData={products}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Wrapped testID="HomeItem" onPress={() => openDetails(item)}>
            <Item {...{ item, type: 'list', ...props }} />
          </Wrapped>
        )}
      />
    </Conditional>
  </Wrapped>
);
