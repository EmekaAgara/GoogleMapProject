import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map';
import MapView, {Marker} from 'react-native-maps';
import { createStackNavigator } from '@react-navigation/stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import NavFavourites from '../components/NavFavourites';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const TrackBoat = () => {
  const Stack = createStackNavigator();
  const navigation = useNavigation();

  return (
    <View>

      <TouchableOpacity
        onPress={() => navigation.navigate("HomeScreen")}
        style={tw`bg-white absolute top-16 left-8 z-50 p-3 rounded-md shadow-lg`}
      >
      <Icon name='navigate-before'/>

      </TouchableOpacity>
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


export default TrackBoat

const styles = StyleSheet.create({})