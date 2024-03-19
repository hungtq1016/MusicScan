import Loop from '@/src/utils/components/component.loop';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Button, Text, View } from 'react-native'
import MusicItem from './music.item';
import { get } from '@/src/utils/helpers/helper.request';
import { TFileResponse, TPaginationResponse } from '@/src/types/type';
import { Audio } from "expo-av";
import { urlBuilder } from '@/src/utils/utils/util.url';

const MusicLayout = () => {
    const [data, setData] = useState<any[]>([]);

    const fetchData = async () => {
        const response = await get<any, TPaginationResponse<TFileResponse[]>>('/audios/page');
        setData(response?.data.data || []);
    }
    useEffect(() => {
        fetchData();
    }, []);

    const [sound, setSound] = useState<Audio.Sound | null>(null);

    async function playSound(path: string) {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync({uri: urlBuilder(path)});
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }

    useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    return (
        <View className='dark:bg-dark-slate-800 mt-2.5'>
            <Text className='text-lg font-semibold dark:text-gray-100'>Recently Music</Text>
            <View className='mt-2'>
                <Loop data={data}>
                    {({ item }) => (
                        <MusicItem onPlayEvent={(path:string) => playSound(path)}
                            props={item} key={item.id} />
                    )}
                </Loop>
            </View>
        </View>
    )
}

export default MusicLayout
