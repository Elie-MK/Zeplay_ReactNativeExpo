import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Button,
  Pressable,
  SafeAreaView,
  Share,
} from "react-native";
import React, { useState, useEffect } from "react";
import {
  Modal,
  Portal,
  PaperProvider,
  ProgressBar,
  MD3Colors,
} from "react-native-paper";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Audio } from "expo-av";
import { Icon, Slider } from "@rneui/base";
import { useDispatch, useSelector } from "react-redux";
import { setMusicId, clearMusicId } from "../../redux/redux";
import { useContext } from "react";
import { Player } from "../PlayerContext";
import CurrentMusic from "./CurrentMusic";

const ModalMusic = ({ route, navigation }) => {
  const [play, setPlay] = useState(false);
  const [start, setStart] = useState(true);
  const { currentTrack, setCurrentTrack } = useContext(Player);

  const { item } = route?.params;
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);
  const [currentMusic, setCurrentMusic] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.music);

  console.log(state);

  //  console.log(item);
  useEffect(() => {
    const updatePosition = setInterval(async () => {
      if (sound) {
        const { positionMillis, durationMillis } = await sound.getStatusAsync();
        setDuration(durationMillis);
        setPosition(positionMillis);
      }
    }, 1000);

    return () => clearInterval(updatePosition);
  }, [sound]);

  const calculateProgress = (current) => {
    let progress = position / duration;
    return progress;
  };

  // console.log(calculateProgress(8));

  const togglePlayback = async () => {
    try {
      if (sound) {
        if (isPlaying) {
          await sound.pauseAsync();
          setStart(sound.pauseAsync(start))
        } else {
          await sound.playAsync();
          setStart(sound.playAsync(!start))
        }
        setCurrentTrack(isPlaying);
        if(setStart(start)){
          setPlay(!play);
        }
        setIsPlaying(!isPlaying);
        setPlay(!play);cl
        // state.stateMusic == true
      } else {
        const { sound: newSound } = await Audio.Sound.createAsync(
          { uri: item?.link },
          { shouldPlay: true }
        );
        setSound(newSound);
        set
        setCurrentTrack(!isPlaying);
        setIsPlaying(true);
        setPlay(!play);
        if (newSound.length > 0) {
          setCurrentMusic(newSound);
          await play(newSound);
        }
      }
    } catch (error) {
      console.log("Error toggling playback:", error);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = ((time % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `${item.link}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <SafeAreaView>
      <View className="mx-5 -mb-20 mt-5">
        <View className="flex-row justify-between">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="keyboard-arrow-left" size={40} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onShare}>
            <AntDesign name="sharealt" size={30} />
          </TouchableOpacity>
        </View>
      </View>
      <View className="mt-52">
        <View className="items-center -mt-20">
          <Image
            resizeMode="content"
            source={{
              uri: item?.img,
              width: "80%",
              height: 300,
            }}
          />
          <View className=" w-1/2 ">
            <View className="">
              <Text className="text-3xl my-5 w-screen items-center">
                {item?.subtitle}
              </Text>
              <Text className="text-xl text-center text-gray-500">
                {item?.artist}
              </Text>
              <View>
                <Text className="text-xl text-center text-gray-500 -mb-5 mt-4">
                  {formatTime(position)} / {formatTime(duration)}
                </Text>
                <View className="mt-10">
                  <Slider
                    value={
                      position ? calculateProgress(position / duration) : null
                    }
                    // onValueChange={position ? calculateProgress(position / duration) : null}
                    // maximumValue={duration}
                    // minimumValue={position}
                    allowTouchTrack
                    trackStyle={{ height: 5, backgroundColor: "transparent" }}
                    thumbStyle={{
                      height: 20,
                      width: 20,
                      backgroundColor: "transparent",
                    }}
                  />
                </View>
              </View>
              <View className="flex-row justify-between mt-14 ">
                <TouchableOpacity>
                  <AntDesign name="stepbackward" size={50} />
                </TouchableOpacity>
                <TouchableOpacity onPress={togglePlayback}>
                  {!play ? (
                    <FontAwesome name="play" size={50} />
                  ) : (
                    <FontAwesome name="stop" size={50} />
                  )}
                </TouchableOpacity>
                <TouchableOpacity>
                  <AntDesign name="stepforward" size={50} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
      {currentTrack && (
        <View className="absolute">
          <CurrentMusic
            artist={item?.artist}
            titleMusic={item?.subtitle}
            img={item?.img}
            starting={()=>setStart(!start)}
            progress={position ? calculateProgress(position / duration) : null}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default ModalMusic;
