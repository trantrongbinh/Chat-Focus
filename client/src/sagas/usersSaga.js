import { put, call } from 'redux-saga/effects';
import { registerUser } from '../api';

import * as types from '../constants/actionTypes';

function registerUserApi(data) {
    return registerUser(data)
        .then(response => {
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
            }

            return { ...response.data };
        })
        .catch(error => ({ ...error.response.data }))
}

export function* registerSaga(payload) {
    const response = yield call(registerUserApi, payload)
    // if (response) {
    //     console.log(response, 11111111)
    //     yield put({ type: types.REGISTER_USER_SUCCESS, response })
    // } else {
    //     console.log(error.response, 22222222222)
    //     yield put({ type: types.REGISTER_USER_ERROR, error })
    // }

    // try {
    //     const response = yield call(registerUserApi, payload);
    //     console.log(response, 'saga')
    //     yield localStorage.setItem('token', response.data.token);
    //     yield put({ type: types.REGISTER_USER_SUCCESS, user: response.data.data });
    // } catch (error) {
    //     yield put({ type: types.REGISTER_USER_ERROR, error });
    // }
}
