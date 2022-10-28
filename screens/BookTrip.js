import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map';
import MapView, {Marker} from 'react-native-maps';
import { createStackNavigator } from '@react-navigation/stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import NavFavourites from '../components/NavFavourites';

const BookTrip = () => {
  const Stack = createStackNavigator();

  return (
    <View>
      <View style={tw`h-1/2 bg-gray-200`}>
        <Map/>
      </View>
      <View style={tw`h-1/2`}>
        
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown:false,
            }}
          />

          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown:false,
            }}
          />

          {/* <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown:false,
            }}
          /> */}
        </Stack.Navigator>
        
      </View>
    </View>
  )
}

export default BookTrip

const styles = StyleSheet.create({})