import { View, Text, TouchableOpacity, ScrollView, FlatList, Modal } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Music from "../components/Music";
import DbMusic from "../../DbMusic";
import ModalMusic from "../components/ModalMusic";
import CurrentMusic from "../components/CurrentMusic";
import { useDispatch, useSelector } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Albums from "../components/Albums";

const HomeScreen = ({ navigation }) => {
 const [music, setMusic]=useState([])
 const [albums, setAlbums]=useState([])
 const [gretting, setGretting]=useState("")

 const datas = DbMusic.find(data => data.type==="music")
 const data = datas.music
 const datasAlbum = DbMusic.find(data => data.type==="albums"&&data.album)
 const AlbumDatas = datasAlbum.album

 
 
useEffect(()=>{
setMusic(data)
setAlbums(AlbumDatas)

let hours = new Date().getHours()

const currentHours = ()=>{
  if(hours >= 16 ){
    setGretting("Good Afternoon")
  }else{
    setGretting("Good Morning")
  }
}
currentHours()
},[])
const currentMusicId = useSelector((state) => state.music.idMusic);

// console.log(albums);


  return (
    <SafeAreaView >
      <View className="mt-10 relative">
        <View className="flex-row justify-between items-center mx-4">
          <View>
            <Text className="text-xl font-bold">{gretting}</Text>
          </View>
          <View className="flex-row justify-between gap-5 items-center mx-2">
            <TouchableOpacity>
              <SimpleLineIcons name="bell" size={30} />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons name="progress-clock" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("profile")}>
              <AntDesign name="setting" size={30} />
            </TouchableOpacity>
          </View>
        </View>
<ScrollView showsVerticalScrollIndicator={false}>

        <View className="mt-5">
        <Text className="text-xl font-bold -mb-4 mx-4">Songs you may like</Text>
        <FlatList
        data={music}
        horizontal={true}
        renderItem={({ item }) => (
         <View>
            <Music
            img={item.img}
            subtitle={item?.titleMusic}
            artist={item?.artist}
            nav={()=>navigation.navigate("modal",{item:{link:item.link, img:item.img, subtitle:item.titleMusic, artist:item.artist,id:item.id }})}
          />
         </View>
        )}
       
        />
        </View>
        <View className="mt-5">
        <Text className="text-xl font-bold -mb-4 mx-4">Your favoris songs</Text>
        <FlatList
        data={music}
        horizontal={true}
        renderItem={({ item }) => (
           <Music
            img={item.img}
            subtitle={item?.titleMusic}
            artist={item?.artist}
            nav={()=>navigation.navigate("modal",{item:{link:item.link, img:item.img, subtitle:item.titleMusic, artist:item.artist }})}
          />
        )}
       
        />
        </View>
        <View className="mt-5">
        <Text className="text-xl font-bold -mb-4 mx-4">Albums</Text>
        <FlatList
        data={albums}
        horizontal={true}
        renderItem={({ item }) => (
           <Music
            img={item.img}
            subtitle={item?.titleAlbum}
            artist={item?.artist}
            nav={()=>navigation.navigate("album", {item})}
          />
        )}
       
        />
        </View>

        <View className="mt-5">
        <Text className="text-xl font-bold -mb-4 mx-4">Your favoris artists </Text>
        <FlatList
        data={music}
        horizontal={true}
        renderItem={({ item }) => (
           <Music
            img={item.img}
            artists
            text
            subtitle={item?.titleMusic}
            artist={item?.artist}
            nav={()=>navigation.navigate("artist",{item})}
          />
        )}
       
        />
        </View>
</ScrollView>
      </View>
      <>
      {currentMusicId && (
        <View className="absolute">
          <CurrentMusic />
        </View>
      )}
    </>

    </SafeAreaView>
  );
};




// export default ArtistAlbums
export default HomeScreen
