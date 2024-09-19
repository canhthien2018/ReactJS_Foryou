import Box from '@mui/material/Box';

import { useSelector } from 'react-redux';
import { mainLayoutSelector } from '../../../redux/selectors';
import { SideBarWidth } from '../../../constants/mainLayout';

function BottomBarControl({ children, height='70px' }) {
    const isOpenSideBar = useSelector(mainLayoutSelector).isOpenSideBar;
    return (
        <Box>
            <Box sx={{ height: height, width: '100%' }}>
            </Box>
            <Box sx={{ p: 1, height: height, width: {sm: '100%', xs: '100%', md: isOpenSideBar ? `calc(100% - ${SideBarWidth}px)` : `calc(100% - ${8*7}px - 1px)`}, position: 'fixed', bottom: 0, right: 0, backgroundColor: th => th.palette.backgroundLayout }}>
                {children}
                
            </Box>
        </Box>

    )
}

export default BottomBarControl
