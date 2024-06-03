import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Header({ curUserID, setCurUserID }) {

    const onPressLogoutFn = () => {
        setCurUserID('')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Header</Text>
            <Text style={styles.text}>{curUserID}</Text>
            <MaterialCommunityIcons
                name="logout"
                size={24}
                color={curUserID ? 'white' : "black"}
                onPress={curUserID ? onPressLogoutFn : undefined}
                disabled={curUserID ? false : true}
                style={styles.icon}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 10,
        backgroundColor: '#282c34',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    header: {
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Cochin',
        userSelect: 'none',
    },
    text: {
        position: 'absolute',
        color: 'white',
        fontSize: 10,
        right: 10,
        bottom: 5,
    },
    icon: {
        position: 'absolute',
        right: 5,
        bottom: 18,
    },
});