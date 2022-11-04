import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import CustomInput from '../components/CustomInput'
import { useState } from 'react'
import CustomButton from '../components/CustomButton'
import SocialSignInButtons from '../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'


const ConfirmEmailScreen = () => {
  const{control, handleSubmit} = useForm();
  const [ code, setCode ] = useState('');
  const navigation = useNavigation();

  const onConfirmPressed=(data)=>{
    console.warn(data);
    navigation.navigate('HomeScreen')
  }

  const onResendPressed=()=>{
    console.warn('resend code');
  }

  const onSigninPressed=()=>{
    navigation.navigate('SignInScreen')
    
  }




  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your Email address</Text>
      
        <CustomInput name="code" control={control} placeholder="Enter Verification Code" rules={{required:'Enter your email confirmation code',}}/>
        <CustomButton text="Verify" onPress={handleSubmit(onConfirmPressed)}/>
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
