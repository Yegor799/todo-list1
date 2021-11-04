import s from './InProgressList.module.css';
import { connect } from 'react-redux';
import * as todosActions from '../../../redux/todos/todos-actions';


function InProgressList({ inProgress, deleteTodo, moveDone }) {   

    return (
        <div className={s.container}>
            <div className={s.main}>
                <h2>In Progress</h2>
                
            </div>

            <ul>
                {inProgress && inProgress.map(todo => 
                    <li key={todo.id}>
                        {todo.text}
                        <button type='button' onClick={() => moveDone(todo)}>Done</button>
                        <button type="button" className={s.listButton} onClick={()=> deleteTodo(todo.id)}>Delete</button>
                    </li>
                )}
            </ul>           
               
        </div>
    )
}

const mapStateToProps = state => ({
    inProgress: state.todos.inProgress,
});

const mapDispatchToProps = dispatch => ({
    deleteTodo: id => dispatch(todosActions.deleteTodo(id)),
    moveDone: todo => dispatch(todosActions.moveDone(todo))
})

export default connect(mapStateToProps, mapDispatchToProps)(InProgressList)