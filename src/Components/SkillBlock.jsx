import React from 'react'
import { Box, IconButton, Typography, useTheme ,Stack,  Grid} from "@mui/material";
import { tokens } from "../theme";

import Slider from '@mui/material/Slider';


function SkillBlock(props) {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    let title = props.title
    let subtitle = props.subtitle
    let skillvalue = props.skillvalue

    console.log('skill value', skillvalue);
    console.log(typeof(skillvalue));


  return (

    
    <Box mb="25px" marginLeft={2}>
        <Typography
        variant="h4"
        color={colors.grey[100]}
        // fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
        >
            {title}
        </Typography>



    <Stack direction={'row'} spacing={2}>

        <Box>
            <Typography
            variant="h5"
            color={colors.greenAccent[400]}
            // fontWeight="bold"
            sx={{ m: "5px 0 5px 0" }}
            >
            {subtitle}
            </Typography>

            <Box sx={{ width: 300 }}>
            <Slider 
                disabled defaultValue={80} aria-label="Disabled slider" />
            </Box>

        </Box>
    </Stack>
    

    </Box>
  )
}

export default SkillBlock