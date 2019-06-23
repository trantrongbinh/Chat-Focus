import { takeLatest } from 'redux-saga/effects';
import { registerSaga } from './usersSaga';

import * as types from '../constants/actionTypes';

export default function* watchUser() {
    yield takeLatest(types.REGISTER_USER, registerSaga);
}
