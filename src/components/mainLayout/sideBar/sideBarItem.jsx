import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useLocation } from 'react-router-dom';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

import { Link } from 'react-router-dom';

import mainLayoutSlice from '../../../redux/slices/mainLayoutSlice';
import { mainLayoutSelector } from '../../../redux/selectors';

const MainListItem = styled(ListItem)(({ theme }) => ({
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.mode === "dark" ? "black" : "white",
    "& .MuiListItemIcon-root": {
      color: theme.palette.mode === "dark" ? "black" : "white",
    },
    "& .MuiTypography-root": {
      fontWeight: "bold"
    }
  },
  "&.selected": {
    backgroundColor: theme.palette.primary.dark,
    color: "white",
    "& .MuiListItemIcon-root": {
      color: "white"
    },
    "& .MuiTypography-root": {
      fontWeight: "bold"
    }
  }
}));

const SubListItem = styled(ListItem)(({ theme }) => ({
  "&:hover": {
    color: theme.palette.primary.main,
    "& .MuiListItemIcon-root": {
      color: theme.palette.primary.main
    },
    "& .MuiTypography-root": {
      fontWeight: "bold"
    }
  },
  "&.selected": {
    color: theme.palette.primary.main,
    "& .MuiListItemIcon-root": {
      color: theme.palette.primary.main
    },
    "& .MuiTypography-root": {
      fontWeight: "bold"
    }
  }
}));


function SideBarItem({ item, childrenItems }) {
  const [open, setOpen] = React.useState(false);

  const isOpenSideBar = useSelector(mainLayoutSelector).isOpenSideBar;
  const dispatch = useDispatch();
  const location = useLocation();

  const handleClick = () => {
    if (!open) {
      dispatch(mainLayoutSlice.actions.toggleSideBar(true))
    }
    setOpen(!open);
  };

  React.useEffect(() => {
    if (!isOpenSideBar) {
      setOpen(false);
    }
  }, [isOpenSideBar])

  const isSelected = childrenItems.filter(x => x.path === location.pathname).length > 0 || item.path === location.pathname;


  return (
    <>
      <MainListItem disablePadding className={isSelected ? 'selected' : ''}>
        <ListItemButton  component={childrenItems && childrenItems.length ? null : Link} to={item.path} onClick={handleClick} sx={{ paddingTop: '4px', paddingBottom: '4px' }}>
          <ListItemIcon sx={{ minWidth: 40 }}>
            {item.icon}
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{ fontSize: '14px' }} primary={item.sideBarTitle} />
          {childrenItems && childrenItems.length > 0 ? open ? <ExpandLess /> : <ExpandMore /> : null}
        </ListItemButton>
      </MainListItem>
      {childrenItems && childrenItems.length > 0 ? (<Collapse in={open} timeout="auto" unmountOnExit>
        <List disablePadding>
          {childrenItems && childrenItems.map((childrenItem, index) => (
            <SubListItem key={index} disablePadding className={childrenItem.path === location.pathname ? 'selected' : ''}>
              <ListItemButton component={Link} to={childrenItem.path} sx={{ paddingTop: '4px', paddingBottom: '4px', paddingLeft: '32px' }}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  {childrenItem.icon}
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{ fontSize: '14px' }} primary={childrenItem.sideBarTitle} />
              </ListItemButton>
            </SubListItem>
          ))}
        </List>
      </Collapse>) : null}

    </>

  )
}

export default SideBarItem
