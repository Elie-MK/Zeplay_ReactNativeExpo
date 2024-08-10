import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomePage from './src/WelcomePage';
import { StatusBar } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import SignUp from './src/auth/signUp';
import { useState,useEffect } from 'react';
import Signin from './src/auth/Signin';
import TabNavigation from './TabNavigation';
import ProfileScreen from './src/profile/ProfileScreen';
import ModalMusic from './src/components/ModalMusic';
import CurrentMusic from './src/components/CurrentMusic';
import { Provider } from 'react-redux';
import { store } from './redux/redux';
import { PlayerContext } from './src/PlayerContext';


export default function App() {
  const [changeState, setChangeState]=useState(false)


  const Stack = createNativeStackNavigator();
  const isRedStatusBar = true;

  
  return (
    <PlayerContext>

    <Provider store={store}>
    <KeyboardAvoidingView style={{ flex: 4 }}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <NavigationContainer>
         {isRedStatusBar ? (
        <StatusBar  barStyle="dark-content" />
      ) : (
        <StatusBar barStyle="light-content" />
      )}
      <Stack.Navigator initialRouteName=' ' >
      <Stack.Screen name=" " component={TabNavigation} options={{
          headerShown :false,
        }} />
      <Stack.Screen name="welcome" component={WelcomePage} options={{
          headerShown :false,
        }} />
        <Stack.Screen name="signup" component={SignUp} options={{
          headerShown :false,
        }} />
        <Stack.Screen name="signin" component={Signin} options={{
          headerShown :false,
        }} />
        <Stack.Screen name="profile" component={ProfileScreen} options={{
          headerShown :false,
        }} />
        <Stack.Screen name="modal" component={ModalMusic} options={{
          headerShown :false,
        }} />
        <Stack.Screen name="currentmusic" component={CurrentMusic} options={{
          headerShown :false,
        }} />

        
      </Stack.Navigator>
    </NavigationContainer>
    </KeyboardAvoidingView>
    </Provider>
    </PlayerContext>
  );
}
