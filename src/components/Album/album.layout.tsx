import React from 'react'
import { Text, View } from 'react-native'
import AlbumSlide from './album.slide'

const AlbumLayout = () => {
    return (
        <View className='dark:bg-dark-slate-800 mt-2.5'>
            <Text className='text-lg font-semibold dark:text-gray-100'>New Albums</Text>
            <AlbumSlide/>
        </View>
    )
}

export default AlbumLayout
