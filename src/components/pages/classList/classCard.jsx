import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';


import Divider from '@mui/material/Divider';

function ClassCard({ appclass }) {
    return (
        <>
            <Box sx={{
                width: '100%', boxShadow: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.3) 0px 4px 12px' : 'rgba(0, 0, 0, 0.3) 0px 4px 12px', borderRadius: 3,

            }}>
                <Box sx={{p: 2, backgroundColor: th => th.palette.mode === 'dark' ? th.palette.primary.dark : th.palette.primary.light, borderTopLeftRadius: 13, borderTopRightRadius: 13}}>
                    <Typography sx={{ fontWeight: 'bold' }}>{appclass.name}</Typography>
                </Box>
                <Divider />
                <Box sx={{p: 2}}>
                    <Box sx={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
                        <Box sx={{ zIndex: 2, }}>
                            <Avatar sx={{ width: 60, height: 60, border: th => `5px solid ${th.palette.mode === 'dark' ? th.palette.primary.dark : th.palette.primary.light}`, boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} alt='Logo' src={appclass.teacherAvatar}></Avatar>
                        </Box>
                        <Box sx={{ transform: 'translateX(-15px)', width: '100%', backgroundColor: th => th.palette.mode === 'dark' ? th.palette.primary.dark : th.palette.primary.light, borderRadius: 5, p: 1, boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
                            <Typography sx={{ pl: '25px', fontSize: '11px', fontStyle: 'italic' }}>Teacher</Typography>
                            <Typography sx={{ pl: '25px' }}>{appclass.teacherName}</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }}>

                        <Box sx={{ transform: 'translateX(15px)', width: '100%', backgroundColor: th => th.palette.mode === 'dark' ? th.palette.primary.dark : th.palette.primary.light, borderRadius: 5, p: 1, boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
                            <Typography sx={{ pr: '25px', textAlign: 'end', fontSize: '11px', fontStyle: 'italic' }}>Student</Typography>
                            <Typography sx={{ pr: '25px', textAlign: 'end' }}>{appclass.studentName}</Typography>
                        </Box>
                        <Box sx={{ zIndex: 2, }}>
                            <Avatar sx={{ width: 60, height: 60, border: th => `5px solid ${th.palette.mode === 'dark' ? th.palette.primary.dark : th.palette.primary.light}`, boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} alt='Logo' src={appclass.studentAvatar}></Avatar>
                        </Box>
                    </Box>
                </Box>

            </Box>
        </>
    )
}

export default ClassCard
