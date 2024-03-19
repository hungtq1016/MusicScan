import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react'
import { Text, View, TouchableOpacity, Pressable } from 'react-native'

const SearchLayout = () => {
  return (
    <View className='dark:bg-dark-slate-800 mt-2.5'>
      <Text className='text-lg font-semibold dark:text-gray-100'>Find Your Best Music</Text>
      <Link href="/search" asChild className='flex flex-row items-center dark:bg-dark-slate-900 rounded-lg px-3 mt-2.5 h-10'>
        <Pressable>
          <FontAwesome name="search" size={24} color={'#F3F4F6'} />
          <Text className='ml-2 dark:text-gray-100'>Search...</Text>
        </Pressable>
      </Link>
    </View>
  )
}

export default SearchLayout