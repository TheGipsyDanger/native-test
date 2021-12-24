import React from 'react';
import { Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { IStringMap } from '~/utils';
import * as views from '../pages';

const Stack = createStackNavigator();

const allViews: { [key: string]: any } = {
  ...views,
};

const viewNames: IStringMap = {
  Home: 'Produtos',
  Details: 'Detalhes',
};

function defineRoutesProps(name: string) {
  return {
    name,
    options: {
      headerShown: true,
      title: viewNames[name],
      headerBackTitleVisible: false,
      // headerRight: () => (
      //   <Button
      //     onPress={() => alert('This is a button!')}
      //     title="Info"
      //     color="#f37321 "
      //   />
      // ),
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
