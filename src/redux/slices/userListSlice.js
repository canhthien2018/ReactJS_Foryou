import { createSlice } from '@reduxjs/toolkit';

import users from '../../mockdatas/users';

export default createSlice({
  name: 'userList',
  initialState: {
    userList: users,
    filters:{
        search: '',
        userTypes: [],
        statuses: []
    }
  },
  reducers: {
    addUser: (state, action) => {
      state.userList.push(action.payload);
    },
    updateUser: (state, action) => {
        const index = state.userList.findIndex(x => x.id === action.payload.id);
        if(index >= 0){
            state.userList[index] = action.payload;
        }
    },
    searchOnChange: (state, action) => {
      state.filters.search = action.payload;
    },
    userTypeFilterOnChange: (state, action) => {
      state.filters.userTypes = action.payload;
    },
    statusFilterOnChange: (state, action) => {
      state.filters.statuses = action.payload;
    },
  },
});