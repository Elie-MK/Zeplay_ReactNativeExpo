import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Albums = ({ route, navigation }) => {
  const { item } = route.params;
  const [music, setMusic] = useState([]);
  useEffect(() => {
    setMusic(item.musics);
  });
// console.log(music);
  return (
    <SafeAreaView>
      <TouchableOpacity
        className="mx-5 mt-7"
        onPress={() => navigation.goBack()}
      >
        <MaterialIcons name="arrow-back-ios" size={24} />
      </TouchableOpacity>
      <View>
        <View className="items-center my-4" style={{ padding: 20 }}>
          <Image
            resizeMode="content"
            source={{
              uri: item.img,
              width: "80%",
              height: 260,
            }}
          />
        </View>
        <View className="mx-4">
          <View>
            <Text className="font-bold text-2xl">{item.titleAlbum}</Text>
          </View>
          <View className="my-2">
            <View className="flex-row items-center">
              <Image
                style={{ borderRadius: 20, marginRight: 10 }}
                resizeMode="content"
                source={{
                  uri: "https://cdns-images.dzcdn.net/images/cover/ba4b2b3d43f8d4598009cdffecc18cf0/500x500.jpg",
                  width: "10%",
                  height: 40,
                }}
              />
              <Text className="font-bold">{item.artist}</Text>
            </View>
            <View className="my-3">
              <Text>Album . {item.date}</Text>
            </View>
          </View>

          <ScrollView>
            {music.map((item) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("modal", {
                    item: {
                      link: item.link,
                      img: item.img,
                      subtitle: item.titleMusic,
                      artist: item.artist,
                      id: item.id,
                    },
                  })
                }
                className="flex-row items-center justify-between my-1 p-2 bg-gray-200"
              >
                <Text className="text-lg">{item.titleMusic}</Text>
                <TouchableOpacity>
                  <MaterialCommunityIcons name="dots-vertical" size={24} />
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Albums;
