import { Box, CssBaseline, Stack, ThemeProvider, createTheme } from '@mui/material';
import React, { useState } from 'react';
import Add from './Components/Add';
import Feed from './Components/Feed';
import Navbar from './Components/Navbar';
import Rightbar from './Components/Rightbar';
import Sidebar from './Components/Sidebar';




function App() {  
  const [mode, setmode] = useState("light")
   const darkTheme = createTheme({
    palette:{ 
      mode:mode,
    } ,
    overrides: {
      MuiCssBaseline: {
        '@global': {
          transition: 'background-color 0.8s, color 0.8 s', // Adjust the transition duration as needed
        },
      },}
   })
  return (
      
    <ThemeProvider theme={darkTheme} >
   <CssBaseline />
    
    <Box bgcolor={"background.default"} color={"text.primary"} >  
    

    <Navbar  /> 
    <Stack direction={"row"} spacing={2} justifyContent={'space-between'}> 
    
    <Sidebar mode={mode} setmode={setmode}  />
    <Feed />
    <Rightbar /> 
    </Stack>  
    <Add/>
    </Box> 
   
    </ThemeProvider>
     
    
  );
}

export default App;
