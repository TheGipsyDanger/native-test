import * as React from 'react';
import { useQuery } from 'react-query';

import { getProducts } from '~/utils';

import { IHome } from './data';
import { Home as Layout } from './Layout';

export const Home: React.FC<IHome> = props => {
  const { data: products } = useQuery('getProducts', getProducts);

  const layoutProps = {
    ...props,
    products,
  };

  return <Layout {...layoutProps} />;
};
