import React from 'react'
import '../css/todoForm.css';

const TodoEditForm = ({ task, todoList, setTodoList }) => {
    const [myTask, setMyTask] = React.useState(task.task)

    const handleSubmit = e => {
        e.preventDefault();
        if (myTask.trim().length > 0) {
            setTodoList(todoList.map(todo => todo.id === task.id ?
                { ...todo, isEditing: !todo.isEditing, task: myTask } :
                todo
            ))
            setMyTask('');
        }
    }


    return (
        <div className='todoEditForm-outer-container'>
            <form className='todoEditForm-inner-container' onSubmit={handleSubmit}>
                <input className='input'
                    type="text"
                    value={myTask}
                    onChange={(e) => setMyTask(e.target.value)}
                />
                <button className='button-8' type='submit'>Update Task</button>
            </form>
        </div>
    )
}

export default TodoEditForm