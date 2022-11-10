import { StyleSheet, Text, View, SafeAreaView,Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env"
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from "../slices/navSlice";




const HomeScreen = () => {
  const dispatch = useDispatch();
  return (

    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`} >
        <Image
            style={{
                Width: 20,
                height: 20,
                marginBottom:20,
                resizeMode:"contain",
            }}
            source={{
                uri:"https://emekaagara.com/wp-content/uploads/2022/10/NavR-7.png",
            }}
        />

        <GooglePlacesAutocomplete
          placeholder='Select your current loacation ?'
          styles={{
            container:{
              flex:0,
            },
            textInput:{
              fontSize:20,
            },
          }}
          onPress={(data, details = null) => {
            dispatch(setOrigin({
              location: details.geometry.location,
              description: data.description
            }))
            console.log(data);
            console.log(details);
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key:GOOGLE_MAPS_APIKEY,
            language:"en",
          }}
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
        
        /> 
        
        <NavOptions />
       
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen

const styles = StyleSheet.create({})