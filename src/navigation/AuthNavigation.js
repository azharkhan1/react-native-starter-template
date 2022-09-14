import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from './routes';
import {Login} from '../containers/index';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={routes.LOGIN} component={Login} />
  </Stack.Navigator>
);

export default AuthNavigator;
