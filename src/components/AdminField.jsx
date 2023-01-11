import React from 'react';
import { Typography, TextField, Stack } from '@mui/material';

export const AdminField = (props) => {
    return (
        <Stack direction="column" gap={1} className='card-content-layout'>
            <Typography variant="body1" minWidth={150}>
                {props.text}
            </Typography>
            <TextField id={props.id} label={props.label} onChange={(event) => props.handleOnChange(props.label, event)} variant="outlined" size="small" />
        </Stack>
    )
}