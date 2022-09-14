import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from './routes';
import {Welcome} from '../containers/index';

const Stack = createNativeStackNavigator();

const AppNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen name={routes.WELCOME} component={Welcome} />
  </Stack.Navigator>
);

export default AppNavigation;
