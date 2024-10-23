import './App.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { alpha, AppBar, Box, Drawer, IconButton, InputBase, styled, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { MultipleContainers } from "./components/MultipleContainers/MultipleContainers";

function App() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (open: boolean) => {
        setOpen(open);
    };

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));

    const DrawerList = ['Item 1', 'Item 2', 'Item 3'];

    return (
        <div className="App">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed" sx={{ backgroundColor: '#fff', color: '#38618C', fontWeight: 'bold'}} >
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={() => toggleDrawer(true)} aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor="left" open={open} onClose={() => toggleDrawer(false)}>
                            <div
                                role="presentation"
                                onClick={() => toggleDrawer(false)}
                                onKeyDown={() => toggleDrawer(false)}
                            >
                                {DrawerList.map((text, index) => (
                                    <div key={index} style={{ padding: '10px' }}>{text}</div>
                                ))}
                            </div>
                        </Drawer>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            Kanban Board
                        </Typography>
                        <Search sx={{ border: '1px solid #e3e3e3' }}>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box
                sx={{
                    mt: 8,
                    backgroundColor: '#fff',
                    position: 'relative',
                    overflowX: 'auto',
                    overflowY: 'hidden', // Prevent vertical scrolling here
                    scrollBehavior: 'smooth',
                    width: '100%',
                }}
            >
                <MultipleContainers scrollable={true} trashable/>
            </Box>
        </div>
    );
}

export default App;
