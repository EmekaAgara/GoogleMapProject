import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import CustomInput from '../components/CustomInput'
import { useState } from 'react'
import CustomButton from '../components/CustomButton'
import SocialSignInButtons from '../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'


const SignUpScreen = () => {
  const [ username, setUsername ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ passwordRepeat, setPasswordRepeat ] = useState('');

  const navigation = useNavigation();

  const onRegisterPressed=()=>{
    navigation.navigate('ConfirmEmailScreen')
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
      
        <CustomInput placeholder="Username" value={username} setValue={setUsername}/>
        <CustomInput placeholder="Email address" value={email} setValue={setEmail}/>
        <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry />
        <CustomInput placeholder="Confirm Password" value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry />
        <CustomButton text="Create Account" onPress={onRegisterPressed}/>
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
