import * as React from 'react';

import { Wrapped, Image, Text } from '~/components/Basics';
import { Button } from './Button';
import { metrics } from '~/styles';

import { IItemLayout } from '~/components/Item/data';

export const Grid = ({ image, price, title }: IItemLayout) => (
  <Wrapped
    p={1}
    testID={`Item`}
    width={metrics.windownWidth / 2}
    height={metrics.windownWidth / 1.5}>
    <Wrapped px={2} pt={1} flex={1} bg="white" boxShadow="cell">
      <Image flex={2} uri={image} />
      <Wrapped flex={1.2} justifyContent="center">
        <Text size="tiny" numberOfLines={1} mb={0}>
          {title}
        </Text>
        <Text size="tiny" mb={0}>
          {price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </Text>
        <Button title={'Adicionar'} />
      </Wrapped>
    </Wrapped>
  </Wrapped>
);
