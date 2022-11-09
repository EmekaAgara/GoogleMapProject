import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { COLORS, Items } from '../components/Database'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'

const RentBoat = () => {
  const navigation = useNavigation();

  const [products, setProducts] = useState([])
  const [accessory, setAccessory] = useState([])

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });
  
    return unsubscribe;
  }, [navigation]);
  

  const getDataFromDB = () => {
    let productList = [];
    let accessoryList = [];
    for (let index = 0; index < Items.length; index++) {
      if(Items[index].category == 'product'){
        productList.push(Items[index]);
      } else if (Items[index].category == accessory) {
        accessoryList.push(Items[index]);
      }
    }

    setProducts(productList);
    setAccessory(accessoryList);
  };


  
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
         Wanna Rent a boat ?
        </Text>

        <Text style={{
          fontSize:14,
          color:COLORS.black,
          fontWeight:'400',
          letterSpacing:1,
          lineHeight:24,
        }}>
         Please Select your preffered boat below
        </Text>
        </View>
          <View style={{
            padding:16,
            flexDirection:'row',
            justifyContent:'space-between',
          }}>

          <View style={{
            flexDirection:'row',
            alignItems:'center',
          }}>
          <Text
            style={{
              fontSize:18,
              fontWeight:'500',
              letterSpacing:1,
            }}>
              Featured Boats
            </Text>
            <Text
              style={{
                fontSize:14,
                fontWeight:'400',
                opacity:0.5,
                marginLeft:10,
              }}>
                25
            </Text>
          </View>
          <Text
            style={{
              fontSize:14,
              color:COLORS.blue,
              fontWeight:'400',
            }}>
              More
            </Text>
        </View>
        <View>
          {products.map(data => {
            return <Text>{data.productName}</Text>;})}
        </View>
 
      </ScrollView>
      
    </View>
  )
}

export default RentBoat

const styles = StyleSheet.create({})