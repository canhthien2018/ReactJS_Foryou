import * as React from 'react';
import { useDispatch } from 'react-redux';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function MultipleDropdown({ label, dataSource, onChangeHandleDispatch }) {
  const [selectedItems, setSelectedItems] = React.useState([]);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedItems(value);
    dispatch(onChangeHandleDispatch(value));
  };

  const handleClearAll = () => {
    console.log('clear')
    setSelectedItems([]);
    dispatch(onChangeHandleDispatch([]));
  }

  return (
    <>
      <FormControl sx={{ width: '100%' }}>
        <InputLabel size='small' id="multipleDropdownLabel">{label}</InputLabel>
        <Select
          size='small'
          labelId="multipleDropdownLabel"
          id="multipleDropdown"
          multiple
          value={selectedItems}
          onChange={handleChange}
          input={<OutlinedInput label={label} />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, alignItems: 'center' }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {dataSource.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              <Checkbox checked={selectedItems.filter(x => x === item.value).length > 0} />
              <ListItemText primary={item.label} />
            </MenuItem>
          ))}
        </Select>
        {(selectedItems && selectedItems.length > 0) ? (<IconButton sx={{ position: 'absolute', 
                                                                          right: 0, 
                                                                          transform: 'translateY(50%) translateX(-120%)', 
                                                                          p: 0, 
                                                                          height: 'fit-content',
                                                                          '&:hover' : {
                                                                            backgroundColor: th => th.palette.primary.main,
                                                                          } }} onClick={() => handleClearAll()}>
          <HighlightOffIcon sx={{ color: th => th.palette.grey[500], fontSize: '24px' ,'&:hover' : {
                                                                            color: 'white',
                                                                          } }} />
        </IconButton>) : null}
      </FormControl>
    </>
  );
}
