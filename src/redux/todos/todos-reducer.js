import { createAction, createReducer } from '@reduxjs/toolkit';
import { addTodo, deleteTodo, moveInprogress, filterTodo } from './todos-actions';
import { combineReducers } from "redux";

const todo = createReducer([], {
    [addTodo]: (state, { payload }) => [...state, payload],
    [deleteTodo]: (state, { payload }) => state.filter(({ id }) => id !== payload),
    [moveInprogress]: (state, { payload }) => state.filter(({ id }) => id !== payload.id),
});

const inProgress = createReducer([], {
    [moveInprogress]: (state, {payload}) => [...state, payload]
})


export default combineReducers({
    todo,
    inProgress,

});

