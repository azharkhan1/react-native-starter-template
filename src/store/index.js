import {configureStore as reduxConfigureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import sagas from '../sagas';
import reducers from '../slices/index';

let store;
let persistor;
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['register'],
  timeout: null,
};

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

const logger = createLogger({
  predicate: () => isDebuggingInChrome,
  collapsed: true,
  duration: true,
  diff: true,
});

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, reducers);

const configureStore = onComplete => {
  store = reduxConfigureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => [
      ...getDefaultMiddleware({thunk: false, serializableCheck: false}),
      sagaMiddleware,
      logger,
    ],
  });

  persistor = persistStore(store, null, () => {
    onComplete(store);
  });

  sagaMiddleware.run(sagas);
  return store;
};

export {configureStore, persistor};
