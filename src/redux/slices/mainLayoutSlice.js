import { createSlice } from '@reduxjs/toolkit';
import { Theme } from '../../constants/mainLayout';

export default createSlice({
  name: 'mainLayout',
  initialState: {
    isOpenSideBar: false,
    isDarkMode: false,
    theme: Theme.Purple
  },
  reducers: {
    toggleSideBar: (state, action) => {
      state.isOpenSideBar = action.payload;
    },
    toggleSwitchMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    selectTheme: (state, action) => {
      state.theme = action.payload;
    }
  },
});