import React from 'react'
import { Box, Button, useTheme, Alert } from "@mui/material";
// import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../theme";
import Header    from "../Components/Header";

const PersonalWork = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Projects" subtitle="More detailed work" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h4">  
            Speech to Text Full stack application - GCP
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h5" marginTop={0}>
          A application listens to user audio input and calls GCP speech to text api and saves audio and text data on postgres db.
          <br /> 
          
          The frontend is written in Javascript, React, Material UI and Backend is a python and FastAPI endpoint receives the audio data as Float32 array and uses GCP speechtotext API to converts the audio float32 array into text data . The final process is to save the audio ans text data into a postgres table
          </Typography>

        <Typography variant="h5"  marginTop={1} >
            Code:  
            <Button sx={{marginLeft:2}} variant="outlined"  size='medium' onClick={(event)=>{
                window.open('https://github.com/ArunSingh1/SpeechtotextProject1')

            }} > Github </Button>
            {/* <Button variant="outlined"  size='medium'> JS </Button> */}

        </Typography>

        
        </AccordionDetails>
      </Accordion>
      

      <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h4">  
                REST API and GraphQL Project
            </Typography>
            </AccordionSummary>
            
            <AccordionDetails>
                <Typography variant="h5" marginTop={0}>
                GraphQL vs. REST: A Complete Guide to Modern API Development.
                <br /> 
                A brief summary of both REST and GraphQL API Frameworks by connecting to Binance API with code examples
                </Typography>
                <Typography variant="h5"  marginTop={1} >
                    Code:  
                    <Button sx={{marginLeft:2}} variant="outlined"  size='medium' onClick={(event)=>{
                        window.open('https://github.com/ArunSingh1/REST_GraphQL')

                    }} > Github </Button>
                    {/* <Button variant="outlined"  size='medium'> JS </Button> */}

                </Typography>
            </AccordionDetails>
      </Accordion>

      <Accordion >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h4">  
                Django CRUD REST Api Project
            </Typography>
            </AccordionSummary>
            
            <AccordionDetails>
                <Typography variant="h5" marginTop={0}>
                A web application, using the Django REST framework to provide REST APIs with CRUD principles
                <br />

                Django App with all GET POST UPDATE DELETE endpoints coonected with Postgres database and entire application is dockerized using docker.

                {/* A brief summary of both REST and GraphQL API Frameworks by connecting to Binance API with code examples */}
                </Typography>
                <Typography variant="h5"  marginTop={1} >
                    Code:  
                    <Button sx={{marginLeft:2}} variant="outlined"  size='medium' onClick={(event)=>{
                        window.open('https://github.com/ArunSingh1/djangocrudwebapp')

                    }} > Github </Button>
                    {/* <Button variant="outlined"  size='medium'> JS </Button> */}

                </Typography>
            </AccordionDetails>
      </Accordion>


      <Accordion >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h4">  
            
                Anime Recommendation Webapp
            </Typography>
            </AccordionSummary>
            
            <AccordionDetails>
                <Typography variant="h5" marginTop={0}>
                Anime Recommendation , Build a recommendation model trained on anime synopsis(overview) description, code ranks animes based on Cosine similarity score, Deployed in Heroku using streamlit as UI
                {/* <br /> */}

                {/* Django App with all GET POST UPDATE DELETE endpoints coonected with Postgres database and entire application is dockerized using docker. */}

                {/* A brief summary of both REST and GraphQL API Frameworks by connecting to Binance API with code examples */}
                </Typography>
                <Typography variant="h5"  marginTop={1} >
                    Code:  
                    <Button sx={{marginLeft:2}} variant="outlined"  size='medium' onClick={(event)=>{
                        window.open('https://github.com/ArunSingh1/animerecommendation')

                    }} > Github </Button>
                    {/* <Button variant="outlined"  size='medium'> JS </Button> */}

                </Typography>
            </AccordionDetails>
      </Accordion>


      <Accordion >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h4">  
            
                DevOps Project
            </Typography>
            </AccordionSummary>
            
            <AccordionDetails>
                <Typography variant="h5" marginTop={0}>
                Gitlab runner triggers the CI CD pipeline everytime a new code is pushed into gitlab repo, basically for every commit new docker image gets build and deployed in AWS. 

                </Typography>
                <Typography variant="h5"  marginTop={1} >
                    Code:  
                    <Button sx={{marginLeft:2}} variant="outlined"  size='medium' onClick={(event)=>{
                        window.open('https://gitlab.com/ArunSingh1/mlappcicd')

                    }} > GitLab </Button>
                    {/* <Button variant="outlined"  size='medium'> JS </Button> */}

                </Typography>
            </AccordionDetails>
      </Accordion>


      <Accordion >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h4">  
                Machine Learning Classification WebApp
            </Typography>
            </AccordionSummary>
            
            <AccordionDetails>
                <Typography variant="h5" marginTop={0}>
                A Machine learning webapp build using Streamlit and FAST API to predict the digit of the uploaded image using ML and Deeplearning models with 91 percent accuracy. MLFLOW is used for tracking.
                <br /> 
                {/* A brief summary of both REST and GraphQL API Frameworks by connecting to Binance API with code examples */}
                </Typography>
                <Typography variant="h5"  marginTop={1} >
                    Code:  
                    <Button sx={{marginLeft:2}} variant="outlined"  size='medium' onClick={(event)=>{
                        window.open('https://github.com/ArunSingh1/mlwebapp')

                    }} > Github </Button>
                    {/* <Button variant="outlined"  size='medium'> JS </Button> */}

                </Typography>
            </AccordionDetails>
      </Accordion>

    </Box>
  )
}

export default PersonalWork