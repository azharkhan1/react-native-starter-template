import React from 'react';
import {View, Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {request as registerRequest} from '../slices/register';

export default function Login() {
  const register = useSelector(state => state.register);
  const dispatch = useDispatch();
  const registerUser = () => dispatch(registerRequest());
  return (
    <View>
      <Text>
        Hello {register.name}{' '}
        {register.isFetching ? 'loading....' : 'not loading'}
      </Text>
      <Button title="register" onPress={registerUser} />
    </View>
  );
}
