import {
    Image,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Animated,
    Easing,
    TouchableOpacity,
  } from 'react-native';

  import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';

  
  const {width, height} = Dimensions.get('screen');
  
  const SlideItem = ({item}) => {
    const translateYImage = new Animated.Value(40);
    const navigation = useNavigation();
  
    Animated.timing(translateYImage, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();

    return (
        
      <View style={styles.container}>
        <Animated.Image
          source={item.img}
          resizeMode="contain"
          style={[
            styles.image,
            {
              transform: [
                {
                  translateY: translateYImage,
                },
              ],
            },
          ]}
        />
  
        <View style={styles.content}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          {/* <Text style={styles.price}>{item.price}</Text> */}
        </View>


        <View>
        <TouchableOpacity
        style={tw` bg-black py-3 mb-28 px-32 rounded-md`}
        // onPress={() => navigation.navigate("SignInScreen")}
        // onPress={() => navigation.navigate("ConfirmEmailScreen")}
        // onPress={() => navigation.navigate("ForgotPasswordScreen")}
        onPress={() => navigation.navigate("NewPasswordScreen")}
        // onPress={() => navigation.navigate("SignUpScreen")}
        // onPress={() => navigation.navigate("HomeScreen")}   
        >
          <Text style={tw`text-center  text-white text-xl`}>Get Started</Text>
        </TouchableOpacity>
      </View>

        
      </View>
    );
  };
  
  export default SlideItem;
  
  const styles = StyleSheet.create({
    container: {
      width,
      height,
      alignItems: 'center',
    },
    image: {
        marginTop:200,
      flex: 0.6,
      width: '100%',
    },
    content: {
        marginTop:50,
      flex: 0.4,
      alignItems: 'center',
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#333',
    },
    description: {
      fontSize: 18,
      marginVertical: 12,
      color: '#232323',
      textAlign:'center',
      padding:10,
    },
    price: {
      fontSize: 32,
      fontWeight: 'bold',
    },
  });