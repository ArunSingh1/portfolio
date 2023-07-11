import React from 'react'
import { Box, IconButton, Typography, useTheme ,Stack,  Grid} from "@mui/material";
import { tokens } from "../theme";
import DiscreteSliderLabel from './Slider';
import Slider from '@mui/material/Slider';
import SkillBlock from './SkillBlock';

import Header from './Header';
import appLogo from './pythonlogo.png'



function Skills() {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  return (


    <Box m="20px">

        <Header  title="Skills" >
        
        </Header>
        <Box >
            <Typography
              variant="h4"
              color={colors.grey[100]}
            //   fontWeight="bold"
              sx={{ m: "15px 0 5px 0" }}
            >
                Languages 
            </Typography>



        <Stack direction={'row'} spacing={3}>

            <Box>
                <Typography
                variant="h5"
                color={colors.greenAccent[400]}
                fontWeight="bold"
                sx={{ m: "5px 0 5px 0" }}
                >
                Python
                </Typography>

{/* LOGO ADDITIONS */}
                {/* <Box
                  component="img"
                  sx={{
                    // height: 50,
                    // width: 90,
                    maxHeight: { xs: 200, md: 150 },
                    maxWidth: { xs: 300, md: 150 },
                  }}
                  alt="The house from the offer."
                  src= {appLogo}

                /> */}


                {/* <Box sx={{ width: 200 }}>
                <Slider 
                    disabled defaultValue={80} aria-label="Disabled slider" />
                </Box> */}




            </Box>
            
            <Box>            
                <Typography
                variant="h5"
                color={colors.greenAccent[400]}
                fontWeight="bold"
                sx={{ m: "5px 0 5px 0" }}
                >
                JavaScript ES6 ES7
                </Typography>
            </Box>

            <Box>            
                <Typography
                variant="h5"
                color={colors.greenAccent[400]}
                fontWeight="bold"
                sx={{ m: "5px 0 5px 0" }}
                >
                TypeScript
                </Typography>
            </Box>
            </Stack>


            <Typography
                variant="h4"
                color={colors.grey[100]}
                // fontWeight="bold"
                sx={{ m: "15px 0 5px 0" }}
                >
                Web development
            </Typography>

        {/* <SkillBlock
            title={'Web kit'} subtitle= {'React'} skillvalue = {50}
        ></SkillBlock> */}

    <Stack direction={'row'} spacing={4}>
        <Box>
            <Typography
                variant="h5"
                color={colors.greenAccent[400]}
                fontWeight="bold"
                sx={{ m: "5px 0 5px 0" }}
                >
                HTML CSS
            </Typography>

            {/* <Box sx={{ width: 200 }}>
                <Slider disabled defaultValue={50} aria-label="Disabled slider" />
            </Box> */}

        </Box>

        <Box>
            <Typography
                variant="h5"
                color={colors.greenAccent[400]}
                fontWeight="bold"
                sx={{ m: "5px 0 5px 0" }}
                >
            React
            </Typography>

        {/* <Box sx={{ width: 200 }}>
            <Slider disabled defaultValue={75} aria-label="Disabled slider" step={10}/>
        </Box> */}

        </Box>
    
    

        <Box>
            <Typography
                variant="h5"
                color={colors.greenAccent[400]}
                fontWeight="bold"
                sx={{ m: "5px 0 5px 0" }}
                >
            Material UI 
            </Typography>

        {/* <Box sx={{ width: 200 }}>
            <Slider disabled defaultValue={80} aria-label="Disabled slider" step={10}/>
        </Box> */}

        </Box>
    
    
        <Box>
            {/* <Typography
                variant="h5"
                color={colors.greenAccent[400]}
                fontWeight="bold"
                sx={{ m: "5px 0 5px 0" }}
                >
            Node JS 
            </Typography> */}

        {/* <Box sx={{ width: 200 }}>
            <Slider disabled defaultValue={80} aria-label="Disabled slider" step={10}/>
        </Box> */}

        </Box>

    </Stack>


    <Typography
            variant="h4"
            color={colors.grey[100]}
            // fontWeight="bold"
            sx={{ m: "15px 0 5px 0" }}
        >
            Databases
    </Typography>

    <Stack direction={'row'} spacing={3}>

        <Box>
            <Typography
            variant="h5"
            color={colors.greenAccent[400]}
            fontWeight="bold"
            sx={{ m: "5px 0 5px 0" }}
            >
            PostgresSQL/MySQL
            </Typography>
        </Box>

        <Box>
            <Typography
            variant="h5"
            color={colors.greenAccent[400]}
            fontWeight="bold"
            sx={{ m: "5px 0 5px 0" }}
            >
            GraphQL
            </Typography>
        </Box>


        <Box>
            <Typography
            variant="h5"
            color={colors.greenAccent[400]}
            fontWeight="bold"
            sx={{ m: "5px 0 5px 0" }}
            >
            ElasticSearch 
            </Typography>
        </Box>
    </Stack>


    <Typography
            variant="h4"
            color={colors.grey[100]}
            // fontWeight="bold"
            sx={{ m: "15px 0 5px 0" }}
        >
            Backend Architecture
    </Typography>

    <Stack direction={'row'} spacing={4}>

        <Box>
            <Typography
            variant="h5"
            color={colors.greenAccent[400]}
            fontWeight="bold"
            sx={{ m: "5px 0 5px 0" }}
            >
            FastAPI
            </Typography>
        </Box>

        <Box>
            <Typography
            variant="h5"
            color={colors.greenAccent[400]}
            fontWeight="bold"
            sx={{ m: "5px 0 5px 0" }}
            >
            Django
            </Typography>
        </Box>

        <Box>
            <Typography
            variant="h5"
            color={colors.greenAccent[400]}
            fontWeight="bold"
            sx={{ m: "5px 0 5px 0" }}
            >
            Microservices Architecture
            </Typography>
        </Box>

        <Box>
            <Typography
            variant="h5"
            color={colors.greenAccent[400]}
            fontWeight="bold"
            sx={{ m: "5px 0 5px 0" }}
            >
            Docker
            </Typography>
        </Box>
    </Stack>


    <Typography
            variant="h4"
            color={colors.grey[100]}
            // fontWeight="bold"
            sx={{ m: "15px 0 5px 0" }}
        >
            Deployment 
    </Typography>

    <Stack direction={'row'} spacing={2}>

        <Box>
            <Typography
            variant="h5"
            color={colors.greenAccent[400]}
            fontWeight="bold"
            sx={{ m: "5px 0 5px 0" }}
            >
            Kubernetes
            </Typography>
        </Box>

        <Box>
            <Typography
            variant="h5"
            color={colors.greenAccent[400]}
            fontWeight="bold"
            sx={{ m: "5px 0 5px 0" }}
            >
            NGINX
            </Typography>
        </Box>
    </Stack>


    <Typography
            variant="h4"
            color={colors.grey[100]}
            // fontWeight="bold"
            sx={{ m: "15px 0 5px 0" }}
        >
            Version Control 
    </Typography>

    <Box>
            <Typography
            variant="h5"
            color={colors.greenAccent[400]}
            fontWeight="bold"
            sx={{ m: "5px 0 5px 0" }}
            >
            GIT
            </Typography>
        </Box>


    </Box>



    </Box>

  )
}

export default Skills