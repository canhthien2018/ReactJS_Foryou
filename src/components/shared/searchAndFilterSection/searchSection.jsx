import React from 'react'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';

function SearchSection({ placeholder, onChangeHandleDispatch }) {
    const [value, setValue] = React.useState('');
    const dispatch = useDispatch();
    const onChangeHandle = (e) => {
        setValue(e.target.value);
        dispatch(onChangeHandleDispatch(e.target.value));
    }

    return (
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, xl: 12 }}>
            <Grid item xs={4} sm={4} md={4} xl={3}>             
                    <TextField
                        id="input-with-icon-textfield"
                        size='small'
                        label=""
                        placeholder={placeholder}
                        onChange={e => onChangeHandle(e)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                        value={value}
                        variant="outlined"
                        sx={{ width: '100%' }}
                    />
            </Grid>
        </Grid>

    )
}

export default SearchSection
