import * as React from 'react';

import { Image, Button } from '~/components';

import { IDetailsLayout } from '~/pages/Details/data';
import C from './styles';

export const Details = (props: IDetailsLayout) => {
  const { item, addItem } = props;
  const { image, title, price, description } = item;
  return (
    <C.Container testID={`Details`}>
      <Image flex={1} uri={image} />
      <C.Infos flex={1} px={2}>
        <C.Title testID="DetailsTitle">{title}</C.Title>
        <C.Description testID="DetailsDescription">{description}</C.Description>
        <C.Price testID="DetailsPrice">
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
          onPress={() => addItem(item)}
          title="Adicionar"
        />
      </C.Infos>
    </C.Container>
  );
};
