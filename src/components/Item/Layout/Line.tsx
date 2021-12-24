import * as React from 'react';

import { Wrapped, Image, Text } from '~/components/Basics';
import { Button } from '~/components/Button';
import { metrics } from '~/styles';
import { BRLMoney } from '~/utils';

import { IItemLayout } from '~/components/Item/data';

import C from './styles';

export const Line = ({ image, price, title }: IItemLayout) => (
  <C.Container testID={`Item`} height={metrics.windownWidth / 2}>
    <C.Card px={2} py={1} flexDirection="row">
      <Image flex={1} uri={image} />
      <Wrapped flex={2} pl={2} py={2} justifyContent="center">
        <C.Title>{title}</C.Title>
        <Text size="small" font="bold" mb={2}>
          {BRLMoney(price)}
        </Text>
        <Button
          py={0}
          bg="YELLOW"
          font="medium"
          fontSize="xsmall"
          textColor="TEXT"
          onPress={() => alert('press')}
          title="Adicionar"
        />
      </Wrapped>
    </C.Card>
  </C.Container>
);
