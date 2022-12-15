import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text,  TouchableOpacity, View, TextInput , Animated} from 'react-native';
import { auth, db } from './firebase-config'
import { signInWithEmailAndPassword } from '@firebase/auth';

import React, { useState } from 'react';

export default function Login() {


    const [ email, setEmail ] = useState('')
    const [ pwd, setPwd ] = useState('')
    //const [ name, setName ] = useState('')
    
    
    const handleLogin = async () => {
      signInWithEmailAndPassword(auth, email, pwd)
        .then(async userCredentials => {
          console.log(userCredentials, 'YYYYYYYYYYYYYYYYYYYYYYYyXXX');

          const currentUser = userCredentials.user;

          console.log('dLoge with:', currentUser);
          alert('Logged')
          
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
              Authentification
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
          onPress={() => handleLogin()}
          >
            <Text>Login</Text>
            
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