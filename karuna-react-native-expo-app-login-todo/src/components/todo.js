import React from 'react';

import { StyleSheet, Text, View, FlatList } from 'react-native';
import { savaLocal, getLocal } from '../scripts/datautils'
import TodoForm from './todoForm'
import TodoItem from './todoItem'
import TodoUpdateForm from './todoUpdateForm'


export default function Todo({ curUserID }) {
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
        <View style={styles.outer_container}>
            <View style={styles.container}>
                <TodoForm todoList={todoList} setTodoList={setTodoList} />

                {todoList.length > 0 ?
                    <FlatList
                        data={todoList}
                        renderItem={({ item }) => item.isEditing ? <TodoUpdateForm task={item} todoList={todoList} setTodoList={setTodoList} /> : <TodoItem props={item} completeItemFn={completeItemFn} editItemFn={editItemFn} deleteItemFn={deleteItemFn} />}
                        keyExtractor={item => item.id}
                    />

                    : <Text style={styles.textLbl}>empty list</Text>
                }
            </View>
        </View>
    );
}




const styles = StyleSheet.create({
    outer_container: {
        //flex: 1,
        ///backgroundColor: '#2d94f5e7',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    textLbl: {
        backgroundColor: 'white',
        color: 'red',
        width: '100%',
        textAlign: 'center'
    },
});
