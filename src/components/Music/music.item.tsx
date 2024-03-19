import React, { useState } from 'react';
import { FontAwesome } from "@expo/vector-icons";
import { Image, Text, View, TouchableHighlight } from "react-native";
import { TFileResponse } from '@/src/types/type';

const MusicItem = ({ props, onPlayEvent }: { props: TFileResponse, onPlayEvent: any }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
        onPlayEvent(`/audios/${props.path}`);
    }

    return (
        <View className="flex flex-row w-full mt-2 rounded-xl dark:!bg-dark-slate-900  p-2 ">
            <Image
                className="w-16 h-16 rounded-lg"
                source={{ uri: `https://picsum.photos/200/300?random=${props.alt}` }}
            />
            <View className="flex-1 flex-row justify-between items-center w-full ml-3">
                <View>
                    <Text className="text-lg font-semibold dark:text-gray-100 truncate max-w-xs">
                        {props.title}
                    </Text>
                    <Text className="text-sm font-light dark:text-gray-500">
                        {props.path}
                    </Text>
                </View>
                <View className="pr-4">
                    <TouchableHighlight onPress={handlePlayPause}>
                        <FontAwesome name={isPlaying ? "pause" : "play"} size={20} color={'white'} />
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    );
}

export default MusicItem;
