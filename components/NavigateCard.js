import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import tw from 'tailwind-react-native-classnames'
import { GOOGLE_MAPS_APIKEY } from "@env"
import { useDispatch, Dispatch, dispatch } from 'react-redux'
import { setDestination } from "../slices/navSlice"
import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native-elements'
import NavFavourites from './NavFavourites'



const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 font-medium text-xl`}>Hello, Username</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            placeholder='Select your destination'
            styles={toInputBoxStyles}
            fetchDetails={true}
            returnKeyType={"search"}
            minLength={2}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location:details.geometry.location,
                 description:data.description,
                })
              );
              navigation.navigate("RideOptionsCard");
            }}

            enablePoweredByContainer={false}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language:"en",
            }}
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={400}
          />
          <NavFavourites/>

          <Button
              title="Next"
              buttonStyle={{ backgroundColor: 'rgba(0, 0, 0, 1)' }}
              containerStyle={{
                height: 50,
                width: 390,
                marginHorizontal: 20,
                marginVertical: 10,
              }}
              titleStyle={{
                color: 'white',
                marginHorizontal: 20,
              }}
              

              onPress={(data, details = null) => {
                
                navigation.navigate("RideOptionsCard");
              }}
            />
          
        </View> 
        
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
  container:{
    backgroundColor:"white",
    paddingTop:20,
    flex:0,
  },

  textInput: {
    backgroundColor:"#F6F6F6F6",
    borderRadius: 5,
    fontSize: 18,
  },

  textInputContainer:{
    paddingHorizontal:20,
    paddingBottom:0,
  }

})


