import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native'
import React from 'react'
import Logo from '../assets/login.png'

const SignInScreen = () => {
  const {height} = useWindowDimensions();
  return (
    <View>
      <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode='contain'/>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems:'center',
    padding:20,
  },

  logo: {
    width:'70%',
    maxHeight:200,
    maxWidth:300,
    // padding:200,
    // margin:200,
    marginTop:100,
    marginLeft:60,
  },

});

export default SignInScreen
