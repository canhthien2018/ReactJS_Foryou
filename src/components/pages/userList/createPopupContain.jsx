import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import dayjs from 'dayjs';
import maleAvatar from '../../../asset/maleAvatar.png';
import femaleAvatar from '../../../asset/femaleAvatar.png'
import { useDispatch } from 'react-redux';
import userListSlice from '../../../redux/slices/userListSlice';

function CreatePopupContain({closePopup}) {
    const [user, setUser] = useState({
        name: '',
        avatar: maleAvatar,
        userType: 'Student',
        phoneNumber: '',
        gender: 'Male',
        birthday: '',
        status: 'Active'
    })

    const dispatch = useDispatch();

    const createHandle = () => {
        let createdUser = {...user, id: new Date().getTime()}
        dispatch(userListSlice.actions.addUser(createdUser))
        closePopup();
    }

    const nameOnchange = (val) => {
        setUser(prev => {return {...prev, name: val}});
    }

    const userTypeOnchange = (val) => {
        setUser(prev => {return {...prev, userType: val}});
    }

    const phoneNumberOnchange = (val) => {
        setUser(prev => {return {...prev, phoneNumber: val}});
    }

    const genderOnchange = (val) => {
        setUser(prev => {return {...prev, gender: val, avatar: val === 'Male' ? maleAvatar : femaleAvatar}});
    }

    const birthDayOnchange = (val) => {
        setUser(prev => {return {...prev, birthday: val?.toLocaleDateString()}});
    }


    return (
        <div>
            <Card sx={{ borderRadius: '10px', border: '1px solid white' }}>
                <Box sx={{ width: '100%', height: '30%', backgroundImage: th => `url(${th.backgroundImage.user.coverBackground})`,backgroundSize: 'cover', backgroundPosition: 'center', mb: 5 }}>
                    <Box sx={{ width: '100%', transform: 'translateX(50%)' }}>
                        <Box sx={{ width: '30%', aspectRatio: '1/1', backgroundColor: 'transparent', zIndex: 2, borderRadius: '50%', border: th => `5px solid ${th.palette.primary.main}`, transform: 'translateX(-50%) translateY(20%)' }}>
                            <Avatar src={user.avatar} sx={{ width: '100%', height: '100%'}}></Avatar>
                        </Box>
                    </Box>
                </Box>
                <CardContent sx={{ backgroundColor: (th) => th.palette.background.page }} >
                    <FormControl fullWidth sx={{ marginBottom: 2 }}>
                        <TextField color="primary" label="Name" variant="standard" required value={user.name} onChange={(e) => nameOnchange(e.target.value)}/>
                    </FormControl>
                    <FormControl required variant="standard" fullWidth sx={{ marginBottom: 2 }}>
                        <InputLabel id="user-type-dropdown-label">User Type</InputLabel>
                        <Select
                            labelId="user-type-dropdown-label"
                            label="User Type"
                            value={user.userType}
                            onChange={(e) => userTypeOnchange(e.target.value)}
                        >
                            <MenuItem value='Student'>Student</MenuItem>
                            <MenuItem value='Employee'>Employee</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth sx={{ marginBottom: 2 }}>
                        <TextField color="primary" label="Phone Number" variant="standard" required value={user.phoneNumber} onChange={(e) => phoneNumberOnchange(e.target.value)} />
                    </FormControl>
                    <FormControl required variant="standard" fullWidth sx={{ marginBottom: 2 }}>
                        <InputLabel id="gender-dropdown-label">Gender</InputLabel>
                        <Select
                            labelId="gender-dropdown-label"
                            label="User Type"
                            value={user.gender}
                            onChange={(e) => genderOnchange(e.target.value)}
                        >
                            <MenuItem value='Male'>Male</MenuItem>
                            <MenuItem value='Female'>Female</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth sx={{ marginBottom: 2 }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker slotProps={{ textField: { variant: "standard" } }} label="Birthday" format="DD/MM/YYYY" value={user.birthday ? dayjs(user.birthday) : null} onChange={(newValue) => birthDayOnchange(new Date(newValue.$d))} />
                        </LocalizationProvider>
                    </FormControl>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 1 }}>
                        <Button variant="contained" color="primary" type="submit" onClick={() => createHandle()}>Create</Button>
                    </Box>
                </CardContent>
            </Card>
        </div>
    )
}

export default CreatePopupContain
