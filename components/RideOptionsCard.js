import { StyleSheet, Text, View , SafeAreaView,TouchableOpacity, FlatList, Image} from 'react-native'
import React, { useState } from 'react'
// import { TouchableOpacity } from 'react-native-gesture-handler's
import { Button, Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectTravelTimeInformation } from '../slices/navSlice'


const data = [
  {
    id:"Boat_id",
    title: "Boat1",
    multiplier: 1,
    image:"https://emekaagara.com/wp-content/uploads/2022/10/IMG_6728_6-removebg-preview-300x258.png"
  },

  {
    id:"Boat_id1",
    title: "Boat2",
    multiplier: 1.5,
    image:"https://emekaagara.com/wp-content/uploads/2022/10/IMG_6728_5-removebg-preview-300x183.png"
  },

  {
    id:"Boat_id2",
    title: "Boat3",
    multiplier: 2,
    image:"https://emekaagara.com/wp-content/uploads/2022/10/IMG_6728_3-removebg-preview-300x158.png"
  },

  // {
  //   id:"Boat_id3",
  //   title: "Boat3",
  //   multiplier: 2,
  //   image:"https://emekaagara.com/wp-content/uploads/2022/10/IMG_6728_2-removebg-preview.png"
  // },

  // {
  //   id:"Boat_id4",
  //   title: "Boat4",
  //   multiplier: 2.3,
  //   image:"https://emekaagara.com/wp-content/uploads/2022/10/IMG_6728_4-removebg-preview-252x300.png"
  // },
  

  // {
  //   id:"Boat_id5",
  //   title: "Boat9",
  //   multiplier: 2,
  //   image:"https://emekaagara.com/wp-content/uploads/2022/10/IMG_6727-removebg-preview.png"
  // },


  // {
  //   id:"Boat_id6",
  //   title: "Boat3",
  //   multiplier: 2,
  //   image:"https://emekaagara.com/wp-content/uploads/2022/10/IMG_6728_7-removebg-preview.png"
  // },

  // {
  //   id:"Boat_id7",
  //   title: "Boat4",
  //   multiplier: 2.3,
  //   image:"https://emekaagara.com/wp-content/uploads/2022/10/IMG_6727_5-removebg-preview.png"
  // },

]

const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const setTravelTimeInformation = useSelector(selectTravelTimeInformation);

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={tw`absolute top-3 left-5 z-50 p-3 rounded-md`}
        >
          <Icon name='chevron-left' type='fontawesome' />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>
          Select an option 
        </Text> 
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: {id, title, multiplier, image}, item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row justify-between items-center px-10 ${
              id === selected?.id && "bg-gray-100"
            }`}
          >
            <Image
              style={{
                width:100,
                height:100,
                resizeMode:"contain",
              }}
              source={{uri: image}}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>Travel time...</Text>
            </View>
            <Text style={tw`text-xl`}>N1000</Text>
          </TouchableOpacity>
        )}
      />

      <View>
        <TouchableOpacity
        disabled={!selected}
        style={tw` bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}   
        >
          <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>

  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})