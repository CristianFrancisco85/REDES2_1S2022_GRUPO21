import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt'
import { Link as LinkRouter } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import { List, ListItem, ListItemText } from '@mui/material';
import { useState } from 'react';

const pages = [
    { name: 'Home', href: '/'},
    { name: 'Administradores', href: 'administradores'},
    { name: 'Desarolladores', href: 'desarolladores'},
]

export const NavBar = () => {
    
    const [sideMenu, setSideMenu] = useState(false)

    return (
    <AppBar position="static">
        <Container maxWidth="xl">
        <Toolbar disableGutters>
            
            <SatelliteAltIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
            UCRON
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
                <Button
                    key={page.name}
                    component={LinkRouter}
                    to={page.href}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    {page.name}
                </Button>
            ))}
            </Box>

            
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                    size="large"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={() => setSideMenu(true)}
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>
                <Drawer
                    id="menu-appbar"
                    anchor="left"
                    open={sideMenu}
                    onClose={() => setSideMenu(false)}
                    keepMounted
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                >
                    <Box sx={{ width: '60vw' }} role="presentation">
                        <List>
                        {pages.map((page) => (
                            <ListItem
                                key={page.name}
                                component={LinkRouter}
                                to={page.href}
                                sx={{ my: 2, color: 'inherit', display: 'block' }}
                                onClick={() => setSideMenu(false)}
                            >
                                <ListItemText >{page.name}</ListItemText>
                            </ListItem>
                        ))}
                        </List>
                    </Box>
                </Drawer>
            </Box>
            <SatelliteAltIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
            UCRON
            </Typography>
            


        </Toolbar>
        </Container>
    </AppBar>
    )
}
