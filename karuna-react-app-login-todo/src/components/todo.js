// snippets rafce + tab
import React from 'react'
import TodoForm from './todoForm'
import TodoItem from './todoItem'
import TodoEditForm from './todoEditForm'
import '../css/todo.css';
import { savaLocal, getLocal } from '../scripts/datautils'



function Todo({ curUserID }) {
    const [todoList, setTodoList] = React.useState([])
    const [firstLoad, setFirstLoad] = React.useState(true)


    React.useEffect(() => {
        const d = getLocal(curUserID + "-todoList")
        if (d !== null)
            setTodoList(d)
        setFirstLoad(false)
    }, [curUserID])

    /*const updateStorageFn = () => {
        savaLocal(todoList, curUserID + "-todoList")
    }*/

    React.useEffect(() => {
        if (firstLoad === false)
            savaLocal(todoList, curUserID + "-todoList")
    }, [todoList, curUserID, firstLoad])


    const completeItemFn = id => {
        setTodoList(todoList.map(todo => todo.id === id ?
            { ...todo, completed: !todo.completed } :
            todo
        ))
    }


    const deleteItemFn = id => {
        setTodoList(todoList.filter(todo => todo.id !== id))
    }

    const editItemFn = id => {
        setTodoList(todoList.map(todo => todo.id === id ?
            { ...todo, isEditing: !todo.isEditing } :
            todo
        ))
    }

    return (
        <div className='outer-container'>
            <TodoForm todoList={todoList} setTodoList={setTodoList}></TodoForm>
            {todoList.map((item, index) => (item.isEditing ?
                <TodoEditForm task={item} key={index} todoList={todoList} setTodoList={setTodoList} /> :
                <TodoItem task={item} key={index} deleteItemFn={deleteItemFn} editItemFn={editItemFn} completeItemFn={completeItemFn} />
            ))
            }
        </div>
    )
}

//<p>{todoList}</p>

export default Todo;