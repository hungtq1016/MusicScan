import * as React from 'react';
import { Dimensions, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import AlbumItem from './album.item';
 
const AlbumSlide = () => {
    const width = Dimensions.get('window').width;
    const COUNT = 3;

    const [isAutoPlay, setIsAutoPlay] = React.useState(true);
    
    const baseOptions = 
        ({
        vertical: false,
        width: width / COUNT,
        height: width / 2,
        style: {
            width: width,
        },
        } as const);
    return (
        <View style={{ flex: 1,backgroundColor:'red' }}>
            <Carousel
                {...baseOptions}
                loop
                autoPlay={isAutoPlay}
                autoPlayInterval={2000}
                data={[...new Array(12).keys()]}
                scrollAnimationDuration={1000}
                // onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index }) => (
                    <AlbumItem index={index}/>
                )}
            />
        </View>
    );
}
 
export default AlbumSlide;