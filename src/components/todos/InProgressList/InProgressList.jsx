import s from './InProgressList.module.css';
import { connect } from 'react-redux';
import * as todosActions from '../../../redux/todos/todos-actions';


function InProgressList({ inProgress }) {   

    return (
        <div className={s.container}>
            <div className={s.main}>
                <h2>In Progress</h2>
                
            </div>

            <ul>
                {inProgress && inProgress.map(todo => 
                    <li key={todo.id}>{todo.text}</li>
                )}
            </ul>           
               
        </div>
    )
}

const mapStateToProps = state => ({
    inProgress: state.todos.inProgress,
});

// const mapDispatchToProps = dispatch => ({
//     addTodo: text => dispatch(todosActions.addTodo(text))
// })

export default connect(mapStateToProps, null)(InProgressList)