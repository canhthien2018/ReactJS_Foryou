import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SwitchModeToggle from '../../shared/switchModeToggle'

import { useLocation } from 'react-router-dom';
import routeConfig from '../../../router/routeConfig';

import ThemeSelect from '../../shared/themeSelect';
import { matchPath } from 'react-router'

import Popover from '@mui/material/Popover';
import SettingsIcon from '@mui/icons-material/Settings';

function TopBarContain() {
    const location = useLocation();
    const pageTitle = routeConfig.find(x => matchPath(x, location.pathname)).pageTitle;

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <>
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {pageTitle}
                </Typography>
                <SwitchModeToggle />
                <Box sx={{ display: { md: 'none' } }}>
                    <SettingsIcon aria-describedby={id} variant="contained" onClick={handleClick} sx={{ cursor: 'pointer' }}>
                        Open Popover
                    </SettingsIcon>
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    <ThemeSelect />
                </Box>

            </Box>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                sx={{marginTop: 1, display: { md: 'none'}}}
            >
                <Box sx={{pt: 2, pl: 1, pr: 1, pb: 1, backgroundColor: th => th.palette.backgroundLayout}}>
                    <Typography variant="body1" sx={{textAlign: 'center', fontWeight: 'bold'}}>
                        Theme
                    </Typography>
                    <ThemeSelect />
                </Box>

            </Popover>
        </>

    )
}

export default TopBarContain
