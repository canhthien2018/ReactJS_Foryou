import { useDispatch, useSelector } from 'react-redux';

import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

import { SideBarWidth } from "../../../constants/mainLayout";
import mainLayoutSlice from '../../../redux/slices/mainLayoutSlice';
import { mainLayoutSelector } from '../../../redux/selectors';
import TopBarContain from '../topBar/topBarContain';

function TopBarMobile() {
    const isOpenSideBar = useSelector(mainLayoutSelector).isOpenSideBar;
    const dispatch = useDispatch();

    const handleDrawerToggle = () => {
        dispatch(mainLayoutSlice.actions.toggleSideBar(!isOpenSideBar))
    };

    return (
        <AppBar
            position="fixed"
            sx={{
                width: { md: `calc(100% - ${SideBarWidth}px)` },
                ml: { md: `${SideBarWidth}px` },
            }}
        >
            <Toolbar sx={{backgroundColor: theme => theme.palette.primary.dark}}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { md: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <TopBarContain />
            </Toolbar>
        </AppBar>
    )
}

export default TopBarMobile
