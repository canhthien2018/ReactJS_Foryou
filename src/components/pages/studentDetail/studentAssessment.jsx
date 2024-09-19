import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';


const assessments = [
    {
        name: 'Đọc',
        percentage: 15,
        items: [
            {
                title: 'Đọc được bảng chữ cái',
                percentage: 10,
            },
            {
                title: 'Đọc rõ ràng các từ',
                percentage: 20,
            }
        ]
    },
    {
        name: 'Viết',
        percentage: 20,
        items: [
            {
                title: 'Bắt chước viết các chữ có sẵn',
                percentage: 20,
            },
            {
                title: 'Viết chữ rõ ràng',
                percentage: 20,
            }
        ]
    },
    {
        name: 'Vẽ',
        percentage: 55,
        items: [
            {
                title: 'Vẽ theo hình có sẵn',
                percentage: 50,
            },
            {
                title: 'Vẽ nối các điểm',
                percentage: 60,
            }
        ]
    },
]


function StudentAssessment({ student }) {
    return (
        <Box sx={{ pl: { xs: 0, xl: 20 }, pr: { xs: 0, xl: 20 } }}>
            <Paper elevation={5} sx={{ borderRadius: 2, mb: 2 }}>
                <Box>
                    <Box sx={{ p: 2 }}>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>Summary</Typography>
                    </Box>
                    <Box sx={{ p: 2, backgroundColor: th => th.palette.mode === 'dark' ? th.palette.grey[800] : th.palette.grey[200], display: 'flex' }}>
                        <Box sx={{ flex: '0.3' }}>
                            <Typography sx={{ fontSize: '12px' }}>Name</Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '12px' }}>{student.user.name}</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ p: 2, display: 'flex' }}>
                        <Box sx={{ flex: '0.3' }}>
                            <Typography sx={{ fontSize: '12px' }}>Age</Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '12px' }}>3 years 2 months</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ p: 2, backgroundColor: th => th.palette.mode === 'dark' ? th.palette.grey[800] : th.palette.grey[200], display: 'flex' }}>
                        <Box sx={{ flex: '0.3' }}>
                            <Typography sx={{ fontSize: '12px' }}>Real Age</Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '12px' }}>2 years 2 months</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ p: 2, display: 'flex' }}>
                        <Box sx={{ flex: '0.3' }}>
                            <Typography sx={{ fontSize: '12px' }}>Conclude</Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '12px' }}>Chậm phát triển</Typography>
                        </Box>
                    </Box>
                </Box>
                <Divider />
                <Box mt={2}>
                    <Box sx={{ pl: 2, pr: 2, pb: 2 }}>
                        {assessments.map((assessment, index) => (
                            <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                <Typography variant='body2' sx={{ flex: '.3', fontSize: 13 }}>{assessment.name}</Typography>
                                <Box sx={{ flex: '.7', display: 'flex', alignItems: 'center' }}>
                                    <Box sx={{flex: 1, width: '100%', mr: 2}}>
                                        <LinearProgress variant="determinate" value={assessment.percentage} />
                                    </Box>
                                    <Box>
                                        <Typography sx={{color: th => th.palette.text.secondary, fontSize: 13}}>{assessment.percentage}%</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        ))}

                    </Box>
                </Box>
            </Paper>

            <Paper elevation={5} sx={{ borderRadius: 3, mb: 2 }}>
                <Box sx={{ p: 2 }}>
                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>Logic Support</Typography>
                </Box>
                <Box>
                    {assessments.map((assessment, index) => (
                        <Box key={index} sx={{ pl: 2, pr: 2, pb: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: th => th.palette.mode === 'dark' ? th.palette.grey[800] : th.palette.grey[200], p: 1 }}>
                                <Box sx={{ flex: '1' }}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '13px' }}>{index + 1}. {assessment.name}</Typography>
                                </Box>
                                <Box>
                                    <Chip label={`${assessment.percentage}%`} color={assessment.percentage < 30 ? "error" : assessment.percentage < 70 ? "warning" : "success"} variant="filled" />
                                </Box>
                            </Box>
                            <Box sx={{ pt: 1, pl: 2, pr: 1 }}>
                                {assessment?.items && assessment?.items.map((task, index) => (
                                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                        <Typography variant='body2' sx={{ flex: { xs: '1', md: '.5', fontSize: '13px' } }}>{task.title}</Typography>
                                        <Box sx={{ flex: '.5', display: 'flex', alignItems: 'center' }}>
                                            <Box sx={{ mr: 3, width: '100%', display: { xs: 'none', md: 'none' } }}>
                                                <LinearProgress variant="determinate" value={task.percentage} />
                                            </Box>

                                        </Box>
                                        <Chip label={`${task.percentage}%`} color={task.percentage < 30 ? "error" : task.percentage < 70 ? "warning" : "success"} variant="filled" />
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Paper>
        </Box>
    )
}

export default StudentAssessment
