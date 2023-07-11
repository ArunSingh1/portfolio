import React from 'react'
import { Box, Button, useTheme, Alert } from "@mui/material";
// import Header from "../../components/Header";

import Typography from "@mui/material/Typography";
import { tokens } from "../theme";
import Header    from "../Components/Header";

function SiteInfo() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px" >
        <Header  title="Site Info" subtitle="Portfolio" >

        </Header>
        <Typography variant='h5'>
            Why is site? A Single page CV is not enough, If i can build one , i can build one for me.
            
        </Typography>
        <Typography marginTop={2} variant='h5'>
             Website is is build with NextJs, React, Material UI, hosted in Vercel and routed to my Google Domain 'arunsingh.net' 

        </Typography>

    </Box>

  )
}

export default SiteInfo