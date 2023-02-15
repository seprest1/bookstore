// mui
import {AppBar, Box, Toolbar, Typography} from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';


function Header () {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" xs={{ height: '5%', width: '100%' }}>
                <Toolbar>
                <MenuBookIcon sx={{ display:'flex' , mr: 2,  fontSize: {xs: '1.5rem', md: '2rem'} }}/>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                    mr: 2,
                    display: {  md: 'flex' },
                    fontSize: {xs: '1rem', md: '1.5rem'},
                    fontWeight: 100,
                    letterSpacing: '.25rem',
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