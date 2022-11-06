import { StyleSheet, Text, View, ScrollView, SafeAreaView, Alert } from 'react-native'
import React from 'react'
import CustomInput from '../components/CustomInput'
import { useState } from 'react'
import CustomButton from '../components/CustomButton'
import SocialSignInButtons from '../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import { Auth } from 'aws-amplify'

const ForgotPasswordScreen = () => {
  const {control, handleSubmit} = useForm();
  const navigation = useNavigation();

  const onSendPressed = async data => {
    try{
      await Auth.forgotPassword(data.username);
      navigation.navigate('NewPasswordScreen')

    } catch (e){
      Alert.alert("Chaii", e.message);
    }
    // console.warn(data);
    // navigation.navigate('NewPasswordScreen')
  }

  const onSigninPressed=(data)=>{
    
    navigation.navigate('SignInScreen')
    
  }




  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your Password</Text>
      
        <CustomInput name="username" control={control} placeholder="Enter username" rules={{required:'Enter your username'}} />
        <CustomButton text="Next" onPress={handleSubmit(onSendPressed)}/>
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

export default ForgotPasswordScreen
