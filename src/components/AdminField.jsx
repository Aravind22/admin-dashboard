import React from 'react';
import { Typography, TextField, Stack } from '@mui/material';

export const AdminField = ({text, id, label}) => {
    return (
        <Stack direction="column" gap={1} className='card-content-layout'>
            <Typography variant="body1" minWidth={150}>
                {text}
            </Typography>
            <TextField id={id} label={label} variant="outlined" size="small" />
        </Stack>
    )
}