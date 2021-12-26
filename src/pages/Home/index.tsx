import * as React from 'react';
import { useQuery } from 'react-query';
import { useNavigation } from '@react-navigation/native';
import escapeRegExp from 'escape-string-regexp';

import { IProduct, getProducts, createBasketFactory } from '~/utils';
import { useList, useItem, useBasket } from '~/context';

import { IHome } from './data';
import { Home as Layout } from './Layout';

export const Home: React.FC<IHome> = props => {
  const Basket = createBasketFactory();
  const navigation = useNavigation();

  const { search, listType } = useList();
  const { basket, setBasket } = useBasket();
  const { setSelected } = useItem();

  const { data: products } = useQuery<IProduct[]>('getProducts', getProducts);

  function productsSearch() {
    if (products === undefined) return [];
    const match = new RegExp(escapeRegExp(search.trim()), 'i');
    return products.filter(product => match.test(product.title));
  }

  function openDetails(item: IProduct) {
    setSelected(item);
    navigation.navigate('Details');
  }

  function addItemOnBasket(product: IProduct) {
    const basketValues = Basket.addItem(basket, product);
    setBasket(basketValues);
  }

  const layoutProps = {
    ...props,
    listType,
    openDetails,
    addItemOnBasket,
    products: productsSearch(),
  };

  return <Layout {...layoutProps} />;
};
