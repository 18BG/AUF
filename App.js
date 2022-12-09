import React, { useState } from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput  } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Register from "./Register";

export default function App(){

  return (
    <Register/>
  )

  }
const styles = StyleSheet.create({
  container:{
    //flex: 0,
    //backgroundColor: '#8CF1B4',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
 })

/*const saveData = async (value) => {
  console.log(value, 'log: le numero saisi')

  const jsonValue = JSON.stringify (value)

  try {
    await AsyncStorage.setItem('@storage_Key', jsonValue)
    alert('Bien enregist !')
  } catch (e) {
    console.log(e, 'log: Erreurs pendant la sauvegarde')
  }
}

export default function App(){
  const[phone, setPhone] = useState('')
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <Text>Write data</Text>
      <TextInput
      style={{ marginVertical: 10, fontSize: 17}}
      value={phone}
      placeholder="+223 0000 0000"
      autoComplete="tel"
      keyboardType="phone-pad"
      textContentType="phonenumber"
      onChangeText={setPhone}
      />
    </View>
  );
}
 const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#8CF1B4',
    alignItems: 'center',
    justifyContent: 'center',
  },
 })
 */