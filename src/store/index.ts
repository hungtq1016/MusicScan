import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@/src/store/counter'
import modalReducer from '@/src/store/modal'

export default configureStore({
  reducer: {
    counter: counterReducer,
    modal: modalReducer,
  }
})