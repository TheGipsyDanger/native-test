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

  const layoutProps = {
    ...props,
    goToBasket,
    count: basket.length,
  };

  return <Layout {...layoutProps} />;
};
