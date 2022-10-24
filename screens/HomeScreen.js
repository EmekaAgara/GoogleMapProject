import { StyleSheet, Text, View, SafeAreaView,Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`} >
        <Image
            style={{
                Width: 20,
                height: 20,
                marginBottom:20,
                resizeMode:"contain",
            }}
            source={{
                uri:"https://emekaagara.com/wp-content/uploads/2022/10/NavR-7.png",
            }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen

const styles = StyleSheet.create({})