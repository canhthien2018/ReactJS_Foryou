import { createSelector } from '@reduxjs/toolkit';

export const mainLayoutSelector = (state) => state.mainLayout;

export const userListSelector = (state) => state.userList.userList;
export const filterForUserListSelector = (state) => state.userList.filters;
export const filteredUserListSelector = createSelector(
    userListSelector,
    filterForUserListSelector,
    (userList, filters) => {
        if(filters.search){
            userList = userList.filter(x => x.name.toLowerCase().includes(filters.search.toLowerCase()))
        }
        if(filters.userTypes && filters.userTypes.length > 0){
            userList = userList.filter(x => filters.userTypes.includes(x.userType))
        }
        if(filters.statuses && filters.statuses.length > 0){
            userList = userList.filter(x => filters.statuses.includes(x.status))
        }
        return userList
    }
)

export const alertSelector = (state) => state.alert;


export const studentListSelector = (state) => state.studentList.studentList;


export const studentPostsSelector = (state) => state.studentPosts.studentPosts;