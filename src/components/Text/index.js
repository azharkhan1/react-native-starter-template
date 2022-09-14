import React from 'react';
import {Text} from 'react-native';

export default function CustomText({style, children}) {
  return <Text style={style}>{children}</Text>;
}
