import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './login'
import TodoMain from './todoMain'

export default function MainContent({ curUserID, setCurUserID }) {
    const [prompt, setPrompt] = React.useState('')
    let myInterval;

    function errorPromptFn(err) {
        console.log("in errorPromptFn")
        setPrompt(err)
        if (myInterval !== undefined)
            clearInterval(myInterval);
        myInterval = setTimeout(clearPromptFn, 3000);

        function clearPromptFn() {
            setPrompt('')
            clearInterval(myInterval);
            myInterval = undefined
        }
    }


    return (
        <View style={styles.outer_container}>
            <View style={styles.container}>
                {(curUserID === '') ?
                    <Login curUserID={curUserID} setCurUserID={setCurUserID} errorPromptFn={errorPromptFn} />
                    : <TodoMain curUserID={curUserID} />
                }
                <Text style={styles.promptText}>{prompt}</Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    outer_container: {
        flex: 87,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        minWidth: '30vw',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    promptText: {
        backgroundColor: '#fff',
        color: 'green',
    }
});
