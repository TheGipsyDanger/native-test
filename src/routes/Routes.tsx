import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { IStringMap } from '~/utils';
import * as views from '../pages';

const Stack = createStackNavigator();

const allViews: { [key: string]: any } = {
  ...views,
};

const viewNames: IStringMap = {
  Home: 'Produtos',
};

function defineRoutesProps(name: string) {
  return {
    name,
    options: { headerShown: true, title: viewNames[name] },
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
