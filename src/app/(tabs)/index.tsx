import Search from '@/src/components/Search/search.layout'
import Album from '@/src/components/Album/album.layout';
import Music from '@/src/components/Music/music.layout';
import { ScrollView, View } from 'react-native';

export default function TabOneScreen() {
  
  return (
    <View className='dark:bg-dark-slate-800 p-2 pb-24'>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Search/>
        <Album/>
        <Music />
      </ScrollView>
    </View>
  );
}
