import { View, Text, Pressable, TouchableOpacity, ScrollView, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { Divider, Searchbar } from "react-native-paper";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import DbMusic from "../../DbMusic";
import Music from "./Music";

const SearchComponent = () => {
  const [option, setOption] = useState([])
  const [searchQuery, setSearchQuery] = useState("");
  const [music, setMusic]=useState([])

  const onChangeSearch = query => setSearchQuery(query);

  useEffect(()=>{
    const datasoption = DbMusic.find(data=>data.type=="searchoptions")
    setOption(datasoption.nameoption);

    const datas = DbMusic.find(data => data.type === "music")
    const data = datas.music
    setMusic(data)
  },[])


  return (
    <View>
      <View style={{ alignItems:"center"}}>
        <Searchbar
        style={{width:400, backgroundColor:"#c9c9c9"}}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <ScrollView className="my-4 mx-4">
    {
        option.map((item,index)=>(
            <>
            <TouchableOpacity className="my-1" index={item.id} style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
            <Text className="text-xl">{item.title}</Text>
            <MaterialIcons name="keyboard-arrow-right" size={30} />
          </TouchableOpacity>
          <Divider />
            </>
        ))
    }
    <View className="mt-8">
        <View className="flex-row justify-between ">
            <Text style={{fontSize:18}}>RECOMMENDED </Text>
            <TouchableOpacity>
            <Text style={{fontSize:18, fontWeight:"bold"}}>See All</Text>
            </TouchableOpacity>
        </View>
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
    <View className="mt-8">
        <View className="flex-row justify-between ">
            <Text style={{fontSize:18}}>NEW </Text>
            <TouchableOpacity>
            <Text style={{fontSize:18, fontWeight:"bold"}}>See All</Text>
            </TouchableOpacity>
        </View>
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
      </ScrollView>
    </View>
  );
};

export default SearchComponent;
