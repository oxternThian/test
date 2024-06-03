import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import Header from './src/components/header'
import MainContent from './src/components/mainContent'
import Footer from './src/components/footer'

export default function App() {
  const [curUserID, setCurUserID] = React.useState('')

  return (
    <SafeAreaView >
      <View style={styles.outer_container}>
        <Header curUserID={curUserID} setCurUserID={setCurUserID} />
        <MainContent curUserID={curUserID} setCurUserID={setCurUserID} />
        <Footer />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  outer_container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner_container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
