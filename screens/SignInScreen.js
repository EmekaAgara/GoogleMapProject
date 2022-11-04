import { StyleSheet, Text, View, Image, useWindowDimensions, ScrollView } from 'react-native'
import React from 'react'
import Logo from '../assets/login.png'
import CustomInput from '../components/CustomInput'
import { useState } from 'react'
import CustomButton from '../components/CustomButton'
import SocialSignInButtons from '../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'
import NavOptions from '../components/NavOptions'
import ForgotPasswordScreen from './ForgotPasswordScreen'
import SignUpScreen from './SignUpScreen'

const SignInScreen = () => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');


  const {height} = useWindowDimensions();
  const navigation = useNavigation();


  const onSignInPressed=()=>{
    //validate user
    navigation.navigate(NavOptions)
  }

  const onForgotPasswordPressed=()=>{
    navigation.navigate(ForgotPasswordScreen)
  }

  const onSignupPressed=()=>{
    navigation.navigate(SignUpScreen)
    
  }




  return (
    <ScrollView>
      <View style={styles.root}>
        <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode='contain'/>
      
        <CustomInput placeholder="Username" value={username} setValue={setUsername}/>
        <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry />
        <CustomButton text="Sign In" onPress={onSignInPressed}/>
        <CustomButton text="Forgot Password?" onPress={onForgotPasswordPressed} type="tertiary"/>
        <SocialSignInButtons/>

        <CustomButton text="Don't have an account? Sign up" onPress={onSignupPressed} type="tertiary"/>
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
