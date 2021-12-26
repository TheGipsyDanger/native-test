import * as React from 'react';

import { Wrapped, Image, Text } from '~/components/Basics';
import { Button } from '~/components/Button';
import { metrics } from '~/styles';
import { BRLMoney } from '~/utils';

import { IItemLayout } from '~/components/Item/data';

import C from './styles';

export const Grid = (props: IItemLayout) => {
  const { item, addItemOnBasket } = props;
  const { image, price, title } = item;

  return (
    <C.Container
      testID={`Item`}
      width={metrics.windownWidth / 2}
      height={metrics.windownWidth / 1.5}>
      <C.Card px={2} pt={1}>
        <Image flex={2} uri={image} />
        <Wrapped flex={1.2} justifyContent="center">
          <C.Title numberOfLines={1}>{title}</C.Title>
          <Text size="tiny" mb={0}>
            {BRLMoney(price)}
          </Text>
          <Button
            py={0}
            bg="YELLOW"
            font="medium"
            fontSize="xsmall"
            textColor="TEXT"
            onPress={() => addItemOnBasket(item)}
            title="Adicionar"
          />
        </Wrapped>
      </C.Card>
    </C.Container>
  );
};
