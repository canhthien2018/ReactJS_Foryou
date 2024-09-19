import * as React from 'react';
import Radio from '@mui/material/Radio';

import { useSelector, useDispatch } from 'react-redux';
import { mainLayoutSelector } from '../../../redux/selectors';
import { Theme } from '../../../constants/mainLayout';
import mainLayoutSlice from '../../../redux/slices/mainLayoutSlice';
import { Box } from '@mui/material';

export default function ThemeSelect() {

  const dispatch = useDispatch();
  const theme = useSelector(mainLayoutSelector).theme;

  const handleChange = (event) => {
    dispatch(mainLayoutSlice.actions.selectTheme(event.target.value))
  };

  const controlProps = (item) => ({
    checked: theme === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  return (
    <Box sx={{backgroundColor: th => th.palette.background.paper, borderRadius: 3, p: 0.5}}>
      <Radio
        {...controlProps(Theme.Purple)}
        sx={{
          p: 0.5,
          color: Theme.Purple,
          '&.Mui-checked': {
            color: Theme.Purple,
          },
        }}
      />
       <Radio
        {...controlProps(Theme.Blue)}
        sx={{
          p: 0.5,
          color: Theme.Blue,
          '&.Mui-checked': {
            color: Theme.Blue,
          },
        }}
      />
       <Radio
        {...controlProps(Theme.Green)}
        sx={{
          p: 0.5,
          color: Theme.Green,
          '&.Mui-checked': {
            color: Theme.Green,
          },
        }}
      />
    </Box>
  );
}