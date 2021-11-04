import s from './DoneList.module.css';
import { connect } from 'react-redux';
import * as todosActions from '../../../redux/todos/todos-actions';


function DoneList({ todo }) {   

    return (
        <div className={s.container}>
            <div className={s.main}>
                <h2>Done</h2>                
            </div>

            <ul>
                {todo && todo.map(todo => 
                    <li key={todo.id}>{todo.text}</li>
                )}
            </ul>           
               
        </div>
    )
}

const mapStateToProps = state => ({
    todo: state.todos.todo,
});

const mapDispatchToProps = dispatch => ({
    addTodo: text => dispatch(todosActions.addTodo(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(DoneList)