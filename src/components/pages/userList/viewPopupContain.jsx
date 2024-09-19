import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import moment from 'moment'


function ViewPopupContain({user}) {
  return (
    <>
      {user && (<Card sx={{ borderRadius: '10px', border: '1px solid white' }}>
        <Box sx={{ width: '100%', height: '30%', backgroundImage: th => `url(${th.backgroundImage.user.coverBackground})`,backgroundSize: 'cover', backgroundPosition: 'center', mb: 5 }}>
          <Box sx={{ width: '100%', transform: 'translateX(50%)' }}>
            <Box sx={{ width: '30%', aspectRatio: '1/1', backgroundColor: 'transparent', zIndex: 2, borderRadius: '50%', border: th => `5px solid ${th.palette.primary.main}`, transform: 'translateX(-50%) translateY(20%)' }}>
              <Avatar src={user.avatar} sx={{ width: '100%', height: '100%' }}></Avatar>
            </Box>
          </Box>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }} gutterBottom>{user.name}</Typography>
        </Box>
        <CardContent sx={{ backgroundColor: (th) => th.palette.background.page }} >
          <FormControl fullWidth sx={{ marginBottom: 2 }}>
            <TextField color="primary" label="User Type" variant="standard" inputProps={{ style: { fontWeight: 'bold' } }} InputLabelProps={{ style: { fontWeight: 'bold' } }} sx={{ "& .MuiInputBase-input.Mui-disabled": { WebkitTextFillColor: (th) => th.palette.text.primary }, "& .MuiFormLabel-root.Mui-disabled": { WebkitTextFillColor: (th) => th.palette.text.primary } }} disabled defaultValue={user.userType} />
          </FormControl>
          <FormControl fullWidth sx={{ marginBottom: 2 }}>
            <TextField color="primary" label="Phone Number" variant="standard" inputProps={{ style: { fontWeight: 'bold' } }} InputLabelProps={{ style: { fontWeight: 'bold' } }} sx={{ "& .MuiInputBase-input.Mui-disabled": { WebkitTextFillColor: (th) => th.palette.text.primary }, "& .MuiFormLabel-root.Mui-disabled": { WebkitTextFillColor: (th) => th.palette.text.primary } }} disabled defaultValue={user.phoneNumber} />
          </FormControl>
          <FormControl fullWidth sx={{ marginBottom: 2 }}>
            <TextField color="primary" label="Gender" variant="standard" inputProps={{ style: { fontWeight: 'bold' } }} InputLabelProps={{ style: { fontWeight: 'bold' } }} sx={{ "& .MuiInputBase-input.Mui-disabled": { WebkitTextFillColor: (th) => th.palette.text.primary }, "& .MuiFormLabel-root.Mui-disabled": { WebkitTextFillColor: (th) => th.palette.text.primary } }} disabled defaultValue={user.gender} />
          </FormControl>
          <FormControl fullWidth sx={{ marginBottom: 2 }}>
            <TextField color="primary" label="Birthday" variant="standard" inputProps={{ style: { fontWeight: 'bold' } }} InputLabelProps={{ style: { fontWeight: 'bold' } }} sx={{ "& .MuiInputBase-input.Mui-disabled": { WebkitTextFillColor: (th) => th.palette.text.primary }, "& .MuiFormLabel-root.Mui-disabled": { WebkitTextFillColor: (th) => th.palette.text.primary } }} disabled defaultValue={user.birthday ? moment(user.birthday).format('DD/MM/YYYY') : 'n/a'} />
          </FormControl>
        </CardContent>
      </Card>)}
    </>
  )
}

export default ViewPopupContain
