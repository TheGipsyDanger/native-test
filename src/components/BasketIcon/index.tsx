import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

import { useBasket } from '~/context';

import { IBasketIcon } from '~/components/BasketIcon/data';
import { BasketIcon as Layout } from './Layout';

export const BasketIcon = (props: IBasketIcon) => {
  const navigation = useNavigation();

  const { basket } = useBasket();

  function goToBasket() {
    navigation.navigate('Basket');
  }

  function defineTotal(): number {
    return basket.reduce((acc, curr) => {
      const productQtd = curr.qtd;
      const productPrice = curr.price;
      const productTotal = productPrice * productQtd;
      acc += productTotal;
      return acc;
    }, 0);
  }

  function defineCount(): number {
    return basket.reduce((acc, curr) => {
      const productQtd = curr.qtd;
      acc += productQtd;
      return acc;
    }, 0);
  }

  const layoutProps = {
    ...props,
    goToBasket,
    total: defineTotal(),
    count: defineCount(),
  };

  return <Layout {...layoutProps} />;
};
