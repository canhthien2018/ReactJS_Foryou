import React from 'react'
import SearchSection from './searchSection';
import FilterSection from './filterSection';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Box from '@mui/material/Box';



function SearchAndFilterSection({ isUseSearch, isUseFilter, searchData, filterControls }) {
  const [open, setOpen] = React.useState(false);
  const handleExpand = () => {
    setOpen(prev => !prev);
  }
  return (
    <Box sx={{ pl: { xs: 1, sm: 1, md: 2 }, pr: { xs: 1, sm: 1, md: 2 }, pt: { xs: 2, sm: 2, md: 4 }, pb: isUseFilter ? null : {xs: 2, sm: 2, md: 4},  backgroundColor: theme => theme.palette.backgroundLayout, borderRadius: 2, boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;' }}>
      {isUseSearch && <Box mb={open ? 2 : 0}><SearchSection placeholder={searchData.placeholder} onChangeHandleDispatch={searchData.onChangeHandleDispatch} /></Box>}
      <Collapse in={open} timeout="auto" unmountOnExit>
        {isUseFilter && <FilterSection filterControls={filterControls} />}
      </Collapse>
      {isUseFilter && (<div style={{ display: 'flex', justifyContent: 'center', transform: 'translateY(50%)' }}>
        <IconButton onClick={handleExpand} sx={{
          border: theme => `2px solid ${theme.palette.primary.main}`, backgroundColor: theme => theme.palette.primary.main, padding: 0.5, color: 'white',
          '&:hover': { backgroundColor: theme => theme.palette.primary.dark }
        }}>
          {open ? <KeyboardDoubleArrowUpIcon sx={{ fontSize: 16 }} /> : <KeyboardDoubleArrowDownIcon sx={{ fontSize: 16 }} />}
        </IconButton>
      </div>)}

    </Box>
  )
}

export default SearchAndFilterSection
