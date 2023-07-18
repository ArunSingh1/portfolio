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

function Resume() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const onDownloadEng = () => {
        const link = document.createElement("a");
        link.download = `ArunSinghCV_FS.pdf`;
        link.href = "./ArunSinghCV_FS.pdf";
        link.click();
      };

      const onDownloadFr = () => {
        const link = document.createElement("a");
        link.download = `ArunSinghCVFR_FS.pdf`;
        link.href = "./ArunSinghCVFR_FS.pdf";
        link.click();
      };

  return (
    <Box  m="20px" >
        <Header title="Experience" subtitle="More detailed work" />

        <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h4">
              Download English Version
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
            <Button variant='contained'  component="label" onClick={onDownloadEng}>
                {/* <a href="/ArunSinghCV_FS.pdf" target="_blank" download>
                    Download csv
                </a> */}
                Download
            </Button>
        </AccordionDetails>
        
        </Accordion>

        <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h4">
              Download French Version
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
            <Button variant='contained'  component="label" onClick={onDownloadFr}>
                {/* <a href="/ArunSinghCV_FS.pdf" target="_blank" download>
                    Download csv
                </a> */}
                Download
            </Button>
        </AccordionDetails>
        
        </Accordion>


    </Box>
  )
}

export default Resume