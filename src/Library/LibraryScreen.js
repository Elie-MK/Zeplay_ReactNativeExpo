import { View, Text } from 'react-native'
import React from 'react'
import CurrentMusic from '../components/CurrentMusic'
import { useSelector } from 'react-redux';

const LibraryScreen = () => {
  const currentMusicId = useSelector((state) => state.music.idMusic);

  return (
    <View>
      <Text>LibraryScreen</Text>
      <>
      {currentMusicId && (
        <View className="absolute">
          <CurrentMusic />
        </View>
      )}
    </>
    </View>
  )
}

export default LibraryScreen