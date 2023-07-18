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


          <Typography color={colors.grey[100]} variant="h5">
          Step-by-Step Guide to Build an End-to-End Machine Learning Proof-of-Concept Using Open-Source Tools Published no April 20 2023
          <Button sx={{marginLeft:'5px'}} size='small' variant="outlined" onClick={(event)=>{
             window.open(articlelink)
          }}>
            Open Article
          </Button>
          </Typography>

          <Typography marginTop={1} variant='h5'>
           This is a overall steps that can be used in beginning of any POC project for easlier scalabity and cost effective deployment. 
           </Typography>
           
           <Typography  marginTop={1} variant='h5'>
           The article commences by emphasizing the expensive nature of cloud architecture when it comes to retraining and deploying machine learning models. It proposes the utilization of open-source tools like Docker, Python, Kubernetes, FastAPI, Nginx, SSL, and Domains to achieve cost-effective scalability for proof of concept (POC) projects. The suggested approach allows for a more affordable and efficient implementation of machine learning solutions.    
           </Typography>



          <Typography marginTop={1} variant='h5'>
          This architecture can be leveraged for any software development as well.

          </Typography>

          <Typography marginTop={2} variant='h5'>

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