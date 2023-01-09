import '../index.css'
import React, { useState } from "react";
import { Box, Card, CardActions, Button, Container, CardHeader, CardContent } from '@mui/material';
import { Typography, Stack } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { AdminField } from '../components/AdminField';
import { NavBar } from '../navbar/navbar';

export const AdminDashboard = () => {
    // const [data, setData] = useState({})
    let fields = [
        {
            'text': "Business Name",
            'id': "businessName"
        },
        {
            'text': "Owner Name",
            'id': "ownerName"
        },
        {
            'text': "Business Location",
            'id': "businessLocation"
        },
        {
            'text': "Email",
            'id': "email"
        },
        {
            'text': "Phone Number",
            'id': "phoneNumber"
        }
    ]
    return (
        <Container >
        <NavBar />
            <Card>
                <CardHeader className='card-header'
                    title="Webiste Design"
                />
                <CardContent className='card-layout'>
                    {fields.map((item, index) => {
                        return (<AdminField text={item.text} id={item.id} label={item.text} key={item.id} />)
                    })}
                    <Stack direction="column" gap={2} className='card-content-layout'>
                        <Typography variant="body1" minWidth={150}>
                            Business Description
                        </Typography>
                        <TextareaAutosize id="description" label="Business Description" minRows={5} style={{ width: "100%" }} />
                    </Stack>
                    <CardActions className='card-action-style'>
                        <Button size="small">Submit</Button>
                    </CardActions>
                </CardContent>
            </Card>
        </Container>
    )
}