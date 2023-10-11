import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
// import FAQ from "./scenes/Faq";


import AboutPage from "./Components/About";
import Skills from "./Components/Skills";
import CustomizedTimeline from "./Components/Timeline";
import Projects from "./Components/Projects";
import Articles from "./Components/Articles";
import SiteInfo from "./Components/SiteInfo";
import Resume from "./Components/Resume";
import PersonalWork from "./Components/PersonalWork";


function ProfileContent() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="app">
              <Sidebar isSidebar={isSidebar} />
              <main className="content">
                {/* <Topbar setIsSidebar={setIsSidebar} /> */}
                <Routes>
                  <Route path="/" element={<AboutPage />} />
                  <Route path = "Skills" element={<Skills/>}> </Route>
                  <Route path = "Timeline" element={<CustomizedTimeline/>} > </Route>
                  <Route  path = "Projects" element={<Projects/>} ></Route>
                  <Route  path = "Articles" element={<Articles/>} ></Route>
                  <Route  path = "SiteInfo" element={<SiteInfo/>} ></Route>
                  <Route  path = "Resume" element={<Resume/>} ></Route>
                  <Route  path = "Personal" element={<PersonalWork/>} ></Route>

                  
                  </Routes>
              </main>
            </div>
          </ThemeProvider>
        </ColorModeContext.Provider>
    </>
    
  );
}



/**
 * If a user is authenticated the ProfileContent component above is rendered. Otherwise a message indicating a user is not authenticated is rendered.
 */

// TEST at UN AUTH FOR TESTING
const MainContent = () => {    
  return (
      <div className="App">
            <ProfileContent />
      </div>
  );
};

// PROD DEFAULT CONTENT
export default function App() {
    return (

          <MainContent />

    );
}


// SITE DOWN
// export default function App() {
//   return (

//         <SiteDown />

//   );
// }
