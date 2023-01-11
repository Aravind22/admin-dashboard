import React from 'react';
import { Typography, TextField, Stack, TextareaAutosize } from '@mui/material';

export const AdminTextField = (props) => {
    return (
        <Stack direction="column" gap={1} className='card-content-layout'>
            <Typography variant="body1" minWidth={150}>
                {props.text}
            </Typography>
            {/* <TextField id={id} label={label} variant="outlined" size="small" />*/}
            <TextareaAutosize
                id={props.id}
                label={props.label}
                minRows={5}
                style={{ width: "100%" }}
                onChange={(event) => props.handleOnChange(props.label, event)}
            />
        </Stack>
    )
}