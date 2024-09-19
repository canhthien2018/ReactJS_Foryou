import * as React from 'react';
import { useSelector } from 'react-redux';

import Toolbar from '@mui/material/Toolbar';
import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';

import { SideBarWidth } from '../../../constants/mainLayout';
import { mainLayoutSelector } from '../../../redux/selectors';
import TopBarContain from '../topBar/topBarContain';


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  backgroundImage: 'none',
  marginLeft: `calc(${theme.spacing(7)} + 1px)`,
  width: `calc(100% - ${theme.spacing(7)} - 1px)`,
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: SideBarWidth,
    width: `calc(100% - ${SideBarWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function TopBarDesktop() {
  const isOpenSideBar = useSelector(mainLayoutSelector).isOpenSideBar;

  return (
    <AppBar position="fixed" open={isOpenSideBar} sx={{backgroundColor: theme => theme.palette.backgroundLayout, boxShadow: 'none', padding: 1}}>
      <Toolbar sx={{backgroundColor: theme => theme.palette.primary.dark, borderRadius: 2}}>
        <TopBarContain />
      </Toolbar>
    </AppBar>
  )
}

export default TopBarDesktop
