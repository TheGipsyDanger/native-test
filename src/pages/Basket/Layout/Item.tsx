import * as React from 'react';

import { Wrapped, Image, Button } from '~/components';
import { metrics } from '~/styles';
import { BRLMoney } from '~/utils';

import { IBasketItem } from '~/pages/Basket/data';
import C from './styles';

export const Item = (props: IBasketItem) => {
  const { item, removeItem } = props;
  const { image, title, qtd, price } = item;
  return (
    <Wrapped testID={`Basket`} height={metrics.windownWidth / 3} my={1} mx={1}>
      <C.Card>
        <Image flex={1} uri={image} />
        <C.Infos>
          <Wrapped mb={0}>
            <C.Title mb={0}>{title}</C.Title>
            <C.InfosRow>
              <C.InfosText>{`Qtd: ${qtd}`}</C.InfosText>
              <C.InfosText>{BRLMoney(price * qtd)}</C.InfosText>
            </C.InfosRow>
          </Wrapped>
          <Button
            py={0}
            bg="LINE"
            font="medium"
            fontSize="xsmall"
            textColor="TEXT"
            onPress={() => removeItem(item)}
            title="Remover"
          />
        </C.Infos>
      </C.Card>
    </Wrapped>
  );
};
