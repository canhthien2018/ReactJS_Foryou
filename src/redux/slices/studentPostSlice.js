import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
  name: 'studentPosts',
  initialState: {
    studentPosts: []
  },
  reducers: {
    addPost: (state, action) => {
      state.studentPosts.push(action.payload);
    },
    addComment: (state, action) => {
      const index = state.studentPosts.findIndex(x => x.id === action.payload.postId);
      if(index >= 0){
        state.studentPosts[index].comments.push(action.payload.comment);
      }
    },
    reactPost: (state, action) => {
      const index = state.studentPosts.findIndex(x => x.id === action.payload.postId);
      if(index >= 0){
        let isExistedInLove = state.studentPosts[index].loves.includes(action.payload.studentId);
        let isExistedInLike = state.studentPosts[index].likes.includes(action.payload.studentId);
        if(action.payload.react === "like"){
            if(isExistedInLove){
              state.studentPosts[index].loves = state.studentPosts[index].loves.filter(x => x !== action.payload.studentId);
            }
            if(!isExistedInLike){
              state.studentPosts[index].likes.push(action.payload.studentId);
            }
        }
        else if(action.payload.react === "love"){
          if(isExistedInLike){
            state.studentPosts[index].likes = state.studentPosts[index].likes.filter(x => x !== action.payload.studentId);
          }
          if(!isExistedInLove){
            state.studentPosts[index].loves.push(action.payload.studentId);
          }
        }
        else{
          if(isExistedInLike){
            state.studentPosts[index].likes = state.studentPosts[index].likes.filter(x => x !== action.payload.studentId);
          }
          if(isExistedInLove){
            state.studentPosts[index].loves = state.studentPosts[index].loves.filter(x => x !== action.payload.studentId);
          }
        }
      }
    }
  },
});