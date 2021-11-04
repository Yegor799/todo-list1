import s from './ToDoList.module.css';
import { connect } from 'react-redux';
import * as todosActions from '../../../redux/todos/todos-actions';
import { useState } from 'react';

function ToDoList({ todo, addTodo }) {

    const [text, setText] = useState('');
    const [isVisibleInput, setIsVisibleInput] = useState(false);  


    
    const onSubmit = e => {
        e.preventDefault();
        if (text === '') {
            return
        }
        addTodo(text);
        setText('');

    };

    const onChange = e => {
        setText(e.target.value);
    };

    return (
        <div className={s.container}>
            <div className={s.main}>
                <h2>To Do</h2>
                <button type="button" onClick={() =>setIsVisibleInput(!isVisibleInput)}>NEW TASK</button>
            </div>

            <ul>
                {todo && todo.map(todo => 
                    <li key={todo.id}>{todo.text}</li>
                )}
            </ul>

            
            {isVisibleInput &&
                <form action="submit" onSubmit={onSubmit}>
                <label>
                    <input type="text" onChange={onChange} value={text}/>
                </label>
                </form>
            }            
        </div>
    )
}

const mapStateToProps = state => ({
    todo: state.todos.todo,
});

const mapDispatchToProps = dispatch => ({
    addTodo: text => dispatch(todosActions.addTodo(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)