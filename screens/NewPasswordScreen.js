import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import CustomInput from '../components/CustomInput'
import { useState } from 'react'
import CustomButton from '../components/CustomButton'
import SocialSignInButtons from '../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'



const NewPasswordScreen = () => {
  const {control, handleSubmit} = useForm();
  const navigation = useNavigation();


  const onSubmitPressed=(data)=>{
    console.warn(data);
    navigation.navigate('HomeScreen')
  }

  const onSigninPressed=()=>{
    navigation.navigate('SignInScreen')
    
  }




  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your Password</Text>
      
        <CustomInput placeholder="Enter confirmation code" name="code" control={control} rules={{required:'Your confirmation code is required'}} />
        <CustomInput placeholder="Enter confirmation code" name="code" control={control} rules={{required:'Your confirmation code is required'}} />
        <CustomInput placeholder="Enter your new password" name="password" control={control} secureTextEntry rules={{required:'Enter your password'}} />
        <CustomButton text="Next" onPress={handleSubmit(onSubmitPressed)}/>
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

export default NewPasswordScreen
