import { StyleSheet, Text, View, ScrollView, SafeAreaView, Alert } from 'react-native'
import React from 'react'
import CustomInput from '../components/CustomInput'
import { useState } from 'react'
import CustomButton from '../components/CustomButton'
import SocialSignInButtons from '../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import { Auth } from 'aws-amplify'


const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const SignUpScreen = () => {
  const {control, handleSubmit, watch}  = useForm();
  const pwd = watch ('password');
  const navigation = useNavigation();

  const onRegisterPressed = async (data) => {
    const {name, username, password, email} = data;
    try{
      await Auth.signUp({username,password,attributes:{email, name, preferred_username: username},}); 
      navigation.navigate('ConfirmEmailScreen',{username});
    } catch (e) {
      Alert.alert('Chaiii', e.message);
    }
    
  }

  const onForgotPasswordPressed=()=>{
    console.warn('forgot password');
  }

  const onSigninPressed=()=>{
    console.warn('sign in')
    
  }

  const onTermsOfUsePressed=()=>{
    console.warn('terms of use')
    
  }

  const onPrivacyPolicyPressed=()=>{
    console.warn('privacy policy')
    
  }




  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Text style={styles.title}>Create a NAVR account</Text>
      
        <CustomInput name="name" control={control} placeholder="Fullname" rules={{required:'Enter your Fullname',}}/>
        <CustomInput name="username" control={control} placeholder="Username" rules={{required:'Enter your username',}}/>
        <CustomInput name="email" control={control} placeholder="Email address" rules={{required:'Enter your email address', pattern: {value: EMAIL_REGEX, message:'Enter a valid email address'},}}/>
        <CustomInput name="password" control={control} placeholder="Password" secureTextEntry rules={{required:'Enter your password',}} />
        <CustomInput name="password-repeat" control={control} placeholder="Confirm Password" secureTextEntry rules={{validate: value => value === pwd || 'Passwords do not match',}} />
        <CustomButton text="Create Account" onPress={handleSubmit(onRegisterPressed)}/>
        <Text style={styles.text}>By creating an account, you confirm that you have accepted our{' '}<Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of use</Text> and <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text></Text>
        <SocialSignInButtons/>
        <CustomButton text="Have an account? Sign in" onPress={onSigninPressed} type="tertiary"/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems:'center',
    padding:20,
  },

  title:{
    fontSize:24,
    fontWeight:'bold',
    color:'black',
    margin:10,
  },

  text:{
    color:'gray',
    marginVertical:10,

  },

  link:{
    color:'#4765A9'

  }

});

export default SignUpScreen
