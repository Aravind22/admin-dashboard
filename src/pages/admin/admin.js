import './admin.css'
import React, { useState } from "react";
import { Box, Card, CardActions, Button, Container, CardHeader, CardContent, Stack, Typography } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { AdminField } from '../../components/AdminField';
import { NavBar } from '../../navbar/navbar';
import { AdminTextField } from '../../components/AdminTextArea';

export const AdminDashboardPage = () => {
    // const [data, setData] = useState({})
    let textAreaFields = [
        {
            'text': 'Business Description',
            'id': 'businessDescription'
        },
        {
            'text': 'About Us',
            'id': 'aboutUs'
        },
        {
            'text': 'Terms & Conditions',
            'id': 'terms'
        },
        {
            'text': 'Privacy Policy',
            'id': 'privacyPolicy'
        }
    ]
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
            <Card sx={{ marginTop: "16px" }}>
                <CardHeader className='card-header'
                    title="Website Details"
                />
                <CardContent className='card-layout'>
                    {fields.map((item, index) => {
                        return (<AdminField text={item.text} id={item.id} label={item.text} key={item.id} />)
                    })}

                </CardContent>
                <CardActions className='card-action-style'>
                    <Button size="small">Submit</Button>
                </CardActions>
            </Card>
            <Card sx={{ marginTop: "16px" }}>
                <CardHeader className='card-header'
                    title="Website Descriptions"
                />
                <CardContent className='card-layout'>
                    {
                        textAreaFields.map((item, index) => {
                            return (<AdminTextField text={item.text} id={item.id} label={item.text} key={item.id} />)
                        })
                    }
                </CardContent>
                <CardActions className='card-action-style'>
                    <Button size="small">Submit</Button>
                </CardActions>
            </Card>
        </Container>
    )
}