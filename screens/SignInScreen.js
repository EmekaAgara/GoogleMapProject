import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Logo from '../assets/splash.png'

const SignInScreen = () => {
  return (
    <View>
      <Image source={Logo} style={styles.logo} resizeMode='contain'/>
    </View>
  )
}

const styles =StyleSheet.create({
  
})

export default SignInScreen

const styles = StyleSheet.create({})