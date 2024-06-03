import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import { v4 as uuidv4 } from 'uuid'

function TodoForm({ todoList, setTodoList }) {
    const [myTask, setMyTask] = React.useState('')

    const onPressAddTask = () => {
        console.log('myTask' + myTask)
        if (myTask.trim().length > 0) {
            setTodoList([...todoList, { id: uuidv4(), task: myTask, completed: false, isEditing: false }]);
            console.log(todoList);
            setMyTask('');
        }
    }

    return (
        <View style={styles.outer_container}>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    onChangeText={setMyTask}
                    value={myTask}
                    placeholder="New Task"
                />
                <View style={styles.btn}>
                    <Button
                        onPress={onPressAddTask}
                        title="Add Task"
                        color="#841584"
                        accessibilityLabel="Add new task."
                    />
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    outer_container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'column'
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'row'
    },
    input: {
        height: 40,
        margin: 6,
        borderWidth: 1,
        padding: 5,
        minWidth: '18vw',
    },
    btn: {
        margin: 10,
    },
});



export default TodoForm;