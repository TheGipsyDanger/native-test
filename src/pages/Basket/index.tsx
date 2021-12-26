import * as React from 'react';

import { useBasket } from '~/context';

import { IBasket } from '~/pages/Basket/data';
import { Basket as Layout } from './Layout';

export const Basket = (props: IBasket) => {
  const { basket, removeItem } = useBasket();

  const layoutProps = {
    ...props,
    basket,
    removeItem,
  };
  return <Layout {...layoutProps} />;
};
