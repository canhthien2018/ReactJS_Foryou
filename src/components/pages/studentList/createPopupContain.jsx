import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import studentListSlice from '../../../redux/slices/studentListSlice';
import { userListSelector } from '../../../redux/selectors';
import Typography from '@mui/material/Typography';

function CreatePopupContain({ closePopup }) {
    const [student, setStudent] = useState({
        nickName: '',
        address: '',
        parentName: '',
        school: '',
        user: {
            id: 0
        },
        classes: [
            {
                id: 1,
                name: 'Logic Support',
                type: 'Personal',
                teacherName: 'Mrs Nga'
            },
            {
                id: 2,
                name: 'Activity Support',
                type: 'Personal',
                teacherName: 'Mr Duc'
            }
        ],
        assessment: [
            {
                name: 'Read',
                value: 50
            },
            {
                name: 'Write',
                value: 60
            },
            {
                name: 'Draw',
                value: 20
            },
            {
                name: 'Activity',
                value: 10
            }
        ]
    })

    const dispatch = useDispatch();

    const userList = useSelector(userListSelector).filter(x => x.userType === 'Student');

    const createHandle = () => {
        let createdStudent = { ...student, id: new Date().getTime() }
        dispatch(studentListSlice.actions.addStudent(createdStudent))
        closePopup();
    }

    const nickNameOnchange = (val) => {
        setStudent(prev => { return { ...prev, nickName: val } });
    }

    const addressOnchange = (val) => {
        setStudent(prev => { return { ...prev, address: val } });
    }

    const parentNameOnchange = (val) => {
        setStudent(prev => { return { ...prev, parentName: val } });
    }

    const schoolOnchange = (val) => {
        setStudent(prev => { return { ...prev, school: val } });
    }

    const userOnchange = (val) => {
        let selectedUser = userList.find(x => x.id === val);
        if (selectedUser) {
            setStudent(prev => { return { ...prev, user: selectedUser } });
        }
    }


    return (
        <>
            <Card sx={{ borderRadius: '10px', border: '1px solid white' }}>
                <Box sx={{ width: '100%', height: '30%', backgroundImage: th => `url(${th.backgroundImage.user.coverBackground})`, backgroundSize: 'cover', backgroundPosition: 'center', mb: 5 }}>
                    <Box sx={{ width: '100%', transform: 'translateX(50%)' }}>
                        <Box sx={{ width: '30%', aspectRatio: '1/1', backgroundColor: 'transparent', zIndex: 2, borderRadius: '50%', border: th => `5px solid ${th.palette.primary.main}`, transform: 'translateX(-50%) translateY(20%)' }}>
                            <Avatar src={student.user.avatar} sx={{ width: '100%', height: '100%' }}></Avatar>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }} gutterBottom>{student.user.name}</Typography>
                </Box>
                <CardContent sx={{ backgroundColor: (th) => th.palette.background.page }} >
                    <FormControl required variant="standard" fullWidth sx={{ marginBottom: 2 }}>
                        <InputLabel id="user-type-dropdown-label">User</InputLabel>
                        <Select
                            label="User Type"
                            value={student.user.id}
                            onChange={(e) => userOnchange(e.target.value)}
                        >
                            {userList.map((user, index) => (<MenuItem key={index} value={user.id}>{user.name}</MenuItem>))}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth sx={{ marginBottom: 2 }}>
                        <TextField color="primary" label="Nickname" variant="standard" required value={student.nickName} onChange={(e) => nickNameOnchange(e.target.value)} />
                    </FormControl>
                    <FormControl fullWidth sx={{ marginBottom: 2 }}>
                        <TextField color="primary" label="Address" variant="standard" required value={student.address} onChange={(e) => addressOnchange(e.target.value)} />
                    </FormControl>
                    <FormControl fullWidth sx={{ marginBottom: 2 }}>
                        <TextField color="primary" label="Parent name" variant="standard" required value={student.parentName} onChange={(e) => parentNameOnchange(e.target.value)} />
                    </FormControl>
                    <FormControl fullWidth sx={{ marginBottom: 2 }}>
                        <TextField color="primary" label="School" variant="standard" required value={student.school} onChange={(e) => schoolOnchange(e.target.value)} />
                    </FormControl>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 1 }}>
                        <Button variant="contained" color="primary" type="submit" onClick={() => createHandle()}>Create</Button>
                    </Box>
                </CardContent>
            </Card>
        </>
    )
}

export default CreatePopupContain
