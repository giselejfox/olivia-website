import { Routes, Route } from 'react-router-dom'

import { useState, useEffect } from 'react';

// import MainSplash from './components/MainSplash';
import About from './components/About';

import Well from './components/project-pages/Well';
import Beam from './components/project-pages/Beam';
import Spur from './components/project-pages/Spur.js'
import Onsight from './components/project-pages/Onsight.js'
// import SoleOpinion from './components/SoleOpinion.js';
import ConversationAvenue from './components/project-pages/ConversationAvenue.js';
import SiteArchiveSite from './components/project-pages/SiteArchiveCite.js';
import Coda from './components/project-pages/Coda.js';
import HonorsProject from './components/HonorsProject.js';
import MainSplash2D from './components/MainSplash2D.js';
import Resume from './components/Resume.js';
import Kit from './components/project-pages/Kit.js';
import Motion from './components/project-pages/Motion.js';
import Rest from './components/project-pages/Rest.js';
import ProjectListingPage from './components/ProjectListingPage.js';

function ResponsiveHome() {
  const [isBigScreen, setIsBigScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const checkScreen = () => setIsBigScreen(window.innerWidth > 768);
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  console.log("isBigScreen:", isBigScreen);

  return isBigScreen ? <MainSplash2D /> : <ProjectListingPage />;
}

function App() {

  return (
    <div>
      <Routes>
        <Route index element={<ResponsiveHome />} />
        {/* <Route index element={ <ProjectListingPage />} /> */}
        <Route path="about" element={<About />} />
        {/* <Route path="sole-opinion" element={<SoleOpinion />} /> */}
        <Route path="well" element={<Well />} />
        <Route path="beam" element={<Beam />} />
        <Route path="spur" element={<Spur />} />
        <Route path="onsight" element={<Onsight />} />
        <Route path="conversation-ave" element={<ConversationAvenue />} />
        <Route path="site-archive-cite" element={<SiteArchiveSite />} />
        <Route path="coda" element={<Coda />} />
        <Route path="kit" element={<Kit />} />
        <Route path="motion" element={<Motion />} />
        <Route path="rest" element={<Rest />} />
        <Route path="honors-portfolio" element={<HonorsProject />} />
        <Route path="resume" element={<Resume />} />
        <Route path="*" element={<MainSplash2D />} />
      </Routes>
    </div>
  );
}

export default App;
