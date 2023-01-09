import {
    AppBar,
    Avatar,
    Box,
    Button,
    Container,
    IconButton,
    MenuItem,
    Toolbar,
    Tooltip,
    Typography
} from "@mui/material"
import LogoutIcon from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';

export const NavBar = () => {
    const menuItems = ['Business', 'Domains', 'Pages']
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                News
              </Typography> */}
                    {menuItems.map((menu) => {
                        return (
                            <Typography variant="h6" component={"div"} sx={{marginLeft:"16px"}}>
                                {menu}
                            </Typography>
                        )
                    })}
                    <Button color="inherit" sx={{flexGrow:1, justifyContent:"flex-end"}}>Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

const handleNavBarClick = () => {

}