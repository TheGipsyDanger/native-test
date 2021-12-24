import * as React from 'react';

import { Wrapped, Image, Text } from '~/components/Basics';
import { Button } from './Button';
import { metrics } from '~/styles';

import { IItemLayout } from '~/components/Item/data';

export const Line = ({ image, price, title }: IItemLayout) => (
  <Wrapped p={1} testID={`Item`} height={metrics.windownWidth / 2}>
    <Wrapped
      px={2}
      py={1}
      flex={1}
      bg="white"
      boxShadow="cell"
      flexDirection="row">
      <Image flex={1} uri={image} />
      <Wrapped flex={2} pl={2} py={2} justifyContent="center">
        <Text size="tiny" mb={0}>
          {title}
        </Text>
        <Text size="small" font="bold" mb={2}>
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
