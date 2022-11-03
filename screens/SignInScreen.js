import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native'
import React from 'react'
import Logo from '../assets/login.png'
import CustomInput from '../components/CustomInput'
import { useState } from 'react'
import CustomButton from '../components/CustomButton'


const SignInScreen = () => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');


  const {height} = useWindowDimensions();


  const onSignInPressed=()=>{
    console.warn('sign in');
  }

  const onForgotPasswordPressed=()=>{
    console.warn('forgot password');
  }




  return (
    <View style={styles.root}>
      <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode='contain'/>
      
      <CustomInput placeholder="Username" value={username} setValue={setUsername}/>
      <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry />
      <CustomButton text="Sign In" onPress={onSignInPressed}/>
      <CustomButton text="Forgot Password" onPress={onForgotPasswordPressed} type="tertiary"/>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems:'center',
    padding:20,
  },

  logo: {
    width:'70%',
    maxHeight:300,
    maxWidth:200,
    // padding:200,
    // margin:200,
    marginTop:70,
    // marginLeft:60,
  },

});

export default SignInScreen
