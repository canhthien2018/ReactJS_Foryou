import { useDispatch, useSelector } from 'react-redux';

import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { Logo } from '../../shared/logo';

import { SideBarWidth } from '../../../constants/mainLayout';
import SideBarContain from '../../mainLayout/sideBar/sideBarContain';
import Divider from '@mui/material/Divider';

import mainLayoutSlice from '../../../redux/slices/mainLayoutSlice';
import { mainLayoutSelector } from '../../../redux/selectors';
import Typography from '@mui/material/Typography';

function SideBarMobile({ container }) {
    const isOpenSideBar = useSelector(mainLayoutSelector).isOpenSideBar;
    const dispatch = useDispatch();

    const handleDrawerClose = () => {
        dispatch(mainLayoutSlice.actions.toggleSideBar(false))
    };

    return (
        <Box
            component="nav"
            sx={{ width: { md: SideBarWidth }, flexShrink: { md: 0 } }}
            aria-label="mailbox folders"
        >
            <Drawer
                container={container}
                variant="temporary"
                open={isOpenSideBar}
                onClose={handleDrawerClose}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: SideBarWidth },
                }}
            >
                <Box sx={{ pt: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                    <Logo />
                </Box>
                <Box sx={{ width: '100%', textAlign: 'center', mb: 1 }}>
                    <Typography sx={{ fontSize: '16px', fontWeight: 'bold', color: th => th.palette.mode === 'dark' ? th.palette.primary.main : th.palette.primary.dark }}>For You</Typography>
                </Box>
                <Divider />
                <SideBarContain />
            </Drawer>
        </Box>

    )
}

export default SideBarMobile
