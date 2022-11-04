import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton'
const SocialSignInButtons = () => {
    const onSignInFacebook=()=>{
        console.warn('sign in facebook');
    }
    
    const onSignInGoogle=()=>{
        console.warn('sign in google');
    }
    
    const onSignInApple=()=>{
        console.warn('sign in apple');
    }
  return (
    <>
        <CustomButton text="Sign In with Facebook" onPress={onSignInFacebook} bgColor="#E7EAF4" fgColor="#4765A9"/>
        <CustomButton text="Sign In with Google" onPress={onSignInGoogle} bgColor="#FAE9EA" fgColor="#DD4D44" />
        <CustomButton text="Sign In with Apple" onPress={onSignInApple} bgColor="#E3E3E3" fgColor="#363636" />
    </>
  )
}

export default SocialSignInButtons

const styles = StyleSheet.create({})