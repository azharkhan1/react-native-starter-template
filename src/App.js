import React, {useLayoutEffect, useState} from 'react';
import RootNavigation from './navigation';
import {Provider} from 'react-redux';
import {persistor, configureStore} from './store';
import {View} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
const App = () => {
  const [globalStore, setStore] = useState(undefined);

  useLayoutEffect(() => {
    configureStore(store => {
      setTimeout(() => {
        setStore(store);
      }, 100);
    });

    return () => {};
  }, []);
  if (!globalStore) {
    return <View style={{backgroundColor: 'transparent', flex: 1}} />;
  }
  return (
    <Provider store={globalStore}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
