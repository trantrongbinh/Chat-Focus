import * as types from '../constants/actionTypes';

const userReducer = (state = [], action) => {
    let response = action.response;

    switch (action.type) {
        case types.REGISTER_USER_SUCCESS:
            return { ...state, response };

        case types.REGISTER_USER_ERROR:
            return { ...state, response };

        default:
            return state;
    }
}

export default userReducer;
