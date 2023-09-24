import { View, Text,StyleSheet,TextInput,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';

const Signup = ({navigation}) => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const CreateUser=()=>{
    auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User account created & signed in!');
      navigation.navigate('Login')
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
  
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
  
      console.error(error);
    });
  }
  return (
    <View style={styles.container}>
     <Text style={styles.title}>Register</Text>
     <View style={{marginTop:'6%'}}>
      {/* <TextInput style={styles.inputstyle} placeholder='First Name'/> */}
      {/* <TextInput style={styles.inputstyle} placeholder='Last Name'/> */}
      {/* <TextInput style={styles.inputstyle} placeholder='Mobile No'/> */}
      <TextInput style={styles.inputstyle} placeholder='EmailId'  onChangeText={txt=>setEmail(txt)}/>
      <TextInput style={styles.inputstyle} placeholder='Password'  onChangeText={txt=>setPassword(txt)}/>
      </View>
    <TouchableOpacity onPress={()=>{CreateUser()}} style={styles.loginbtn}><Text style={styles.textbtn}>Create Account</Text>

    </TouchableOpacity>

    
    </View>
  )
}


export default Signup

const styles = StyleSheet.create({

    container:{
      flex:1,
      
    },
    title:{
      fontSize:28,
      fontWeight:800,
      color:'black',
      marginTop:'40%',
      alignSelf:'center',
    },
    inputstyle:{
      paddingLeft:20,
      height:50,
      alignSelf:'center',
      marginTop:30,
      borderWidth:0.9,
      width:'80%',
      borderRadius:8,
      color:'#000'
    },
    loginbtn:{
      backgroundColor:'#34ace0',
      width:'80%',
      height:50,
      alignSelf:'center',
      marginTop:40,
      borderRadius:8,
      justifyContent:'center',
      alignItems:'center'
      },
      textbtn:{
        fontSize:18,
        fontWeight:600,
        color:'black'
      }
    
    
    })