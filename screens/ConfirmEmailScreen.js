import { StyleSheet, Text, View, ScrollView, SafeAreaView, Alert } from 'react-native'
import React from 'react'
import CustomInput from '../components/CustomInput'
import { useState } from 'react'
import CustomButton from '../components/CustomButton'
import SocialSignInButtons from '../components/SocialSignInButtons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import { Auth } from 'aws-amplify'

const ConfirmEmailScreen = () => {
  const{control, handleSubmit, watch} = useForm({
    defaultValues: {username: route?.params?.username},
  });

  const username = watch('username');
  const [ code, setCode ] = useState('');
  const navigation = useNavigation();
  const route = useRoute();

  const onConfirmPressed = async data =>{
    try{
      await Auth.confirmSignUp(data.username, data.code);
      navigation.navigate('SignInScreen')

    } catch (e){
      Alert.alert("Chaii", e.message);
    }

  }

  const onResendPressed = async () =>{
    try{
      await Auth.resendSignUp(username);
      Alert.alert("Welldone", 'Your verification code has been resent to your email');
    } catch (e){
      Alert.alert("Chaii", e.message);
    }
  }

  const onSigninPressed=()=>{
    navigation.navigate('SignInScreen')
    
  }




  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your Email address</Text>
      
        <CustomInput name="username" control={control} placeholder="Enter your username" rules={{required:'Enter your username',}}/>
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
