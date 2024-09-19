import React from 'react';
import SearchAndFilterSection from "../components/shared/searchAndFilterSection"
import Grid from '@mui/material/Grid';
import ClassCard from '../components/pages/classList/classCard';

import Box from '@mui/material/Box';

import { Paper } from '@mui/material';
import maleAvatar from '../asset/maleAvatar.png'
import femaleAvatar from '../asset/femaleAvatar.png'



const searchData = {
  placeholder: 'Input class name/teacher name/student name',
  onChangeHandleDispatch: null
}

const classes = [
  {
    id: 1,
    name: 'Logic support',
    studentAvatar: maleAvatar,
    studentName: 'Nguyen Van Hary',
    teacherAvatar: femaleAvatar,
    teacherName: 'Mrs Nga',
  },
  {
    id: 2,
    name: 'Activity support',
    studentAvatar: maleAvatar,
    studentName: 'Nguyen Van Hary',
    teacherAvatar: maleAvatar,
    teacherName: 'Mr Duc',
  }, 
  {
    id: 3,
    name: 'Feeling control',
    studentAvatar: maleAvatar,
    studentName: 'Nguyen Van Hary',
    teacherAvatar: maleAvatar,
    teacherName: 'Mr Duc',
  }
]

function ClassList() {
  return (
    <>
      <Paper elevation={3} sx={{ pl: { xs: 1, sm: 1, md: 2 }, pr: { xs: 1, sm: 1, md: 2 }, pt: { xs: 1, sm: 1, md: 2 }, pb: { xs: 1, sm: 1, md: 2 } }}>
        <Box mb={2}>
          <SearchAndFilterSection isUseSearch={true} isUseFilter={false} searchData={searchData} />
        </Box>
        <Box mt={2}>
          <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 8, xl: 12 }}>
            {classes.map((appclass, index) => (
              <Grid item xs={4} sm={4} md={4} xl={3} key={index}>
                <ClassCard key={index} appclass={appclass} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Paper>

    </>
  )
}

export default ClassList
