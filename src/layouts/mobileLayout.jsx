import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import PropTypes from 'prop-types';

import TopBarMobile from '../components/mainLayout/mobileLayout/topBarMobile';
import SideBarMobile from '../components/mainLayout/mobileLayout/sideBarMobile';
import { SideBarWidth } from '../constants/mainLayout';

import PageLayout from './pageLayout';


function MobileLayout(props) {
    const { window } = props;
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <TopBarMobile />
            <SideBarMobile container={container} />
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 1, width: { sm: `calc(100% - ${SideBarWidth}px)` }, backgroundColor: theme => theme.palette.backgroundLayout }}
            >
                <PageLayout>
                    {props.children}
                </PageLayout>
            </Box>
        </Box>
    );
}

MobileLayout.propTypes = {
    window: PropTypes.func,
};

export default MobileLayout;