import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import BottomBarControl from '../components/shared/bottomBarControl';
import InfoIcon from '@mui/icons-material/Info';
import SchoolIcon from '@mui/icons-material/School';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { useSelector } from 'react-redux';
import AssignmentIcon from '@mui/icons-material/Assignment';

import StudentInformation from '../components/pages/studentDetail/studentInformation';
import { useParams } from 'react-router-dom';

import {studentListSelector} from '../redux/selectors'
import StudentClasses from '../components/pages/studentDetail/studentClasses';

import StudentAssessment from '../components/pages/studentDetail/studentAssessment';
import StudentReport from '../components/pages/studentDetail/studentReport';

function StudentDetail() {
    const [value, setValue] = React.useState("1");
    const [student, setStudent] = React.useState(null);

    let { id } = useParams();
    const studentList = useSelector(studentListSelector);

    React.useEffect(() => {
        const currentStudent = studentList.find(x => x.id === +id);
        if(currentStudent){
            setStudent(currentStudent);
        }
    },[id, studentList])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <TabContext value={value}>
                <TabPanel sx={{p: 0}} value="1">
                    <StudentInformation student={student}/>
                </TabPanel>
                <TabPanel sx={{p: 0}} value="2">
                    <StudentClasses />
                </TabPanel>
                <TabPanel sx={{p: 0}} value="3">
                    <StudentAssessment  student={student}/>
                </TabPanel>
                <TabPanel sx={{p: 0}} value="4">
                    <StudentReport />
                </TabPanel>
                <BottomBarControl height='90px'>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: th => th.palette.primary.dark, borderRadius: 2, width: '100%' }}>
                        <Box>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab sx={{ fontSize: {xs: 9, sm: 13}, color: th => th.palette.background.default,'&.Mui-selected': {color: th => th.palette.text.primary, backgroundColor: th => th.palette.backgroundLayout}}} icon={<InfoIcon fontSize='small' />} label="Infomation" value="1" />
                                <Tab sx={{ fontSize: {xs: 9, sm: 13}, color: th => th.palette.background.default,'&.Mui-selected': {color: th => th.palette.text.primary, backgroundColor: th => th.palette.backgroundLayout}}} icon={<SchoolIcon fontSize='small' />} label="Classes" value="2" />
                                <Tab sx={{ fontSize: {xs: 9, sm: 13}, color: th => th.palette.background.default,'&.Mui-selected': {color: th => th.palette.text.primary, backgroundColor: th => th.palette.backgroundLayout}}} icon={<AssignmentIcon fontSize='small' />} label="Assessment" value="3" />
                                <Tab sx={{ fontSize: {xs: 9, sm: 13}, color: th => th.palette.background.default,'&.Mui-selected': {color: th => th.palette.text.primary, backgroundColor: th => th.palette.backgroundLayout}}} icon={<AssessmentIcon fontSize='small' />} label="Report" value="4" />
                            </TabList>
                        </Box>
                    </Box>
                </BottomBarControl>
            </TabContext >
        </>
    )
}

export default StudentDetail
