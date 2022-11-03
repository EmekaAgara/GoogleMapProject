import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import CustomInput from '../components/CustomInput'
import { useState } from 'react'
import CustomButton from '../components/CustomButton'


const SignUpScreen = () => {
  const [ username, setUsername ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ passwordRepeat, setPasswordRepeat ] = useState('');


  const onRegisterPressed=()=>{
    console.warn('register');
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
    console.warn('sign up')
    
  }

  const onTermsOfUsePressed=()=>{
    console.warn('terms of use')
    
  }

  const onPrivacyPolicyPressed=()=>{
    console.warn('privacy policy')
    
  }




  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Create a NAVR account</Text>
      
        <CustomInput placeholder="Username" value={username} setValue={setUsername}/>
        <CustomInput placeholder="Email address" value={email} setValue={setEmail}/>
        <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry />
        <CustomInput placeholder="Confirm Password" value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry />
        <CustomButton text="Create Account" onPress={onRegisterPressed}/>
        <Text style={styles.text}>By creating an account, you confirm that you have accepted our{' '}<Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of use</Text> and <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text></Text>

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
