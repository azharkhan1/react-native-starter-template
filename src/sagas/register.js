import {call, put, fork, take} from 'redux-saga/effects';

import {request, success, failure} from '../slices/register';

function* watchRequest() {
  while (true) {
    const {payload} = yield take(request.type);

    try {
      setTimeout(() => {}, 1000);
      yield put(success({}));
    } catch (err) {}
  }
}

export default function* root() {
  yield fork(watchRequest);
}
