import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


function TodoUpdateForm({ task, todoList, setTodoList }) {
    const [myTask, setMyTask] = React.useState(task.task)

    const onPressUpdateTask = () => {
        if (myTask.trim().length > 0) {
            setTodoList(todoList.map(todo => todo.id === task.id ?
                { ...todo, isEditing: !todo.isEditing, task: myTask } :
                todo
            ))
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
                    placeholder="Change Task"
                />
                <View style={styles.btn}>
                    <Button
                        onPress={onPressUpdateTask}
                        title="Update Task"
                        color="#841584"
                        accessibilityLabel="update task."
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



export default TodoUpdateForm;