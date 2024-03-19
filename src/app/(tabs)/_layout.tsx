import React from 'react';

import { useSelector } from 'react-redux';
import BottomNavigation from '@/src/components/Inc/inc.bottom';
import MusicSticky from '@/src/components/Music/music.sticky';

export default function TabLayout() {

  const audio = useSelector((state:any) => state.audio.audio); 
  return (
    <>
      { audio && <MusicSticky />}
      <BottomNavigation/>
    </>
  );
}

