import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text,  TouchableOpacity, View, TextInput } from 'react-native';
import { auth, db } from './firebase-config'
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import React, { useState } from 'react';





export default function Register() {


const [ email, setEmail ] = useState('')
const [ pwd, setPwd ] = useState('')
const [ name, setName ] = useState('')


const handle = async () => {
  createUserWithEmailAndPassword(auth, email, pwd)
    .then(async userCredentials => {
      const currentUser = userCredentials.user;

      const docUser = await addDoc(collection(db, "user"), {
        userId: currentUser.uid,
        name: name,
        email: currentUser.email,
      });


      console.log('Register with:', currentUser);

      alert('Registered')

    })
    .catch(error => alert(error.message))
}


  return (
    <View style={styles.container}>
      <StatusBar style="light"/>
      <View style={{
        flexDirection: 'row',
      }}>
        <View style ={{alignItems: 'center',}}>

          <Text style={{fonySize: 50,
          color: 'white',
        }}>
          Register in firebas
        </Text>

        </View>

      </View>
      <View style={{margin:50
      }}>
        <TextInput
          style={{
            height:40,
            borderColor: 'gray',
            backgroundColor: 'white',
            borderWidth: 1,
            borderRadius: 20,
            paddingHorizontal: 10,
            placeholderTextColor: 'gray',
            margin:10,
            textAlign: 'center'
          }}
          onChangeText={setEmail}
          value={email}
          placeholder="mail !"
          />
        <TextInput
          style={{
            height:40,
            borderColor: 'gray',
            backgroundColor: 'white',
            borderWidth: 1,
            borderRadius: 20,
            paddingHorizontal: 10,
            
            placeholderTextColor: 'gray',
            margin:10,
            
          }}
          onChangeText={setName}
          value={name}
          placeholder="Votre Nom"
          />
          <TextInput
          style ={{
            height:40,
            borderColor: 'gray',
            backgroundColor: 'white',
            borderWidth: 1,
            borderRadius: 20,
            paddingHorizontal: 10,
            placeholderTextColor: 'gray',
            margin:10,
            
          }}
          onChangeText={setPwd}
          value={pwd}
          placeholder="Your password !"
          />
       
      </View>
      <TouchableOpacity 
      style={{
        alignItems: 'center',
        
        backgroundColor: 'gray',
        borderRadius: 20,
        width: 130,
        alignSelf: 'auto'
      }}
      onPress={() => handle()}
      >
        <Text>create account</Text>
        
      </TouchableOpacity>
      

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});