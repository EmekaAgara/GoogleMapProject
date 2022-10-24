import { TouchableOpacity,FlatList, StyleSheet,Image, Text, View } from 'react-native'
import React from 'react';
import tw from 'tailwind-react-native-classnames';


const data = [
  {
    id:"123",
    title: "Book a trip",
    image:"https://emekaagara.com/wp-content/uploads/2022/10/IMG_6727_2-removebg-preview.png",
    screen:"MapScreen",
  },
  {
    id:"456",
    title: "Book a private trip",
    image:"https://emekaagara.com/wp-content/uploads/2022/10/IMG_6733_2-removebg-preview-removebg-preview.png",
    screen:"PtripScreen",
  },
]

const NavOptions = () => {
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-100 m-2 w-40`} >
          <View>
            <Image
              style={{ width:120, height: 120, resizeMode:"contain" }}
              source={{ uri: item.image }}
            />
            <Text>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions

const styles = StyleSheet.create({})