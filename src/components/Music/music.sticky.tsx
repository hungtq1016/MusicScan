import { FontAwesome } from "@expo/vector-icons"
import { Image, Text, TouchableHighlight, View } from "react-native"
import { useSelector } from 'react-redux'
import { Audio } from 'expo-av';
import { urlBuilder } from '@/src/utils/utils/util.url';
import { useEffect, useState } from "react";
import { TFileResponse } from "@/src/types/type";
import { useDispatch } from 'react-redux'
import { setFirstLoad } from '@/src/store/audio'

const MusicSticky = () => {
    const dispatch = useDispatch()

    const [sound, setSound] = useState<Audio.Sound | null>(null);
    const [isPlaying, setIsPlaying] = useState(false); 

    const audio : TFileResponse = useSelector((state: any) => state.audio.audio)
    const isFirstLoad : boolean = useSelector((state: any) => state.audio.isFirstLoad)

    async function playSound() {
        const { sound } = await Audio.Sound.createAsync(
            { uri: urlBuilder(`/audios/${audio.path}`) },
            { shouldPlay: true },
            updatePlaybackStatus 
        );
        setSound(sound);
        setIsPlaying(true);
        dispatch(setFirstLoad(false))
        await sound.playAsync();
    }

    const updatePlaybackStatus = (status: any) => {
        if (!status.isLoaded) {
            // Xử lý trường hợp không tải được âm thanh
        } else {
            if (status.isPlaying) {
                setIsPlaying(true);
            } else {
                setIsPlaying(false);
            }
        }
    };

    const pauseSound = async () => {
        if (sound) {
            await sound.pauseAsync();
            setIsPlaying(false);
        }
    };

    const continueSound = async () => {
        if (sound) {
            await sound.playAsync();
            setIsPlaying(true);
        }
    };
    
    useEffect(() => {
        return sound
            ? () => {
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    return (
        <View className='p-2'
            style={{ position: 'absolute', bottom: 80, left: 0, right: 0, zIndex: 1 }}>
            <View className='bg-gray-100 dark:bg-slate-700 p-2 rounded-mdshadow'>
                <View className="flex flex-row w-full items-center">
                    <Image
                        className="w-12 h-12 rounded-lg"
                        source={{ uri: `https://picsum.photos/200/300?random=${audio.id}` }}
                    />
                    <View className="flex flex-1 flex-row justify-between items-center pl-2">
                        <View style={{width:250}} >
                            <Text numberOfLines={2}
                            className="text- font-semibold dark:text-gray-100 truncate max-w-xs">
                                {audio.title}
                            </Text>
                            <Text className="text-sm font-light dark:text-gray-300">
                                {audio.alt}
                            </Text>
                        </View>
                        <View className="pr-4">
                            {
                                isFirstLoad ? 
                                <TouchableHighlight onPress={playSound}>
                                    <FontAwesome name={"play"} size={20} color={'white'} />
                                </TouchableHighlight>
                                :
                                <TouchableHighlight onPress={isPlaying ? pauseSound : continueSound}>
                                    <FontAwesome name={isPlaying ? "pause" : "play"} size={20} color={'#f4f5f6'} className="stroke-red-600"/>
                                </TouchableHighlight>
                            }                        
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default MusicSticky