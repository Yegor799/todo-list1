import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

export const addTodo = createAction('todos/add', text => ({
    payload: {
        id: shortid.generate(),
        text,
    }
}));


export const deleteTodo = createAction('todos/delete');
export const filterTodo = createAction('todos/filter');

