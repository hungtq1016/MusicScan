import { createSlice } from '@reduxjs/toolkit';
import { TFileResponse } from '../types/type';

interface AudioState {
  audio: TFileResponse | null;
  audios: TFileResponse[];
  isFirstLoad: boolean;
}

const initialState: AudioState = {
  audios: [],
  audio: null,
  isFirstLoad: true,
};

export const audioSlice = createSlice({
  name: 'audio',
  initialState,
  reducers: {
    setAudio: (state, action) => {
      state.audio = action.payload;
      state.isFirstLoad = true;
    },

    setAudios : (state, action) => {
      state.audios = action.payload;
    },

    setFirstLoad: (state, action) => {
      state.isFirstLoad = action.payload;
    }
  },
});

// Export actions
export const { setAudio, setAudios, setFirstLoad } = audioSlice.actions;

// Export reducer
export default audioSlice.reducer;
