import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react'

const Post = ({title,image,icon,sub,text}) => {
  return (
    <Box  flex={5} p={2}>
    <Card  sx={{margin:2}}>
  <CardHeader
    avatar={
      <Avatar  aria-label="recipe" src={icon}  sx={{
        width: 60, // set your desired width
        height: 60, // set your desired height
      }} />
    }
    action={
      <IconButton aria-label="settings">
        <MoreVert />
      </IconButton>
    }
    title={title}
    subheader={sub}
  />
  <CardMedia
    component="img"
    height="20%"
    image={image}
    alt="Paella dish"
  />
  <CardContent>
    <Typography variant="body2" color="text.primary" sx={{fontFamily:'cursive',fontSize:'20px'}}>
     {text}
    </Typography>
  </CardContent>
  <CardActions disableSpacing>
    <IconButton aria-label="add to favorites">
    <Checkbox  icon={<FavoriteBorder  />} checkedIcon={<Favorite sx={{color:'red'}} />} />
    </IconButton>
    <IconButton aria-label="share">
      <Share />
    </IconButton>
   
  </CardActions>
 
</Card>
</Box>
  )
}

export default Post
