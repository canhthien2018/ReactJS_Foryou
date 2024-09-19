import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import TimeTableAction from './timeTableAction';
import Button from '@mui/material/Button';

function ClassTimeTable({ timeTable }) {
    const [isEditMode, setIsEditMode] = React.useState(false);
    const handleDeleteTime = () => {

    }

    const modeHandleChange = () => {
        setIsEditMode(prev => !prev);
    };



    return (
        <Box sx={{ pt: 2, pb: 2, pr: { xs: 0, md: 2 }, pl: { xs: 0, md: 2 }, }}>
            <Box sx={{ display: 'flex', mb: 1, justifyContent: 'flex-end' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pr: 2, mb: 2 }}>
                    {isEditMode ? (
                        <>
                            <Button variant='outlined' onClick={modeHandleChange} sx={{ mr: 1 }} color='success' size='small'>Save</Button>
                            <Button variant='outlined' onClick={modeHandleChange} color='error' size='small'>Cancel</Button>
                        </>
                    ) : (
                        <Button variant='outlined' onClick={modeHandleChange} color='warning' size='small'>Edit</Button>
                    )}
                </Box>
            </Box>

            {timeTable.map((day, index) => {return (isEditMode || day.times?.length > 0) ? 
            (
                <Box key={index} sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', pt: 0.5, pb: 0.5, ml: 1, borderBottom: th => `2px solid ${th.palette.mode === 'dark' ? th.palette.grey[900] : th.palette.grey[100]}` }}>
                        <Box sx={{ flex: '1' }}>
                            <Typography sx={{ fontSize: { xs: '0.8em' }, fontWeight: 'bold' }}>{day.day}</Typography>
                        </Box>
                        <Box>
                            {isEditMode && <TimeTableAction />}
                        </Box>
                    </Box>
                    <Box>
                        {day.times?.length > 0 ?
                            (
                                <Grid container spacing={{ xs: 2 }} p={1} >
                                    {day.times.map((time, index) => (
                                        <Grid item key={index}>
                                            <Chip
                                                sx={{ fontSize: { xs: '0.8em' }, color: th => th.palette.text.primary, fontWeight: 'bold', backgroundColor: th => th.palette.mode === 'dark' ? th.palette.primary.dark : th.palette.primary.light }}
                                                label={`${time.start} - ${time.end}`}
                                                variant="outlined"
                                                onDelete={isEditMode ? handleDeleteTime : undefined}
                                            />
                                        </Grid>))}

                                </Grid>
                            )
                            :
                            (
                                <Typography sx={{fontSize: 13, color: th => th.palette.grey[500], p: 1}}>No Data</Typography>
                            )}

                    </Box>

                </Box>
            ) : null})}
        </Box>
    )
}

export default ClassTimeTable
