import { configureStore } from '@reduxjs/toolkit';
import mainLayoutReducer from './slices/mainLayoutSlice';
import userListReducer from './slices/userListSlice';
import studentListReducer from './slices/studentListSlice';
import studentPostsReducer from './slices/studentPostSlice';
import alertReducer from './slices/alertSlice';

const store = configureStore({
  reducer: {
    mainLayout: mainLayoutReducer.reducer,
    userList: userListReducer.reducer,
    alert: alertReducer.reducer,
    studentList: studentListReducer.reducer,
    studentPosts: studentPostsReducer.reducer
  },
});

export default store;