import * as React from 'react';

import { useItem } from '~/context';

import { IDetails } from '~/pages/Details/data';
import { Details as Layout } from './Layout';

export const Details = (props: IDetails) => {
  const { selected } = useItem();

  const layoutProps = {
    ...props,
    item: selected,
  };

  return <Layout {...layoutProps} />;
};
