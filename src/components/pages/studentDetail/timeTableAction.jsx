import * as React from 'react';
import Popover from '@mui/material/Popover';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import Button from '@mui/material/Button';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Typography from '@mui/material/Typography';

function TimeTableAction() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <Button aria-describedby={id} title='btn'  sx={{ borderRadius: '50%', aspectRatio: '1/1', p: 0, minWidth: 0, float: 'right' }} onClick={handleClick}>
                <MoreHorizIcon></MoreHorizIcon>
            </Button>
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
                }}>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton sx={{pt: 0.5, pb: 0.5}}>
                            <ListItemIcon>
                                <AddCircleOutlineIcon fontSize='small'/>
                            </ListItemIcon>
                            <ListItemText primary={<Typography fontSize={12}>Add</Typography>} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{pt: 0.5, pb: 0.5}}>
                            <ListItemIcon>
                                <ContentCopyIcon fontSize='small'/>
                            </ListItemIcon>
                            <ListItemText primary={<Typography fontSize={12}>Copy</Typography>} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{pt: 0.5, pb: 0.5}}>
                            <ListItemIcon>
                                <ContentPasteIcon fontSize='small'/>
                            </ListItemIcon>
                            <ListItemText primary={<Typography fontSize={12}>Paste</Typography>} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Popover>
        </>

    )
}

export default TimeTableAction
