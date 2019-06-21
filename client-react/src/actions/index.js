import * as types from '../constants/actionTypes';

export function addToDo(title) {
    return {
        type: types.ADD_TODO,
        toDoItem: {
            _id: (new Date().getTime()).toString(),
            title
        }
    };
}

export function loadToDoList() {
    return {
        type: types.LOAD_TODO_LIST
    };
}
