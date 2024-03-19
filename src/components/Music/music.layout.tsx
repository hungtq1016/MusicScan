import Loop from '@/src/utils/components/component.loop';
import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import MusicItem from './music.item';
import { get } from '@/src/utils/helpers/helper.request';
import { TFileResponse, TPaginationResponse } from '@/src/types/type';
import { useDispatch } from 'react-redux';
import { setAudios } from '@/src/store/audio';

const MusicLayout = () => {
    const [data, setData] = useState<any[]>([]);
    const dispatch = useDispatch()
    const fetchData = async () => {
        const response = await get<any, TPaginationResponse<TFileResponse[]>>('/audios/page');
        setData(response?.data.data || []);
        dispatch(setAudios(response?.data.data || [])) 
        useDispatch
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <View className='dark:bg-dark-slate-800 mt-2.5'>
            <Text className='text-lg font-semibold dark:text-gray-100'>Recently Music</Text>
            <View className='flex' style={{gap:8}}>
                <Loop data={data}>
                    {({ item }) => (
                        <MusicItem props={item} key={item.id} />
                    )}
                </Loop>
            </View>
        </View>
    )
}

export default MusicLayout
