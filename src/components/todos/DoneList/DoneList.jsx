import s from './DoneList.module.css';
import { connect } from 'react-redux';
import * as todosActions from '../../../redux/todos/todos-actions';


function DoneList({ done }) {   

    return (
        <div className={s.container}>
            <div className={s.main}>
                <h2>Done</h2>                
            </div>

            <ul>
                {done && done.map(todo => 
                    <li key={todo.id} className={s.listItem}>
                        {todo.text}                        
                    </li>
                )}
            </ul>           
               
        </div>
    )
}

const mapStateToProps = state => ({
    done: state.todos.done,
});

const mapDispatchToProps = dispatch => ({
    addTodo: text => dispatch(todosActions.addTodo(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(DoneList)