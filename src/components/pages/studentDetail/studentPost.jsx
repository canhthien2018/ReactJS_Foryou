import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import Popup from '../../shared/popup';
import PostComments from './postComments';
import studentPostSlice from '../../../redux/slices/studentPostSlice';
import {studentPostsSelector} from '../../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';


function StudentPost({post}) {
    const [comment, setComment] = React.useState('')
    const [reactPost, setReactPost] = React.useState('');
    const commentsPopupRef = React.useRef();

    const updatedPost = useSelector(studentPostsSelector).find(x => x.id === post.id);

    React.useEffect(() => {
        const isAlrLiked = updatedPost.likes.includes(post.student.id);
        const isAlrLoved = updatedPost.loves.includes(post.student.id);
        if(isAlrLiked){
            setReactPost('like')
        }
        else if(isAlrLoved){
            setReactPost('love')
        }
        else{
            setReactPost('')
        }
    },[post, updatedPost])

    const dispatch = useDispatch();

    const handleReactPost = (event, reactValue) => {
        dispatch(studentPostSlice.actions.reactPost({studentId: post.student.id, react: reactValue, postId: post.id}));
    };

    const openCommentHandle = () => {
        commentsPopupRef.current.open();
    }

    const commentOnchanged = (val) => {
        setComment(val)
    }

    const commentHandle = () => {
        dispatch(studentPostSlice.actions.addComment({postId: post.id, comment: {userName: post.student.user.name, date: moment(new Date()).format("DD/MM/YYYY HH:mm"),content: comment}}));
        setComment('');
    }
    

    return (
        <>
            <Paper elevation={5} sx={{ pt: { xs: 2, lg: 3 }, pb: { xs: 1, lg: 3 }, pr: { xs: 0, lg: 3 }, pl: { xs: 0, lg: 3 }, borderRadius: 3, mb: 1 }}>
                <Box sx={{ pl: { xs: 1, lg: 0 }, display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Avatar sx={{ bgcolor: 'green', mr: 1 }}>D</Avatar>
                    <Box>
                        <Typography variant='body2' sx={{ fontWeight: 'bold' }}>{post.student.user.name}</Typography>
                        <Typography sx={{ fontSize: '12px', color: th => th.palette.grey[500] }}>{post.postDate}</Typography>
                    </Box>
                </Box>
                <Box sx={{ pr: { xs: 2, lg: 0 }, pl: { xs: 2, lg: 0 }, pt: 1, pb: 1, mb: 1 }}>
                    <Typography variant='body2'>{post.content}</Typography>
                </Box>
                <Box sx={{ mb: 1 }}>
                    {post.image && <img src={post.image} alt='post' width='100%' height='100%'></img>}
                </Box>
                <Box sx={{ mb: 2, pb: 2, display: 'flex', mr: 2, ml: 2, borderBottom: th => `2px solid ${th.palette.mode === 'dark' ? th.palette.grey[800] : th.palette.grey[200]}` }}>
                    <Box sx={{ display: 'flex', flex: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mr: 1 }}>
                            <Typography variant='body2' sx={{ fontWeight: 'bold', mr: 0.5, color: th => th.palette.error.main }}>{post.loves.length}</Typography>
                            <Box sx={{ backgroundColor: th => th.palette.error.main, borderRadius: '50%', display: 'flex', justifyItems: 'center', color: 'white', p: 0.5 }}>
                                <FavoriteIcon sx={{ fontSize: '12px' }} />
                            </Box>

                        </Box>
                        <Box sx={{ display: 'flex', color: th => th.palette.info.main, alignItems: 'center' }}>
                            <Typography variant='body2' sx={{ fontWeight: 'bold', mr: 0.5, color: th => th.palette.info.main }}>{post.likes.length}</Typography>
                            <Box sx={{ backgroundColor: th => th.palette.info.main, borderRadius: '50%', display: 'flex', justifyItems: 'center', color: 'white', p: 0.5 }}>
                                <ThumbUpAltIcon sx={{ fontSize: '12px' }} />
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                        <Typography variant='body2' sx={{ fontWeight: 'bold' }} onClick={openCommentHandle}>{post.comments.length} Comments</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', pr: 2, pl: 2, alignItems: 'center' }}>
                    <Box sx={{ mr: 1 }}>
                        <ToggleButtonGroup
                            value={reactPost}
                            exclusive
                            onChange={handleReactPost}
                            aria-label="text alignment"
                            color={reactPost === "like" ? "info" : "error"}
                        >
                            <ToggleButton value="love" aria-label="Love" size='small'>
                                <FavoriteIcon fontSize='small' />
                            </ToggleButton>
                            <ToggleButton value="like" aria-label="Like" size='small'>
                                <ThumbUpAltIcon fontSize='small' />
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Box>
                    <Box sx={{ display: 'flex', width: '100%', alignItems: 'center' }}>
                        <TextField size='small' sx={{ width: '100%', mr: 1 }} placeholder="Write a comment..." variant="outlined" value={comment} onChange={(e) => commentOnchanged(e.target.value)} />
                        <IconButton onClick={commentHandle}>
                            <SendIcon fontSize='small'/>
                        </IconButton >
                    </Box>
                </Box>
            </Paper>
            <Popup ref={commentsPopupRef}>
                {post && <PostComments postId={post.id} userName={post.student.user.name}></PostComments>}
            </Popup>
        </>

    )
}

export default StudentPost
