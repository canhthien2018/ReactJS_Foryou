import { createSlice } from '@reduxjs/toolkit';

import students from '../../mockdatas/students';


export default createSlice({
  name: 'studentList',
  initialState: {
    studentList: students,
  },
  reducers: {
    addStudent: (state, action) => {
      state.studentList.push(action.payload);
    },
  },
});