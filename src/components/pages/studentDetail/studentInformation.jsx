import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import CakeIcon from '@mui/icons-material/Cake';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import SchoolIcon from '@mui/icons-material/School';
import LinearProgress from '@mui/material/LinearProgress';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import CollectionsIcon from '@mui/icons-material/Collections';
import StudentPost from './studentPost';
import moment from 'moment';
import {studentPostsSelector} from '../../../redux/selectors';
import studentPostSlice from '../../../redux/slices/studentPostSlice';
import { useSelector, useDispatch } from 'react-redux';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

function StudentInformation({ student }) {
    const [currentPost, setCurrentPost] = React.useState({image: '', content: ''})
    const dispatch = useDispatch();

    const contentPostChanged = (val) => {
        setCurrentPost(prev => {return {...prev,content: val}});
    }
    const handleChangeFile = (e) => {
        const file = e.target.files[0];
        if (file) {
            let imgSrc = URL.createObjectURL(file)
            setCurrentPost(prev => {return {...prev,image: imgSrc}});
          }
    }
    const posts = useSelector(studentPostsSelector).filter(x => x.student?.id === student?.id).sort((a, b) => b.id - a.id);;
    

    const postHandle = () => {
        const newPost = {...currentPost,id: new Date().getTime(),student: student,likes: [], loves: [], comments: [], postDate: moment(new Date()).format('DD/MM/YYYY HH:mm')}
        dispatch(studentPostSlice.actions.addPost(newPost));
        setCurrentPost({image: '', content: ''});
    }

    return (
        <Box sx={{ pl: { xs: 0, xl: 20 }, pr: { xs: 0, xl: 20 } }}>
            {student && (<>
                <Card sx={{ borderRadius: 3, border: '1px solid white', mb: 3 }}>
                    <Box sx={{ width: '100%', height: '200px', backgroundImage: th => `url(${th.backgroundImage.user.coverBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <Box sx={{ width: '100%', transform: { xs: 'translateX(50%) translateY(90%)', sm: 'translateX(50%) translateY(90%)', md: 'translateX(50px) translateY(130%)' } }}>
                            <Box sx={{  width: '120px', aspectRatio: '1/1', backgroundColor: 'transparent', zIndex: 2, transform: { xs: 'translateX(-50%) translateY(0%)', sm: 'translateX(-50%) translateY(0%)', md: 'translateX(0%) translateY(0%)' } }}>
                                <Avatar alt='Ava' src={student.user.avatar} variant="square" sx={{ width: '100%', height: '100%', border: th => `3px solid ${th.palette.primary.main}` }}></Avatar>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ ml: { md: 22 }, p: { md: 2 }, pt: { xs: 5, sm: 5, md: 1 }, textAlign: { xs: 'center', sm: 'center', md: 'start' } }}>
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>{student.nickName}</Typography>
                        <Typography variant="body1">{student.user.name}</Typography>
                    </Box>
                    <Box sx={{ height: '20px' }}></Box>
                </Card>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} lg={5}>
                            <Paper elevation={5} sx={{ p: 3, mb: 1, borderRadius: 3 }}>
                                <Box sx={{ mb: 2 }}><Typography variant='body1' sx={{ fontWeight: 'bold' }}>About</Typography></Box>
                                <Box sx={{ mb: 2 }}><Typography variant='body2'>Tart I love sugar plum I love oat cake. Sweet roll caramels I love jujubes. Topping cake wafer..</Typography></Box>
                                <Box sx={{ display: 'flex', mb: 1 }}>
                                    <FmdGoodIcon fontSize='small' sx={{ mr: 1 }} />
                                    <Typography variant='body2'>{student.address ? (<span>Live at <strong>{student.address}</strong></span>) : 'n/a'}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', mb: 1 }}>
                                    <CakeIcon fontSize='small' sx={{ mr: 1 }} />
                                    <Typography variant='body2'>{student.user.birthday ? (<span>Born on <strong>{moment(student.user.birthday).format('DD/MM/YYYY')}</strong></span>) : 'n/a'}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', mb: 1 }}>
                                    <PhoneIphoneIcon fontSize='small' sx={{ mr: 1 }} />
                                    <Typography variant='body2'>{student.user.phoneNumber ? (<span>Contact at <strong>{student.user.phoneNumber}</strong></span>) : 'n/a'}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', mb: 1 }}>
                                    <FamilyRestroomIcon fontSize='small' sx={{ mr: 1 }} />
                                    <Typography variant='body2'>{student.parentName ? (<span>My parent is <strong>{student.parentName}</strong></span>) : 'n/a'}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', mb: 1 }}>
                                    <SchoolIcon fontSize='small' sx={{ mr: 1 }} />
                                    <Typography variant='body2'>{student.school ? (<span>Study at <strong>{student.school}</strong></span>) : 'n/a'}</Typography>
                                </Box>
                            </Paper>
                            <Paper elevation={5} sx={{ p: 3, mb: 1, borderRadius: 3 }}>
                                <Box sx={{ mb: 2 }}><Typography variant='body1' sx={{ fontWeight: 'bold' }}>Classes</Typography></Box>
                                {student.classes && student.classes.map((classItem, index) => (
                                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                        <Avatar sx={{ bgcolor: th => th.palette.primary.main, mr: 1 }}>C</Avatar>
                                        <Typography variant='body2'>{classItem.name} ({classItem.type})</Typography>
                                    </Box>
                                ))}
                                <Box sx={{ mt: 2 }}>
                                    <Typography sx={{ textAlign: 'end', textDecoration: 'underline', cursor: 'pointer', fontSize: '12px', color: th => th.palette.primary.main }}>More detail</Typography>
                                </Box>
                            </Paper>
                            <Paper elevation={5} sx={{ p: 3, mb: 1, borderRadius: 3 }}>
                                <Box sx={{ mb: 2 }}><Typography variant='body1' sx={{ fontWeight: 'bold' }}>Assessment</Typography></Box>
                                {student.assessment && student.assessment.map((assessment, index) => (
                                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                        <Typography variant='body2' sx={{ flex: '.3' }}>{assessment.name}</Typography>
                                        <Box sx={{ flex: '.7' }}>
                                            <LinearProgress variant="determinate" value={assessment.value} />
                                        </Box>
                                    </Box>
                                ))}

                                <Box sx={{ mt: 2 }}>
                                    <Typography sx={{ textAlign: 'end', textDecoration: 'underline', cursor: 'pointer', fontSize: '12px', color: th => th.palette.primary.main }}>More detail</Typography>
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={6} lg={7}>
                            <Paper elevation={5} sx={{ pt: { xs: 1, lg: 3 }, pb: { xs: 1, lg: 3 }, pr: { xs: 1, lg: 3 }, pl: { xs: 1, lg: 3 }, borderRadius: 3, mb: 1 }}>
                                <Box sx={{ mb: 2 }}>
                                    <TextField
                                        onChange={(e) => contentPostChanged(e.target.value)}
                                        value={currentPost.content}
                                        id="filled-multiline-flexible"
                                        multiline
                                        rows={4}
                                        placeholder={`Share the activities of ${student.nickName} here`}
                                        sx={{
                                            width: '100%',
                                            '&:hover fieldset': {
                                                borderColor: th => `${th.palette.primary.main} !important`,
                                            },
                                        }}
                                        InputProps={{ sx: { borderRadius: 3 } }}
                                    />
                                </Box>
                                {currentPost.image && (
                                    <Box sx={{ mb: 2 }}>
                                        <img alt='preview' src={currentPost.image} style={{width: '100%', height: '100%'}}></img>
                                    </Box>)}

                                <Box sx={{ display: 'flex', p: 1 }}>
                                    <Box sx={{ flex: '1' }}>
                                        <Button
                                            component="label"
                                            role={undefined}
                                            variant="contained"
                                            tabIndex={-1}
                                            startIcon={<CollectionsIcon />}
                                            sx={{
                                                borderRadius: 6, backgroundColor: th => th.palette.grey[100], color: th => th.palette.primary.main, pl: 3, pr: 3, textTransform: 'none',
                                                '&:hover': {
                                                    backgroundColor: th => th.palette.grey[200]
                                                },
                                            }}
                                        >
                                            Image
                                            <VisuallyHiddenInput type="file" onChange={handleChangeFile} />
                                        </Button>
                                    </Box>
                                    <Box>
                                        <Button variant="contained" onClick={postHandle}>
                                            Post
                                        </Button>
                                    </Box>
                                </Box>
                            </Paper>
                            <Box>
                                {posts && posts.map((post,index) => (
                                    <StudentPost key={index} post={post}/>
                                ))}
                            </Box>

                        </Grid>
                    </Grid>
                </Box>
            </>
            )}

        </Box>)
}

export default StudentInformation
