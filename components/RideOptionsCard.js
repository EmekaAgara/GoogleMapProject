import { StyleSheet, Text, View , SafeAreaView,TouchableOpacity, FlatList, Image, ScrollView} from 'react-native'
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
    title: "JetSki",
    multiplier: 1,
    image:"https://emekaagara.com/wp-content/uploads/2022/10/IMG_6728_2-removebg-preview.png"
  },

  {
    id:"Boat_id1",
    title: "Speed Boat",
    multiplier: 1.5,
    image:"https://emekaagara.com/wp-content/uploads/2022/10/IMG_6727-removebg-preview.png"
  },

  {
    id:"Boat_id2",
    title: "Yatch",
    multiplier: 2,
    image:"https://emekaagara.com/wp-content/uploads/2022/10/IMG_6728_7-removebg-preview.png"
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

const SURGE_CHARGE_RATE = 300;

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

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
          Distance - {travelTimeInformation?.distance.text} 
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
              <Text>Arrives in {travelTimeInformation?.duration.text}</Text>
            </View>
            <Text style={tw`text-xl`}>
              {new Intl.NumberFormat(undefined,{
                style:"currency",
                currency:"NGN",
                maximumFractionDigits: 0, 
                minimumFractionDigits: 0, 
                
              }).format(
                (travelTimeInformation?.duration.value *
                  SURGE_CHARGE_RATE * multiplier)/ 100
              )}
              
            
            
            </Text>
          </TouchableOpacity>
        )}
      />

      <View>
        <TouchableOpacity
        disabled={!selected}
        style={tw` bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}   
        >
          <Text style={tw`text-center rounded-lg text-white text-xl`}>Choose {selected?.title}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    

  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})