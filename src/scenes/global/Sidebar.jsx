import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";

import myImgSrc from './mepic.jpg';
import Avatar from '@mui/material/Avatar';


const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography variant="h5">{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    
    <Box 
 
      sx={{
        "& .pro-sidebar-inner": {
          // background: `${colors.primary[200]} !important`,
          background: '#FFFFFF',
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          // padding: "15px 18px 18px 18px !important",
          padding: "20px 18px 18px 18px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar >
        <Menu iconShape="square">
 
          <Box paddingLeft={"10%"}>
  
              {/* <Avatar
            alt="Remy Sharp"
            src={myImgSrc}
            sx={{ width: 200, height: 250 }}
            /> */}

          <Item
              title="About me"
              to="/"
              // icon={<SearchIcon />}
              selected={selected}
              setSelected={setSelected}
            />
  
            <Item
              title="Work Experience"
              to="/Projects"
              // icon={<ManageSearchIcon />}
              selected={selected}
              setSelected={setSelected}
            />
  
            <Item
              title="Skills"
              to="/Skills"
              // icon={<PublicIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            
             <Item 
              title=" Timeline"
              to="/Timeline"
              // icon={<TravelExploreIcon />}
              selected={selected}
              setSelected={setSelected}
            />

             <Item 
              title="Download CV [EN, FR]"
              to="/Resume"
              // icon={<TravelExploreIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Publications"
              to="/Articles"
              // icon={<SearchIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="About this site"
              to="/Siteinfo"
              // icon={<SearchIcon />}
              selected={selected}
              setSelected={setSelected}
            />


          </Box>
        </Menu>
      </ProSidebar>
    </Box>

  );
};

export default Sidebar;