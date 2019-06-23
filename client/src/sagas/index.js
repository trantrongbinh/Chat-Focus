import { fork } from 'redux-saga/effects';
import watchUser from './watchers';

export default function* rootSaga() {
    yield fork(watchUser);
}
