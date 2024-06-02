import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import '../css/todoItem.css';


const TodoItem = ({ task, deleteItemFn, editItemFn, completeItemFn }) => {

    console.log('task.completed =' + task.completed)

    return (
        <div className='todoItem-outer-container'>
            <div className='todoItem-inner-container'>
                <p className={task.completed ? 'item-done' : 'item'} onClick={() => (completeItemFn(task.id))}>{task.task}</p>
                <div className='icon-container'>
                    <FontAwesomeIcon className='icon' icon={faPenToSquare} onClick={() => (editItemFn(task.id))} />
                    <FontAwesomeIcon className='icon' icon={faTrash} onClick={() => deleteItemFn(task.id)} />
                </div>
            </div>
        </div>
    )
}

export default TodoItem