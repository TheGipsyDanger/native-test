import * as React from 'react';

import { Wrapped, Text } from '~/components/Basics';

import { IItemLayout } from '~/components/Item/data';

export const Grid = ({}: IItemLayout) => (
  <Wrapped testID={`Item`}>
    <Text color="ORANGE">{`Item`}</Text>
  </Wrapped>
);
