import { View, Text,StyleSheet } from 'react-native'
import React,{useEffect} from 'react'
import Login from './Login'
// import Signup from './Signup'

const SplashScreen = ({navigation}) => {
  useEffect(()=>{
    setTimeout(()=>{
     navigation.navigate("Login")
    },3000)
  },[])
  return (
    <View style={styles.container}>
     <Text style={styles.logo}>TO-DO APP</Text> 
    </View>
  )
}

export default SplashScreen
const styles =StyleSheet.create({
container:{
  flex:1,
  justifyContent:"center",
  alignItems:'center'
},
logo:{
  fontSize:40,
  fontWeight:800,
  color:'#34ace0',
  
}






})

