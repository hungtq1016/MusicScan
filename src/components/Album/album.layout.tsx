import React from 'react'
import { Text, View, Dimensions } from 'react-native'
const AlbumLayout = () => {
    const width = Dimensions.get('window').width;

    return (
        <View className='dark:bg-dark-slate-800 mt-2.5'>
            <Text className='text-lg font-semibold dark:text-gray-100'>New Albums</Text>

        </View>
    )
}

export default AlbumLayout
