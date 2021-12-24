import * as React from 'react';

import { Wrapped, Text } from '~/components/Basics';

import { IItemButton } from '~/components/Item/data';

export const Button = ({ title }: IItemButton) => (
  <Wrapped onPress={() => alert('press')}>
    <Wrapped
      bg="orange"
      py={0}
      borderRadius="Circle"
      center
      testID={`ItemButton`}>
      <Text>{title}</Text>
    </Wrapped>
  </Wrapped>
);
