import { TouchableOpacity,FlatList, StyleSheet,Image, Text, View } from 'react-native'
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import {Icon} from "react-native-elements";
import { useNavigation } from '@react-navigation/native'


const data = [
  {
    id:"123",
    location:"Home",
    icon:"home",
    destination:"123,Admiralty way lekki Lagos",
  },

  {
    id:"323",
    location:"Office",
    icon:"briefcase",
    destination:"31,oniru estate Victoria island",
  },

  {
    id:"333",
    location:"School",
    icon:"briefcase",
    destination:"University of lagos Akoka",
  },
];



const NavFavourites = () => {
  const navigation = useNavigation();
  return (
    <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
            <View style={[tw`bg-gray-200`, {height: 0.5 }]}/>
        )}
        renderItem={({item: { location, destination, icon}}) => (
            <TouchableOpacity style={tw`flex-row items-center p-5`}>
              <Icon
                style={tw`mr-4 rounded-md bg-gray-200 p-3`}
                name={icon}
                type="ionicon"
                color="white"
                size={18}
              />
              <View>
                <Text style={tw`font-semibold text-lg`}>{location}</Text>
                <Text style={tw`text-gray-500`}>{destination}</Text>
              </View>
              
            </TouchableOpacity>
        )}
      
    />
  );
};

export default NavFavourites

const styles = StyleSheet.create({})