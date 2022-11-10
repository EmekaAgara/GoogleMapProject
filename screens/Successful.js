import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RentBoat from './RentBoat'
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native'


const Successful = () => {
    const navigation = useNavigation();
  return (
    <View>
      <Text>Successful</Text>

      <CustomButton onPress={() => (navigation.navigate(RentBoat))} text="GO Back"type="secondary"/>
    </View>
  )
}

export default Successful

const styles = StyleSheet.create({})