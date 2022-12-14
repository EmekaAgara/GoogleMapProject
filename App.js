import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import BookTrip from './screens/BookTrip';
import RentBoat from './screens/RentBoat';
import TrackBoat from './screens/TrackBoat';
import ListBoat from './screens/ListBoat';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Slider from './components/Slider';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import ConfirmEmailScreen from './screens/ConfirmEmailScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import NewPasswordScreen from './screens/NewPasswordScreen';
import Amplify, {Auth} from 'aws-amplify';
import config from './src/aws-exports';
import MyCart from './screens/MyCart';
import ProductInfo from './screens/ProductInfo';
// import {withAuthenticator} from 'aws-amplify-react-native';
import { RootSiblingParent } from 'react-native-root-siblings';
import Successful from './screens/Successful';

Amplify.configure(config);

export default function App() {
  const Stack = createStackNavigator();
  return (
    <RootSiblingParent>

    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView 
            style={{flex:1}}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
          >
            <Stack.Navigator>

            <Stack.Screen
              name='Slider'
              component={Slider}
              options={{
                headerShown:false,
              }}
            />

            <Stack.Screen
              name='NewPasswordScreen'
              component={NewPasswordScreen}
              options={{
                headerShown:false,
              }}
            />

            <Stack.Screen
              name='SignInScreen'
              component={SignInScreen}
              options={{
                headerShown:false,
              }}
            />

            <Stack.Screen
              name='ConfirmEmailScreen'
              component={ConfirmEmailScreen}
              options={{
                headerShown:false,
              }}
            />


            <Stack.Screen
              name='ForgotPasswordScreen'
              component={ForgotPasswordScreen}
              options={{
                headerShown:false,
              }}
            />


            <Stack.Screen
              name='SignUpScreen'
              component={SignUpScreen}
              options={{
                headerShown:false,
              }}
            />


            <Stack.Screen
              name='HomeScreen'
              component={HomeScreen}
              options={{
                headerShown:false,
              }}
            />

            <Stack.Screen
              name='BookTrip'
              component={BookTrip}
              options={{
                headerShown:false,
              }}
            />

            <Stack.Screen
              name='RentBoat'
              component={RentBoat}
              options={{
                headerShown:false,
              }}
            />

              <Stack.Screen
              name='MyCart'
              component={MyCart}
              options={{
                headerShown:false,
              }}
            />

              <Stack.Screen
              name='ProductInfo'
              component={ProductInfo}
              options={{
                headerShown:false,
              }}
            />

            <Stack.Screen
              name='TrackBoat'
              component={TrackBoat}
              options={{
                headerShown:false,
              }}
            />

            <Stack.Screen
              name='ListBoat'
              component={ListBoat}
              options={{
                headerShown:false,
              }}
            />

              <Stack.Screen
              name='Successful'
              component={Successful}
              options={{
                headerShown:false,
              }}
            />
            
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
      
    </Provider>
    </RootSiblingParent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
