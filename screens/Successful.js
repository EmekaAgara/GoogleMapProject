import { Image,Dimensions, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { COLORS, Items } from '../components/Database'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'
import CustomButton from '../components/CustomButton'
import HomeScreen from './HomeScreen'


const Successful = () => {

  const onSigninPressed=()=>{
    // console.warn('Successfull')
    navigation.navigate(HomeScreen)
    
  }


  const navigation = useNavigation();
  return (
    <View
    style={{
      width:'100%',
      height:'100%',
      backgroundColor:COLORS.white,
    }}>


    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView
        style={{
          width:'100%',
          flexDirection:'row',
          justifyContent:'space-between',
          padding:16,
          
        }}>

          <TouchableOpacity onPress={() => navigation.goBack('Home')}>
          <Entypo
              name="chevron-small-left"
              style={{
                fontSize: 32,
                color: COLORS.backgroundMedium,
                padding:10,
                borderRadius:7,
                borderWidth:0.3,
                
                margin:15,

              }}
            />
          </TouchableOpacity>
        </SafeAreaView>
      <View style={{
        marginBottom:10,
        padding:16,
      }}>
      <Text style={{
        fontSize:25,
        color:COLORS.black,
        fontWeight:'500',
        letterSpacing:1,
        marginBottom:10,
      }}>
       Successful !!
      </Text>

      <Text style={{
        fontSize:14,
        color:COLORS.black,
        fontWeight:'400',
        letterSpacing:1,
        lineHeight:24,
      }}>
       Your request was Successful, our operator will contact you shortly.
      </Text>
      <Image
        style={styles.image}
        source={require('../assets/success.gif')}
      />
      <CustomButton text="Go Back" onPress={onSigninPressed}/>
      </View>
    </ScrollView>
    
  </View>
  )
}

export default Successful

const styles = StyleSheet.create({
  image: {
    marginTop:-30,
    flex: 0.6,
    width: '100%',
    resizeMode: 'contain',
  },

});