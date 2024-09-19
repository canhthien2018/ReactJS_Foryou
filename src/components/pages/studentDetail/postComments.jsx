import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import { studentPostsSelector } from '../../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import studentPostSlice from '../../../redux/slices/studentPostSlice';
import moment from 'moment';

function PostComments({ postId, userName }) {
    const [comment, setComment] = React.useState('');
    const dispatch = useDispatch();

    const commentOnchanged = (val) => {
        setComment(val)
    }

    const commentHandle = () => {
        dispatch(studentPostSlice.actions.addComment({postId: postId, comment: {userName: userName, date: moment(new Date()).format("DD/MM/YYYY HH:mm"),content: comment}}));
        setComment('');
    }
    const comments = useSelector(studentPostsSelector).find(x => x.id === postId).comments;
    return (
        <Paper>
            <Box sx={{ pt: 2, pb: 2, mr: 2, ml: 2, borderBottom: th => `2px solid ${th.palette.mode === 'dark' ? th.palette.grey[900] : th.palette.grey[100]}` }}>
                <Typography variant='body1' sx={{ fontWeight: 'bold' }}>Comments</Typography>
            </Box>
            <Box sx={{
                maxHeight: '50vh', overflow: 'auto',
                '&::-webkit-scrollbar': {
                    width: '0.4em'
                },
                '&::-webkit-scrollbar-track': {
                    boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
                    webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: 'rgba(0,0,0,.1)',
                }
            }}>
                {comments && comments.map((comment, index) => (
                    <Box key={index} sx={{ p: 2, }}>
                        <Box sx={{ display: 'flex', width: '100%' }}>
                            <Box sx={{ mr: 1 }}>
                                <Avatar sx={{ bgcolor: 'green', mr: 0.5 }}>D</Avatar>
                            </Box>
                            <Box sx={{ borderRadius: 3, p: 1.5, backgroundColor: th => th.palette.backgroundLayout, width: '100%' }}>
                                <Box sx={{ display: 'flex', mb: 1 }}>
                                    <Box sx={{ flex: '1' }}>
                                        <Typography variant='body2' sx={{ fontWeight: 'bold' }}>{comment.userName}</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant='body2' sx={{ color: th => th.palette.grey[600] }}>{comment.date}</Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <Typography variant='body2' sx={{ color: th => th.palette.grey[600] }}>{comment.content}</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>

            <Box sx={{ pt: 2, pb: 2, mr: 2, ml: 2, borderTop: th => `2px solid ${th.palette.mode === 'dark' ? th.palette.grey[900] : th.palette.grey[100]}` }}>
                <Box sx={{ display: 'flex', width: '100%', alignItems: 'center' }}>
                    <TextField size='small' sx={{ width: '100%', mr: 1 }} placeholder="Write a comment..." variant="outlined"  value={comment} onChange={(e) => commentOnchanged(e.target.value)} />
                    <IconButton onClick={commentHandle}>
                        <SendIcon fontSize='small' />
                    </IconButton >
                </Box>
            </Box>

        </Paper>
    )
}

export default PostComments;
