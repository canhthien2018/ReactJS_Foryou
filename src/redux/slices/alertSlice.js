import { createSlice } from '@reduxjs/toolkit';
import userListSlice from '../slices/userListSlice';

export default createSlice({
    name: 'alert',
    initialState: {
        isOpen: false,
        type: '',
        content: ''
    },
    reducers: {
      open: (state,action) => {
        state.isOpen = true;
        state.type = action.payload.type;
        state.content = action.payload.content;
      },
      close: (state,action) => {
        state.isOpen = false;
        state.type = '';
        state.content = '';
      }
    },
    extraReducers: (builder) => {
        builder
        .addCase(userListSlice.actions.addUser, (state, action) => {
            state.isOpen = true;
            state.type = 'success';
            state.content = 'User is created successfully.';
        })
        .addCase(userListSlice.actions.updateUser, (state, action) => {
            state.isOpen = true;
            state.type = 'success';
            state.content = 'User is updated successfully.';
        })
    }
  });