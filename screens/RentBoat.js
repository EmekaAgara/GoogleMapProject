import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { COLORS, Items } from '../components/Database'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import CustomButton from '../components/CustomButton'

const RentBoat = () => {
  const navigation = useNavigation();

  const [products, setProducts] = useState([]);
  const [accessory, setAccessory] = useState([]);

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
      } else if (Items[index].category == 'accessory') {
        accessoryList.push(Items[index]);
      }
    }

    setProducts(productList);
    setAccessory(accessoryList);
  };

  const ProductCard = ({data}) => {
    return (
      <TouchableOpacity
        onPress={()=>navigation.navigate("ProductInfo", {productID: data.id})}
        style={{
          width:'48%',
          marginVertical:14,
          // padding:'0.5%',
        }}>
        <View
        style={{
          width:'100%',
          height:180,
          borderRadius:7,
          backgroundColor:COLORS.backgroundLight,
          position:'relative',
          justifyContent:'center',
          alignItems:'center',
          marginBottom:'8%',
        }}>
          {data.isOff ? (
            <View
            style={{
              position:'absolute',
              width:'20%',
              height:'24%',
              backgroundColor: COLORS.green,
              top:0,
              left:0,
              borderTopLeftRadius:7,
              borderBottomRightRadius:7,
              alignItems:'center',
              justifyContent:'center'
            }}>
              <Text
                style={{
                  fontSize:12,
                  color:COLORS.white,
                  fontWeight:'bold',
                  letterSpacing:1,
                }}>
                {data.offPercentage}</Text>
            </View>
          ) : null}
          <Image
            source={data.ProductImage}
            style={{
              width:'100%',
              height:'100%',
              resizeMode:'stretch',
              borderRadius:2
            }}
          />
        </View>
        <Text 
          style={{
            fontWeight:'bold'
          }}
        
        >
          {data.productName}
        </Text>
        {data.category == 'accessory' ? (
          data.isAvailable ? (
            <View
              style={{
                flexDirection:'row',
                alignItems:'center',
              }}>
                <FontAwesome
                  name="location-arrow"
                  style={{
                    fontSize:12,
                    marginRight:6,
                    color: COLORS.green,
                  }}
                />
                <Text
                  style={{
                    fontSize:12,
                    color:COLORS.green,
                  }}>
                    Near you
                  </Text>
              </View>
          ) : null

        ) : null}
        <Text
          style={{
            color: COLORS.red,
          }}
        >₦ {data.productPrice}</Text>
      </TouchableOpacity>
    )
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

            <TouchableOpacity onPress={() => navigation.navigate('MyCart')}>
            <Entypo
                name="shopping-bag"
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
        <View
          style={{
            padding:16,

          }}>
          

          <View style={{
            flexDirection:'row',
            alignItems:'center',
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
        <View
          style={{
            flexDirection:'row',
            flexWrap:'wrap',
            justifyContent:'space-around',
          }}>

          {products.map(data => {
            return <ProductCard data={data} key={data.id} />;})}
        </View>

        
        </View>

        <View
          style={{
            padding:16,

          }}>
          

          <View style={{
            flexDirection:'row',
            alignItems:'center',
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
              Reccomended Boats
            </Text>
            <Text
              style={{
                fontSize:14,
                fontWeight:'400',
                opacity:0.5,
                marginLeft:10,
              }}>
                55
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
        <View
          style={{
            flexDirection:'row',
            flexWrap:'wrap',
            justifyContent:'space-around',
          }}>

          {accessory.map(data => {
            return <ProductCard data={data} key={data.id} />;})}
        </View>
        <CustomButton text="View More"type="secondary"/>
        </View>
      </ScrollView>
      
    </View>
  )
}

export default RentBoat

const styles = StyleSheet.create({})