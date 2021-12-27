import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import escapeRegExp from 'escape-string-regexp';

import { IProduct, useFetchProducts } from '~/utils';
import { useList, useItem, useBasket } from '~/context';

import { IHome } from './data';
import { Home as Layout } from './Layout';

export const Home: React.FC<IHome> = props => {
  const navigation = useNavigation();

  const { search, listType } = useList();
  const { addItem } = useBasket();
  const { setSelected } = useItem();

  const { data: products } = useFetchProducts();

  function productsSearch() {
    if (products === undefined) return [];
    const match = new RegExp(escapeRegExp(search.trim()), 'i');
    return products.filter(product => match.test(product.title));
  }

  function openDetails(item: IProduct) {
    setSelected(item);
    navigation.navigate('Details');
  }

  const layoutProps = {
    ...props,
    listType,
    openDetails,
    addItem,
    products: productsSearch(),
  };

  return <Layout {...layoutProps} />;
};
