import * as React from 'react';

import { Wrapped, Text, Icon } from '~/components/Basics';

import { IBasketIconLayout } from '~/components/BasketIcon/data';

export const BasketIcon = ({ count, goToBasket }: IBasketIconLayout) => (
  <Wrapped testID={`BasketIcon`} height={30} center mr={1}>
    <Wrapped onPress={goToBasket} flexDirection="row">
      <Text mr={0}>{count === 0 ? '' : count > 9 ? '+9' : count}</Text>
      <Icon lib="Feather" name="shopping-cart" color="TEXT" size={18} />
    </Wrapped>
  </Wrapped>
);
