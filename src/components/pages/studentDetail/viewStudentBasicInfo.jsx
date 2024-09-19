import React from 'react'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import maleAvatar from '../../../asset/maleAvatar.png';
import moment from 'moment'

function ViewStudentBasicInfo() {
  return (
    <Box sx={{ display: 'flex', pt: 5, pb: 5, pr: 10, pl: 10 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pr: 10, }}>
        <Avatar src={maleAvatar} sx={{ width: '150px', height: '150px' }}></Avatar>
      </Box>
      <Box sx={{ backgroundColor: (th) => th.palette.background.page, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }} >
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <TextField color="primary" label="Nickname" variant="standard" inputProps={{ style: { fontWeight: 'bold' } }} InputLabelProps={{ style: { fontWeight: 'bold' } }} sx={{ "& .MuiInputBase-input.Mui-disabled": { WebkitTextFillColor: (th) => th.palette.text.primary }, "& .MuiFormLabel-root.Mui-disabled": { WebkitTextFillColor: (th) => th.palette.text.primary } }} disabled defaultValue="John Cena" />
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <TextField color="primary" label="Phone Number" variant="standard" inputProps={{ style: { fontWeight: 'bold' } }} InputLabelProps={{ style: { fontWeight: 'bold' } }} sx={{ "& .MuiInputBase-input.Mui-disabled": { WebkitTextFillColor: (th) => th.palette.text.primary }, "& .MuiFormLabel-root.Mui-disabled": { WebkitTextFillColor: (th) => th.palette.text.primary } }} disabled defaultValue="123456789" />
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <TextField color="primary" label="Gender" variant="standard" inputProps={{ style: { fontWeight: 'bold' } }} InputLabelProps={{ style: { fontWeight: 'bold' } }} sx={{ "& .MuiInputBase-input.Mui-disabled": { WebkitTextFillColor: (th) => th.palette.text.primary }, "& .MuiFormLabel-root.Mui-disabled": { WebkitTextFillColor: (th) => th.palette.text.primary } }} disabled defaultValue="Male" />
        </FormControl>
        <FormControl fullWidth sx={{ }}>
          <TextField color="primary" label="Birthday" variant="standard" inputProps={{ style: { fontWeight: 'bold' } }} InputLabelProps={{ style: { fontWeight: 'bold' } }} sx={{ "& .MuiInputBase-input.Mui-disabled": { WebkitTextFillColor: (th) => th.palette.text.primary }, "& .MuiFormLabel-root.Mui-disabled": { WebkitTextFillColor: (th) => th.palette.text.primary } }} disabled defaultValue={moment(new Date()).format('DD/MM/YYYY')} />
        </FormControl>
      </Box>
    </Box>
  )
}

export default ViewStudentBasicInfo
