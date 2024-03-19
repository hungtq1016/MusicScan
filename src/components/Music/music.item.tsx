import React from 'react';
import { FontAwesome } from "@expo/vector-icons";
import { Image, Text, View, TouchableHighlight } from "react-native";
import { TFileResponse } from '@/src/types/type';
import { useDispatch } from 'react-redux'
import { setAudio } from '@/src/store/audio'

const MusicItem = ({ props }: { props: TFileResponse }) => {

    const dispatch = useDispatch()

    return (
        <TouchableHighlight className='rounded-xl dark:bg-dark-slate-900 p-2'
        onPress={() => dispatch(setAudio(props))} >
            <View className="flex flex-row w-full items-center">
                <Image
                    className="w-16 h-16 rounded-lg"
                    source={{ uri: `https://picsum.photos/200/300?random=${props.alt}` }}
                />
                <View className="flex-1 flex-row justify-between items-center w-full ml-3">
                    <View>
                        <Text numberOfLines={2} style={{ width: 230 }}
                        className="text-lg font-semibold dark:text-gray-100">
                            {props.title}
                        </Text>
                        <Text className="text-sm font-light dark:text-gray-500">
                            {props.alt}
                        </Text>
                    </View>
                    <View className="pr-4">
                        <FontAwesome name={'ellipsis-v'} size={20} color={'white'} />
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    );
}

export default MusicItem;
