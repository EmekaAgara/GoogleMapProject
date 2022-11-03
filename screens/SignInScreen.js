import { StyleSheet, Text, View, Image, useWindowDimensions, ScrollView } from 'react-native'
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

  const onSignInFacebook=()=>{
    console.warn('sign in facebook');
  }

  const onSignInGoogle=()=>{
    console.warn('sign in google');
  }

  const onSignInApple=()=>{
    console.warn('sign in apple');
  }

  const onSignupPressed=()=>{
    console.warn('sign up');
  }




  return (
    <ScrollView>
      <View style={styles.root}>
        <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode='contain'/>
      
        <CustomInput placeholder="Username" value={username} setValue={setUsername}/>
        <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry />
        <CustomButton text="Sign In" onPress={onSignInPressed}/>
        <CustomButton text="Forgot Password?" onPress={onForgotPasswordPressed} type="tertiary"/>

        <CustomButton text="Sign In with Facebook" onPress={onSignInFacebook} bgColor="#E7EAF4" fgColor="#4765A9"/>
        <CustomButton text="Sign In with Google" onPress={onSignInGoogle} bgColor="#FAE9EA" fgColor="#DD4D44" />
        <CustomButton text="Sign In with Apple" onPress={onSignInApple} bgColor="#E3E3E3" fgColor="#363636" />
        <CustomButton text="Don't have an account? Signup" onPress={onSignupPressed} type="tertiary"/>
      </View>
    </ScrollView>
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
