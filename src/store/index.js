import {configureStore} from '@reduxjs/toolkit';
import reducers from '../slices';
import createSagaMiddleware from 'redux-saga';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: reducers,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(sagas);
