import { Routes, Route } from 'react-router-dom'

import MainSplash from './components/MainSplash';
import About from './components/About';

import Well from './components/project-pages/Well';
import Beam from './components/project-pages/Beam';
import Spur from './components/project-pages/Spur.js'
import Onsight from './components/project-pages/Onsight.js'

import SoleOpinion from './components/SoleOpinion.js';
import ConversationAvenue from './components/project-pages/ConversationAvenue.js';

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<MainSplash />} />
        <Route path="about" element={<About />} />
        <Route path="sole-opinion" element={<SoleOpinion />} />
        <Route path="well" element={<Well />} />
        <Route path="beam" element={<Beam />} />
        <Route path="spur" element={<Spur />} />
        <Route path="onsight" element={<Onsight />} />
        <Route path="conversation-ave" element={<ConversationAvenue />} />
        <Route path="*" element={<MainSplash />} />
      </Routes>
    </div>
  );
}

export default App;
