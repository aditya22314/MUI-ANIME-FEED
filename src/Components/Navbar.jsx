import styled from '@emotion/styled';
import { Notifications, Pets } from '@mui/icons-material';
import MailIcon from '@mui/icons-material/Mail';
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';

const Navbar = () => { 
    const StyledToolbar =styled(Toolbar)({
        display:'flex',
        justifyContent:'space-between', 
    }) 
    const Search =styled("div")(({theme}) =>({
        backgroundColor:'white', 
        borderRadius:theme.shape.borderRadius,
        padding:'0 10px', 
        width:'40%',
    
    })); 
    const Icons =styled(Box)(({theme}) =>({
        display:'none',
        gap:"20px",
        alignItems:'center' ,
        [theme.breakpoints.up('sm')]:{
            display:'flex'
    
           }
    }));
    const UserBox =styled(Box)(({theme}) =>({
        display:'flex',
        gap:"10px",
        alignItems:'center',
        [theme.breakpoints.up('sm')]:{
            display:'none',
        }
       
    })); 
    const [open, setopen] = useState(false)
  return (
    <AppBar position='sticky'  > 
        <StyledToolbar  >
        <Typography variant='h6' sx ={{display:{xs:'none',sm:'block'}}}>
       ADI.JS
        </Typography>  
        <Pets sx ={{display:{xs:'block',sm:'none'}}} />
        <Search ><InputBase  placeholder='Enter your search'  /></Search> 
        <Icons>
        <Badge badgeContent={4} color="error">
        <MailIcon color="action" />
       </Badge>   
        <Badge badgeContent={4} color="error">
       <Notifications />
       </Badge>   
       <Avatar sx={{width:30 , height:30}} src="https://images.pexels.com/photos/1819483/pexels-photo-1819483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" onClick={(e)=>setopen(true)} /> 
       
        </Icons> 
        <UserBox onClick={(e)=>setopen(true)}>  
       
       <Avatar sx={{width:30 , height:30}} src="https://images.pexels.com/photos/1819483/pexels-photo-1819483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" /> 
       <Typography variant='span'>
         Aditya
        </Typography> 
        
       </UserBox>
        </StyledToolbar> 
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        
        open={open}
        onClose={(e)=>setopen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{  
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
