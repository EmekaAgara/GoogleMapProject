import { StyleSheet, Text, View , SafeAreaView,TouchableOpacity, FlatList, Image} from 'react-native'
import React from 'react'
// import { TouchableOpacity } from 'react-native-gesture-handler's
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/native'

const data = [
  {
    id:"Boat_id",
    title: "Boat1",
    multiplier: 1,
    image:"https://emekaagara.com/wp-content/uploads/2022/10/5027-sailing-boat.gif"
  },

  {
    id:"Boat_id1",
    title: "Boat2",
    multiplier: 1.5,
    image:"https://emekaagara.com/wp-content/uploads/2022/10/IMG_6728_6-removebg-preview-300x258.png"
  },

  {
    id:"Boat_id2",
    title: "Boat3",
    multiplier: 2,
    image:"https://emekaagara.com/wp-content/uploads/2022/10/IMG_6728_6-removebg-preview-300x258.png"
  },

  {
    id:"Boat_id3",
    title: "Boat4",
    multiplier: 2.3,
    image:"https://emekaagara.com/wp-content/uploads/2022/10/IMG_6728_6-removebg-preview-300x258.png"
  },

]

const RideOptionsCard = () => {
  const navigation = useNavigation();

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
          <TouchableOpacity>
            <Image
              style={{
                width:100,
                height:100,
                resizeMode:"contain",
              }}
              source={{uri: image}}
            />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>

  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})