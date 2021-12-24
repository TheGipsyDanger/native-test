import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { IStringMap } from '~/utils';
import { BasketIcon } from '~/components';
import * as views from '../pages';

const Stack = createStackNavigator();

const allViews: { [key: string]: any } = {
  ...views,
};

const viewNames: IStringMap = {
  Home: 'Produtos',
  Details: 'Detalhes',
  Basket: 'Carrinho',
};

function defineRoutesProps(name: string) {
  return {
    name,
    options: {
      headerShown: true,
      title: viewNames[name],
      headerBackTitleVisible: false,
      headerRight: () => name === 'Home' && <BasketIcon />,
    },
    component: allViews[name],
  };
}

const viewsNames = Object.keys(views);

export default function Routes() {
  return (
    <Stack.Navigator>
      {viewsNames.map(viewName => (
        <Stack.Screen key={viewName} {...defineRoutesProps(viewName)} />
      ))}
    </Stack.Navigator>
  );
}
