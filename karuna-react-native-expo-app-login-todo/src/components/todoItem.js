import { StyleSheet, Text, View } from 'react-native';
//import Ionicons from '@expo/vector-icons/Ionicons'
import FontAweSome from '@expo/vector-icons/FontAwesome6'
import AntDesign from '@expo/vector-icons/AntDesign';
//import EvilIcons from 'expo/vector-icons/EvilIcons'
//https://www.npmjs.com/package/react-ionicons


export default function TodoItem({ props, completeItemFn, editItemFn, deleteItemFn }) {
    return (
        <View style={props.completed ? styles.outer_container_done : styles.outer_container}>
            <View style={styles.container}>
                <Text style={props.completed ? styles.textDisable : styles.textLabel} onPress={() => completeItemFn(props.id)}>{props.task}</Text>
                <FontAweSome style={styles.icon} name='edit' size={32} onPress={() => editItemFn(props.id)} />
                <AntDesign style={styles.icon} name='delete' size={32} onPress={() => deleteItemFn(props.id)} color="#C9C9C9" shake={true} rotate={true} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    outer_container: {
        flex: 1,
        backgroundColor: 'rgba(88, 129, 168, 0.906)',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: 5,
        padding: 5,
    },
    outer_container_done: {
        flex: 1,
        backgroundColor: 'rgba(39, 44, 71, 0.906)',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: 5,
        padding: 5,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        borderWidth: 2,
        borderColor: 'rgba(255, 255, 255, 0.706)',
        flexDirection: 'row',
        padding: 5,
    },
    textLabel: {
        flex: 5,
        width: '100%',
        minWidth: '22vw',
        fontFamily: 'Cochin',
        fontSize: 22,
    },
    textDisable: {
        flex: 5,
        width: '100%',
        minWidth: '22vw',
        fontFamily: 'Cochin',
        fontSize: 22,
        textDecorationLine: 'line-through',

    },
    icon: {
        flex: 1,
        marginLeft: 5,
        marginRight: 5,
    },
});
