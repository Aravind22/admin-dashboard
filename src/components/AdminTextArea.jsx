import React from 'react';
import { Typography, TextField, Stack, TextareaAutosize } from '@mui/material';

export const AdminTextField = ({ text, id, label }) => {
    return (
        <Stack direction="column" gap={1} className='card-content-layout'>
            <Typography variant="body1" minWidth={150}>
                {text}
            </Typography>
            {/* <TextField id={id} label={label} variant="outlined" size="small" />*/}
            <TextareaAutosize
                id={id}
                label={label}
                minRows={5}
                style={{ width: "100%" }}
            />
        </Stack>
    )
}