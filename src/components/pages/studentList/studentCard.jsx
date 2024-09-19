import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { Link } from 'react-router-dom';

function StudentCard({ id, avatar, info, viewOnClick }) {
    return (
        <>
            <Box sx={{
                position: 'relative',
                display: 'flex', width: '100%', p: 1, boxShadow: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.3) 0px 4px 12px' : 'rgba(0, 0, 0, 0.3) 0px 4px 12px', borderRadius: 3,
                backgroundImage: th => `url(${th.backgroundImage.user.itemBackground})`,
                backgroundSize:'cover',
                borderRight: th => `8px solid ${th.palette.primary.main}`
            }}>
                <Box sx={{ pr: 2, pl: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <Avatar sx={{ borderRadius: '50%', width: 100, height: 100, mb: 1 }} alt='Logo' src={avatar}></Avatar>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                        <Tooltip title="More Detail">
                            <IconButton component={Link} to={`/process/students/${id}`} sx={{ border:'2px solid white', p: 0.5 ,mr: 1, backgroundColor: th => th.palette.primary.dark }} onClick={viewOnClick}>
                                <RemoveRedEyeIcon  sx={{ color: 'white', fontSize: '16px'}} />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%' }}>
                    <Typography variant="h6" gutterBottom>
                        {info.main}
                    </Typography>
                    {info.subs && info.subs.map((sub, index) => (<Chip sx={{ mb: 1 }} key={index} label={sub.label} color={sub.color} />))}
                </Box>
            </Box>
        </>

    )
}

export default StudentCard
