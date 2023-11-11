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
        // backgroundImage: `url(${backgroundImage})`,
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

        
        <Typography marginLeft={1} variant="h3" fontWeight={'bold'} fontStyle={"italic"} color={colors.greenAccent[400]}>
                    Full Stack Developer  
        </Typography> 

        <Typography display="block" marginLeft={1} marginTop={1} variant="h4" color={colors.grey[400]}>
                    {/* Villejuif - Paris - France - (+33) 780722088 - arunsinghmailid@gmail.com  */}

                    📍 Villejuif - Paris - France <br/>
                    📞 (+33) 780722088<br/>
                    📧 arunsinghmailid@gmail.com<br/>

        </Typography> 

        <Typography marginLeft={1} marginTop={5} variant="h4" color={colors.grey[100]}>
                    {/* Software Engineer with 5+ years for experience and holds a degree in Artificial Intelligence.  Possesses a diverse skill set
                    enabling efficient end-to-end development and deployment of software solutions. */}

                    {/* Passionate programmer with a master's degree in AI. Skilled in end-to-end software development in Python ,
                    data analysis, and deployment using advanced tools such as ELK, Docker, and Kubernetes. */}

                    {/* I am an experienced Full Stack Software Engineer with 5 years of expertise in software development. Holding a master's degree in AI, Experienced in Training and Deploying machine learning models.  */}
                    {/* 🚀 Full Stack Developer by day, intergalactic problem solver by night! With 5 years of software wizardry up my sleeves and a master's degree in AI, I'm your go-to coder in the City of Love. */}


                    {/* 🚀 I'm Arun, your friendly neighborhood Full Stack Developer, With a master's degree in Artificial Intelligence(AI) tucked under my coding cap,  */}
                    🚀 I'm Arun, your friendly neighborhood Full Stack Developer equipped with a master's degree in Artificial Intelligence (AI).
                    
                
                  
                    Over the course of 7 years, I've honed my skills in the world of software development, I'm your go-to coder in the City of Love.


        </Typography>

        <Typography marginLeft={1} marginTop={2.5} variant="h4" color={colors.grey[100]}>
                    {/* I am proficient in React, JavaScript, Typescript for front-end, and Python, ExpressJS, Django, FastAPI for back-end development.  */}
        
                    💻 I speak two languages fluently: JavaScript, Typescript , React for the front-end ballet, and Python, Node, ExpressJS, and FastAPI for the back-end symphony. <br/>

                    🛠️ Think of me as your Swiss Army knife of software engineering. I've got a diverse skill set that lets me create and launch software and Machine learning solutions faster than you can say "debug."       
        
        </Typography> 


        <Typography marginLeft={1} marginTop={2.5} variant="h4" color={colors.grey[100]}>
                    {/* Possesses a diverse skill set enabling efficient  development and deployment of software solutions */}
                    Feel free to take a peek at my Skills and Projects right here on my portfolio! <br/>
                    {/* If you're looking for a dynamic Full Stack Developer to join your crew, let's chat and set course for success!" */}
        
        </Typography>

        <Typography marginLeft={1} marginTop={2.5} variant="h4" color={colors.grey[100]}>
                    {/* Possesses a diverse skill set enabling efficient  development and deployment of software solutions */}
                    {/* Feel free to take a peek at my past missions/projects right here on my portfolio! <br/> */}
                    If you're looking for a dynamic Full Stack Developer to join your crew, let's chat and set course for success!
        
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
