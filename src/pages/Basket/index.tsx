import * as React from 'react';

import { useBasket } from '~/context';
import { IBasketProduct, createBasketFactory } from '~/utils';

import { IBasket } from '~/pages/Basket/data';
import { Basket as Layout } from './Layout';

export const Basket = (props: IBasket) => {
  const Basket = createBasketFactory();
  const { basket, setBasket } = useBasket();

  function removeItem(product: IBasketProduct) {
    const basketValues = Basket.removeItem(basket, product);
    setBasket(basketValues);
  }

  const layoutProps = {
    ...props,
    basket,
    removeItem,
  };
  return <Layout {...layoutProps} />;
};
