import s from './ToDoList.module.css';
import { connect } from 'react-redux';
import * as todosActions from '../../../redux/todos/todos-actions';
import { useState } from 'react';

function ToDoList({ todo, addTodo, deleteTodo, moveInprogress }) {

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

    const handleCancelInput = () => {
        setText('');
        setIsVisibleInput(!isVisibleInput);
    }

    return (
        <div className={s.container}>
            <div className={s.main}>
                <h2>To Do</h2>
                <button type="button" onClick={() =>setIsVisibleInput(!isVisibleInput)} className={s.newTaskButton}>NEW TASK</button>
            </div>
           

            <ul>
                {todo && todo.map(todo => 
                    <li key={todo.id} className={s.listItem}>
                        {todo.text}
                        <div className={s.buttons}>
                        <button type="button" className={s.listButton} onClick={()=> moveInprogress(todo)}>Move InProgress</button>
                        <button type="button" className={s.listButton} onClick={()=> deleteTodo(todo.id)}>Delete</button>
                        </div>
                    </li>
                )}
            </ul>
            

            
            {isVisibleInput &&
                <form action="submit" onSubmit={onSubmit}>
                <label>
                    <input type="text" onChange={onChange} value={text} />
                    <div className={s.buttons}>
                      <button type="button" onClick={onSubmit} className={s.addButton}>Add</button>
                      <button type="button" onClick={handleCancelInput}>Cancel</button>
                    </div>
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
    addTodo: text => dispatch(todosActions.addTodo(text)),
    deleteTodo: id => dispatch(todosActions.deleteTodo(id)),
    moveInprogress: todo => dispatch(todosActions.moveInprogress(todo))
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)