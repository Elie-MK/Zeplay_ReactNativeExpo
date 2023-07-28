import { View, Text, Image, ScrollView, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";
import { Button } from "react-native";
import ModalMusic from "./ModalMusic";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Albums from "./Albums";


const Music = ({ gtitle, img, subtitle, artist, nav, artists, text, artistes, albums, navigation}) => {
  const [visible , setVisible]=useState(false)
  const modal = ()=>{
    setVisible(!visible)
    nav
  }



  
  return (
    <View className="mx-5">
      <View>
      <Text className="text-xl font-bold mb-4">{gtitle}</Text>
        <TouchableOpacity onPress={nav} >
        <Image
        style={{borderRadius:artists?100:null}}
          resizeMode="content"
          source={{
            uri:img,
            width: "120%",
            height: 150,
          }}
        />
        <View className="w-36">
          <Text className="text-sm font-extrabold">{artists?null:subtitle}</Text>
          <Text className="text-sm text-gray-600 " style={{fontWeight:text?"bold":null}}>{artist}</Text>
        </View>
        </TouchableOpacity>
      </View>
      <View>

        </View>   


    </View>
  );
};



export default Music;
