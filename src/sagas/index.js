import {fork} from 'redux-saga/effects';
import register from './register';

export default function* root() {
  yield fork(register);
}
