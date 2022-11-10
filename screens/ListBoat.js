// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { COLORS, Items } from '../components/Database'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import CustomButton from '../components/CustomButton'
import CustomInput from '../components/CustomInput/CustomInput'
import { useForm } from 'react-hook-form'


const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/


const ListBoat = () => {
  const {control, handleSubmit, watch}  = useForm();
  const pwd = watch ('password');
  const navigation = useNavigation();
  const onRegisterPressed = async (data) => {
    const {Image, Type, password, email} = data;
    try{
      await Auth.signUp({username,password,attributes:{email, name, preferred_username: username},}); 
      navigation.navigate('ConfirmEmailScreen',{username});
    } catch (e) {
      Alert.alert('Chaiii', e.message);
    }
    
  }

  const onForgotPasswordPressed=()=>{
    console.warn('forgot password');
  }

  const onSigninPressed=()=>{
    // console.warn('sign in')
    navigation.navigate(SignInScreen)
    
  }

  const onListPressed=()=>{
    // console.warn('sign in')
    navigation.navigate(Successful)
    
  }
  

  

  const onTermsOfUsePressed=()=>{
    console.warn('terms of use')
    
  }

  const onPrivacyPolicyPressed=()=>{
    console.warn('privacy policy')
    
  }


  return (
    <View
      style={{
        width:'100%',
        height:'100%',
        backgroundColor:COLORS.white,
      }}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content"/>
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
         Wanna List your boat ?
        </Text>

        <Text style={{
          fontSize:14,
          color:COLORS.black,
          fontWeight:'400',
          letterSpacing:1,
          lineHeight:24,
        }}>
         Please Fill in your information below
        </Text>
        </View>
        <View style={styles.root}>
        <CustomInput name="Boatname" control={control} placeholder="Boat Name" rules={{required:'Enter your Fullname',}}/>
        <CustomInput name="Description" maxLength={40} control={control} placeholder="Description" rules={{required:'Enter your Fullname',}}/>
        <CustomInput name="Location" maxLength={40} control={control} placeholder="Location Type" rules={{required:'Enter your Fullname',}}/>
        <CustomInput name="City" maxLength={40} control={control} placeholder="City" rules={{required:'Enter your Fullname',}}/>
        <CustomInput name="Currency" maxLength={40} control={control} placeholder="Preffered Currency" rules={{required:'Enter your Fullname',}}/>
        <CustomInput name="Price" maxLength={40} control={control} placeholder="Price per Hour" rules={{required:'Enter your Fullname',}}/>
        <CustomInput name="Own" maxLength={40} control={control} placeholder="Do you Own the boat ?" rules={{required:'Enter your Fullname',}}/>
        <CustomInput name="Type" maxLength={40} control={control} placeholder="Boat Type" rules={{required:'Enter your Fullname',}}/>
        <CustomInput name="Image" maxLength={40} control={control} placeholder="Upload Images" rules={{required:'Enter your Fullname',}}/>
        <CustomButton text="List Boat" onPress={handleSubmit(onListPressed)}/>
        <Text style={styles.text}>By listing your boat, you confirm that you have accepted our{' '}<Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of use</Text> and <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text></Text>
        <CustomButton text="Have an account? Sign in" onPress={onSigninPressed} type="tertiary"/>
      </View>


      </ScrollView>
      
    </View>
  )
}

export default ListBoat

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