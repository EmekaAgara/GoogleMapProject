import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import CustomInput from '../components/CustomInput'
import { useState } from 'react'
import CustomButton from '../components/CustomButton'
import SocialSignInButtons from '../components/SocialSignInButtons'


const ConfirmEmailScreen = () => {
  const [ code, setCode ] = useState('');

  const onConfirmPressed=()=>{
    console.warn('verify');
  }

  const onResendPressed=()=>{
    console.warn('resend code');
  }

  const onSigninPressed=()=>{
    console.warn('sign in')
    
  }




  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your Email address</Text>
      
        <CustomInput placeholder="Enter Verification Code" value={code} setValue={setCode}/>
        <CustomButton text="Verify" onPress={onConfirmPressed}/>
        <CustomButton text="Resend Code" onPress={onResendPressed} type="secondary"/>
        <CustomButton text="Sign in" onPress={onSigninPressed} type="secondary"/>
        
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

export default ConfirmEmailScreen
