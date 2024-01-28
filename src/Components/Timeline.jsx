import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

import Typography from '@mui/material/Typography';
import Header from './Header';
import { Box } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import backgroundImage from './bg1.jpg';


export default function CustomizedTimeline() {
  return (
    <Box  m="2px"
    sx={{

      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100vh',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#fff',
    }}
    
    >
    <Header  title="Educational" subtitle="More detailed work" >
        
    </Header>

    
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body"
          color="text.secondary"
        >
          Aug 2012 - Apr 2016
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
          <TimelineDot  color="secondary">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }} color={"primary"}>
          <Typography variant="h5" component="span" >
            Bachelors in Engineering
          </Typography>
          <Typography>Chennai India</Typography>
        </TimelineContent>
      </TimelineItem>
      
      {/* Accenture blovk */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body"
          color="text.secondary"
        >
          Nov 2016 - Mar 2018
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="secondary">
            <WorkIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        
        <TimelineContent sx={{ py: '12px', px: 2 }} color={"primary"}S>
          <Typography variant="h5" component="span" color={"primary"} >
            Associate Software Engineer
          </Typography>
          <Typography color={"primary"}>Accenture India</Typography>
        </TimelineContent>
      </TimelineItem>
      
      {/* DIPLOMO BLOCK */}
      <TimelineItem>

      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body"
          color="text.secondary"
        >
          Oct 2018 - May 2019
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="secondary" >
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }} color={"primary"}>
          <Typography variant="h5" component="span">
            Diplomo in Data Science 
          </Typography>
          <Typography>Great Lakes Insitute, Chennai, India</Typography>
        </TimelineContent>
      </TimelineItem>
     
     {/* prodapt vlovk */}
      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body"
          color="text.secondary"
        >
          May 2019 - September 2020
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <WorkIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }} color={"primary"}>
          <Typography variant="h5" component="span">
            Machine Learning Engineer
          </Typography>
          <Typography>Prodapt Solutions RnD , Chennai, India</Typography>
        </TimelineContent>
      </TimelineItem>
    
{/* MASTERS CODE */}

      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body"
          color="text.secondary"
        >
          Sep 2020 - Sep 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }} color={"primary"}>
          <Typography variant="h5" component="span">
            Master's Artificial Intelligence AIS
          </Typography>
          <Typography>EPITA - Ecole pour l’informatique et les techniques avancées, Paris, France</Typography>
        </TimelineContent>
      </TimelineItem>
    


      <TimelineItem>

      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body"
          color="text.secondary"
        >
          Nov 2021 - June 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <WorkIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }} color={"primary"}>
          <Typography variant="h5" component="span">
            Data Scientist Intern- Full Stack Engineer
          </Typography>
          <Typography> VINCI Energies, Paris </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>

      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body"
          color="text.secondary"
        >
          Dec 2023 - Present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <WorkIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }} color={"primary"}>
          <Typography variant="h5" component="span">
            Full Stack Engineer
          </Typography>
          <Typography>OKOMERA, Paris </Typography>
        </TimelineContent>
      </TimelineItem>





      {/* <TimelineItem>




      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body"
          color="text.secondary"
        >
          April 2023 
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h5" component="span">
            Graduated
          </Typography>
          <Typography>EPITA </Typography>
        </TimelineContent>
      </TimelineItem> */}
    
    </Timeline>
    </Box>
  );
}