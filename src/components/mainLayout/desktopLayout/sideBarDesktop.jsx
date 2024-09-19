import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';

import { SideBarWidth } from '../../../constants/mainLayout';
import SideBarContain from '../sideBar/sideBarContain';

import mainLayoutSlice from '../../../redux/slices/mainLayoutSlice';
import { mainLayoutSelector } from '../../../redux/selectors';
import Divider from '@mui/material/Divider';

import { Logo } from '../../shared/logo';
import { Box } from '@mui/material';

const openedMixin = (theme) => ({
    width: SideBarWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(7)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: SideBarWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

function SideBarDesktop() {
    const isOpenSideBar = useSelector(mainLayoutSelector).isOpenSideBar;
    const dispatch = useDispatch();

    const handleHoverSideBar = () => {
        dispatch(mainLayoutSlice.actions.toggleSideBar(true))
    }

    return (
        <Drawer variant="permanent" open={isOpenSideBar} onMouseEnter={handleHoverSideBar} >
            <DrawerHeader sx={{ paddingTop: '10px' }}>
                <Logo />
            </DrawerHeader>
            {isOpenSideBar && (<Box sx={{ width: '100%', textAlign: 'center' }}>
                <Typography sx={{fontSize: '16px', lineHeight: 1, fontWeight: 'bold', color: th => th.palette.mode === 'dark' ? th.palette.primary.main : th.palette.primary.dark}}>For You</Typography>
            </Box>)}
            <Divider sx={{mt: 1}}/>
            <SideBarContain />
        </Drawer>
    )
}

export default SideBarDesktop
