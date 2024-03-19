import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isVisible: false,
    content: null,
  },
  reducers: {
    openModal: (state, action) => {
      state.isVisible = true;
      state.content = action.payload;
    },
    closeModal: (state) => {
      state.isVisible = false;
      state.content = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
