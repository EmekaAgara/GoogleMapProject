import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';

const Map = () => {
    const origin = useSelector(selectOrigin);


  return (
    <MapView
        style={tw`flex-1`}
        mapType='satellite'
        region={{
            // latitude: origin.location.lat,
            // longitude: origin.location.lng,
            // latitudeDelta: 0.015,
            // longitudeDelta: 0.0121,

            latitude: 31.2198,
            longitude: 121.4870,
            latitudeDelta: 0.000915,
            longitudeDelta: 0.0521,
        }}
    /> 
  )
}

export default Map

const styles = StyleSheet.create({})