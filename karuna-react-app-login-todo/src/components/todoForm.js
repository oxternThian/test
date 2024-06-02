// snippets rafce + tab
import React from 'react'
import '../css/todoForm.css';
import { v4 as uuidv4 } from 'uuid'

function TodoForm({ todoList, setTodoList }) {
    const [myTask, setMyTask] = React.useState('')

    const handleSubmit = e => {
        e.preventDefault();
        if (myTask.trim().length > 0) {
            setTodoList([...todoList, { id: uuidv4(), task: myTask, completed: false, isEditing: false }]);
            //console.log(todoList);
            setMyTask('');
        }
    }


    return (
        <div className='todoForm-outer-container'>
            <form className='todoForm-inner-container' onSubmit={handleSubmit}>
                <input className='input'
                    placeholder='Task to do'
                    type="text"
                    value={myTask}
                    onChange={(e) => setMyTask(e.target.value)}
                />
                <button className='button-8' type='submit'>Add Task</button>
            </form>
        </div>
    )
}


export default TodoForm;