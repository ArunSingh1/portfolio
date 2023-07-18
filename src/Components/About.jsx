import React from 'react';
import { Box, IconButton, Typography, useTheme , Grid} from "@mui/material";
// import Typography from '@mui/material/Typography';
import { tokens } from "../theme";
import Avatar from '@mui/material/Avatar';

// import backgroundImage from './bg1.jpg'; // Replace with the path to your image

import backgroundImage from './bg1.jpg'; // Replace with the path to your image
import myImgSrc from './mepic.jpg';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const AboutPage = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const handleContactClick = () => {
        const email = 'arunsinghmailid@gmail.com'; // Replace with the desired email address
        const mailtoLink = `mailto:${email}`;
        window.open(mailtoLink);
      };


  return (

    <Box   sx={{

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
      }} >

      <Box marginTop={5}>

        {/* <Avatar
        alt="Remy Sharp"
        src={myImgSrc}
        sx={{ width: 200, height: 250 }}
        /> */}

        <Typography marginTop={30}
                    variant="h1"
                    color={colors.grey[400]}
                    // fontWeight="bold"
                    sx={{ m: "20px 10px 10px 10px" }}
                >
                    Arun Singh Sivaprakash
        </Typography>

        
        <Typography marginLeft={1} variant="h3" color={colors.greenAccent[400]}>
                    Full Stack Developer  
        </Typography> 

        <Typography marginLeft={1} variant="h5" color={colors.grey[400]}>
                    Villejuif - Paris - France - (+33) 780722088 - arunsinghmailid@gmail.com  
        </Typography> 

        <Typography marginLeft={1} marginTop={1} variant="h5" color={colors.grey[100]}>
                    {/* Software Engineer with 5+ years for experience and holds a degree in Artificial Intelligence.  Possesses a diverse skill set
                    enabling efficient end-to-end development and deployment of software solutions. */}

                    {/* Passionate programmer with a master's degree in AI. Skilled in end-to-end software development in Python ,
                    data analysis, and deployment using advanced tools such as ELK, Docker, and Kubernetes. */}

                    I am an experienced Full Stack Software Engineer with 5 years of expertise in software development. Holding a master's degree in AI, Experienced in Training and Deploying machine learning models. 

        </Typography>

        <Typography marginLeft={1} marginTop={1} variant="h5" color={colors.grey[100]}>
                    I am proficient in React, JavaScript, Typescript for front-end, and Python, ExpressJS, Django, FastAPI for back-end development. 
        </Typography> 


        <Typography marginLeft={1} marginTop={1} variant="h5" color={colors.grey[100]}>
                    Possesses a diverse skill set enabling efficient  development and deployment of software solutions
        </Typography>

        <Box marginTop={5}>
            
        <Tabs>
        <Tab icon={<LinkedInIcon />} onClick={(event)=>{
              window.open('https://www.linkedin.com/in/arun-singh1/')
        }} label="LinkdIn" />
        
        <Tab icon={<GitHubIcon />} onClick={(event)=>{
              window.open('https://github.com/ArunSingh1')
        }} label="GitHub" />
        <Tab onClick={handleContactClick} icon={<PersonPinIcon />}  label="contact"  />
        </Tabs>

        </Box> 

      </Box>



          



  </Box>

  );
}

export default AboutPage;
