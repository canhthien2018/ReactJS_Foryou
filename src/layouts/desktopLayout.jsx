import { useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import SideBarDesktop from '../components/mainLayout/desktopLayout/sideBarDesktop';
import TopBarDesktop from '../components/mainLayout/desktopLayout/topBarDesktop';
import PageLayout from './pageLayout';

import mainLayoutSlice from '../redux/slices/mainLayoutSlice';

function DesktopLayout(props) {
    const dispatch = useDispatch();

    const handleCloseSideBar = () => {
        dispatch(mainLayoutSlice.actions.toggleSideBar(false))
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <SideBarDesktop/>
            <TopBarDesktop/>
            <Box component="main" sx={{ flexGrow: 1, pt: 3, pl: 3, pr: 3, minHeight: '100vh', backgroundColor: theme => theme.palette.backgroundLayout}} onClick={handleCloseSideBar}>
                <PageLayout>
                    {props.children}
                </PageLayout>
            </Box>
        </Box>
    )
}

export default DesktopLayout
