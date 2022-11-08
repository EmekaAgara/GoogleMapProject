import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../components/Database'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const RentBoat = () => {
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

            <TouchableOpacity>
            <Entypo
                name="chevron-small-left"
                style={{
                  fontSize: 32,
                  color: COLORS.backgroundMedium,
                  padding:12,
                  borderRadius:7,
                  backgroundColor:COLORS.backgroundLight,
                  margin:15,

                }}
              />
            </TouchableOpacity>

            <TouchableOpacity>
            <Entypo
                name="shopping-bag"
                style={{
                  fontSize: 32,
                  color: COLORS.backgroundMedium,
                  padding:12,
                  borderRadius:7,
                  backgroundColor:COLORS.backgroundLight,
                  margin:15,

                }}
              />
            </TouchableOpacity>


          </SafeAreaView>

      </ScrollView>
      
    </View>
  )
}

export default RentBoat

const styles = StyleSheet.create({})