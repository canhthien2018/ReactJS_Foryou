import React from 'react';
import SearchAndFilterSection from "../components/shared/searchAndFilterSection"
import Grid from '@mui/material/Grid';
import StudentCard from "../components/pages/studentList/studentCard";
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';

import { Button, Paper } from '@mui/material';

import { useSelector } from 'react-redux';
import { studentListSelector } from '../redux/selectors';
import userListSlice from '../redux/slices/userListSlice';

import Popup from '../components/shared/popup';
import CreatePopupContain from '../components/pages/studentList/createPopupContain';
import moment from 'moment'


const searchData = {
  placeholder: 'Input user name',
  onChangeHandleDispatch: userListSlice.actions.searchOnChange
}

function StudentList() {
  const studentList = useSelector(studentListSelector);
  const createPopupRef = React.useRef();
  const createHandle = () => {
    createPopupRef.current.open();
  }

  const calAge = (bitrthDay) => {
    if(!bitrthDay) return 'n/a'
    let bd = moment(bitrthDay);
    let currentDate = moment(new Date());
    let months = currentDate.diff(bd, 'months');
    let years = Math.floor(months/12);
    return years + ' years ' + (months - (years*12)) + ' months';
  }

  return (
    <>
      <Paper elevation={3} sx={{ pl: { xs: 1, sm: 1, md: 2 }, pr: { xs: 1, sm: 1, md: 2 }, pt: { xs: 1, sm: 1, md: 2 }, pb: { xs: 1, sm: 1, md: 2 } }}>
        <Box mb={2}>
          <SearchAndFilterSection isUseSearch={true} isUseFilter={false} searchData={searchData} />
        </Box>
        <Box>
          <Tooltip title="Create new user">
            <Button variant='contained' color='success' onClick={createHandle}>
              Create
            </Button>
          </Tooltip>
        </Box>
        <Box mt={2}>
          <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 8, xl: 12 }}>
            {studentList.map((student, index) => (
              <Grid item xs={4} sm={4} md={4} xl={3} key={index}>
                <StudentCard key={index} avatar={student.user.avatar} id={student.id}
                  info={{ main: student.user.name, subs: [{ color: 'info', label: student.nickName }, { color: 'success', label: calAge(student.user.birthday) }] }} />
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

      <Popup ref={createPopupRef}>
        <CreatePopupContain closePopup={() => createPopupRef.current.close()} />
      </Popup>

    </>
  )
}

export default StudentList
