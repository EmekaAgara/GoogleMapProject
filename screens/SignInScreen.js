import { StyleSheet, Text, View, Image, useWindowDimensions, ScrollView, TextInput, Alert } from 'react-native'
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
import HomeScreen from './HomeScreen'
import { Controller, useForm } from 'react-hook-form'
import { Auth } from 'aws-amplify'
// import NavOptionsScreen from '../components/NavOptions'
// import NavOptionsScreen from './NavOptionsScreen'


const SignInScreen = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const {control, handleSubmit, formState:{errors},} = useForm();


  const onSignInPressed = async (data) =>{
    if (loading) {
      return;
    }
    
    setLoading(true);
    try{
      const response = await Auth.signIn(data.username, data.password);
      console.log(response);
      navigation.navigate(HomeScreen)
    } catch(e){
      Alert.alert('Chaiii', e.message);
    }
    setLoading(false);
  };

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

        <CustomInput name="username" placeholder="Username" control={control} rules={{required: 'Enter your username'}}/>
        <CustomInput name="password" placeholder="Password" control={control}secureTextEntry rules={{required: 'Enter your password'}}/>
        <CustomButton text={loading ? "Loading..." : "Sign In"} onPress={handleSubmit(onSignInPressed)}/>
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
