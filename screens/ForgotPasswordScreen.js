import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import CustomInput from '../components/CustomInput'
import { useState } from 'react'
import CustomButton from '../components/CustomButton'
import SocialSignInButtons from '../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'

const ForgotPasswordScreen = () => {
  const [ username, setUsername ] = useState('');
  const navigation = useNavigation();

  const onSendPressed=()=>{
    navigation.navigate('NewPasswordScreen')
  }

  const onSigninPressed=()=>{
    navigation.navigate('SignInScreen')
    
  }




  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your Password</Text>
      
        <CustomInput placeholder="Enter username" value={username} setValue={setUsername}/>
        <CustomButton text="Next" onPress={onSendPressed}/>
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
