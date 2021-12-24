import * as React from 'react';

import { Conditional } from '~/components/Basics';
import { Grid } from './Grid';
import { Line } from './Line';

import { IItemLayout } from '~/components/Item/data';

export const Item = (props: IItemLayout) => {
  const { type = 'grid' } = props;
  return (
    <Conditional render={type === 'grid'}>
      <Grid {...props} />
      <Line {...props} />
    </Conditional>
  );
};
