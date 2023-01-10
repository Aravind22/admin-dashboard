import '../../index.css'
import React from "react";
import { Card, CardActions, Button, Container, CardHeader, CardContent, Stack, CardMedia, TextField, InputAdornment, ToggleButton, ToggleButtonGroup, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import LanguageIcon from '@mui/icons-material/Language';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { NavBar } from '../../navbar/navbar';
import './websites.css'

export const EditWebPageDesign = () => {
  const [alignment, setAlignment] = React.useState('basic');
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
            <CardMedia title="Logo" size="small" image="./static/media/imageIcon.png" />
          </Stack>
          <Stack direction="column" gap={2} className='card-content-layout'>
            <Button size="small">Change New Logo</Button>
          </Stack>
        </CardContent>
        <CardContent className='card-layout'>
          <Stack direction="row" gap={2} className='card-content-layout'>
            <Button endIcon={<AddIcon />} size="small">Add Banner Images</Button>
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
            <TextareaAutosize placeholder="Privacy policy" id="privacy_policy" label="Business Description" minRows={5} style={{ width: "100%" }} />
          </Stack>
          {/* <CardActions className='card-action-style'>
            <Button size="small">Continue</Button>
          </CardActions> */}
        </CardContent>
      </Card>
      <Card>
        <CardContent className='card-layout'>
          <Stack direction="row" gap={2} className='card-content-layout'>
            <TextField InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LanguageIcon />
                </InputAdornment>
              ),
            }}
              id="domain_check" label="domaincheck" variant="outlined" size="small" />
          </Stack>
          <Stack direction="row" gap={2} className='card-content-layout'>
            <ToggleButtonGroup
              color="primary"
              value={alignment}
              exclusive={true}
              aria-label="Platform"
              size='small'
            >
              <ToggleButton value="basic">Basic</ToggleButton>
              <ToggleButton value="support_network">Support & Network</ToggleButton>
            </ToggleButtonGroup>
          </Stack>
          <Stack direction="row" gap={2} className='card-content-layout'>
            <TextField id="business_name" label="Business Name" variant="outlined" size="small" />
          </Stack>
        </CardContent>

        <CardContent className='card-layout'>
          <Stack direction="row" gap={2} className='card-content-layout'>
            <TextareaAutosize placeholder="Header text" id="header_text" label="Header text" minRows={5} style={{ width: "100%" }} />
          </Stack>
          <Stack direction="row" gap={2} className='card-content-layout'>
            <TextField id="choose_color" label="Choose color theme" variant="outlined" size="small" />
          </Stack>
          <Stack direction="row" gap={2} className='card-content-layout'>
          <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="demo-simple-select-required-label">typography</InputLabel>
            <Select id="typography" value="Open Sans" label="typography">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Open Sans</MenuItem>
            </Select>
            </FormControl>
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
            <TextareaAutosize placeholder="Privacy policy" id="privacy_policy" label="Business Description" minRows={5} style={{ width: "100%" }} />
          </Stack>
          <CardActions className='card-action-style'>
            <Button size="small">Continue</Button>
          </CardActions>
        </CardContent>
      </Card>
    </Container>
  )
}