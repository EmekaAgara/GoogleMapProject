import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map';
import MapView, {Marker} from 'react-native-maps';

const BookTrip = () => {
  return (
    <View>
      <View style={tw`h-1/2 bg-gray-200`}>
        <Map/>
      </View>
      <View style={tw`h-1/2`}></View>
    </View>
  )
}

export default BookTrip

const styles = StyleSheet.create({})