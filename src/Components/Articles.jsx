import React from 'react'
import { Box, Button, useTheme, Alert } from "@mui/material";
// import Header from "../../components/Header";

import Typography from "@mui/material/Typography";
import { tokens } from "../theme";
import Header    from "../Components/Header";
import myImgSrc from './articlepic.png';
import backgroundImage from './bg1.jpg';



function Articles() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const articlelink = 'https://medium.com/@arunsinghmailid/step-by-step-guide-to-build-an-end-to-end-machine-learning-proof-of-concept-using-open-source-dd6a6e28bd1b'
    const articlelink2 = 'https://medium.com/stackademic/graphql-vs-rest-a-complete-guide-to-modern-api-development-a86409037b15'

  return (
    <Box m="2px"
    sx={{

      display: 'flex',
      flexDirection: 'column',

      height: '100vh',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#fff',
    }}
    
    >
      <Header title="Meduim Articles" />


          <Typography color={colors.greenAccent[300]} fontSize ="bold" variant="h4">
          
          Step-by-Step Guide to Build an End-to-End Machine Learning Proof-of-Concept Using Open-Source Tools - April 20 2023 <br/>
          
          </Typography>

          <Typography marginTop={1} variant='h4' color={"primary"}>
           This is article has overall steps that can be followed from the beginning of any POC project for easlier scalabity and cost effective deployment. 
           </Typography>

          <Box marginTop= {2}>
  `          <Button  marginLeft= {1}  size='meduim' variant="outlined" onClick={(event)=>{
              window.open(articlelink)
            }}>
              Open Article
            </Button>`
          
          </Box>

      
          <Typography marginTop={2} color={colors.greenAccent[300]} fontSize ="bold" variant="h4">
          
          GraphQL vs. REST: A Complete Guide to Modern API Development - Aug 7 2023<br/>
          
          </Typography>

          <Typography marginTop={1} variant='h4' color={"primary"}>
           {/* This is article has overall steps that can be followed from the beginning of any POC project for easlier scalabity and cost effective deployment.  */}
           
           The choice of an API architecture plays an important role in shaping the efficiency, scalability, and overall success of your applications. In this article, we explore the fundamental differences, strengths, and limitations of REST and GraphQL.
           
           </Typography>

          <Box marginTop= {2}>
  `          <Button  marginLeft= {1}  size='meduim' variant="outlined" onClick={(event)=>{
              window.open(articlelink2)
            }}>
              Open Article
            </Button>`
          
          </Box>      
      
      
      </Box>
  )
}

export default Articles