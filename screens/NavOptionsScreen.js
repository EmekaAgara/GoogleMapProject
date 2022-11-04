import { TouchableOpacity,FlatList, StyleSheet,Image, Text, View } from 'react-native'
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import {Icon} from "react-native-elements";
import {useNavigation} from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';



const data = [
  {
    id:"123",
    title: "Book a trip",
    image:"https://emekaagara.com/wp-content/uploads/2022/10/IMG_6727_2-removebg-preview.png",
    screen:"BookTrip",
  },
  {
    id:"456",
    title: "Rent a Boat",
    image:"https://emekaagara.com/wp-content/uploads/2022/10/IMG_6728_7-removebg-preview-300x185.png",
    screen:"RentBoat",
  },
  {
    id:"789",
    title: "Track a Boat",
    image:"https://emekaagara.com/wp-content/uploads/2022/10/IMG_6733_2-removebg-preview-removebg-preview.png",
    screen:"TrackBoat",
  },
  {
    id:"124",
    title: "List my Boat",
    image:"https://emekaagara.com/wp-content/uploads/2022/10/IMG_6727_5-removebg-preview-300x197.png",
    screen:"ListBoat",
  },
]

const NavOptionsScreen = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  return (
    <FlatList
      data={data}
      // horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity 
          onPress={() => navigation.navigate(item.screen)}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-100 m-2 w-full rounded-md`}
          // disabled={!origin}
           >
          <View 
          // style={tw`${!origin && "opacity-10"}`}
          >
            <Image
              style={{ width:120, height: 120, resizeMode:"contain" }}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptionsScreen

const styles = StyleSheet.create({})