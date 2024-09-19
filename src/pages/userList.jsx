import React from 'react';
import SearchAndFilterSection from "../components/shared/searchAndFilterSection"
import { controlType } from '../constants/control'
import Grid from '@mui/material/Grid';
import UserCard from "../components/pages/userList/userCard";
import Box from '@mui/material/Box';
import Popup from '../components/shared/popup'
import ViewPopupContain from '../components/pages/userList/viewPopupContain';
import EditPopupContain from '../components/pages/userList/editPopupContain';
// import CreatePopupContain from '../components/pages/userList/createPopupContain';

import { Paper } from '@mui/material';

import { useSelector } from 'react-redux';
import { filteredUserListSelector } from '../redux/selectors';
import userListSlice from '../redux/slices/userListSlice';

const searchData = {
  placeholder: 'Input user name',
  onChangeHandleDispatch: userListSlice.actions.searchOnChange
}

const filterControls = [
  {
    type: controlType.multipleDropdown,
    label: 'Status',
    dataSource: [
      {
        label: 'Active',
        value: 'Active'
      },
      {
        label: 'Inactive',
        value: 'Inactive'
      }
    ],
    onChangeHandleDispatch: userListSlice.actions.statusFilterOnChange
  },
  {
    type: controlType.multipleDropdown,
    label: 'User Type',
    dataSource: [
      {
        label: 'Student',
        value: 'Student'
      },
      {
        label: 'Employee',
        value: 'Employee'
      }
    ],
    onChangeHandleDispatch: userListSlice.actions.userTypeFilterOnChange
  }
]



function UserList() {
  const [selectedUser, setSelectedUser] = React.useState(null);
  const userList = useSelector(filteredUserListSelector);



  // const createPopupRef = React.useRef();
  const viewPopupRef = React.useRef();
  const editPopupRef = React.useRef();

  const editHandle = (user) => {
    setSelectedUser(user);
    editPopupRef.current.open();
  }

  const viewHandle = (user) => {
    setSelectedUser(user);
    viewPopupRef.current.open();
  }

  return (
    <>
      <Paper elevation={3} sx={{ pl: { xs: 1, sm: 1, md: 2 }, pr: { xs: 1, sm: 1, md: 2 }, pt: { xs: 1, sm: 1, md: 2 }, pb: { xs: 1, sm: 1, md: 2 } }}>
        <SearchAndFilterSection isUseSearch={true} isUseFilter={true} searchData={searchData} filterControls={filterControls} />

        <Box mt={3}>
          <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 8, xl: 12 }}>
            {userList.map((user, index) => (
              <Grid item xs={4} sm={4} md={4} xl={3} key={index}>
                <UserCard key={index} avatar={user.avatar}
                  info={{ main: user.name, subs: [{ label: user.userType, color: 'info' }, { label: user.status, color: user.status === 'Active' ? 'success' : 'error' }] }}
                  viewOnClick={() => viewHandle(user)}
                  editOnClick={() => editHandle(user)} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Paper>


      {/* <BottomBarControl >
        <Box sx={{ display: 'flex', justifyContent: { xs: 'flex-end', sm: 'flex-end', md: 'center' }, alignItems: 'center', backgroundColor: th => th.palette.primary.dark, borderRadius: 2, width: '100%', p: 1 }}>
          <Tooltip title="Create new user">
            <IconButton sx={{ border: '2px solid white', p: 0.5, mr: 1 }} onClick={createHandle}>
              <AddIcon sx={{ color: 'white' }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Export data">
            <IconButton sx={{ border: '2px solid white', p: 0.5, mr: 1 }} >
              <FileDownloadIcon sx={{ color: 'white' }} />
            </IconButton>
          </Tooltip>
        </Box>
      </BottomBarControl> */}

      {/* <Popup ref={createPopupRef}>
        <CreatePopupContain closePopup={() => createPopupRef.current.close()} />
      </Popup> */}
      <Popup ref={viewPopupRef}>
        <ViewPopupContain user={selectedUser} />
      </Popup>
      <Popup ref={editPopupRef}>
        <EditPopupContain user={selectedUser} closePopup={() => editPopupRef.current.close()} />
      </Popup>
    </>
  )
}

export default UserList
