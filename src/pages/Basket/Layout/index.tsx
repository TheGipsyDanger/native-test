import * as React from 'react';

import { Wrapped, Page } from '~/components';

import { IBasketLayout } from '~/pages/Basket/data'
import C from './styles';

export const Basket = ({ data }: IBasketLayout) => (
  <Page>
    <Wrapped flex={1} center testID={`Basket`}>
      <C.Text>{`Basket`}</C.Text>
    </Wrapped>
  </Page>
)