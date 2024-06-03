import { StyleSheet, Text, View } from 'react-native';

export default function Footer() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>www.company.com</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: '#282c34',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    text: {
        color: 'white',
        textAlign: 'center',
        userSelect: 'none',
    },
});
