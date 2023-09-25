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



function Projects() {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Experience" subtitle="More detailed work" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h4">
              Full Stack Developer - VINCI Engeries,  France [Nov2021 - June2023]
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h5" marginTop={0}>
          • Designed and developed application called 'Navik' to address company's procurement needs which uses
Build with React, JavaScript, MaterialUI for Frontend and 
 Python FastAPI and deployed the application in a Cloud Server using Docker and Kubernetes.
          </Typography>

          <Typography variant="h5"  marginTop={1}>
          • The application 'Navik' is developed using Microservices Architecture in which case Frontend and Backend run as docker containers in a Kubernetes Cluster.
          </Typography>

          <Typography variant="h5"  marginTop={1}>
          • Build User Interface(UI) using React, Material UI, NPM, Node, Nginx and secured the
application with SSO Integration and SSL termination.
          </Typography>
         

          <Typography variant="h5" marginTop={1}>
          Developed a scalable RESTAPI Using FastAPI using Python back end called 'VEISAPI' that is actively connected
with various opensource databases and historical data and expose data as APIs .
          </Typography>

          <Typography variant="h5"  marginTop={1}>
          • Build a RESTAPI using FastAPI that fetches real time stock quantity of products from different suppliers API endpoint as
functional enhancement for a MVP Marketplace application.
          </Typography>

          <Typography variant="h5"  marginTop={1}>
          •  Build a 'API Aggregator' using python to aggregate different REST API response from various
suppliers and extract specific data from all the response and store in database for Marketplace.
            </Typography>

        <Typography variant="h5"  marginTop={1}>
        •  Experienced in creating databases and table schemas in Postgres Database and Documents in ELK to store supplier product data which was used in RESTAPI development.
        </Typography>

        <Typography variant="h5"  marginTop={1}>
        • Build and deployed a multiclass classification ML model that effectively classifies purchase
family of products in purchase invoices data to streamline purchase activity deployed it using Docker and FastAPI in our Cloud
production enviornment.
        
        </Typography>

        <Typography variant="h5"  marginTop={1}>
        Experienced in building analytical dashboards in SAP Cloud Business Intelligence platform to
visualize Suppliers Purchase orders histories and Purchase invoices details across different Poles
and Business units and countries
        </Typography>

        <Typography variant="h5"  marginTop={1} >
            Skills Aquired:  
            <Button sx={{marginLeft:2}} variant="outlined"  size='small'> Python </Button>
            <Button variant="outlined"  size='small'> JS </Button>
            <Button variant="outlined"  size='small'> Web development  </Button>
            <Button variant="outlined"  size='small'> FastAPI </Button>
            <Button variant="outlined"  size='small'> Docker </Button>
            <Button variant="outlined"  size='small'> Postgesql </Button>
            <Button variant="outlined"  size='small'> Kubernetes </Button>
            <Button variant="outlined"  size='small'> RESTAPI development </Button>
            <Button variant="outlined"  size='small'> Elastic Search </Button>
        
        </Typography>

        
        </AccordionDetails>
      </Accordion>
      
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h4">
          Machine Learning Engineer PRODAPT Solutions, India [May2019 - Sept2020]
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          
          
        <Typography variant="h5" marginTop={0}>
        • Experienced in Data Analysis using Pandas, Matplotlib and building Supervised
andUnsupervised Models using Python and Scikit learn packages
        </Typography>

        <Typography variant="h5"  marginTop={1}>
          •  Experienced in querying databases using MySQL and PostgreSQL and REST API 
Creation in Flask and Django.
        </Typography>

        <Typography variant="h5"  marginTop={1}>
          • Experienced in Chatbot Development using RASA, Python, MySQL, Rabbitmq(MQTT), Redis(Cache storing) to 
automate repetitive tasks like Time sheet logging and etc.
        </Typography>
         

        <Typography variant="h5" marginTop={1}>
          • Build interactive Dashboards with Tableau, ELK Stack, Grafana to alert, track the 
KPI metrics and monitor servers in production
        </Typography>

        <Typography variant="h5"  marginTop={1}>
          • Experienced in Building CI CD pipelines using Jenkins, Apache Airflow, GIT, 
Docker and Kubernetes.
        </Typography>
            
        <Typography variant="h5"  marginTop={1} >
            Skills Aquired:  
            <Button sx={{marginLeft:2}} variant="outlined"  size='small'> Python </Button>
            
            <Button variant="outlined"  size='small'> Chatbot development  </Button>
            <Button variant="outlined"  size='small'> MySQL </Button>
            <Button variant="outlined"  size='small'> Apache Airflow </Button>
            <Button variant="outlined"  size='small'> Docker </Button>
            <Button variant="outlined"  size='small'> Postgesql </Button>
            <Button variant="outlined"  size='small'> Kubernetes </Button>
            {/* <Button variant="outlined"  size='small'> RESTAPI development </Button> */}
        </Typography>


        </AccordionDetails>  
      </Accordion>    
      
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h4">
           Associate Software Engineer ACCENTURE Chennai, India [Nov2016 - Mar2018]
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          
          <Typography  variant="h5"  marginTop={1}>
          • Worked on quality assurance for financial transactions that occurs in POS (POINT OF SALE)
Machines for a US banking client.

          </Typography>

          <Typography  variant="h5"  marginTop={1}>
          • Running Test Cases in HP Tandem Non-stop Server and querying MySQL to interrupt the
results against Client requirements.

          </Typography>
        

          <Typography  variant="h5"  marginTop={1}>
          • Generating Settlement report, Authorization Reports and Sale Reports for POS Machines
using Mainframe Jobs.

          </Typography>

          <Typography  variant="h5"  marginTop={1}>
          • Actively communicated with onshore counterparts for transparent and effective operations.


          </Typography>

          <Typography variant="h5"  marginTop={1} >
            Skills Aquired:  
            {/* <Button sx={{marginLeft:2}} variant="outlined"  size='small'> Python </Button> */}
            {/* <Button variant="outlined"  size='small'> JS </Button> */}
            {/* <Button variant="outlined"  size='small'> Web development  </Button> */}
            <Button sx={{marginLeft:2}} variant="outlined"  size='small'> Excel </Button>
            <Button variant="outlined"  size='small'> MySQL </Button>
            <Button variant="outlined"  size='small'> Quality Assurance </Button>
            <Button variant="outlined"  size='small'> Selenuim Automation </Button>
            {/* <Button variant="outlined"  size='small'> RESTAPI development </Button> */}
        </Typography>

        </AccordionDetails>   
      </Accordion>
    
    </Box>
  )
}

export default Projects