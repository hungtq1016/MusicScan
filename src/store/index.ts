import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@/src/store/counter'
import audioReducer from '@/src/store/audio'

export default configureStore({
  reducer: {
    counter: counterReducer,
    audio: audioReducer,
  }
})