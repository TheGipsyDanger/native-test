import * as React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';

import { getProducts, ListViewType } from '~/utils';

import { IHome } from './data';
import { Home as Layout } from './Layout';

export const Home: React.FC<IHome> = props => {
  const [listType, setListType] = useState<ListViewType>('grid');

  const { data: products } = useQuery('getProducts', getProducts);

  const layoutProps = {
    ...props,
    products,
    listType,
  };

  return <Layout {...layoutProps} />;
};
