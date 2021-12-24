import * as React from 'react';
import { useQuery } from 'react-query';
import escapeRegExp from 'escape-string-regexp';

import { getProducts, IProduct } from '~/utils';
import { useList } from '~/context';

import { IHome } from './data';
import { Home as Layout } from './Layout';

export const Home: React.FC<IHome> = props => {
  const { search, listType } = useList();

  const { data: products } = useQuery<IProduct[]>('getProducts', getProducts);

  function productsSearch() {
    if (products === undefined) return [];
    const match = new RegExp(escapeRegExp(search.trim()), 'i');
    return products.filter(product => match.test(product.title));
  }

  const layoutProps = {
    ...props,
    listType,
    products: productsSearch(),
  };

  return <Layout {...layoutProps} />;
};
