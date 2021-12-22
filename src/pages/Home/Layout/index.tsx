import * as React from 'react';
import { FlatList } from 'react-native';

import { Wrapped, Text } from '~/components';

import { IHomeLayout } from '../data';

export const Home: React.FC<IHomeLayout> = ({ products }) => (
  <Wrapped bg="WHITE">
    <FlatList
      data={products}
      extraData={products}
      showsVerticalScrollIndicator={false}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => <Text>{item.title}</Text>}
    />
  </Wrapped>
);
