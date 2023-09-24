import { View, Text,StyleSheet,TextInput,TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {
  const [email, setEmail] = React.useState(true);
  const [password, setPassword] = React.useState();

  // Handle user state changes
  // function onAuthStateChanged(user) {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // }

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // }, []);


  const handleLogin=()=>{
    alert('Welcome')
    auth().signInWithEmailAndPassword(email,password).then((res)=>{
     
console.log('res', res)
navigation.navigate('Homescreen')
    }).catch((err)=>{console.error()})
  }

//   if (initializing) return null;
// console.log('user', user)
//   if (!user) {
//     return (
//       <View>
//         <Text style={{color:'red'}}>Login</Text>
//       </View>
//     );
//   }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={{marginTop:'6%'}}>
      <TextInput style={styles.inputstyle} placeholder='Email Id' onChangeText={txt=>setEmail(txt)}/>
      <TextInput style={styles.inputstyle} placeholder='Password' onChangeText={txt=>setPassword(txt)}/>
      </View>
    <TouchableOpacity onPress={()=>{handleLogin()}} style={styles.loginbtn}><Text style={styles.textbtn}>Login</Text>

    </TouchableOpacity>
    <Text
            onPress={() => navigation.navigate('Signup')}
            style={{
              color: 'black',
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 18,
              padding:14,
            }}>
            Don't have account ?Register
          </Text>
    
    </View>
  )
}

export default Login

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
  borderWidth:0.8,
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