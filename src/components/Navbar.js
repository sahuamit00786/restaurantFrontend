import React, { useState } from 'react';
import Logo from "../resto/Logo.svg";
import{
    Box,
    Drawer,
    ListItem,
    ListItemButton,
    List,
    ListItemIcon,
    ListItemText,
}from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';

export const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
        {
            text:"Home",
            icon:<HomeIcon/>
        },
        {
            text:"About",
            icon:<InfoIcon />
        },
        {
            text:"Testimonials",
            icon:<ChatBubbleOutlineIcon />
        },
        {
            text:"Home",
            icon:<PhoneIcon />
        },
        {
            text:"Home",
            icon:<ShoppingCartIcon />
        }
    ]

  return ( 
    <nav>
        <div className="nav-logo-container">
            <img src={Logo} alt="" />
        </div>
        <div className="navbar-links-container" >
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#job">Jobs</a>
            <a href="#testimonial">Testimonials</a>
            <a href="#contact">Contact</a>
            <a href="">
                <ShoppingCartIcon className='navbar-cart-icon'/>
            </a>
        </div>

        <button className='primary-button'>Order Now</button>

        <div className="navbar-menu-container">
             <MenuIcon onClick={()=> setOpenMenu(true)}/>
        </div>

        <Drawer anchor='right' open={openMenu} onClose={()=>setOpenMenu(false)}>
            
            <Box p={2} width='250px' textAlign='center' 
                    onclick={()=>setOpenMenu(false)} 
                    onKeyDown={()=>setOpenMenu(false)}>

                <List>
                    {menuOptions.map((item)=>(
                            <ListItemButton>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text}></ListItemText>
                            </ListItemButton>
                    ))}    
                </List>      


            </Box>

        </Drawer>

    </nav>
  )
}

export default Navbar
