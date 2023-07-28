import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import SearchComponent from '../components/SearchComponent'
import CurrentMusic from '../components/CurrentMusic'
import { useSelector } from 'react-redux'

const SearchScreen = () => {
  const currentMusicId = useSelector((state) => state.music.idMusic);

  return (
    <SafeAreaView>
      <SearchComponent/>
      <>
      {currentMusicId && (
        <View className="absolute">
          <CurrentMusic />
        </View>
      )}
    </>
    </SafeAreaView>
  )
}

export default SearchScreen