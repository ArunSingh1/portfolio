import React from 'react'
import { Box, Button, useTheme, Alert } from "@mui/material";
// import Header from "../../components/Header";

import Typography from "@mui/material/Typography";
import { tokens } from "../theme";
import Header    from "../Components/Header";
import myImgSrc from './articlepic.png';

function Articles() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const articlelink = 'https://medium.com/@arunsinghmailid/step-by-step-guide-to-build-an-end-to-end-machine-learning-proof-of-concept-using-open-source-dd6a6e28bd1b'


  return (
    <Box m="20px">
      <Header title="Meduim Articles" subtitle="More detailed work" />


          <Typography color={colors.grey[500]} variant="h5">
          Step-by-Step Guide to Build an End-to-End Machine Learning Proof-of-Concept Using Open-Source Tools Published no April 20 2023
          <Button sx={{marginLeft:'5px'}} size='small' variant="outlined" onClick={(event)=>{
             window.open(articlelink)
          }}>
            Open Article
          </Button>
          </Typography>

          <Typography marginTop={2} variant='h5'>
          The article begins by highlighting the high costs associated with utilizing cloud architecture for retraining and deploying machine learning models. It suggests using open source tools, such as Docker, Python, Kubernetes, FastApi, Nginx, SSL, and Domains, to achieve cost-effective scalability for a proof of concept (POC) project. 
          
          </Typography>

          <Typography marginTop={2} variant='h5'>
          The article also mentions that this architecture can be leveraged for any software development as well.

          </Typography>

          <Typography marginTop={2.5} variant='h5'>

            Architecture Picture

          </Typography>
          <Box 
                  component="img"
                  sx={{
                    // height: 75,
                    // width: 130,
                    maxHeight: { xs: 600, md: 550 },
                    maxWidth: { xs: 650, md: 550 },
                  }}
                  src= {myImgSrc}

                />


      </Box>
  )
}

export default Articles