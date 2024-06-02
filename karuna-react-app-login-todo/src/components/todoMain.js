import React from 'react'
import Todo from "./todo";
import '../css/todoMain.css';



const TodoMain = ({ curUserID }) => {
    return (
        <div className='todoMain-outer-container'>
            <div className='todoMain-inner-container'>
                <p className='title'>Todo List</p>
                <Todo curUserID={curUserID} />
            </div>
        </div>
    )
}

export default TodoMain