import { createReducer } from '@reduxjs/toolkit';
import { addTodo, deleteTodo, filterTodo } from './todos-actions';
import { combineReducers } from "redux";

const todo = createReducer([], {
    [addTodo]: (state, { payload }) => [...state, payload],
    [deleteTodo]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});


export default combineReducers({
    todo,

});

