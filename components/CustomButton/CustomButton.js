import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const CustomButton = ({ onPress, text, type = "primary", bgColor, fgColor }) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`],bgColor ? {backgroundColor:bgColor} : {}]}>
      <Text style={[styles.text, styles[`text_${type}`], fgColor ? {color:fgColor} : {},   ]}>{text}</Text>
    </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    container:  {
        width:'100%',
        padding:15,
        marginVertical:5,
        alignItems:'center',
        borderRadius:5,
    },

    container_primary:{
        backgroundColor:'#000000',
    },

    container_tertiary:{
        
    },

    text:{
        fontWeight:'bold',
        color:'white'
    },

    text_tertiary:{
        color:'gray'
    },

    container_secondary:{
      borderColor:'#000000',
      borderWidth:1,

    },

    text_secondary:{
      color:'#000000'

    }

})