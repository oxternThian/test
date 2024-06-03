import { StyleSheet, Text, View } from 'react-native';
import Todo from './todo'


export default function TodoMain({ curUserID }) {
    return (
        <View style={styles.outer_container}>
            <View style={styles.container}>
                <Text style={styles.textLabel}>Todo</Text>
                <Todo curUserID={curUserID} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    outer_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%'
    },
    container: {
        backgroundColor: '#7fa9cfe7',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        flexDirection: 'column',
        borderTopLeftRadius: '15',
        borderTopRightRadius: '15',
    },
    textLabel: {
        minHeight: 'max-content',
        width: '100%',
        textAlign: 'center',
        fontSize: 38,
        fontWeight: 'bold',
        fontFamily: 'Cochin',
        userSelect: 'none',
    },
});
