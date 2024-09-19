import React from 'react'
import Grid from '@mui/material/Grid';
import FilterControl from './filterControl';

function FilterSection({ filterControls }) {
    return (
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, xl: 12 }}>
            {filterControls.map((control, index) => (
                <Grid item xs={4} sm={4} md={4} xl={3} key={index}>
                    <FilterControl type={control.type} label={control.label} dataSource={control.dataSource} onChangeHandleDispatch={control.onChangeHandleDispatch} />
                </Grid>
            ))}
        </Grid>
    )
}

export default FilterSection
