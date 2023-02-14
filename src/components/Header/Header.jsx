import './Header.css';
// mui
import {AppBar, Box, Toolbar, Typography} from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';


function Header () {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                <MenuBookIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 2,  fontSize: '2rem'}}/>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 500,
                    letterSpacing: '.3rem',
                    color: 'whitesmoke',
                    textDecoration: 'none',
                    }}
                    >
                    EPCARBON BOOKS
                </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
};

export default Header;