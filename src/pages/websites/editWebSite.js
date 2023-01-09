import '../../index.css'
import React, { useState } from "react";
import { Box, Card, CardActions, Button, Container, CardHeader, CardContent, Stack, CardMedia } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { AdminField } from '../../components/AdminField';
import { NavBar } from '../../navbar/navbar';
import './websites.css'

export const EditWebPageDesign = () => {
    // const [data, setData] = useState({})
    return (
        <Container >
        <NavBar />
            <Card>
                <CardHeader className='card-header'
                    title="Edit Website Design"
                />
                  <CardContent className='card-layout'>
                  <Stack direction="column" gap={2} className='card-content-layout'>
                        <CardMedia title="Logo" size="small" image="./imageIcon.png" />
                    </Stack>
                    <Stack direction="column" gap={2} className='card-content-layout'>
                        <Button size="small">Change New Logo</Button>
                    </Stack>
                </CardContent>
                <CardContent className='card-layout'>
                    <Stack direction="row" gap={2} className='card-content-layout'>
                        <Button endIcon = {<AddIcon />} size="small">Add Banner Images</Button>
                    </Stack>
                </CardContent>
                <CardContent className='card-layout'>
                    <Stack direction="column" gap={2} className='card-content-layout'>
                        <TextareaAutosize placeholder="About Us" id="about_us" label="About Us" minRows={5} style={{ width: "100%" }} />
                    </Stack>
                    <Stack direction="column" gap={2} className='card-content-layout'>
            
                        <TextareaAutosize placeholder="terms & Conditions" id="terms_conditions" label="Business Description" minRows={5} style={{ width: "100%" }} />
                    </Stack>
                    <Stack direction="column" gap={2} className='card-content-layout'>
                        <TextareaAutosize placeholder="Privacy policy"  id="privacy_policy" label="Business Description" minRows={5} style={{ width: "100%" }} />
                    </Stack>
                    <CardActions className='card-action-style'>
                        <Button size="small">Continue</Button>
                    </CardActions>
                </CardContent>
            </Card>
        </Container>
    )
}