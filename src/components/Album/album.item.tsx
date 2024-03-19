import React from 'react'
import { View,Text } from 'react-native'

const AlbumItem = ({index}:any) => {
    return (
        <View
            style={{
                flex: 1,
                borderWidth: 1,
                justifyContent: 'center',
            }}
        >
            <Text style={{ textAlign: 'center', fontSize: 30 }}>
                {index}
            </Text>
        </View>
    )
}

export default AlbumItem