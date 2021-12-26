import * as React from 'react';

import { Wrapped, Text, Icon, Conditional } from '~/components/Basics';

import { IBasketIconLayout } from '~/components/BasketIcon/data';
import { BRLMoney } from '~/utils';

export const BasketIcon = ({
  total,
  count,
  route,
  goToBasket,
}: IBasketIconLayout) => (
  <>
    <Conditional render={['Home', 'Details'].includes(route)}>
      <Wrapped testID={`BasketIcon`} height={30} center mr={1}>
        <Wrapped onPress={goToBasket} flexDirection="row">
          <Text mr={0}>{count === 0 ? '' : count > 9 ? '+9' : count}</Text>
          <Icon lib="Feather" name="shopping-cart" color="TEXT" size={18} />
        </Wrapped>
      </Wrapped>
    </Conditional>
    <Conditional render={route === 'Basket'}>
      <Wrapped testID={`BasketIcon`} center mr={1}>
        <Text>{BRLMoney(total)}</Text>
      </Wrapped>
    </Conditional>
  </>
);
