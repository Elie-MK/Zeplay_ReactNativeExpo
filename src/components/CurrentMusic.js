import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { MD3Colors, ProgressBar } from "react-native-paper";
import Feather from "react-native-vector-icons/Feather";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const CurrentMusic = ({artist,titleMusic,img, progress, starting }) => {
  const [play, setPlay] = useState(false);
 const navigation = useNavigation()

  return (


    <Pressable className="mt-[729px] absolute w-screen" >
      <View className="bg-gray-500 p-2  mx-3 opacity-95 rounded-2xl ">
        <View className="">
          <View className="flex-row gap-4 items-center">
            <Image
              resizeMode="content"
              style={{ borderRadius: 10 }}
              source={{
                uri: img,
                width: 50,
                height: 50,
              }}
            />
            <View className="p-1  flex-row items-center ">
              <View>
                <Text className=" text-white font-bold text-lg">
                  {titleMusic}
                </Text>
                <Text className="text-white font-light">{artist}</Text>
              </View>
              <View className="ml-40">
                <TouchableOpacity onPress={()=>setPlay(!play)}>
                  {starting?play ? (
                    <Feather name="pause" size={30} color={"white"} />
                  ) : (
                    <Feather name="play" size={30} color={"white"}  />
                  ):<Feather name="pause" size={30} color={"white"} />}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View className="">
          <ProgressBar progress={progress} theme={{ colors: { primary: "red" } }} />
        </View>
      </View>
    </Pressable>
  );
};

export default CurrentMusic;
