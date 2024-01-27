import styled from '@emotion/styled'
import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from "@mui/icons-material"
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
const StyledModal = styled(Modal)({
display:"flex",
alignItems:"center",
justifyContent:"center"
}) 
const UserBox = styled(Box)({
    display:"flex", 
    flexDirection:"column", 
    gap:"15px",
    alignItems:"center",
    justifyContent:"center"
    })
const Add = () => { 
    const [open, setopen] = useState(false)
  return ( 
    <>
    <Tooltip title="Add Post" sx={{position:'fixed',bottom:20,left:{xs:125,md:30}}} onClick={(e)=>setopen(true)}>
    <Fab color="primary" aria-label="add">
    <AddIcon />
     </Fab>
    </Tooltip> 
    <StyledModal
  open={open}
  onClose={()=>setopen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={400} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5} >
   <Typography variant='h6' textAlign={'center'} color={'gray'} mb={2}>
    Create Post
   </Typography> 
   <UserBox> 
   <Avatar sx={{width:30 , height:30}} src="https://images.pexels.com/photos/1819483/pexels-photo-1819483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" /> 
       <Typography variant='span'>
         Aditya
        </Typography> 
   <TextField 
          sx={{width:"80%"}}
          id="standard-multiline-static"
          multiline
          rows={4}
          placeholder='Whats on your mind ?'
          variant="standard"    
        /> 
       
       <Stack direction={'row'} gap={1} mt={2}>
    <EmojiEmotions color='primary' /> 
    <Image color='secondary' /> 
    <VideoCameraBack color='error'/>
    <PersonAdd color='success' /> 
    
    
   </Stack> 
   <ButtonGroup fullWidth  variant="contained" aria-label="outlined primary button group">
  <Button  >Post</Button>
  <Button ><DateRange /></Button>
</ButtonGroup>
   </UserBox>  
  
        
    
  
  </Box>
</StyledModal>
    </>
  )
}

export default Add
