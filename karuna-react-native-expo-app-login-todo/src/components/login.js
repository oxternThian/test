import React from 'react';
import { StyleSheet, Text, Button, TextInput, View, Pressable } from 'react-native';


export default function Login({ curUserID, setCurUserID, errorPromptFn }) {
  const [user, onChangeUser] = React.useState('');
  const [pass, onChangePass] = React.useState('');

  function savaLocal(userData, storage) {
    console.log('here->savaLocal')
    localStorage.setItem(storage, JSON.stringify(userData));
  }

  function getLocal(storage) {
    const d = localStorage.getItem(storage);
    //const promise1 = await Promise.resolve(d);
    //console.log("data: ", JSON.parse(d));
    return JSON.parse(d)
  }

  const onPressCreateUser = () => {
    /*const user = 'user001'
        const pass = '123'
        savaLocal({ pass: pass }, user)*/

    for (let i = 1; i < 4; i++) {
      const user = 'user00' + i
      const pass = '123'
      savaLocal({ pass: pass }, user)
    }

    errorPromptFn("user001, user002, user003 created! password : '123'")

  }


  const onPressLogin = () => {
    console.log('onPressLogin pressed')
    try {
      const p = getLocal(user)
      console.log('p=' + p)
      if (p === null) {
        console.log('no record!')
        errorPromptFn('No record!')
      } else if (p.pass === pass) {
        console.log('pass granted!')
        setCurUserID(user)
      } else {
        console.log('invalid password!')
        errorPromptFn('invalid password!')
      }
    }
    catch (err) {
      console.log("ERROR! " + err.message)
    }
  }

  return (
    <View style={styles.outer_container}>
      <View style={styles.container}>

        <View style={styles.input_group1}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeUser}
            value={user}
            placeholder="user"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangePass}
            value={pass}
            placeholder="password"
          //keyboardType="numeric"
          />
        </View>

        <View style={styles.btn_group1}>
          <View style={styles.btn}>
            <Button
              onPress={onPressCreateUser}
              title="Create User"
              color="#841584"
              accessibilityLabel="Temporary Create Local users."
            />
          </View>
          <View style={styles.btn}>
            <Button
              onPress={onPressLogin}
              title="Login >>"
              color="#841584"
              accessibilityLabel="Login user account."
            />
          </View>
        </View>

      </View>
    </View >

  );
}

const styles = StyleSheet.create({
  outer_container: {
    flex: 1,
    backgroundColor: '#999999',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  container: {
    backgroundColor: '#ffffffbe',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderWidth: 5,
    borderRadius: 15,
    borderColor: '#ffffff',
    height: '35%',
    width: '90%',
    flexDirection: 'row'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  btn: {
    margin: 10,
  },
  input_group1: {
    flex: 5,
  },
  btn_group1: {
    flex: 2.5,
  },
});
