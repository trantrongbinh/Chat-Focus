import { ADD_TODO, RENDER_TODO_LIST } from '../constants/actionTypes';

const initialState = {
    toDoList: []
};

export default function todosReducers(state = initialState, action) {
    switch (action.type) {
        case RENDER_TODO_LIST:
            return {
                ...state,
                toDoList: action.toDoList
            };
        case ADD_TODO:
            let newToDoList = [
                ...state.toDoList,
                {
                    ...action.toDoItem
                }
            ];
            return {
                ...state,
                toDoList: newToDoList
            };
        default:
            return state;
    }
}
