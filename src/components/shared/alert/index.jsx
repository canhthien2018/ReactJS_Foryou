import React from 'react'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import {alertSelector} from '../../../redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import alertSlice from '../../../redux/slices/alertSlice';
import Grow from '@mui/material/Grow';

function AppAlert() {
  const isOpen = useSelector(alertSelector).isOpen;
  const type = useSelector(alertSelector).type;
  const content = useSelector(alertSelector).content;

  const dispatch = useDispatch();


  const handleClose = () => {
    dispatch(alertSlice.actions.close());
  }

  return (
    <Snackbar open={isOpen} TransitionComponent={Grow} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
    <Alert
      severity={type}
      variant="filled"
      sx={{ width: '100%', minHeight: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      {content}
    </Alert>
  </Snackbar>
  )
}

export default AppAlert
