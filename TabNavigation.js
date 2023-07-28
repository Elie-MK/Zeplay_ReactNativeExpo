import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/homeScreen/HomeScreen";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import SearchScreen from "./src/Search/SearchScreen";
import LibraryScreen from "./src/Library/LibraryScreen";
import ModalMusic from "./src/components/ModalMusic";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Albums from "./src/components/Albums";
import ArtistComponent from "./src/components/ArtistComponent";


const Stack = createNativeStackNavigator()

const HomeStack = ()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{
        headerShown:false
      }} />
      <Stack.Screen name="album" component={Albums} options={{
        headerShown:false
      }} />
      <Stack.Screen name="artist" component={ArtistComponent} />
    </Stack.Navigator>
  )
}



const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "black",
          marginLeft: 10,
          marginRight: 10,
          marginBottom: 10,
          borderRadius: 20,
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
        },
        tabBarIconStyle:{
            marginBottom:-20
        }, 
        tabBarLabelStyle:{
            marginBottom:-10
        },
        tabBarActiveTintColor: "white",
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeStack}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" color={color} size={25} />
          ),
        }}
      />

      <Tab.Screen
        name="search"
        component={SearchScreen}
        options={{
          tabBarLabel: "Search",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="search1" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="library"
        component={LibraryScreen}
        options={{
          tabBarLabel: "Library",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="library-music" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};


export default TabNavigation;
