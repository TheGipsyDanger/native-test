import * as React from 'react';

import { useItem, useBasket } from '~/context';

import { IDetails } from '~/pages/Details/data';
import { Details as Layout } from './Layout';

export const Details = (props: IDetails) => {
  const { selected } = useItem();
  const { addItem } = useBasket();

  const layoutProps = {
    ...props,
    addItem,
    item: selected,
  };

  return <Layout {...layoutProps} />;
};
