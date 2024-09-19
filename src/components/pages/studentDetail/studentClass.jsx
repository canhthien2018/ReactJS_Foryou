import React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';

import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';

import ClassTimeTable from './classTimeTable';
import ClassExercises from './classExercises';

import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import Tooltip from '@mui/material/Tooltip';
import ClassDocs from './classDocs';
import { Button } from '@mui/material';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

function StudentClass({studentClass}) {
    const [isExpanded, setIsExpanded] = React.useState(true);
    const [isEditMode, setIsEditMode] = React.useState(false);
    const [description, setDescription] = React.useState(studentClass.description);

    const descriptionOnChanged = (val) => {
        setDescription(val)
    }

    const expandHandle = () => {
        setIsExpanded(prev => !prev);
    };

    const [tabIndex, setTabIndex] = React.useState("1");

    const selectTabHandle = (event, newValue) => {
        setTabIndex(newValue);
    };

    const modeSwitch = () => {
        setIsEditMode(prev => !prev);
    };

    const descriptionCancel = () => {
        setDescription(studentClass.description);
        setIsEditMode(false);
    }

    const descriptionSave = () => {
        setIsEditMode(false);
    }

    return (
        <>
            <Accordion expanded={isExpanded} onChange={expandHandle}>
                <AccordionSummary aria-controls="panel1d-content">
                    <Typography>{studentClass.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    
                    <Box sx={{ pl: { xs: 1, md: 3 }, pr: { xs: 1, md: 3 }, pt: 1, mb: 3, mt: 3 }}>
                        <Box sx={{ display: 'flex', mb: 1 }}>
                            <Typography variant='body2' sx={{ minWidth: '100px' }}>Teacher</Typography>
                            <Typography variant='body2' sx={{ fontWeight: 'bold' }}>{studentClass.teacherName}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', mb: 1 }}>
                            <Typography variant='body2' sx={{ minWidth: '100px' }}>Class Type</Typography>
                            <Typography variant='body2' sx={{ fontWeight: 'bold' }}>Personal</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', mb: 1 }}>
                            <Typography variant='body2' sx={{ minWidth: '100px' }}>Description</Typography>
                            {isEditMode ?
                                (<Box sx={{ width: '100%' }}>
                                    <TextField
                                        multiline
                                        value={description}
                                        variant="filled"
                                        size='small'
                                        color="primary"
                                        focused
                                        sx={{ width: '100%' }}
                                        InputProps={{ sx: { fontSize: '14px', fontWeight: 'bold', p: 0, mb: 1 } }}
                                        onChange={(e) => descriptionOnChanged(e.target.value)}
                                    />
                                    <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                                        <Tooltip title="Save">
                                            <Button onClick={descriptionSave} sx={{ p: 0.5, mr: 1 }} size='small' variant='outlined' color='success'>
                                                <SaveIcon sx={{ fontSize: 17, cursor: 'pointer', verticalAlign: 'middle' }} />
                                            </Button>
                                        </Tooltip>
                                        <Tooltip title="Cancel">
                                            <Button onClick={descriptionCancel} sx={{ p: 0.5 }}  size='small' variant='outlined' color='error'>
                                                <CancelIcon sx={{ fontSize: 17, cursor: 'pointer', verticalAlign: 'middle' }} />
                                            </Button>
                                        </Tooltip>
                                    </Box>
                                </Box>) :
                                (<Box>
                                    <Typography variant='body2' sx={{ fontWeight: 'bold' }}>
                                        {description}
                                        <Tooltip title="Edit">
                                            <IconButton onClick={modeSwitch} sx={{ p: 0, ml: 1 }}>
                                                <EditIcon sx={{ fontSize: 17, color: th => th.palette.primary.main, cursor: 'pointer', verticalAlign: 'middle' }} />
                                            </IconButton>
                                        </Tooltip>
                                    </Typography>
                                </Box>
                                )}

                        </Box>
                    </Box>
                    <Divider />
                    <Box sx={{ mt: 3 }}>
                        <TabContext value={tabIndex}>
                            <TabList onChange={selectTabHandle} aria-label="tabs" sx={{backgroundColor: th => th.palette.primary.light}} indicatorColor="primary.dark" variant='fullWidth'>
                                <Tab label="Timetable" {...a11yProps("1")} value="1" sx={{color: 'black', fontSize: '11px', '&.Mui-selected': {color: 'white', backgroundColor: th => th.palette.primary.dark}}}/>
                                <Tab label="Exercises" {...a11yProps("2")} value="2" sx={{color: 'black', fontSize: '11px','&.Mui-selected': {color: 'white', backgroundColor: th => th.palette.primary.dark}}}/>
                                <Tab label="Documents" {...a11yProps("3")} value="3" sx={{color: 'black', fontSize: '11px','&.Mui-selected': {color: 'white', backgroundColor: th => th.palette.primary.dark}}}/>
                            </TabList>
                            <TabPanel sx={{ p: 0 }} value="1">
                                <ClassTimeTable timeTable={studentClass.timeTable} />
                            </TabPanel>
                            <TabPanel sx={{ p: 0 }} value="2">
                                <ClassExercises exercises={studentClass.exercises}/>
                            </TabPanel>
                            <TabPanel sx={{ p: 0 }} value="3">
                                <ClassDocs docs={studentClass.docs} />
                            </TabPanel>
                        </TabContext >

                    </Box>
                </AccordionDetails>
            </Accordion>

        </>
    )
}

export default StudentClass
