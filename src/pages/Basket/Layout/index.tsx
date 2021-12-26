import * as React from 'react';
import { FlatList } from 'react-native';

import { Wrapped, Text } from '~/components';
import { Item } from './Item';

import { IBasketLayout } from '~/pages/Basket/data';
import C from './styles';

export const Basket = ({ basket, removeItem }: IBasketLayout) => (
  <C.Container testID={`Basket`}>
    <FlatList
      contentContainerStyle={{ flex: 1 }}
      ListEmptyComponent={() => (
        <Wrapped flex={1} center mb={10}>
          <Text font="bold">Carrinho vazio</Text>
        </Wrapped>
      )}
      data={basket}
      extraData={basket}
      showsVerticalScrollIndicator={false}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => <Item {...{ item, removeItem }} />}
    />
  </C.Container>
);
