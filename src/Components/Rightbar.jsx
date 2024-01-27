import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box  flex={2} p={2}>
      <Box position={'sticky'} width={'300px'}> 
      <Typography variant='h6' fontWeight={'300'} sx={{marginBottom:"15px"}}>
           Online Anime Friends
      </Typography>
      <AvatarGroup max={4} sx={{marginBottom:"25px"}}>
  <Avatar alt="Minato" src="https://nerdarena.in/cdn/shop/products/61gOe1Mv3BL._AC_SL1300.jpg?v=1639406824" sx={{ width: 90, 
        height: 90,}} />
  <Avatar alt="Sukuna" src="https://w0.peakpx.com/wallpaper/43/891/HD-wallpaper-sukuna-yuji-itadori-jujutsu-kaisen.jpg" sx={{ width: 90, 
        height: 90,}} />
  <Avatar alt="Kurama" src="https://w0.peakpx.com/wallpaper/834/158/HD-wallpaper-madara-kurama-kyubi.jpg" sx={{ width: 90, 
        height: 90,}} />
        <Avatar alt="Megumi" src="https://images8.alphacoders.com/129/1294447.jpg" sx={{ width: 90, 
              height: 90,}} />
  <Avatar alt="Mahoraga" src="/static/images/avatar/4.jpg" sx={{ width: 90, 
        height: 90,}} />
  <Avatar alt="Mahoraga" src="/static/images/avatar/4.jpg" sx={{ width: 90, 
        height: 90,}} />
  <Avatar alt="Mahoraga" src="/static/images/avatar/4.jpg" sx={{ width: 90, 
        height: 90,}} />
  <Avatar alt="Mahoraga" src="/static/images/avatar/4.jpg" sx={{ width: 90, 
        height: 90,}} />
  <Avatar alt="Mahoraga" src="/static/images/avatar/4.jpg" sx={{ width: 90, 
        height: 90,}} />
  <Avatar alt="Mahoraga" src="/static/images/avatar/4.jpg" sx={{ width: 90, 
        height: 90,}} />
  <Avatar alt="Mahoraga" src="/static/images/avatar/4.jpg" sx={{ width: 90, 
        height: 90,}} />
  <Avatar alt="Mahoraga" src="/static/images/avatar/4.jpg" sx={{ width: 90, 
        height: 90,}} />
  <Avatar alt="Mahoraga" src="/static/images/avatar/4.jpg" sx={{ width: 90, 
        height: 90,}} />
  <Avatar alt="Mahoraga" src="/static/images/avatar/4.jpg" sx={{ width: 90, 
        height: 90,}} />
</AvatarGroup> 
 <Typography variant='h6' fontWeight={'300'}>
  Latest New and Trending Animes
 </Typography> 
  <ImageList rowHeight={200} cols={3} gap={1} >
    <ImageListItem >
      <img src={'https://w0.peakpx.com/wallpaper/6/126/HD-wallpaper-jujutsu-kaisen-anime-gojo-satoru.jpg'} /> 
      {/* <img src={'https://w0.peakpx.com/wallpaper/930/222/HD-wallpaper-dr-stone-anime.jpg'} /> */}
      
      </ImageListItem> 
      <ImageListItem>
      <img src="https://static.displate.com/857x1200/displate/2023-11-15/0598b2d65e730ec47179fc7d78651e96_c46583b398e84d74017a739a4201594e.jpg" alt="" /> 
      </ImageListItem> 
      <ImageListItem>
      <img src="https://w0.peakpx.com/wallpaper/256/680/HD-wallpaper-tokyo-revengers-wallpa-tokyo-revengers-sano-manjiro-mikey-kun.jpg" alt="" />
      </ImageListItem>
 </ImageList>  
 <Typography variant='h6' fontWeight={'300'} sx={{marginTop:"25px"}}>
          Hot conversations
      </Typography>
 <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Aemy Sharp" src="https://w0.peakpx.com/wallpaper/105/860/HD-wallpaper-armin-arlert-armin-shingeki-no-kyojin-thumbnail.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Justice For Eren Yeager"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Armin
              </Typography>
              {" —Author should be blamed  for writing such a story line where MC dies there is no good ending ..:( …"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Nagi" src="https://64.media.tumblr.com/2eab3d00c4ed5ff405890f700f5d9f50/db53331bd4ed1737-36/s1280x1920/821a8f11784ebfb9e9c366025ac767e0711f1059.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="BLUELOCK -Episode Nagi- Anime Film's Trailer Reveals April 19 Debut"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Nagi:-
              </Typography>
              {" — Highly anticipated the season 2 is far beyond expectation… Can't wait to see Isagi getting fired up..Btw where is Isagi?"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Gindy Baker" src="https://wallpapers-clan.com/wp-content/uploads/2022/09/gojo-pfp-33.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="“I will keep drawing things that make no sense”: Gege Akutami Wanted to End Jujutsu Kaisen Within 2 Years ?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Gojo
              </Typography>
              {' — I am enjoying the show but gege hates me :( Guys help me..!!! He sealed me for a long time  …'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  )
}

export default Rightbar
