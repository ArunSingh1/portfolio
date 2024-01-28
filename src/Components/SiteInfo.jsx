import React from 'react'
import { Box, Button, useTheme, Alert } from "@mui/material";
// import Header from "../../components/Header";

import Typography from "@mui/material/Typography";
import { tokens } from "../theme";
import Header    from "../Components/Header";
import backgroundImage from './bg3.jpg';



function SiteInfo() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px" 
    sx={{

      display: 'flex',
      flexDirection: 'column',
      margin: '20',

      height: '100vh',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#fff',
    }}
    
    >
        <Header  title="Site Info" subtitle="Portfolio" >

        </Header>
        <Typography variant='h5' color={'primary'}>
        What is the purpose of this website? 
        </Typography>
        

        <Typography marginTop={2} variant='h5' color={'primary'}>
        A single-page CV may not provide enough information to demonstrate my skills and experience. Thats Why , Also its Fun 😄

        </Typography>


        <Typography marginTop={2} variant='h5' color={'secondary'}>
             Website is build with JS, React, Material UI, hosted in Vercel and routed to my Google Domain 'arunsingh.net' 

        </Typography>

    </Box>

  )
}

export default SiteInfo