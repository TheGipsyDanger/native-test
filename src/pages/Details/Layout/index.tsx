import * as React from 'react';

import { Image, Button } from '~/components';

import { IDetailsLayout } from '~/pages/Details/data';
import C from './styles';

export const Details = ({
  item: { image, title, price, category, description },
}: IDetailsLayout) => (
  <C.Container testID={`Details`}>
    <Image flex={1} uri={image} />
    <C.Infos flex={1} px={2}>
      <C.Title>{title}</C.Title>
      <C.Description>{description}</C.Description>
      <C.Price>
        {price.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </C.Price>
      <Button
        py={1}
        bg="YELLOW"
        font="medium"
        fontSize="big"
        textColor="TEXT"
        onPress={() => alert('press')}
        title="Adicionar"
      />
    </C.Infos>
  </C.Container>
);
